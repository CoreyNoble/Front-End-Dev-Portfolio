// Canvas variables
const canvas = document.getElementById('tetris');
const context = canvas.getContext('2d');

// Scale up everything by 20
context.scale(20, 20);

// Runs through the arena
function arenaSweep() {
    // Initialize rowCount
    let rowCount = 1;
    // Iterate from the bottom row, up
    outer: for (let y = arena.length -1; y > 0; --y) {
        // Loop through X axis
        for (let x = 0; x < arena[y].length; ++x) {
            // Do any values have a '0', If so, row is not full
            if (arena[y][x] === 0) {
                // Run through the loop again, starting at the outer 'for' statement
                continue outer;
            }
        }

        // Row is full, Remove that row by filling it with '0's
        const row = arena.splice(y, 1)[0].fill(0);
        // Put the row on top of the arena
        arena.unshift(row);
        // Offset the Y value
        ++y;

        // Increment the score counter with a base of 10, times the 'rowCount'
        player.score += rowCount * 10;
        // Double the score
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
    // Initialize array for matrix
    const matrix = [];
    // While we have height (h != 0)
    while (h--) {
        // push to create an array of arrays, fill with 0's | value table
        matrix.push(new Array(w).fill(0));
    }
    // Output
    return matrix;
}

// Create a piece, accepts string of 'type'
function nextPiece(type) { 
    // List of pieces
    if (type === 'I') {
        return [
            [0, 1, 0, 0], // '1' number determines colour for the tile using the colours array
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
        ];
    } else if (type === 'L') {
        return [
            [0, 2, 0],
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

// Determines where to draw each tile using the matrix and offset
function drawMatrix(matrix, offset) {
    // Each Y axis value
    matrix.forEach((row, y) => {
        // Each X axis value
        row.forEach((value, x) => {
            // If it is not empty
            if (value !== 0) {
                // Determine piece colour. The colour used is determined by mapping the value in the matrix, with the colours array.
                context.fillStyle = colours[value];
                // Fill the tile
                context.fillRect(x + offset.x, y + offset.y, 1, 1);
                context.strokeStyle = "white";
                context.lineWidth = 0.075;
                context.strokeRect(x + offset.x, y + offset.y, 1, 1);
            }
        });
    });
}

// Draws the canvas and the arena/matrix
function draw() {
    // Canvas
    context.fillStyle = '#262626'; // Canvas background colour
    context.fillRect(0, 0, canvas.width, canvas.height); // Canvas size

    // Matrix using 'arena' values, filling with '0's
    drawMatrix(arena, {x: 0, y: 0});
    // Matrix determining the player and position of the player
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

// Player rotates a tile, takes the matrix and a direction
// Transpose + Reverse(dir) = Rotation
function rotate(matrix, dir) {
    // Transpose - convert all rows into columns
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

    // Reverse - each row to get a rotated matrix
    if (dir > 0) { // Right
        matrix.forEach(row => row.reverse());
    } else { // Left
        matrix.reverse();
    }
}

// Player falls
function playerDrop() {
    // Move the player down
    player.pos.y++;
    // If the arena and player collide
    if (collide(arena, player)) {
        // Move the player back up
        player.pos.y--;
        // Merge the arena and player
        merge(arena, player);
        // Reset the player
        playerReset();
        // Update the arena
        arenaSweep();
        // Update the score
        updateScore();
    }
    // Reset the drop counter
    dropCounter = 0;
}

// Move the player along the X axis using a given 'offset' value
function playerMove(offset) {
    // Move the player
    player.pos.x += offset;
    // If arena and player collide
    if (collide(arena, player)) {
        // Move the player in the opposite direction of the 'offset' value
        player.pos.x -= offset;
    }
}

// Reset the player
function playerReset() {
    // List of pieces
    const pieces = 'TJLOSZI';
    player.matrix = nextPiece(pieces[pieces.length * Math.random() | 0]);
    player.pos.y = 0;
    player.pos.x = (arena[0].length / 2 | 0) -
                   (player.matrix[0].length / 2 | 0);
    if (collide(arena, player)) {
        arena.forEach(row => row.fill(0));
        player.score = 0;
        updateScore();
    }
}

// Player rotates a piece
function playerRotate(dir) {
    // Determine where the player is on the X axis
    const pos = player.pos.x;
    // When colliding, this offset value is used to resolve the collision
    let offset = 1;
    
    // Rotate the player, using the given direction
    rotate(player.matrix, dir);
    // While the arena and the player are colliding
    while (collide(arena, player)) {
        // Move the player with the given offset value
        player.pos.x += offset;
        // Offset now flips polarity (eg. '+/-'), and an increases the polarity value by 1 (eg +1 for positive, -1 for negative)
        offset = -(offset + (offset > 0 ? 1 : -1));
        // Is the offset now fully inside of the matrix?
        if (offset > player.matrix[0].length) {
            // Rotate back
            rotate(player.matrix, -dir);
            // Place the player
            player.pos.x = pos;
            return;
        }
    }
}

// Drop counter - Amount of time in-between a tile falling
let dropCounter = 0; // Counter to determine when to drop
let dropInterval = 1000; // Threshold for when to drop

// Initialize 'lastTime' to calculate the difference in time
let lastTime = 0;

// Update the game, get the time from requestAnimationFrame
function update(time = 0) {
    // The delta of time between now and 'lastTime'
    const deltaTime = time - lastTime;

    // Increment the drop counter using 'deltaTime'
    dropCounter += deltaTime;
    // If it is time to drop the player
    if (dropCounter > dropInterval) {
        // Drop the player
        playerDrop();
    }

    // update 'lastTime'
    lastTime = time;

    // Draw the canvas
    draw();
    // Next frame of animation
    requestAnimationFrame(update);
}

// Update the score
function updateScore() {
    // Find the 'score' HTML ID and update the string to reflect the score value
    document.getElementById('score').innerText = player.score;
}

// CONTROLS
// Listening for user input via key(down)
document.addEventListener('keydown', event => {
    // 'A'
    if (event.keyCode === 65) {
        playerMove(-1); // Move Left
    } 
    // 'D' or
    else if (event.keyCode === 68) {
        playerMove(1); // Move Right
    } 
    // 'S'
    else if (event.keyCode === 83) {
        playerDrop(); // Move Down
    }
    // 'O'
    else if (event.keyCode === 79) {
        playerRotate(-1); // Rotate Left
    }
    // 'P'
    else if (event.keyCode === 80) {
        playerRotate(1); // Rotate Right
    }
});

// Colour array for tiles
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


// Bootstrap the game
//
// Arena table - matrix of (w, h)
const arena = createMatrix(12, 20);

// Player and starting values
const player = {
    pos: {x: 0, y: 0}, // Position
    matrix: null, // Matrix
    score: 0, // Score
};

// Reset the player
playerReset();
// Update Score
updateScore();
// Update time and counters
update();

//
//
//

// OUTSIDE OF GAME
// Instructions
// Keycaps
// Bind keyup event, thanks @vendruscolo
$(window).on({
    'keydown': function(e){
        var pressedKey = $('.k' + e.keyCode);
        pressedKey.addClass('pressed');
    },
    'keyup': function(e) {
        var pressedKey = $('.k' + e.keyCode);
        pressedKey.removeClass('pressed');
    }
});