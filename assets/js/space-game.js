//board
let tileSize = 32;
let rows = 16;
let columns = 16;

let board;
let boardWidth = tileSize * columns; 
let boardHeight = tileSize * rows;
let context;

//ship
let shipWidth = tileSize*2;
let shipHeight = tileSize;
let shipX = tileSize * columns/2 - tileSize;
let shipY = tileSize * rows - tileSize*2;
let ship = {
    x : shipX,
    y : shipY,
    width : shipWidth,
    height : shipHeight
}
let shipImg;
let shipVelocityX = tileSize;