const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI * 2, false);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();