const clock = document.getElementById('clock');

setInterval(function () {
  let date = new Date();

  clock.innerHTML = date.toLocaleTimeString();
  clock.style.backgroundColor = 'red';
  clock.style.color = 'YELLOW';
}, 1000);
