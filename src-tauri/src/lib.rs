// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
mod models;
mod scanner;
mod state;
use state::AppState;
use tauri::State;
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    env_logger::init();
    tauri::Builder::default()
        .manage(AppState::default())
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![greet, get_tracks])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

#[tauri::command]
async fn get_tracks(
    dir_path: &str,
    state: State<'_, AppState>,
) -> Result<Vec<models::Track>, std::string::String> {
    let scanned_tracks = scanner::scan_directory(dir_path);
    let mut tracks_guard = state.tracks.write().await;
    *tracks_guard = scanned_tracks.clone();
    Ok(scanned_tracks)
}
