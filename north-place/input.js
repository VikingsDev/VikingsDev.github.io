document.addEventListener('wheel', function(event){
    event.preventDefault();
    event.stopPropagation();
    if(event.deltaY > 0){
        
        camera.scale *= 0.8;
        camera.scale = Math.max(camera.scale, 0.4 * canvas.width/BOARD_SIZE);
    }else{
        camera.scale *= 1.2;
        camera.scale = Math.min(camera.scale, 20 * canvas.width/BOARD_SIZE);
    }
    displayBoard();
}, { passive: false });

//mobile: two finger zoom
let initialDistance = 0;
let currentDistance = 0;

let lastClickTime = 0;

document.addEventListener('touchstart', function (event) {
    if (event.touches.length === 2) {
        // Get the distance between two touch points
        initialDistance = getDistance(event.touches[0], event.touches[1]);
    }else if(event.touches.length === 1){
        dragging = true;
        lastMousePos = getMousePos(event);
        lastClickTime = Date.now();
    }
});

document.addEventListener('touchmove', function (event) {
    event.preventDefault();
    event.stopPropagation();
    if (event.touches.length === 2) {
        // Get the current distance between two touch points
        currentDistance = getDistance(event.touches[0], event.touches[1]);

        camera.scale *= Math.pow(currentDistance / initialDistance, 1.1);

        camera.scale = Math.min(camera.scale, 20 * canvas.width/BOARD_SIZE);
        camera.scale = Math.max(camera.scale, 0.4 * canvas.width/BOARD_SIZE);
        displayBoard();
        initialDistance = currentDistance;
    }else if(event.touches.length === 1){
        handleMouseMove(event);
    }
}, { passive: false });

document.addEventListener('touchend', function (event) {
    // Reset distances when touch ends
    if (event.touches.length < 2) {
        initialDistance = 0;
        currentDistance = 0;
        dragging = false;
    }
});

// Helper function to calculate the distance between two touch points
function getDistance(touch1, touch2) {
    const dx = touch1.pageX - touch2.pageX;
    const dy = touch1.pageY - touch2.pageY;
    return Math.sqrt(dx * dx + dy * dy);
}

//drag and click to move x, y
var dragging = false;
var lastMousePos = {x:0, y:0};

document.addEventListener('mousedown', function(event){
    dragging = true;
    lastMousePos = getMousePos(event);
    lastClickTime = Date.now();
});
document.addEventListener('mousemove', function(event){
    handleMouseMove(event);
});

document.addEventListener('mouseup', function(event){
    dragging = false;

    if(Date.now() - lastClickTime < 300){
        var rect = canvas.getBoundingClientRect();
        getSelectedTile(event.clientX - rect.left, event.clientY - rect.top);
       
        console.log(window.selectedTile)
        displayBoard();
    }
});

function getMousePos(event){

    var rect = canvas.getBoundingClientRect();
    if(event.touches){
        return {
            x: event.touches[0].pageX - rect.left,
            y: event.touches[0].pageY - rect.top
        };
    }
    
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}

function handleMouseMove(event) {
    if(dragging){
        var mousePos = getMousePos(event);
        camera.x -= (mousePos.x - lastMousePos.x)/camera.scale;
        camera.y -= (mousePos.y - lastMousePos.y)/camera.scale;
        lastMousePos = mousePos;
        displayBoard();
    }
}



