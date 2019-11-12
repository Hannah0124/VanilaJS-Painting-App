const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext('2d');
const colors = document.getElementsByClassName("jsColor")

// Update the pixel of the canvas
canvas.width = 500;
canvas.height = 500;

// Set the default of the context (line color and width)
ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;

function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
};

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY; 
  // When I don't paint..
  if(!painting) {
    console.log('creating path in', x, y);
    ctx.beginPath();
    ctx.moveTo(x, y);
  // When painting..
  } else {
    console.log('creating line in', x, y);
    ctx.lineTo(x, y);
    ctx.stroke();
  }
};


function handleColorClick(event) {
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
};

if(canvas) {
  canvas.addEventListener('mousemove', onMouseMove);
  // Mouse click
  canvas.addEventListener('mousedown', startPainting);
  // Mouse unclick
  canvas.addEventListener('mouseup', stopPainting);
  canvas.addEventListener('mouseleave', stopPainting);
}

Array.from(colors).forEach(color => color.addEventListener("click", handleColorClick));