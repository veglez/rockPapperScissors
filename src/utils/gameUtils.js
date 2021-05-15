export const options = {
  rock: 'rock',
  paper: 'paper',
  scissors: 'scissors',
  lizard: 'lizard',
  spock: 'spock',
};

export const defineWinner = (hand1, hand2) => {
  let winner = '';
  const game = [hand1, hand2];

  if (hand1 === hand2) {
    winner = 'there is no winner';
  }

  if (game.includes(options.scissors) && game.includes(options.paper)) {
    winner = options.scissors;
  }

  if (game.includes(options.paper) && game.includes(options.rock)) {
    winner = options.paper;
  }

  if (game.includes(options.rock) && game.includes(options.lizard)) {
    winner = options.rock;
  }

  if (game.includes(options.lizard) && game.includes(options.spock)) {
    winner = options.lizard;
  }

  if (game.includes(options.spock) && game.includes(options.scissors)) {
    winner = options.spock;
  }

  if (game.includes(options.rock) && game.includes(options.scissors)) {
    winner = options.rock;
  }

  if (game.includes(options.scissors) && game.includes(options.lizard)) {
    winner = options.scissors;
  }

  if (game.includes(options.lizard) && game.includes(options.paper)) {
    winner = options.lizard;
  }

  if (game.includes(options.paper) && game.includes(options.spock)) {
    winner = options.paper;
  }

  if (game.includes(options.spock) && game.includes(options.rock)) {
    winner = options.spock;
  }

  const whoWins = game.indexOf(winner);

  return whoWins;
};
