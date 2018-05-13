const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = document.querySelector('body').clientWidth;
canvas.height = 500;
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 100;
// ctx.globalCompositeOperation = 'multiply';

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;
let lineWidth=5;
function draw(e) {
  if (!isDrawing) return; // stop the fn from running when they are not moused down
  var chooseColor=$("#color-info").find(".property input").last().val()
  // ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.lineWidth=lineWidth;
  ctx.strokeStyle=chooseColor;
  ctx.beginPath();
  // start from
  ctx.moveTo(lastX, lastY);
  // go to
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
}

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

function clearCanvas(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
$("#clearCtx").on("click",clearCanvas);
