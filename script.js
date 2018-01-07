const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d'); // where we do all of our drawings

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = "#BADA55";
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 40;
ctx.globalCompositeOperation = 'destination-over' // blend colors

let isDrawing = false 
let lastX = 0; // Where do you start line from?
let lastY = 0; // Where do you end ?
let hue =0;
let direction = true;

function draw(e) {
    if(!isDrawing) return; // stop the fn from running when they are not maused down

    console.log(e);
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
    
    ctx.beginPath();
    //start from
    ctx.moveTo(lastX, lastY);
    // go to
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    // update the lastX and the lastY variables to be wherever they were
    [lastX, lastY] = [e.offsetX, e.offsetY];
    hue++;
    if (hue >= 360){
        hue = 0;
    }

    if (ctx.lineWidth >= 90 || ctx.lineWidth <= 1){ //when is greater than 100 or if it's less than 1 flip the direction
        direction = !direction;
    }
    if (direction) { // depending on what direction is increment or decrement the line width
        ctx.lineWidth++;
    } else {
        ctx.lineWidth--;
    }
}
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];

});// draw only wen mouse is down, start when we want to 

canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);





