const canvas = document.getElementById("jsCanvas");

let painting = false;

function stopPainting() {
  painting = false;
}

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY; 
};

function onMouseDown(event) {
  painting = true;
  
}
function onMouseUp(event) {
  stopPainting();
}


if(canvas) {
  canvas.addEventListener('mousemove', onMouseMove);
  // Mouse click
  canvas.addEventListener('mousedown', onMouseDown);
  // Mouse unclick
  canvas.addEventListener('mouseup', onMouseUp);
  canvas.addEventListener('mouseleave', stopPainting);
}