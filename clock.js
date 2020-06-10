const toDoListli = localStorage.getItem("toDos");
const AUDIO_LS = "audio";
const isinputfocused = document.querySelector("input").focus;
const classtime = document.querySelector(".classtime");

function ringAlarm() {
  const currentAudio = localStorage.getItem(AUDIO_LS);
  const playAudio = document.getElementById(`${currentAudio}`);

  let promise = document.querySelector("audio").play();
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
        if (hours === 9 || hours === 13) {
          ringAlarm();
        }
        break;
      case 0:
        if (hours === 10 || hours === 14) {
          ringAlarm();
        }
        break;
      case 50:
        if (hours === 10 || hours === 14) {
          ringAlarm();
        }
        break;
      case 20:
        if (hours === 12) {
          ringAlarm();
        }
    }
  }
}

function saveAudio() {
  localStorage.setItem(AUDIO_LS, "bell");
}

function shouldLoadBell() {
  if (JSON.parse(toDoListli)[0].text === "온라인 수업") {
    loadBell();
  }
}

function loadBell() {
  saveAudio();
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
