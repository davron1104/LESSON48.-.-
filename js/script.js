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

document.addEventListener('DOMContentLoaded', function () {
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
        movieList = document.querySelector(".promo__interactive-list"),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        addCheckbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (e) => {
        e.preventDefault();

        let newFilm = addInput.value;
        const favourite = addCheckbox.checked;

        

        if (newFilm) {
            if(newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            createMovieList(movieDB.movies, movieList);
        }
        e.target.reset();
    });


    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    const makeChanges = () => {
        genre.textContent = "драма";
        bg.style.backgroundImage = "('/img/bg.jpg') center center / cover no-repeat";
    };

    const sortArr = (arr) => {
        arr.sort();
    };


    function createMovieList(films, parent) {
        parent.innerHTML = "";

        films.forEach(function (film, i) {
            parent.innerHTML += `
           <li class="promo__interactive-item">${i + 1}. ${film}
               <div class="delete"></div>
           </li>
           `;
        });
    }

    deleteAdv(advertising);
    makeChanges();
    sortArr(movieDB.movies);
    createMovieList(movieDB.movies, movieList);
});