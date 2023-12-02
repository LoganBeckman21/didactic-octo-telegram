let timer;
let totalSeconds = 0;

function startTimer() {
  const hoursInput = document.getElementById('hours');
  const minutesInput = document.getElementById('minutes');
  const secondsInput = document.getElementById('seconds');

  const hours = parseInt(hoursInput.value) || 0;
  const minutes = parseInt(minutesInput.value) || 0;
  const seconds = parseInt(secondsInput.value) || 0;

  totalSeconds = hours * 3600 + minutes * 60 + seconds;
  displayTime();

  timer = setInterval(function() {
    if (totalSeconds > 0) {
      totalSeconds--;
      displayTime();
    } else {
      clearInterval(timer);
      alert('Timer completed!');
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
}

function displayTime() {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  document.getElementById('timerDisplay').textContent = formattedTime;
}