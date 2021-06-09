

var r = document.querySelector(':root');
var rs = getComputedStyle(r);




export function update_gridsize(newin) {
    r.style.setProperty('--grid_size', newin);
    console.log(newin)
}


export function random_grid_position() {
    var GRID_SIZE = rs.getPropertyValue('--grid_size');
    return {
        x: Math.floor(Math.random() * GRID_SIZE) + 1,
        y: Math.floor(Math.random() * GRID_SIZE) + 1
    }
}

export function outside_grid(position) {
    var GRID_SIZE = rs.getPropertyValue('--grid_size');
    return (
        position.x < 1 || position.x > GRID_SIZE ||
        position.y < 1 || position.y > GRID_SIZE
    )
}

