import React, { useEffect, useState } from 'react';

type Grid = (number | null)[][];

const emptyGrid: Grid = [
  [null, null, null, null],
  [null, null, null, null],
  [null, null, null, null],
  [null, null, null, null],
];


const generateRandomNumber = (): number => {
  return Math.random() > 0.9 ? 4 : 2;
};

const getEmptyTilePosition = (grid: Grid): [number, number] | null => {
  const emptyTiles: [number, number][] = [];
  grid.forEach((row, rowIndex) =>
    row.forEach((cell, colIndex) => {
      if (cell === null) {
        emptyTiles.push([rowIndex, colIndex]);
      }
    })
  );
  if (emptyTiles.length === 0) return null;
  return emptyTiles[Math.floor(Math.random() * emptyTiles.length)];
};

const slideRow = (row: (number | null)[]): (number | null)[] => {
  let filteredRow = row.filter((tile) => tile !== null);
  let newRow: (number | null)[] = [];

  for (let i = 0; i < filteredRow.length; i++) {
    if (filteredRow[i] === filteredRow[i + 1]) {
      newRow.push(filteredRow[i]! * 2);
      i++; 
    } else {
      newRow.push(filteredRow[i]);
    }
  }

  while (newRow.length < row.length) {
    newRow.push(null);
  }

  return newRow;
};

const transposeGrid = (grid: Grid): Grid => {
  return grid[0].map((_, colIndex) => grid.map((row) => row[colIndex]));
};

const reverseGrid = (grid: Grid): Grid => {
  return grid.map((row) => row.slice().reverse());
};

const addTile = (grid: Grid): Grid => {
  const newGrid = grid.map((row) => row.slice());
  const emptyTile = getEmptyTilePosition(newGrid);
  if (!emptyTile) return newGrid;
  const [rowIndex, colIndex] = emptyTile;
  newGrid[rowIndex][colIndex] = generateRandomNumber();
  return newGrid;
};

const moveLeft = (grid: Grid): Grid => {
  const newGrid = grid.map((row) => slideRow(row));
  return addTile(newGrid);
};

const moveRight = (grid: Grid): Grid => {
  const reversedGrid = reverseGrid(grid);
  const movedGrid = reversedGrid.map((row) => slideRow(row));
  return addTile(reverseGrid(movedGrid));
};

const moveUp = (grid: Grid): Grid => {
  const transposedGrid = transposeGrid(grid);
  const movedGrid = transposedGrid.map((row) => slideRow(row));
  return addTile(transposeGrid(movedGrid));
};

const moveDown = (grid: Grid): Grid => {
  const transposedGrid = transposeGrid(grid);
  const reversedGrid = reverseGrid(transposedGrid);
  const movedGrid = reversedGrid.map((row) => slideRow(row));
  return addTile(transposeGrid(reverseGrid(movedGrid)));
};

const A2048: React.FC = () => {
  const [grid, setGrid] = useState<Grid>(addTile(addTile(emptyGrid)));

  const handleKeyDown = (event: KeyboardEvent) => {
    switch (event.key) {
      case 'ArrowUp':
        setGrid((prevGrid) => moveUp(prevGrid));
        break;
      case 'ArrowDown':
        setGrid((prevGrid) => moveDown(prevGrid));
        break;
      case 'ArrowLeft':
        setGrid((prevGrid) => moveLeft(prevGrid));
        break;
      case 'ArrowRight':
        setGrid((prevGrid) => moveRight(prevGrid));
        break;
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className=" flex flex-col items-center justify-center bg-gray-800">
      <h1 className='text-3xl text-white p-2'>Welcome To 2048 Game</h1>
      <div className="grid grid-cols-4 gap-4 p-2">
        {grid.map((row, rowIndex) =>
          row.map((tile, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`w-20 h-20 flex items-center justify-center text-3xl font-bold ${
                tile ? 'bg-yellow-500' : 'bg-gray-700'
              } text-white`}
            >
              {tile || ''}
            </div>
          ))
        )}
      </div>
   
    </div>
  );
};

export default A2048;
