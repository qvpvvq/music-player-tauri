use crate::models::Track;
use log::{error, info, warn};
use std::fs;

/*
TODO:
 * Щас сохраняются абсолютные пути, в будущем (возможном)
надо будет подумать о том как предотвратить невалидные пути
потому что возможно будет какая-то синхронизация или экспорт настроек
и песен, и на разных ОС может оч хуево заработать это все,
* Тесты можно переписать чтоб создавались временные папки и файлы,
но это под звездочкой
*/
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
            // Сами файлы могут быть невалидными, правами доступа может быть заблокирован файл
            let entry = match entry_result {
                Ok(entry) => entry,
                Err(e) => {
                    warn!("Ошибка чтения файла: {}", e);
                    return None;
                }
            };

            let path = entry.path(); // Достаем путь к валидному файлу
            let file_extension = match path.extension() {
                // Парсим расширение файла
                Some(ext) => ext.to_string_lossy().to_string(), // Вчитался в строку, странно выглядит, TODO
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

#[cfg(test)]
mod tests {
    use super::*;
    use std::path::Path;

    #[test]
    fn test_scan_directory() {
        let manifest_dir = env!("CARGO_MANIFEST_DIR"); // Директория в которой находится Cargo.toml
        let music_dir = Path::new(manifest_dir).join("tests/fixtures/audios");
        // Проверка на существование директории
        assert!(
            music_dir.exists(),
            "Папка с тестовыми файлами не найдена: {:?}",
            music_dir
        );
        let music_dir_str = music_dir
            .to_str()
            .expect("Путь содержит невалидные символы");
        let tracks = scan_directory(music_dir_str);
        // Проверка на наличие треков
        assert!(
            !tracks.is_empty(),
            "Функция не нашла ни одного трека в папке {}",
            music_dir_str
        );
        for track in &tracks {
            // Проверка на корректное расширение файла
            assert!(
                track.file_path.ends_with(".mp3")
                    || track.file_path.ends_with(".wav")
                    || track.file_path.ends_with(".ogg"),
                "Неверное расширение у файла: {}",
                track.file_path
            );
            // Проверка на валидное название трека
            assert!(
                !track.title.is_empty(),
                "Название трека пустое для пути: {}",
                track.file_path
            );
        }
        // Проверка на количество треков (может меняться в зависимости от кол-ва файлов в папке)
        assert_eq!(tracks.len(), 3);

        eprintln!("Найдено треков: {}", tracks.len());
        for (index, track) in tracks.iter().enumerate() {
            eprintln!("{}: {:?}", index + 1, track.file_path);
        }
    }
}
