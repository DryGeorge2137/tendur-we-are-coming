const dayEl = document.getElementById('day');
const hourEl = document.getElementById('hour');
const minuteEl = document.getElementById('minute');
const secondEl = document.getElementById('second');

const eventDate = new Date('Dec 14, 2024, 00:00:00').getTime();

setInterval(updateCountdown, 1000);

function updateCountdown() {
  //dates
  const now = new Date().getTime();
  const gap = eventDate - now;

  //offsets, dividers
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  //final results
  const d = Math.floor(gap / day);
  const h = Math.floor((gap % day) / hour);
  const m = Math.floor((gap % hour) / minute);
  const s = Math.floor((gap % minute) / second);

  dayEl.innerText = d;
  if (h < 10) {
    hourEl.innerText = '0' + h;
  } else {
    hourEl.innerText = h;
  }
  if (m < 10) {
    minuteEl.innerText = '0' + m;
  } else {
    minuteEl.innerText = m;
  }
  if (s < 10) {
    secondEl.innerText = '0' + s;
  } else {
    secondEl.innerText = s;
  }
}
