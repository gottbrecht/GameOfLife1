# GameOfLife1
https://gottbrecht.github.io/GameOfLife1/

#Implementing: Clear Grid + Add Random Cells 

#Model: 
#Grid 2D array
#generationCount : responsible for how many generations are created

#createGrid() create empty model
#countNeighbors(row, column) count amount of neighbors of given cell
#decideFate(row, col) decides if a cell should live or die based on the amount of neighbors
#updateGrid() updates grid for the next generation based on Conway's Game of Life-rules

#View
#drawGrid() draws cells in canvas
#clearGrid() / addRandomCells() are functions that handles UI buttons and adds random cells

#Initializing: animate() main function, runs animation and calls the functions above. It uses setTimeour to repeat the process with a pause on 500 miliseconds between every generation.


