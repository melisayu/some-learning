import sudoku

def test_valid_scenario():
    result = sudoku.Result(sudoku.Result.SUCCESS)
    assert(sudoku.verify_file("example1.csv") == result)

def test_invalid_scenario_rows():
    result = sudoku.Result(sudoku.Result.INVALID_ROW)
    assert(sudoku.verify_file("example2.csv") == result)

def test_invalid_scenario_columns():
    result = sudoku.Result(sudoku.Result.INVALID_COLUMN)
    assert(sudoku.verify_file("example3.csv") == result)

def test_invalid_scenario_rectangles():
    result = sudoku.Result(sudoku.Result.INVALID_RECTANGLE)
    assert(sudoku.verify_file("example4.csv") == result)

test_valid_scenario()
test_invalid_scenario_rows()
test_invalid_scenario_columns()
test_invalid_scenario_rectangles()
print("All test passed")