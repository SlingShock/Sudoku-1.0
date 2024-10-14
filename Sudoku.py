# Flask example using python-sudoku
from flask import Flask, jsonify
import sudoku

app = Flask(__name__)

def generate_sudoku():
    # Generate a puzzle and solution
    puzzle = sudoku.generate()  # This generates a random puzzle
    solution = sudoku.solve(puzzle)
    return puzzle, solution

@app.route('/generate')
def generate():
    puzzle, solution = generate_sudoku()
    return jsonify({'puzzle': puzzle, 'solution': solution})

if __name__ == '__main__':
    app.run(debug=True, port=3000)
