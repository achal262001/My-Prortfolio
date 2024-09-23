import React, { useState, useEffect } from 'react';


type Player = 'X' | 'O' | null;

const TicTacToe: React.FC = () => {
  const [board, setBoard] = useState<Player[]>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState<boolean>(true); 
  const [isGameOver, setIsGameOver] = useState<boolean>(false);


  const handleClick = (index: number): void => {
    if (isGameOver || board[index] || !isXNext) return; 
    const newBoard = board.slice();
    newBoard[index] = 'X';  
    setBoard(newBoard);
    setIsXNext(false);
  };


  const computerMove = () => {
    if (isGameOver || isXNext) return; 
    const emptyIndices = board.map((value, index) => value === null ? index : null).filter(i => i !== null) as number[];
    if (emptyIndices.length === 0) return;

    const randomIndex = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
    const newBoard = board.slice();
    newBoard[randomIndex] = 'O';  
    setBoard(newBoard);
    setIsXNext(true);
  };


  useEffect(() => {
    const winner = calculateWinner(board);
    if (winner) {
      setIsGameOver(true);
    } else if (board.every(square => square !== null)) {
      setIsGameOver(true); 
    } else if (!isXNext) {
      setTimeout(computerMove, 500);
    }
  }, [board, isXNext]);


  const renderSquare = (index: number) => {
    return (
      <button
        className="h-20 w-20 border border-gray-500 text-3xl flex items-center justify-center"
        onClick={() => handleClick(index)}
      >
        {board[index]}
      </button>
    );
  };

  const winner = calculateWinner(board);
  const status = winner
    ? `Winner: ${winner}`
    : isGameOver
      ? "It's a tie!"
      : `Next Player: ${isXNext ? 'X (You)' : 'O (Computer)'}`;

  const resetGame = (): void => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setIsGameOver(false);
  };

  return (
    <div className=" flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Tic-Tac-Toe: You vs Computer</h1>
      <div className="grid grid-cols-3 gap-2 mb-6">
        {Array.from({ length: 9 }).map((_, i) => renderSquare(i))}
      </div>
      <div className="text-2xl mb-4">{status}</div>
      <button
        onClick={resetGame}
        className="px-4 py-2 mb-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600"
      >
        Reset Game
      </button>
    </div>
  );
};


const calculateWinner = (board: Player[]): Player | null => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }

  return null;
};

export default TicTacToe;
