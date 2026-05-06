# ЛР №5. Добавление AJAX запросов к API.

**Цель** данной лабораторной работы — взаимодействие с внешним API через `XMLHttpRequest`.
В ходе выполнения работы реализовано взаимодействие фронтенда (карточки игры «Эволюция»)
с REST API из ЛР №4 (`http://localhost:3000`), получение и отображение данных в интерфейсе.

## План лабораторной работы

1. Инструменты для работы.
2. Что такое `XMLHttpRequest`.
3. Работа с API.
4. API главной страницы с карточками.
5. API страницы карточки.
6. Страница добавления/редактирования карточки.

## Запуск

В **этой** ветке (`lab5-ajax`) только фронтенд. Бэкенд берётся из ветки
`lab4-expressjs` и запускается отдельно на `http://localhost:3000`.

```bash
# 1) В отдельной папке с веткой lab4-expressjs:
npm install
npm run start

# 2) Эту папку открыть Live Server'ом из VS Code (порт 5500/5501).
```

Фронт обращается к API через `XMLHttpRequest`. Так как домены разные,
браузер блокирует запросы по политике CORS.
В рамках ЛР №5 это обходим расширением
[CORS Unblock](https://chromewebstore.google.com/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino).

## Структура

```
modules/
├── ajax.js                       # XHR-обёртка (get, delete)
├── evolutionCardUrls.js          # Билдер URL'ов для API карточек
└── evolutionCardPresentation.js  # Презентационные поля (img, model3d, matchLog)
pages/
├── main/         # Список + поиск по имени (?name=)
├── card-detail/  # Карточка по id + DELETE
└── card-edit/    # Форма добавления/редактирования (без кнопки «Сохранить»)
components/
├── card-edit-form/               # Поля ввода для card-edit
├── card-item/                    # + кнопка «Редактировать»
└── ...
```

## Замечания

- `POST`/`PATCH` в этой лабе **не реализованы** — `Content-Type: application/json`
  превращает их в complex CORS-запросы с preflight `OPTIONS`,
  который расширение `CORS Unblock` по умолчанию не пробивает.
  Кнопка «Сохранить» появится в ЛР №6 (вместе с `fetch` и общим доменом через bundler).
- `GET /cards`, `GET /cards/:id`, `DELETE /cards/:id` — работают через расширение.
- Поле поиска по имени отправляет `GET /cards?name=...` на каждое изменение ввода.
