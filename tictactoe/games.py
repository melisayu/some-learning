#!/bin/python

from colorama import Fore

class TerminalInterface:
    def write(self, string=''):
        print(string)

    def user_input(self, message):
        return input(message)

class Board:
    def __init__(self, interface):
        self.interface = interface
        self.state = [
                [ "7", "8", "9" ],
                [ "4", "5", "6" ],
                [ "1", "2", "3" ],
            ]

    def print_board(self):
        def symbol(i, j):
            symbol = self.state[i][j]
            color = Fore.RESET
            if symbol == 'X':
                color = Fore.RED
            elif symbol == 'O':
                color = Fore.GREEN
            return color + symbol + Fore.RESET

        self.interface.write()
        self.interface.write(" {} | {} | {} "
                .format(symbol(0, 0), symbol(0, 1), symbol(0, 2)))
        self.interface.write("---+---+---")
        self.interface.write(" {} | {} | {} "
                .format(symbol(1, 0), symbol(1, 1), symbol(1, 2)))
        self.interface.write("---+---+---")
        self.interface.write(" {} | {} | {} "
                .format(symbol(2, 0), symbol(2, 1), symbol(2, 2)))
        self.interface.write()

    def choose_field(self, field_id, player_id):
        def field_to_index(field_id):
            if field_id == "1":
                return (2, 0)
            elif field_id == "2":
                return (2, 1)
            elif field_id == "3":
                return (2, 2)
            elif field_id == "4":
                return (1, 0)
            elif field_id == "5":
                return (1, 1)
            elif field_id == "6":
                return (1, 2)
            elif field_id == "7":
                return (0, 0)
            elif field_id == "8":
                return (0, 1)
            elif field_id == "9":
                return (0, 2)
            else:
                return None

        indices = field_to_index(field_id)
        if indices is not None:
            current_symbol = self.state[indices[0]][indices[1]]
            if current_symbol != 'X' and current_symbol != 'O':
                self.state[indices[0]][indices[1]] = player_id
                return True
            else:
                self.interface.write("Field already used")
                return False
        else:
            self.interface.write("Wrong ID")
            return False

    def has_winner(self):
        for i in range(0, 3):
            if self.state[i][0] == self.state[i][1] \
            and self.state[i][0] == self.state[i][2] :
                return self.state[i][0]

        for i in range(0, 3):
            if self.state[0][i] == self.state[1][i] \
            and self.state[0][i] == self.state[2][i] :
                return self.state[0][i]

        if self.state[0][0] == self.state[1][1] \
        and self.state[0][0] == self.state[2][2]:
            return self.state[0][0]

        if self.state[1][1] == self.state[0][2] \
        and self.state[1][1] == self.state[2][0]:
            return self.state[1][1]

        count = 0
        for i in range(0, 3):
            for j in range(0, 3):
                player_id = self.state[i][j]
                if player_id == "X" or player_id == "O":
                    count += 1

        if count == 9:
            return "R"
        else:
            return " "

class TicTacToe:
    def __init__(self, interface):
        self.interface = interface
        self.board = Board(interface)
        self.players = []
        self.current_player = 0
        self.interface.write("Hello! Welcome to Tic Tac Toe!")

    def play(self):
        self.initialize()
        while self.should_continue():
            self.print_board()
            self.ask_for_choise()
        self.print_board()
        self.print_results()

    def initialize(self):
        def get_name(which):
            return self.interface.user_input("What is the name if the {} player? ".format(which))

        def is_valid(name):
            if name == "":
                self.interface.write("This name is empty!")
                return False

            if len(name) > 20:
                self.interface.write("This name is too long!")
                return False

            if len(self.players) > 0:
                if name == self.players[0]:
                    self.interface.write("This name already exists")
                    return False

            return True

        def keep_asking(which):
            name = get_name(which)
            while not is_valid(name):
                name = get_name(which)
            self.players.append(name)

        keep_asking("first")
        keep_asking("second")

        self.interface.write("The players are '{}' and '{}'\n"
                .format(self.players[0], self.players[1]))

    def should_continue(self):
        self.winner = self.board.has_winner()
        return self.winner != "X" and self.winner != "O" and self.winner != "R"

    def ask_for_choise(self):
        current_player_name = self.players[self.current_player]
        current_player_id = "X" if self.current_player == 0 else "O"

        def ask():
            return self.interface.user_input("The current player is '{}'. What is your choise? "
                .format(current_player_name))

        choise = ask()
        while not self.board.choose_field(choise, current_player_id):
            choise = ask()

        self.current_player = (self.current_player + 1) % 2

    def print_board(self):
        self.board.print_board()

    def print_results(self):
        if self.winner == "R":
            self.interface.write("Draw!")
        else:
            winner_name = self.players[0] \
                    if self.winner == "X" else self.players[1]
            self.interface.write("The winner is '{}'".format(winner_name))

