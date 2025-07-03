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

  document.getElementById("Day").innerHTML = Math.floor(d);
  document.getElementById("Hour").innerHTML = Math.floor(newH);
  document.getElementById("Minute").innerHTML = Math.floor(newM);
  document.getElementById("Second").innerHTML = Math.floor(newS);
}

setInterval(getTime, 1000);