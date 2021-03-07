// document - это вся html-страница
// console.log(typeof document);
// console.dir(document);
// console.dir(document.querySelector(".s"));   

// .querySelector('.s') - подключение к тегу на странице по имени селектора (то что в css перед фигурными скобками)
const s = document.querySelector('.s');
// s.style.transform = "rotate(90deg)";
const m = document.querySelector('.m');
const h = document.querySelector('.h');
const hour = document.querySelector('.hours');
const min = document.querySelector('.minutes');

function clock() {
    // new Date() - создает экземпляр класса Date, возвращает текущее время и дату
    let time = new Date();
    // .getSeconds() - возвращает количество секунд
    // .getMinutes() - возвращает количество минут
    // .getHours() - возвращает количество часов   
    let secDeg = time.getSeconds() * 6;
    let minDeg = time.getMinutes() * 6;
    let hourDeg = time.getHours() * 30;
    // console.log(time.getHours());
    hour.innerHTML = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();    
    min.innerHTML = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
    // console.dir(hour);
    
    s.style.transform = `rotate(${secDeg}deg)`;
    m.style.transform = `rotate(${minDeg}deg)`;
    h.style.transform = `rotate(${hourDeg}deg)`;
    setTimeout(() => {clock()}, 1000);
}
clock()



const links = document.querySelectorAll('.tabsItem');
const tabs = document.querySelectorAll('.tabsContentItem');
const stopButton = document.querySelector('.stopwatch__btn');
for (let i = 0; i < links.length; i++) {
    const element = links[i];
    /* element.onclick = function () {
        console.log("Привет!");
    }
    element.onclick = function () {
        console.log("Пока!");
    } */
    
    // .addEventListener("событие", функция) - добавляет функцию к событию
    element.addEventListener("click", function (y) {
        console.log(y);
        y.preventDefault();
        // .classList.remove() - удаляет класс к тегу
        // .classList.add() - добавляет класс к тегу
        // .classList.contains() - возвращает true если есть класс у тега
        for (let x = 0; x < links.length; x++) {
            links[x].classList.remove("active");
            tabs[x].classList.remove("active");
        }
        this.classList.add("active");
        tabs[i].classList.add("active");
    })
}

let stopHour = document.querySelector('.stopwatch__hours');
let stopMin = document.querySelector('.stopwatch__minutes');
let stopSec = document.querySelector('.stopwatch__seconds');
let button = document.querySelector('.stopwatch__btn');
let span = document.querySelector('.tabsLink__span');
function stop() {
    stopSec.innerHTML++
    if (stopSec.innerHTML == 59) {
        stopSec.innerHTML = 0;
        stopMin.innerHTML++
    }
    else if (stopMin.innerHTML == 59) {
        stopMin.innerHTML = 0;
        stopHour.innerHTML++
    }
    clearTime = setTimeout(() => stop(), 1000)
}

button.addEventListener('click', () => {
    if (button.innerHTML == "start") {
        stop()
        button.innerHTML = 'stop'
        span.classList.add('active')
    } else if (button.innerHTML == "stop") {
        clearTimeout(clearTime)
        button.innerHTML = 'clear'
        span.classList.remove('active')
        span.classList.add('active_clear')
    } else {
        button.innerHTML = 'start'
        stopHour.innerHTML = 0
        stopMin.innerHTML = 0
        stopSec.innerHTML = 0
        span.classList.remove('active_clear')
    }
})
