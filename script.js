const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d'); // where we do all of our drawings

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = "#BADA55";
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 50;

let isDrawing = false 
let lastX = 0; // Where do you start line from?
let lastY = 0; // Where do you end ?

function draw(e) {
    if(!isDrawing) return; // stop the fn from running when they are not maused down
    console.log(e);
    ctx.beginPath();
    //start from
    ctx.moveTo(lastX, lastY);
    // go to
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    // update the lastX and the lastY variables to be wherever they were
    [lastX, lastY] = [e.offsetX, e.offsetY];
}
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});// draw only wen mouse is down, start when we want to 

canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);





