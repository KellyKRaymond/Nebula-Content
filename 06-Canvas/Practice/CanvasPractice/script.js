const canvas = document.getElementById('myCanvas')
const ctx = canvas.getContext('2d')

let x = canvas.width/2;
let y = canvas.height-20;
let dx = 2;
let dy = -2;

function drawBall() {
    ctx.beginPath();
    ctx.arc(50,50,10,0, Math.PI*2);
    ctx.fillStyle = "#32CD32";
    ctx.fill();
    ctx.closePath();
}
function draw(){
   ctx.clearRect(0,0, canvas.width, canvas.height);
   drawBall();
   x += dx;
   y += dy;
}

setInterval(draw,12);


