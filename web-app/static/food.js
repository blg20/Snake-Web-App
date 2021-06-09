import { on_snake, expand_snake } from './snake.js'
import { random_grid_position } from './grid.js'


let food = get_random_food_position()
const EXPANSION_RATE = 2

export function update() {
    if (on_snake(food)) {
        window.score += 1;
        document.getElementById("score").innerHTML = window.score;
        expand_snake(EXPANSION_RATE)
        food = get_random_food_position()
    }
}


export function draw(game_board) {
    const food_element = document.createElement('div')
    food_element.style.gridRowStart = food.y
    food_element.style.gridColumnStart = food.x
    food_element.classList.add('food')
    game_board.appendChild(food_element)
}


function get_random_food_position() {
    let new_food_position
    while (new_food_position == null || on_snake(new_food_position) ) {
        new_food_position = random_grid_position()
    }
    return new_food_position
}