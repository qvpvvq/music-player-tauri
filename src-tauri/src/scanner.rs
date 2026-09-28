use crate::models::Track;
use log::{error, info, warn};
use std::fs;

pub fn scan_directory(dir_path: &str) -> Vec<Track> {
    let entries = match fs::read_dir(dir_path) {
        // Пытаемся прочитать папку
        Ok(dir) => dir,
        Err(e) => {
            error!("Ошибка чтения директории: {} {}", dir_path, e);
            return Vec::new();
        }
    };
    entries // Итерируемся по отдельным файлам в папке
        .into_iter()
        .filter_map(|entry_result| {
            let entry = match entry_result {
                Ok(entry) => entry,
                Err(e) => {
                    warn!("Ошибка чтения файла: {}", e);
                    return None;
                }
            };

            let path = entry.path(); // Достаем путь к файлу
            let file_extension = match path.extension() {
                // Парсим расширение файла
                Some(ext) => ext.to_string_lossy().to_string(),
                None => return None,
            };
            if !["mp3", "wav", "ogg"].contains(&file_extension.as_str()) {
                return None;
            }
            let title = match path.file_stem() {
                Some(file_name) => match file_name.to_str() {
                    Some(name) => name.to_string(),
                    None => {
                        warn!("Не удалось получить имя файла");
                        return None;
                    }
                },
                None => return None,
            };
            info!("Найден файл: {} [{}]", title, path.display());
            Some(Track {
                id: None,
                title,
                artist: String::new(),
                duration: Some(666),
                file_path: path.to_string_lossy().to_string(),
            })
        })
        .collect()
}
