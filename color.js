const randomcolor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let intervIld;
const startchangingcolor = function () {
  if (!intervIld) {
    intervIld = setInterval(chnageBigcolor, 1000);
  }
  function chnageBigcolor() {
    document.body.style.backgroundColor = randomcolor();
  }
};

const stopchangingcolor = function () {
  clearInterval(intervIld);
  intervIld = null;
};

document.querySelector('#start').addEventListener('click', startchangingcolor);
document.querySelector('#stop').addEventListener('click', stopchangingcolor);
