//model
const rows = 20;
const cols = 20;
let grid = createGrid();
let generationCount = 0;

function createGrid() {
  const newGrid = new Array(rows);
  for (let i = 0; i < rows; i++) {
    newGrid[i] = new Array(cols).fill(false);
  }
  return newGrid;
}

function countNeighbors(row, col) {
  let count = 0;
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      const newRow = row + i;
      const newCol = col + j;
      if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
        if (i !== 0 || j !== 0) {
          count += grid[newRow][newCol] ? 1 : 0;
        }
      }
    }
  }
  return count;
}

function decideFate(row, col) {
  const neighbors = countNeighbors(row, col);
  if (grid[row][col]) {
    return neighbors === 2 || neighbors === 3;
  } else {
    return neighbors === 3;
  }
}

function updateGrid() {
  const newGrid = createGrid();
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      newGrid[i][j] = decideFate(i, j);
    }
  }
  grid = newGrid;
  generationCount++;
}

//view
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const cellSize = 20;

function drawGrid() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      ctx.beginPath();
      ctx.rect(j * cellSize, i * cellSize, cellSize, cellSize);
      if (grid[i][j]) {
        ctx.fillStyle = 'black';
        ctx.fill();
      } else {
        ctx.strokeStyle = '#ddd';
        ctx.stroke();
      }
      ctx.closePath();
    }
  }
}

function clearGrid() {
  grid = createGrid();
  generationCount = 0;
}

function addRandomCells() {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (Math.random() < 0.5) {
        grid[i][j] = true;
      }
    }
  }
}

function updateGenerationCount() {
  document.getElementById('generationCount').innerText = `Generations: ${generationCount}`;
}

function animate() {
  drawGrid();
  updateGrid();
  updateGenerationCount();
  setTimeout(animate, 500); 
}

animate(); //start animation
