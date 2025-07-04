function getTime() {
  const target = new Date("2026-2-16").getTime();
  const now = new Date().getTime();

  const ms = target - now;
  const s = ms / 1000;
  const m = s / 60;
  const h = m / 60;
  const d = h / 24;

  const newH = (d - Math.floor(d)) * 24;
  const newM = (newH - Math.floor(newH)) * 60;
  const newS = (newM - Math.floor(newM)) * 60;

  const addZero = (i) => {
    if (i < 10) {
      return (i = "0" + i);
    }
    return i;
  };

  document.getElementById("Day").innerHTML = addZero(Math.floor(d));
  document.getElementById("Hour").innerHTML = addZero(Math.floor(newH));
  document.getElementById("Minute").innerHTML = addZero(Math.floor(newM));
  document.getElementById("Second").innerHTML = addZero(Math.floor(newS));
}

setInterval(getTime, 1000);