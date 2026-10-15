fn main() {
    #[cfg(not(test))]
    tauri_build::build()
}
