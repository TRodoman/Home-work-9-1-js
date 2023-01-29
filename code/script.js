// * Секундомір матиме 3 кнопки "Старт, Стоп, Скидання"<br>
// * При натисканні на кнопку стоп фон секундоміра має бути червоним, старт - зелений, скидання - сірий
// * Виведення лічильників у форматі ЧЧ:ММ:СС<br>
// * Реалізуйте Завдання використовуючи синтаксис ES6 та стрілочні функції

window.addEventListener("load", () => {
  document.getElementsByTagName("ol")[0].addEventListener("dblclick", (e) => {
    e.target.style.backgroundColor = "green";
    e.target.style.opacity = ".3";
    e.target.style.fontSize = ".8rem";
  });
});
// --------------------------------------------------------------

let timer = 0;
let timerInterval;

let ms = document.getElementById("ms");
let second = document.getElementById("second");
let minute = document.getElementById("minute");

let container = document.querySelector(".container-stopwatch");

function start() {
  stop();
  timerInterval = setInterval(function () {
    timer += 1 / 60;
    msVal = Math.floor((timer - Math.floor(timer)) * 100);
    secondVal = Math.floor(timer) - Math.floor(timer / 60) * 60;
    minuteVal = Math.floor(timer / 60);
    ms.innerHTML = msVal < 10 ? "0" + msVal.toString() : msVal;
    second.innerHTML = secondVal < 10 ? "0" + secondVal.toString() : secondVal;
    minute.innerHTML = minuteVal < 10 ? "0" + minuteVal.toString() : minuteVal;
  }, 1000 / 60);

  container.classList.add("green");
  container.classList.remove("black");
}

function stop() {
  clearInterval(timerInterval);
  
  container.classList.remove("green");
  container.classList.add("red");
}

function reset() {
  clearInterval(timerInterval);
  timer = 0;

  document.querySelector("#minute").innerText = "00";
  document.querySelector("#second").innerText = "00";
  document.querySelector("#ms").innerText = "00";

  container.classList.remove("red");
  container.classList.add("silver");
}

document.write("<hr>");
//  -------------------------------------------------

// Реалізуйте програму перевірки телефону
// * Використовуючи JS Створіть поле для введення телефону та кнопку збереження
// * Користувач повинен ввести номер телефону у форматі 000-000-00-00
// * Після того як користувач натискає кнопку зберегти перевірте правильність введення номера, 
// якщо номер правильний зробіть зелене тло і використовуючи document.location переведіть користувача на сторінку

https://risovach.ru/upload/2013/03/mem/toni-stark_13447470_big_.jpeg 

// якщо буде помилка, відобразіть її в діві до input.


window.addEventListener("load", () => {
    document.getElementsByTagName("ol")[0].addEventListener("dblclick", (e) => {
      e.target.style.backgroundColor = "green";
      e.target.style.opacity = ".3";
      e.target.style.fontSize = ".8rem";
    });
  });


let patt = /\+38 \d{3}-\d{3}-\d{2}-\d{2}/;
let inp = document.getElementById("phone");
let span = document.querySelector(".span");

inp.addEventListener('focus', _ => {
  if(/^$/.test(inp.value))
    inp.value = '+38 ';
});


document.querySelector('.btn').onclick = function(e) {
  e.preventDefault();
  if (!validate(patt, inp.value)) {
    
    notValid(inp, span, 'Проверка не пройдена.');
  
  } else {
    valid (inp, span, 'Значение верно');
    document.location = 'https://risovach.ru/upload/2013/03/mem/toni-stark_13447470_big_.jpeg';
    
  }
}

function validate(reg, inp){
  return reg.test(inp);
}

function notValid(inp, el, mess){
  inp.classList.add('red-input');
  el.innerHTML = mess;
}

function valid(inp, el, mess){
  inp.classList.add('green-input');
  el.innerHTML = mess;
  
}





