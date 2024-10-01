const toolbar = document.getElementById('toolbar');



function isMobile() {
    return window.innerWidth <= 768; // Adjust threshold as needed
}
  

let numRows = 2;
if(isMobile()){
    numRows = 4;
}
const perRow = 32/numRows;

colorMap.forEach((color, ind) => {
  
  const colorOption = document.createElement('div');
  
  // Add the class and style
  colorOption.classList.add('color-option');
  colorOption.style.backgroundColor = color;
  
  if(ind % perRow == 0){
    const row = document.createElement('div');
    row.classList.add('row');
    toolbar.appendChild(row);
  }
  toolbar.lastElementChild.appendChild(colorOption);


  // Add an event listener to handle clicks and change the canvas color
  colorOption.addEventListener('click', function(event) {
    event.stopPropagation();
    
    // Fill the canvas with the selected color
    fillSelected(ind);
  }, { passive: false });

  colorOption.addEventListener('touchstart', function(event) {
    event.stopPropagation();
  }, { passive: false });
  colorOption.addEventListener('touchend', function(event) {
    event.stopPropagation();
  }, { passive: false });
  colorOption.addEventListener('mousedown', function(event) {
    event.stopPropagation();
  }, { passive: false });
  colorOption.addEventListener('mouseup', function(event) {
    event.stopPropagation();
  }, { passive: false });
});

resizeCanvas();

function fillSelected(color){
    let tile = window.selectedTile;
    sendPixel(tile.x, tile.y, color);
    
}