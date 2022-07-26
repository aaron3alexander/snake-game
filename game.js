import { SNAKE_SPEED, update as updateSnake, draw as drawSnake, getSnakeHead, snakeIntersection } from "./snake.js";
import { update as updateFood, draw as drawFood} from './food.js';
import { outsideGrid } from "./grid.js";


var lastRenderTime = 0;
var gameOver = false;
const board = document.getElementById('game-board')

function main(currentTime) {
    
    if (gameOver) {
        if (confirm('You lost. Click OK to restart the game.')){
            location.reload();
        }
        return
    }
    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime-lastRenderTime)/1000;
    
    if (secondsSinceLastRender < (1/SNAKE_SPEED)){
        return;
    }else{
        lastRenderTime = currentTime;
        update();
        draw();
    }
    
    
}

window.requestAnimationFrame(main);

function update() {
    updateSnake();
    updateFood();
    checkDeath();
}

function draw() {
    board.innerHTML =''
    drawSnake(board);
    drawFood(board);
}

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}

