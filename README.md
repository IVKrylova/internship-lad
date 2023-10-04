# Приложение о путешествиях по Египту
Проект для отборочных испытаний на стажировку в Lad

## Демо
https://internship-lad.vercel.app/

## Стек технологий
* NextJS 
* TypeScript
* ReduxToolKit, Next Redux Wrapper, Redux-thunk
* Axios
* SCSS Modules. Приложение адаптировано под различные типы устройств

## Функционал
* На главной странице реализован поиск по гидам с использованием фильтров
* По клику на кнопку "I am a Tourist Guide" открывается модальное окно с формой для регистрации в качестве гида. Для формы настроена валидация (написан пользовательский хук useFormAndValidation), данные из формы выводятся в консоль
* На странице "/blog" отображается список статей. При первом рендере страницы загружается 10 статей. Далее при каждом клике на кнопку "More articles" подгружается еще 10 статей
* С помощью динамического роутинга для каждой статьи создана своя страница 
* В приложении доступна регистрация/авторизация. Страницы аккаунта защищены от неавторизованных пользователей. Для проверки регистрации/авторизации можно использовать любую почту из списка: george.bluth@reqres.in, eve.holt@reqres.in, janet.weaver@reqres.in, emma.wong@reqres.in, charles.morris@reqres.in, tracey.ramos@reqres.in, michael.lawson@reqres.in, lindsay.ferguson@reqres.in, tobias.funke@reqres.in, byron.fields@reqres.in, george.edwards@reqres.in, rachel.howell@reqres.in
* Для форм регистрации/авторизации также настроена валидация. Реализована возможность показать/скрыть пароль
* В аккаунте реализована возможность ставить лайки гидам. Лайки сохраняются после перезегрузки страницы
* С помощью динамического роутинга для каждого гида создана своя страница
* На странице гида при клике на аватар доступна возможность сменить аватар. Форма для смены аватара также валидируется. Новый аватар сохраняется при перезагрузке страницы. В связи с тем, что в next.config.js нужно указывать домены для изображений, для тестирования подойдут изображения с сайта img.freepik.com, например https://img.freepik.com/free-photo/front-view-smiley-woman-with-fireworks_52683-98180.jpg?w=1060&t=st=1696232242~exp=1696232842~hmac=ff66e766bf0d78cc197294c20922f2b4fb5c9a77bb5736b6d989b8041ff99366 или https://img.freepik.com/free-photo/portrait-of-handsome-man-using-tablet-at-night-in-the-city-lights_23-2149024666.jpg?t=st=1696230012~exp=1696230612~hmac=292e8b5e3945315832a082d537b4506ecd8160d9c9ebb5aa3e25767d87fa76f1

## Ссылки
* За основу взят макет https://www.figma.com/file/w9deJ0o9sf6jrfPYrjQQ4r/landing?node-id=10%3A8429&mode=dev из телеграм-канала ​[FIGMA | Макеты для верстки](https://t.me/+EeO18GDOoX45NmIy)
* Статьи взяты из открытого API [{JSON} Placeholder](https://jsonplaceholder.typicode.com/)
* Регистрация/авторизация и список пользователей взяты из открытого API [REQRES](https://reqres.in/)

