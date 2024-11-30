// app.js
const express = require('express');
const sudoku = require('sudoku');  // npm install sudoku

const app = express();

function generateSudoku() {
    const puzzle = sudoku.makepuzzle();   // Generate a puzzle
    const solution = sudoku.solvepuzzle(puzzle);  // Solve it for reference
    return { puzzle, solution };
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.get('/generate', (req, res) => {
    const { puzzle, solution } = generateSudoku();
    console.table(solution);
    res.json({ puzzle, solution });
});

app.use(express.static('public'));  // Serve static files from the 'public' folder

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
