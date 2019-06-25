#!/bin/python

import games

interface = games.TerminalInterface()
tictactoe = games.TicTacToe(interface)
tictactoe.play()

