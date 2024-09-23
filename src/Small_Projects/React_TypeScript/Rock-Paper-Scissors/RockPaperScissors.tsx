import React, { useState } from 'react';

type Choice = 'rock' | 'paper' | 'scissors' | '';

const choices: Choice[] = ['rock', 'paper', 'scissors'];

const getRandomChoice = (): Choice => {
  return choices[Math.floor(Math.random() * choices.length)];
};

const determineWinner = (playerChoice: Choice, computerChoice: Choice): string => {
  if (playerChoice === computerChoice) return "It's a tie!";
  if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'scissors' && computerChoice === 'paper') ||
    (playerChoice === 'paper' && computerChoice === 'rock')
  ) {
    return 'You win!';
  }
  return 'Computer wins!';
};

const RockPaperScissors: React.FC = () => {
  const [playerChoice, setPlayerChoice] = useState<Choice>('');
  const [computerChoice, setComputerChoice] = useState<Choice>('');
  const [result, setResult] = useState<string>('');

  const handleClick = (choice: Choice) => {
    const computer = getRandomChoice();
    setPlayerChoice(choice);
    setComputerChoice(computer);
    setResult(determineWinner(choice, computer));
  };

  return (
    <div className=" flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-4xl mb-8">Rock, Paper, Scissors</h1>
      <div className="flex space-x-4 mb-8">
        {choices.map((choice) => (
          <button
            key={choice}
            onClick={() => handleClick(choice)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {choice.charAt(0).toUpperCase() + choice.slice(1)}
          </button>
        ))}
      </div>
      {playerChoice && (
        <div className="text-center">
          <p className="text-2xl">Your choice: <span className="font-bold">{playerChoice}</span></p>
          <p className="text-2xl">Computer's choice: <span className="font-bold">{computerChoice}</span></p>
          <p className="text-3xl font-bold mt-4">{result}</p>
        </div>
      )}
    </div>
  );
};

export default RockPaperScissors;
