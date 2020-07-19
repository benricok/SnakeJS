const canvas = document.querySelector(".gCanvas");
log(canvas);
const ctx = canvas.getContext("2d");
const scale = 5;
const rows = canvas.height / scale;
const columns = canvas.width / scale;