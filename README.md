# Tauri + React + Typescript

This template should help get you started developing with Tauri, React and Typescript in Vite.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)


## Prerequisites (Требования к окружению)
Общие зависимости (для всех ОС)

1. __Node.js (LTS версия)__ — Скачать с [nodejs.org](https://nodejs.org/en)
2. __pnpm__ — Менеджер пакетов. Устанавливается через терминал:

    ``` zsh
    npm install -g pnpm
   ```
4. __Rust__ — язык для бэкенда Tauri. Устанавливается через [rustup.rs](https://rustup.rs/)

    __Важно:__ После установки Rust обязательно перезапустите терминал!

## СТАРТ

1. Клонируем репозиторий

   ``` zsh
   git clone https://github.com/qvpvvq/music-player-tauri.git
   cd music-player-tauri
   ```
2. Установите зависимости
   ``` zsh
   pnpm install
    ```
3. Запуск в режиме разработки
   ``` zsh
   pnpm tauri dev
   ```
4. Сборка релизной версии
   ``` zsh
   pnpm tauri build
   ```
   _Готовые установщики появятся в папке_ `src-tauri/target/release/bundle/`
