const finalDay = prompt("Введите конечную дату в формате ДД ММ ГГГГ:");
const [day, month, year] = finalDay.split(' ');
const inputDate = new Date(`${year}-${month}-${day}T00:00:00`); //преобразовали в нужный формат
console.log("введенное преобразованное" + new Date(inputDate));
const now = Date.now(); // получили текущую дату
const timeDiffSec = (inputDate - now) / 1000; //осталось времени до введенной даты в секундах
console.log("это начальное значение" + timeDiffSec);
//////////////////////////////////////////////////////////////////////////
function startTimer(timeDiffSec, display) {
  let timer = timeDiffSec; //duration это timeDiffsec
  console.log(timer);
  setInterval(function () {
    let days = parseInt(timer / (3600 * 24), 10);
    let hours = parseInt((timer - days * 3600 * 24) / 3600, 10);
    let minutes = parseInt((timer - days * 3600 * 24 - hours * 3600) / 60, 10);
    let seconds = parseInt(timer % 60, 10);
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes; //чтобы было двухзначное
    seconds = seconds < 10 ? "0" + seconds : seconds; // чтобы было двухзначное
    let countText = String(days) + " дней " + String(hours) + " часов " + String(minutes) + " минут " + String(seconds) + " секунд. "
    //display.textContent = minutes + ":" + seconds;
    display.innerHTML = `${countText}`;
    timer--;
    /*if (--timer < 0) {
        timer = duration;
    } */
  }, 1000);
}

window.onload = function () {
  display = document.querySelector('.header');
  console.log('это из onload', timeDiffSec);
  startTimer(timeDiffSec, display);
};