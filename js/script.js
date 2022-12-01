'use strict';
 /* Задания на урок:из урока 44

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */



// Текст задания из урока 48 
/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */


// Возьмите свой код из предыдущей практики

 const movieDB = {
     movies: [
         "Логан",
         "Лига справедливости",
         "Ла-ла лэнд",
         "Одержимость",
         "Скотт Пилигрим против..."
     ]
 };

 const advertising = document.querySelector('.promo__adv'),
     genre = document.querySelector('.promo__genre'),
     bg = document.querySelector('.promo__bg'),
     content = document.querySelector(".promo__content"),
     movieList = document.querySelector(".promo__interactive-list");


 advertising.remove();
 genre.textContent = "драма";
 //   bg.style.cssText = "background: url('../img/bg.jpg') center center / cover no-repeat; background-position: top;";
 bg.style.backgroundImage = "('/img/bg.jpg') center center / cover no-repeat";

 movieList.innerHTML = "";

 movieDB.movies.sort();

 movieDB.movies.forEach(function (film, i) {
     movieList.innerHTML += `
    <li class="promo__interactive-item">${i + 1}. ${film}
        <div class="delete"></div>
    </li>
    `;
 });

 