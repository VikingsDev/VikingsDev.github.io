const socketURL = "wss://place.vikingsdev.ca/";

// Create WebSocket connection.
const socket = new WebSocket(socketURL);

// Connection opened
socket.addEventListener("open", (event) => {
  console.log("Server Connected")
});

// Listen for messages
socket.addEventListener("message", (event) => {
  //console.log(`[message] Data received from server: ${event.data}`);
  let data = JSON.parse(event.data);
  if(data.board){
    board = data.board;
    displayBoard();
    return;
  }
  board[data[0] + BOARD_SIZE][data[1] + BOARD_SIZE] = data[2];
  displayBoard();
});

function sendPixel(x, y, col){
    socket.send(JSON.stringify([x, y, col]));
}