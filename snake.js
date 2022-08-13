import { getInputDirection } from "./input.js";

export  var SNAKE_SPEED = 10;
const snakeBody = [{ x: 10, y: 11}]
var newParts = 0;

export function update() {
    addParts();
    const inputDirection = getInputDirection();
    for (let i = snakeBody.length - 2; i >=0; i--){
        snakeBody[i+1] = {...snakeBody[i]}
    }
    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y
}

export function draw(board) {
    snakeBody.forEach(part => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = part.y;
        snakeElement.style.gridColumnStart = part.x;
        snakeElement.classList.add('snake')

        board.appendChild(snakeElement)

    })
}

export function expandSnake(amount) {
    newParts += amount;
}

export function onSnake(position, {ignoreHead = false} = {}){
    return snakeBody.some((part, index) =>{
        if (ignoreHead && index === 0) return false
        return equalPositions(part, position);
    })
}

export function getSnakeHead() {
    return snakeBody[0]
}

export function snakeIntersection() {
    return onSnake(snakeBody[0], {ignoreHead: true})
}

function equalPositions(pos1, pos2){
    return (pos1.x === pos2.x && pos1.y === pos2.y);
}

function addParts() {
    for (let i=0; i < newParts; i++){
        snakeBody.push({...snakeBody[snakeBody.length-1]});
    }
    newParts = 0;
}