use crate::models::Track;
use tokio::sync::RwLock;
#[derive(Default)]
pub struct AppState {
    pub tracks: RwLock<Vec<Track>>,
}
