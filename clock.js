const toDoListli = localStorage.getItem("toDos");
const AUDIO_LS = "audio";
const CLASSTIME_LS = "classtime";
const isinputfocused = document.querySelector("input").focus;
const classtime = document.querySelector(".js-classtime");

function printClasstime() {
  innerClasstime = localStorage.getItem(CLASSTIME_LS);
  classtime.innerText = `${innerClasstime !== null ? `${innerClasstime}` : ""}`;
}

function saveClasstime(classtime) {
  localStorage.setItem(CLASSTIME_LS, classtime);
}

function ringAlarm() {
  const currentAudio = localStorage.getItem(AUDIO_LS);
  const playAudio = document.getElementById(`${currentAudio}`);

  let promise = playAudio.play();
  if (promise !== undefined) {
    promise
      .then((_) => {
        // Autoplay started!
        playAudio.play();
      })
      .catch((error) => {
        // Autoplay was prevented.
        // Show a "Play" button so that user can start playback.
        console.log(error);
      });
  }
}

function ring() {
  const date = new Date(),
    minutes = date.getMinutes(),
    hours = date.getHours(),
    seconds = date.getSeconds();
  if (seconds === 0) {
    switch (minutes) {
      case 10:
        if (hours === 9) {
          ringAlarm();
          saveClasstime("1");
        } else if (hours === 13) {
          ringAlarm();
          saveClasstime("5");
        }
        break;
      case 0:
        if (hours === 10) {
          ringAlarm();
          saveClasstime("2");
        } else if (hours === 14) {
          ringAlarm();
          saveClasstime("6");
        }
        break;
      case 50:
        if (hours === 10) {
          ringAlarm();
          saveClasstime("3");
        } else if (hours === 14) {
          ringAlarm();
          saveClasstime("7");
        }
        break;
      case 20:
        if (hours === 12) {
          ringAlarm();
          saveClasstime("4");
        }
        break;
      case 30:
        if (hours === 11) {
          ringAlarm();
          saveClasstime("점심");
        } else if (hours === 15) {
          saveClasstime("");
        }
        break;
      default:
        if (hours > 15 || hours < 9) {
          saveClasstime("");
        }
        break;
    }
  }
  printClasstime();
}

function saveAudio(audioName) {
  localStorage.setItem(AUDIO_LS, audioName);
}

function shouldLoadBell() {
  if (JSON.parse(toDoListli)[0].text === "온라인 수업") {
    loadBell();
  }
}

function loadBell() {
  saveAudio("bell");
  setInterval(ring, 1000);
}

const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date(),
    minutes = date.getMinutes(),
    hours = date.getHours(),
    seconds = date.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
  getTime();
  shouldLoadBell();
  setInterval(getTime, 1000);
}

init();
