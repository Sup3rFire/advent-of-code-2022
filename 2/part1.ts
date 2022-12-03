const rawInput = Deno.readTextFileSync("input.txt");

const values: Record<string, number> = {
  // Rock
  A: 1,
  // Paper
  B: 2,
  // Scissors
  C: 3,

  // Rock
  X: 1,
  // Paper
  Y: 2,
  // Scissors
  Z: 3,
};

const scores = rawInput.split("\n").map((game) => {
  const rawValues = game.split(" ");
  const [opponent, you] = [values[rawValues[0]], values[rawValues[1]]];

  if (!opponent || !you) return 0;

  let score = you;
  if (opponent == you) score += 3;
  else if (you - opponent == -2 || you - opponent == 1) score += 6;

  return score;
});
console.log(scores.reduce((acc, curr) => acc + curr, 0));
