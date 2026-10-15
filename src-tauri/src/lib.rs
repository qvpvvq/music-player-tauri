// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
mod models;
mod scanner;
mod state;
use state::AppState;
use tauri::State;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    env_logger::init();
    tauri::Builder::default()
        .manage(AppState::new())
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![greet, get_tracks])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

// COMMANDS

#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
async fn get_tracks(
    dir_path: String,
    state: State<'_, AppState>,
) -> Result<Vec<models::Track>, String> {
    state.update_tracks(&dir_path).await;
    let track_list = state.get_tracks().await;
    Ok(track_list)
}
