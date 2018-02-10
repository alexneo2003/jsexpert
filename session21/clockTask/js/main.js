(function() {
  const getLocaleDate = () => {
    return new Date(
      new Date().getTime() + Math.abs(new Date().getTimezoneOffset() / 60000)
    );
  };

  const getCurrentHours = () => getLocaleDate().getHours();

  const getCurrentMinutes = () => getLocaleDate().getMinutes();

  const getCurrentSeconds = () => getLocaleDate().getSeconds();

  (function init() {
    console.log(getCurrentMinutes());
  })();

  const dayOfWeek = number => {
    switch (number) {
      case 1:
        return "понедельник";
      case 2:
        return "вторник";
      case 3:
        return "среда";
      case 4:
        return "четверг";
      case 5:
        return "пятница";
      case 6:
        return "суббота";
      case 7:
        return "воскресенье";
    }
  };

  const monthOfYear = number => {
    switch (number) {
      case 0:
        return "января";
      case 1:
        return "Февраля";
      case 2:
        return "марта";
      case 3:
        return "апреля";
      case 4:
        return "мая";
      case 5:
        return "июня";
      case 6:
        return "июля";
      case 7:
        return "августа";
      case 8:
        return "сентября";
      case 9:
        return "октября";
      case 10:
        return "ноября";
      case 11:
        return "декабря";
    }
  };

  (function setCurrentDay() {
    var currentDayElement = document.getElementsByClassName("today-date")[0];
    console.log(currentDayElement);
    currentDayElement.textContent = `Сегодня ${dayOfWeek(
      getLocaleDate().getDay()
    )}, 
		${getLocaleDate().getDate()} ${monthOfYear(getLocaleDate().getMonth())}.`;
    console.log(currentDayElement);
  })();

  const setHourElement = hours => {
    var hoursElement = document.querySelector(".clock .hours");
    firstElement = hoursElement.querySelector(".first .number");
    secondElement = hoursElement.querySelector(".second .number");
    temp = hours.toString();
    first = 0;
    second = 0;
    if (hours < 10) {
      second = temp.charAt(0);
    } else {
      first = temp.charAt(0);
      second = temp.charAt(1);
    }
    firstElement.textContent = first;
    secondElement.textContent = second;
  };

  const setMinutesElement = minutes => {
    var hoursElement = document.querySelector(".clock .minutes");
    firstElement = hoursElement.querySelector(".first .number");
    secondElement = hoursElement.querySelector(".second .number");
    temp = minutes.toString();
    first = 0;
    second = 0;
    if (minutes < 10) {
      second = temp.charAt(0);
    } else {
      first = temp.charAt(0);
      second = temp.charAt(1);
    }
    firstElement.textContent = first;
    secondElement.textContent = second;
  };

  const setSecondsElement = seconds => {
    var hoursElement = document.querySelector(".clock .seconds");
    firstElement = hoursElement.querySelector(".first .number");
    secondElement = hoursElement.querySelector(".second .number");
    temp = seconds.toString();
    first = 0;
    second = 0;
    if (seconds < 10) {
      second = temp.charAt(0);
    } else {
      first = temp.charAt(0);
      second = temp.charAt(1);
    }

    firstElement.textContent = first;
    secondElement.textContent = second;
  };

  const setTimer = () => {
    var timerElement = document.getElementsByClassName("today-date")[1];
    var endDate = new Date(2019, 0, 1, 0);
    interval = Math.round((endDate - getLocaleDate()) / 1000 / 60 / 60 / 24);
    timerElement.textContent = `До 2019 года осталось ${interval} дней.`;
    console.log(interval);
  };

  setInterval(() => {
    setHourElement(getCurrentHours());
    setMinutesElement(getCurrentMinutes());
    setSecondsElement(getCurrentSeconds());
    setTimer();
  }, 1000);
})();
