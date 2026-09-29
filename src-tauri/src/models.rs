use serde::{Deserialize, Serialize};
#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct Track {
    pub id: Option<i32>, // SQLite в будущем будет сам делать AUTO_INCREMENT
    pub title: String,
    pub artist: String,
    pub duration: Option<i32>, // В секундах, мб и не Option сделать
    pub file_path: String,     // Пока будет относительный
}
