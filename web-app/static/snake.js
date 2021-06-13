

import { get_input_direction } from "./input.js";
import Ajax from "./ajax.js"


var r = document.querySelector(':root');
var rs = getComputedStyle(r);
// export var SNAKE_SPEED = rs.getPropertyValue('--snake-speed');


export const SNAKE_SPEED = 10;
// Snake moves 10 times per second

const snake_body = [{ x: 2, y: 2}]
let new_segments = 0
window.score = 0


export function update_snakespeed(input) {
    // here i would add the same features as the grid size slider
    // SNAKE_SPEED = input;
}

export function update() {
    add_segments()

    const input_direction = get_input_direction()
    for(let i = snake_body.length - 2; i >= 0; i--) {
        snake_body[i + 1] = { ...snake_body[i] }
        // For each part of the snake, its new position becomes
        // the position of the segment before it.
    }

    snake_body[0].x += input_direction.x
    snake_body[0].y += input_direction.y
}

export function draw(game_board) {
    snake_body.forEach(segment => {
        const snake_element = document.createElement('div')
        snake_element.style.gridRowStart = segment.y
        snake_element.style.gridColumnStart = segment.x
        snake_element.classList.add('snake')
        game_board.appendChild(snake_element)
    })
}

export function expand_snake(amount) {
    new_segments += amount
}

export function on_snake(position, { ignore_head = false } = {}) {
    return snake_body.some((segment, index) => {
        if (ignore_head && index === 0) return false
        return equal_positions(segment, position)
    })
}

export function get_snake_head() {
    return snake_body[0]
}

export function snake_intersection() {
    return on_snake(snake_body[0], { ignore_head: true })
}

function equal_positions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y
}

function add_segments() {
    for (let i = 0; i < new_segments; i++) {
        snake_body.push({ ...snake_body[snake_body.length - 1] })
    }

    new_segments = 0
}