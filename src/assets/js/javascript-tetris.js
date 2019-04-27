const canvas = document.getElementById('tetris');
const context = canvas.getContext('2d');

// Scale up everything by 20
context.scale(20, 20);

function arenaSweep() {
    let rowCount = 1;
    outer: for (let y = arena.length -1; y > 0; --y) {
        for (let x = 0; x < arena[y].length; ++x) {
            if (arena[y][x] === 0) {
                continue outer;
            }
        }

        const row = arena.splice(y, 1)[0].fill(0);
        arena.unshift(row);
        ++y;

        player.score += rowCount * 10;
        rowCount *= 2;
    }
}

// Checks to see if the arena and the player collide
function collide(arena, player) {
    // Player matrix
    const m = player.matrix;
    // Player position
    const o = player.pos;
    
    // Iterating over the player
    // Are you vertically inside the player matrix?
    for (let y = 0; y < m.length; ++y) {
        // Are you horizontally inside the player matrix?
        for (let x = 0; x < m[y].length; ++x) {
            // If the matrix of the players' Y row and X column is not empty AND
            if (m[y][x] !== 0 &&
                // Does the row exist in the arena? AND
               (arena[y + o.y] &&
                // Is it touching another piece on either X or Y?
                arena[y + o.y][x + o.x]) !== 0) {
                    // Collision detected
                    return true;
            }
        }
    }
    // No collision detected
    return false;
}

// Creates the matrix, takes width and height from 'arena'
function createMatrix(w, h) {
    const matrix = [];
    // While we have height (h != 0)
    while (h--) {
        // push to create an array of arrays, fill with 0's | value table
        matrix.push(new Array(w).fill(0));
    }
    return matrix;
}

function createPiece(type) { 
    // List of pieces
    if (type === 'I') {
        return [
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
        ];
    } else if (type === 'L') {
        return [
            [0, 2, 0], // number determines colour for the tile using the colours array
            [0, 2, 0],
            [0, 2, 2],
        ];
    } else if (type === 'J') {
        return [
            [0, 3, 0],
            [0, 3, 0],
            [3, 3, 0],
        ];
    } else if (type === 'O') {
        return [
            [4, 4],
            [4, 4],
        ];
    } else if (type === 'Z') {
        return [
            [5, 5, 0],
            [0, 5, 5],
            [0, 0, 0],
        ];
    } else if (type === 'S') {
        return [
            [0, 6, 6],
            [6, 6, 0],
            [0, 0, 0],
        ];
    } else if (type === 'T') {
        return [
            [0, 7, 0],
            [7, 7, 7],
            [0, 0, 0],
        ];
    }
}

// Determines where to draw each tile using the matrix
function drawMatrix(matrix, offset) {
    // Check each Y axis value
    matrix.forEach((row, y) => {
        // Check each X axis value
        row.forEach((value, x) => {
            // If it is not empty
            if (value !== 0) {
                // Determine piece colour. The colour used is determined by mapping the value in the matrix, with the colours array.
                context.fillStyle = colours[value];
                // Draw the piece
                context.fillRect(x + offset.x, y + offset.y, 1, 1);
            }
        });
    });
}

function draw() {
    context.fillStyle = '#262626'; // Canvas background colour
    context.fillRect(0, 0, canvas.width, canvas.height); // Canvas size

    drawMatrix(arena, {x: 0, y: 0});
    drawMatrix(player.matrix, player.pos);
}

// Copy all of the values from the player into the arena table, at the correct position
function merge(arena, player) {
    // For each row on the Y axis
    player.matrix.forEach((row, y) => {
        // Iterate over the row on the X axis
        row.forEach((value, x) => {
            // If the value is not empty
            if (value !== 0) {
                // Copy the value into the arena, with the correct offset
                arena[y + player.pos.y][x + player.pos.x] = value;
            }
        });
    });
}

function rotate(matrix, dir) {
    for (let y = 0; y < matrix.length; ++y) {
        for (let x = 0; x < y; ++x) {
            [
                matrix[x][y],
                matrix[y][x],
            ] = [
                matrix[y][x],
                matrix[x][y],
            ];
        }
    }

    if (dir > 0) {
        matrix.forEach(row => row.reverse());
    } else {
        matrix.reverse();
    }
}

function playerDrop() {
    player.pos.y++;
    if (collide(arena, player)) {
        player.pos.y--;
        merge(arena, player);
        playerReset();
        arenaSweep();
        updateScore();
    }
    dropCounter = 0;
}

function playerMove(offset) {
    player.pos.x += offset;
    if (collide(arena, player)) {
        player.pos.x -= offset;
    }
}

function playerReset() {
    const pieces = 'TJLOSZI';
    player.matrix = createPiece(pieces[pieces.length * Math.random() | 0]);
    player.pos.y = 0;
    player.pos.x = (arena[0].length / 2 | 0) -
                   (player.matrix[0].length / 2 | 0);
    if (collide(arena, player)) {
        arena.forEach(row => row.fill(0));
        player.score = 0;
        updateScore();
    }
}

function playerRotate(dir) {
    const pos = player.pos.x;
    let offset = 1;
    rotate(player.matrix, dir);
    while (collide(arena, player)) {
        player.pos.x += offset;
        offset = -(offset + (offset > 0 ? 1 : -1));
        if (offset > player.matrix[0].length) {
            rotate(player.matrix, -dir);
            player.pos.x = pos;
            return;
        }
    }
}

let dropCounter = 0;
let dropInterval = 1000;

let lastTime = 0;


function update(time = 0) {
    const deltaTime = time - lastTime;

    dropCounter += deltaTime;
    if (dropCounter > dropInterval) {
        playerDrop();
    }

    lastTime = time;

    draw();
    requestAnimationFrame(update);
}

// Update the score
function updateScore() {
    document.getElementById('score').innerText = player.score;
}

// Listening for user input via key(down)
document.addEventListener('keydown', event => {
    // Arrow Left
    if (event.keyCode === 37) {
        playerMove(-1); // Move Left
    } 
    // Arrow Right
    else if (event.keyCode === 39) {
        playerMove(1); // Move Right
    } 
    // Arrow Down
    else if (event.keyCode === 40) {
        playerDrop(); // Move Down
    }
    // Q
    else if (event.keyCode === 81) {
        playerRotate(-1); // Rotate Left
    }
    // W
    else if (event.keyCode === 87) {
        playerRotate(1); // Rotate Right
    }
});

// colours array for tiles
const colours = [
    null,       // 0
    '#6A98CC',  // 1
    '#6FBBD6',  // 2
    '#6DBFBF',  // 3
    '#6FD6B9',  // 4
    '#6ACC95',  // 5
    '#367373',  // 6
    '#ABFFFF',  // 7
];

// Arena table (w, h)
const arena = createMatrix(12, 20);

const player = {
    pos: {x: 0, y: 0},
    matrix: null,
    score: 0,
};

playerReset();
updateScore();
update();