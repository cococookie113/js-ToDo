const AUDIO_LS = "audio";

function alarm() {
  const currentAudio = localStorage.getItem(AUDIO_LS);
  const playAudio = document.getElementById(`${currentAudio}`);
  playAudio.play();
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
          alarm();
        }
        break;
      case 0:
        if (hours === 10 || hours === 14) {
          alarm();
        }
        break;
      case 50:
        if (hours === 10 || hours === 14) {
          alarm();
        }
        break;
      case 20:
        if (hours === 12) {
          alarm();
        }
    }
  }
}

function saveAudio() {
  localStorage.setItem(AUDIO_LS, "bell");
}

function init() {
  saveAudio();
}

init();

export { ring };
