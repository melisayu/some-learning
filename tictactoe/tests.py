#!/bin/python

import games

class TestInterface:
    def __init__(self):
        self.expectations = []

    def write(self, string=''):
        pass

    def add_input_expectation(self, value):
        self.expectations.insert(0, value)

    def user_input(self, message):
        return self.expectations.pop()

def test_board():
    board = games.Board(TestInterface())
    assert(board.choose_field(10, 'X') == False)
    assert(board.choose_field('10', 'X') == False)
    assert(board.choose_field(0, 'X') == False)
    assert(board.choose_field('0', 'X') == False)
    assert(board.choose_field('A', 'X') == False)

def test_winning_scenario():
    board = games.Board(TestInterface())
    assert(board.choose_field('1', 'X') == True)
    assert(board.has_winner() == ' ')
    assert(board.choose_field('2', 'O') == True)
    assert(board.has_winner() == ' ')
    assert(board.choose_field('4', 'X') == True)
    assert(board.has_winner() == ' ')
    assert(board.choose_field('5', 'O') == True)
    assert(board.has_winner() == ' ')
    assert(board.choose_field('7', 'X') == True)
    assert(board.has_winner() == 'X')

def test_choosing_the_same_number():
    board = games.Board(TestInterface())
    assert(board.choose_field('1', 'X') == True)
    assert(board.choose_field('1', 'X') == False)

    board = games.Board(TestInterface())
    assert(board.choose_field('1', 'X') == True)
    assert(board.choose_field('1', 'O') == False)

def test_correct_names_are_accepted():
    interface = TestInterface()
    interface.add_input_expectation('abc')
    interface.add_input_expectation('def')

    tictactoe = games.TicTacToe(interface)
    tictactoe.initialize()
    assert(tictactoe.players == ['abc', 'def'])

def test_empty_name_should_be_repeated():
    interface = TestInterface()
    interface.add_input_expectation('')
    interface.add_input_expectation('abc')
    interface.add_input_expectation('')
    interface.add_input_expectation('def')

    tictactoe = games.TicTacToe(interface)
    tictactoe.initialize()
    assert(tictactoe.players == ['abc', 'def'])

def test_long_names_are_rejected():
    interface = TestInterface()
    interface.add_input_expectation('daenerys targaryen the unburnt')
    interface.add_input_expectation('daenerys')
    interface.add_input_expectation('ulfric stormcloak the bear of markath')
    interface.add_input_expectation('ulfric')

    tictactoe = games.TicTacToe(interface)
    tictactoe.initialize()
    assert(tictactoe.players == ['daenerys', 'ulfric'])

def test_names_should_not_be_the_same():
    interface = TestInterface()
    interface.add_input_expectation('cat')
    interface.add_input_expectation('cat')
    interface.add_input_expectation('human')

    tictactoe = games.TicTacToe(interface)
    tictactoe.initialize()
    assert(tictactoe.players == ['cat', 'human'])


test_board()
test_winning_scenario()
test_choosing_the_same_number()
test_correct_names_are_accepted()
test_empty_name_should_be_repeated()
test_long_names_are_rejected
test_names_should_not_be_the_same()
print('All tests passed!')

