const canvas = document.getElementById("gCanvas");
log(canvas);
const ctx = canvas.getContext("2d");
const scale = 25;
const rows = canvas.heighy / scale;
const columns = canvas.width / scale;