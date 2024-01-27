Описание проекта:
Простое одностраничное приложение по поиску пользователей на ресурсе GitHub.

Функционал приложения
Поиск осуществляется по логину пользователя.
Поле ввода имеет валидацию, можно вводить только цифры и латинские символы, а также нельзя оставить это поле незаполненным.
Имеется возможность отсортировать результаты поиска по количесву репозиториев (по возрастанию или по убыванию).
Также внизу страницы реализована пагинация, для удобного переключения между страницами.

Карточка пользователя
В карточке пользователя можно увидеть его аватар, логин, ID, а также перейти на его страницу GitHub.

Технологии в проекте
Проект разработан с использованием современных инструментов и технологий:

React;
Redux + Redux Toolkit;
Styled Components

Дополнительные вспомогательные библиотеки:

react-router-dom
react-responsive-pagination
react-loader-spinner
react-dropdown-select

Особенности
Ограничения наложенные API: доступны только первые 1000 результатов поиска.
