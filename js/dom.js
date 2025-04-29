/*1. Вывод элементов на страницу */
/*1.1 Выбо по id */
const h1 = document.getElementById("title");
console.log(h1);
/*1.2 Выбор одного элемента по селектору */
const menu = document.querySelector(".menu");
console.log(menu);
/*1.3 Выбор нескольких элементов по селектору */
const paragraphs = document.querySelectorAll("p");
console.log(paragraphs);

/*2. Прочитать или изменить содержимое тега*/
console.log(h1.textContent); //использовать текст контент и иннер HTML
console.log(h1.innerHTML);
console.log(h1.innerText);
console.log(h1.outerHTML);
console.log(h1.outerText);

h1.textContent = 'Новый заголовок <i class="bi bi-virus2"></i>'; //показывается текст в заголовке
h1.innerHTML = 'Новый заголовок <i class="bi bi-virus2"></i>'; // показывается картинка в заголовке
/*h1.innerHTML = ""; //очистить контент */

/*3. Работа со стилями (атрибут style)*/
h1.style.color="red";
h1.style.fontSize = "55px" ;
h1.style.backgroundColor = "rgb(14, 241, 230)" ;
console.log(h1.style)

/*4. Работа с классами (атрибут class)*/
menu.classList.add("border"); //добавили класс
const h2 = document.querySelector(".blue");
h2.classList.remove("blue"); //удалили класс blue
console.log(menu.classList.contains("border")); //проверить есть ли такой класс
 
/*5. Работа с атрибутами*/
const firstLink = document.querySelector(".menu li:first-child a");
console.log(firstLink.getAttribute("href")); //узнать значение атрибута
 firstLink.setAttribute("href", "https://midis.ru/"); //установить атрибут или изменить значение существующего
 firstLink.setAttribute("target", "_blank"); //ссылка открывается в соседнем окошке
 firstLink.removeAttribute("target"); //удалить атрибут таргет

 /*6. Создание нового тега*/
 const image = document.createElement("img"); //создаю элемент
 image.setAttribute("src", "img/cat.png"); //добавляю атрибут
 image.classList.add("border");
 const block = document.getElementById("block"); //беру элемент в который будет добавлен новый элемент
 block.classList.add("border"); //добавить класс
 block.append(image); //добавляет картинку в конец блока
//  block.prepend(image); //добавляет картинку в начало сайта
//  block.after(image); 
//  block.before(image); 

/*7. Работа с предками*/
console.log(firstLink.closest("li"));

/*8. Работа с потомками*/
console.log(document.querySelectorAll("a")); //поиск по всему документу
console.log(menu.querySelectorAll("a")); //поиск только по Меню

/*9. События*/
const btn = document.getElementById("btn");
const circle = document.querySelector(".circle");
btn.addEventListener("click", function(){
    circle.style.background = "rgb(162, 243, 41)";
});