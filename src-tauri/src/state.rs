use crate::models::Track;
use crate::scanner::scan_directory;
use tokio::sync::RwLock;
#[derive(Default)]
pub struct AppState {
    pub tracks: RwLock<Vec<Track>>,
}
impl AppState {
    pub fn new() -> Self {
        Self::default()
    }
    pub async fn update_tracks(&self, dir_path: &str) {
        let path_owned = dir_path.to_string();
        let scanned_tracks = tokio::task::spawn_blocking(move || scan_directory(&path_owned))
            .await
            .unwrap_or_default();
        let mut tracks_guard = self.tracks.write().await;
        *tracks_guard = scanned_tracks;
    }
    pub async fn get_tracks(&self) -> Vec<Track> {
        let tracks_guard = self.tracks.read().await;
        tracks_guard.clone()
    }
}
#[cfg(test)]
mod tests {
    use super::*;

    #[tokio::test]
    async fn test_update_state_tracks() {
        let appstate = AppState::new();
        appstate
            .update_tracks(r"C:\Users\whitesemen\Downloads")
            .await;
        let tracks = appstate.get_tracks().await;
        for track in tracks {
            println!("{:?}", track);
        }
    }
}
