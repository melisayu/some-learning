import csv

correct_numbers = {1, 2, 3, 4, 5, 6, 7, 8, 9}

class Result:
    SUCCESS = 0
    WRONG_NUMBER_OF_ROWS = 1
    WRONG_NUMBER_OF_COLUMNS = 2
    INVALID_ROW = 3
    INVALID_COLUMN = 4
    INVALID_RECTANGLE = 5

    def __init__(self, code, row_num=None, column_num=None, num_rows=None, num_columns=None, elements=None):
        self.code = code
        self.row_num = row_num
        self.column_num = column_num
        self.num_rows = num_rows
        self.num_columns = num_columns
        self.elements = elements

    def __eq__(self, other):
        return self.code == other.code

    def __repr__(self):
        if self.code == Result.SUCCESS:
            return 'Result ( SUCCESS )'
        elif self.code == Result.WRONG_NUMBER_OF_ROWS:
            return 'Result ( WRONG_NUMBER_OF_ROWS )'
        elif self.code == Result.WRONG_NUMBER_OF_COLUMNS:
            return 'Result ( WRONG_NUMBER_OF_COLUMNS )'
        elif self.code == Result.INVALID_ROW:
            return 'Result ( INVALID_ROW row={} elements={} )'.format(self.row_num, self.elements)
        elif self.code == Result.INVALID_COLUMN:
            return 'Result ( INVALID_COLUMN column={} elements={} )'.format(self.column_num, self.elements)
        elif self.code == Result.INVALID_RECTANGLE:
            return 'Result ( INVALID_RECTANGLE row={} column={} elements={} )'.format(self.row_num, self.column_num, self.elements)
        else:
            return 'Result ( INVALID )'

    def __str__(self):
        if self.code == Result.SUCCESS:
            return 'The solution is valid'
        elif self.code == Result.WRONG_NUMBER_OF_ROWS:
            return 'Length of array is {}'.format(self.row_num)
        elif self.code == Result.WRONG_NUMBER_OF_COLUMNS:
            return 'Length of a row is {}'.format(self.column_num)
        elif self.code == Result.INVALID_ROW:
            return 'Row does not contain required elements. {}'.format(self.elements)
        elif self.code == Result.INVALID_COLUMN:
            return 'Column does not contain required elements. {}'.format(self.elements)
        elif self.code == Result.INVALID_RECTANGLE:
            return 'Rectangle does not contain required elements. {}'.format(self.elements)
        else:
            return 'The solution is invalid'

# Verifies if content of file contains a valid sudoku solution.
# This function takes a name file to verify and returns true
# if the content is valid and false if content is invalid.
def verify_file(filename):
    array = []
    with open(filename) as f:
        reader = csv.reader(f)
        for row in reader:
            array.append([int(e) for e in row])

    return verify_array(array)

# Verifies if array contains a valid sudoku solution.
# This function returns true if the content is valid
# and returns false if the content is invalid.
def verify_array(array):
    # Check if array is valid
    if len(array) != 9:
        return Result(Result.WRONG_NUMBER_OF_ROWS, num_rows=len(array))

    for i, row in enumerate(array):
        if len(row) != 9:
            return Result(Result.WRONG_NUMBER_OF_COLUMNS, num_columns=len(row), row_num=i)

    # Validate the rows
    for row in array:
        if set(row) != correct_numbers:
            return Result(Result.INVALID_ROW, row_num=i, elements=row)

    # Validate the columns
    for i in range(0, 9):
        column = [row[i] for row in array]
        if set(column) != correct_numbers:
            return Result(Result.INVALID_COLUMN, column_num=i, elements=column)

    # Validate the rectangles
    for i in range(0, 3):
        for j in range(0, 3):
            rectangle = [
                array[3*i + 0][3*j + 0],
                array[3*i + 0][3*j + 1],
                array[3*i + 0][3*j + 2],
                array[3*i + 1][3*j + 0],
                array[3*i + 1][3*j + 1],
                array[3*i + 1][3*j + 2],
                array[3*i + 2][3*j + 0],
                array[3*i + 2][3*j + 1],
                array[3*i + 2][3*j + 2],
            ]
            if set(rectangle) != correct_numbers:
                return Result(Result.INVALID_RECTANGLE, row_num=i, column_num=j, elements=rectangle)

    return Result(Result.SUCCESS)

