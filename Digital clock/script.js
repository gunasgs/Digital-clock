let h = document.querySelectorAll(".h");
let m = document.querySelectorAll(".m");
let s = document.querySelectorAll(".s");
let mer = document.querySelectorAll(".mer span");
let day = document.querySelectorAll(".day span");
let month = document.querySelectorAll(".month span");
let date = document.querySelector(".date");

function runclock() {
  let time = new Date();
  let da = time.getDate();
  da = da < 10 ? "0" + da : da;
  let mo = time.getMonth() + 1;
  mo = mo < 10 ? "0" + mo : mo;
  let ye = time.getUTCFullYear();

  date.innerHTML = `${da} - ${mo} - ${ye}`;
  // day
  day[time.getDay()].classList.add("day-active");
  // month
  month[time.getMonth()].classList.add("month-active");

  // time

  let hr = time.getHours();

  let mm = time.getMinutes();
  let ss = time.getSeconds();

  if (hr >= 12) {
    hr = hr - 12;
    mer[1].classList.add("mer-active");
  } else {
    mer[0].classList.add("mer-active");
  }
  hr = hr < 10 ? "0" + hr : hr;
  mm = mm < 10 ? "0" + mm : mm;
  ss = ss < 10 ? "0" + ss : ss;
  hr = hr.toString();

  mm = mm.toString();
  ss = ss.toString();
  h[0].innerHTML = hr[0];
  h[1].innerHTML = hr[1];
  m[0].innerHTML = mm[0];
  m[1].innerHTML = mm[1];
  s[0].innerHTML = ss[0];
  s[1].innerHTML = ss[1];
}
runclock();
setInterval(runclock, 1000);
