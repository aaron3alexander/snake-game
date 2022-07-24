import {onSnake, expandSnake} from './snake.js'
import { randomGridPosition } from './grid.js'

var food = getRandomFoodPositon();
export var playerScore = 0;
const EXPANSION_RATE = 1;

export function update() {
    if (onSnake(food)){
        expandSnake(EXPANSION_RATE);
        food = getRandomFoodPositon();
        playerScore += 1;
        document.getElementById("score").innerHTML = "Score: " + playerScore;
    }
}

export function draw(board) {
    const foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    board.appendChild(foodElement);
 
}


function getRandomFoodPositon() {
    let newFoodPosition;
    while (newFoodPosition == null || onSnake(newFoodPosition)){
        newFoodPosition = randomGridPosition();
    }
    return newFoodPosition;
}
