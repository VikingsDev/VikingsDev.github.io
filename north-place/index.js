const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const BOARD_SIZE = 50;


const colorMap = [
    "#6d001a",
    "#be0039",
    "#ff4500",
    "#ffa800",
    "#ffd635",
    "#fff8b8",
    "#00a368",
    "#00cc78",
    "#7eed56",
    "#00756f",
    "#009eaa",
    "#00ccc0",
    "#2450a4",
    "#3690ea",
    "#51e9f4",
    "#493ac1",
    "#6a5cff",
    "#94b3ff",
    "#811e9f",
    "#b44ac0",
    "#e4abff",
    "#de107f",
    "#ff3881",
    "#ff99aa",
    "#6d482f",
    "#9c6926",
    "#ffb470",
    "#000000",
    "#515252",
    "#898d90",
    "#d4d7d9",
    "#ffffff"
]

const num_colors = colorMap.length;

let board;
initBoard();
let camera;
initCamera();
resizeCanvas();

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initCamera();
    displayBoard()
}

window.addEventListener('resize', resizeCanvas);


function initBoard(){
    board = [];
    for(let x = -BOARD_SIZE; x <= BOARD_SIZE; x++){
        board[x + BOARD_SIZE] = [];
        for(let y = -BOARD_SIZE; y <= BOARD_SIZE; y++){
            board[x + BOARD_SIZE][y + BOARD_SIZE] = Math.floor(Math.random() * num_colors);
            //if(x >= 0 && x < num_colors) board[x][y] = x;
        }
    }
}


function displayBoard(){

    verifyCamera();
    ctx.save();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //xoff should be at center
    //clear transforms
    
    ctx.imageSmoothingEnabled = false;
    ctx.translate(canvas.width/2, canvas.height/2);
    ctx.scale(camera.scale, camera.scale);
    ctx.translate(-camera.x, -camera.y);

    for(let x = -BOARD_SIZE; x <= BOARD_SIZE; x++){
        for(let y = -BOARD_SIZE; y <= BOARD_SIZE; y++){
            
            ctx.fillStyle = colorMap[board[x + BOARD_SIZE][y + BOARD_SIZE]];
            ctx.fillRect(x, y, 1+0.1, 1+0.1);
            
        }
    }

    for(let x = -BOARD_SIZE; x <= BOARD_SIZE; x++){
        for(let y = -BOARD_SIZE; y <= BOARD_SIZE; y++){
            
            ctx.fillStyle = colorMap[board[x + BOARD_SIZE][y + BOARD_SIZE]];
            ctx.fillRect(x, y, 1, 1);
            
        }
    }


    if(window.selectedTile){
        //border
        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.lineWidth = 0.2;
        ctx.rect(selectedTile.x, selectedTile.y, 1, 1);
        ctx.stroke();
        ctx.strokeStyle = "white";
        ctx.lineWidth = 0.1;
        ctx.rect(selectedTile.x, selectedTile.y, 1, 1);
        ctx.stroke();
    }

    ctx.restore();
}

function verifyCamera(){
    camera.scale = Math.min(camera.scale, 20 * canvas.width/BOARD_SIZE);
    camera.scale = Math.max(camera.scale, 0.4 * canvas.width/BOARD_SIZE);

    camera.x = Math.min(camera.x, BOARD_SIZE);
    camera.x = Math.max(camera.x, -BOARD_SIZE);

    camera.y = Math.min(camera.y, BOARD_SIZE);
    camera.y = Math.max(camera.y, -BOARD_SIZE);

}


function initCamera(){
    //scale should be such that BOARD_SIZE -> canvas.width
    camera = {
        scale: 2 * canvas.height/BOARD_SIZE,
        x: 0,
        y: 0
    }
}

function getSelectedTile(x, y){
    window.selectedTile = {
        x: Math.floor((x - canvas.width/2) / camera.scale + camera.x),
        y: Math.floor((y - canvas.height/2) / camera.scale + camera.y)
    }
    if(window.selectedTile.x < -BOARD_SIZE || window.selectedTile.x > BOARD_SIZE || window.selectedTile.y < -BOARD_SIZE || window.selectedTile.y > BOARD_SIZE){
        window.selectedTile = undefined;
    }
}

resizeCanvas();


