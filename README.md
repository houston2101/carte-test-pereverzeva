# carte-test-pereverzeva

## Техническое задание

1. В макете найти экран №95. https://www.figma.com/file/f1FNRfIwkKvsDvCDe8vOZkHT/New-Posterix-Go?type=design&node-id=4-204&mode=design&t=ru5kvboEsfk3in96-0
2. В рамках текущего задания реализовать исключительно компонент с заказами, т.е. шапка, фильтры и тулбар для тестового задания не нужны
3. Подключить Vue3
4. Данные для компонента (номер заказа, оставшееся время, адреса забора и доставки, комментарий) необходимо захардкодить в json
5. Заверстать и отобразить компонент с заказами, используя данные из json
6. Комментарий может быть длинный. Поэтому по возможности отобразить две строки. По нажатию отображать все строки. По следующему нажатию опять две. Желательно уводить не в многоточие, а наложить градиент сверху (необязательно)
7. По возможности анимировать таймер обратного отсчета времени (необязательно)

---

## Реализация

-   Проект сделан с подключением Vue через CDN.
-   Для написания стилей использовался препроцессор SCSS. Для компиляции SCSS в CSS в проекте используется плагин Live Sass compiler.
-   Обратный отсчёт у таймера запускается при запусте проекта и "тикает" до тех пор, пока не достигнет значения 00:00.

## Структура проекта

-   В директории components размещен непосредственно файл компонента карточки заказа orderCard.js.
-   В директории data находится index.json файл, хранящий в себе все данные, необходимые для отображения в карточке заказа.
-   Директория scss содержит в себе index.scss файл с описанием стилей.
-   В директории styles находятся 2 файла:
    -   index.css - файл с описанием стилей, сгенерированный из упомянутого выше index.scss файла посредством плагина Live Sass compiler.
    -   reset.css - файл "обнуления" стилей.
-   index.html - корневой файл проекта.

## Запуск проекта

Осуществляется через Live Server

## Время на разработку

-   3 часа - работа с документацией Vue.
-   3 часа - вёрстка и создание структуры проекта, подключение файлов.
-   1.5 часа - реализация функционала таймера.
-   0.5 часа - разработка функционала для поведения комментария при большом количестве текста.
