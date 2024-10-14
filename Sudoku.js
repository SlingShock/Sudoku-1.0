// Node.js example using sudoku.js
const sudoku = require('sudoku');

function generateSudoku() {
    // Generate a puzzle with varying difficulty
    const puzzle = sudoku.makepuzzle();  // Puzzle array, with 'null' for blank cells
    const solution = sudoku.solvepuzzle(puzzle);  // Solved puzzle
    return { puzzle, solution };
}

// Example of API route in Express.js
const express = require('express');
const app = express();

app.get('/generate', (req, res) => {
    const { puzzle, solution } = generateSudoku();
    res.json({ puzzle, solution });
});

app.listen(3000, () => console.log('Sudoku generator running on port 3000'));
