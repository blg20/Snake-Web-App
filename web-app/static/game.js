

import { update as update_snake, draw as draw_snake, SNAKE_SPEED, get_snake_head, snake_intersection, update_snakespeed } from './snake.js'
import { update as update_food, draw as draw_food } from './food.js'
import { outside_grid, update_gridsize } from './grid.js'

let last_render_time = 0;
let game_over = false;
const game_board = document.getElementById('game-board');
const high_scores = document.querySelector("#high-scores > tbody");

console.log(high_scores.innerHTML);


//to update high scores table after death
// var table = document.getElementById("high-scores");
// var row = table.insertRow(0);

// var cell1 = row.insertCell(0);
// var cell2 = row.insertCell(1);
// var cell3 = row.insertCell(2);

// cell1.innerHTML = "Here is";
// cell2.innerHTML = "new";
// cell3.innerHTML = "death";

// if (check_death()) {

// }


function main(current_time) {
// function loops constantly when server is running

    if (window.game_over) {
        if(confirm('You lost. Press ok to restart')) {
            window.location = '/'
        }
        return
    }

    window.requestAnimationFrame(main)
    // tells us when we can render the next frame


    const seconds_since_last_render = (current_time - last_render_time) / 1000;
    if (seconds_since_last_render < 1 / SNAKE_SPEED) {
        return;
    }
    // This determines if we actually have to move
    last_render_time = current_time;


    var currentval1 = document.getElementById("value1").innerHTML;
    var currentval2 = document.getElementById("value2").innerHTML;

    update(currentval1, currentval2);
    draw();

    console.log('Render')

    var r = document.querySelector(':root');
    var rs = getComputedStyle(r);
    window.newGRID_SIZE = rs.getPropertyValue('--grid_size');

}


window.requestAnimationFrame(main)
// to start loop very first time

function update(i, x) {
    update_snake()
    update_food()
    check_death()
    update_gridsize(i)
    update_snakespeed(x)
}

function draw() {
    game_board.innerHTML = ''
    // This clears the board after each render
    draw_snake(game_board)
    draw_food(game_board)
}


function check_death() {
    window.game_over = outside_grid(get_snake_head()) || snake_intersection()
}



// SLIDERS
var slider1 = document.getElementById("board-size");
var output1 = document.getElementById("value1");

output1.innerHTML = slider1.value;

slider1.oninput = function() {
    output1.innerHTML = this.value;
}

slider1.addEventListener("input", function() {
    var x = slider1.value;
    const color = `linear-gradient(90deg, rgb(117,252,117) ${x}%, rgb(214,214,214) ${x}%)`;
    slider1.style.background = color;

})




var slider2 = document.getElementById("snake-speed");
var output2 = document.getElementById("value2");

output2.innerHTML = slider2.value;

slider2.oninput = function() {
    output2.innerHTML = this.value;
}

slider2.addEventListener("input", function() {
    var x = slider2.value;
    const color = `linear-gradient(90deg, rgb(117,252,117) ${10*x}%, rgb(214,214,214) ${10*x}%)`;
    slider2.style.background = color;

})








