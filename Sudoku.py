# app.py
from flask import Flask, jsonify, render_template
import sudoku  # Assuming you're using a Sudoku library like `python-sudoku`

app = Flask(__name__)

def generate_sudoku():
    puzzle = sudoku.generate()  # Generate a puzzle (array of arrays or similar)
    solution = sudoku.solve(puzzle)
    return puzzle, solution

@app.route('/generate')
def generate():
    puzzle, solution = generate_sudoku()
    return jsonify({'puzzle': puzzle, 'solution': solution})

@app.route('/')
def index():
    return render_template('index.html')  # Serve the frontend HTML file

if __name__ == '__main__':
    app.run(debug=True)
