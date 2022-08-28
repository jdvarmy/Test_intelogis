# Getting Started with Create React App

## Available Scripts

### `npm i && npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Description
Требуется спроектировать модуль отображения заявок на перевозку.

Надо создать произвольный набор заявок и точек погрузки/разгрузки.
Реализовать экранную форму, в которой слева будет таблица со списком заявок, а
справа карта. При выборе в таблице строки с заявкой выбранная строка должна
подсветиться, а на карте отобразиться точки погрузки и разгрузки заявки в виде
маркеров и полилиния трека движения между этими точками, полученная из
произвольного сервиса построения треков по дорогам. Точки погрузки/разгрузки
заявок в таблице должны быть редактируемыми (в виде селекта из справочника
точек). Граница между таблицей и картой должна быть изменяемая с помощью
мышки (перемещается влево и вправо). Столбцы таблицы должны иметь
минимальную ширину, при недостатке места для отображения таблицы с учетом
минимальной ширины столбцов, таблица должна получить возможность
горизонтальной прокрутки.

Для отображения карты желательно использовать пакет Leaflet, для компонетов
— AntdDesign, для хранения стейта компонентов и данных — Redux, для реакции на
события — Saga. В качестве основы приложения желательно использовать React
create app. Не использовать классы, только функциональные компоненты.

Решение требуется предоставить в виде исходного кода, готового для
развертывания на веб-сервере (приложить файловый архив или ссылку на github,
например).