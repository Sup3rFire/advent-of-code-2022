const rawInput = Deno.readTextFileSync("input.txt");

const values: Record<string, number> = {
  // Rock
  A: 1,
  // Paper
  B: 2,
  // Scissors
  C: 3,

  X: 0,
  Y: 1,
  Z: 2,
};

const scores = rawInput.split("\n").map((game) => {
  const rawValues = game.split(" ");
  const [opponent, you] = [values[rawValues[0]], values[rawValues[1]]];

  let score = you * 3;
  if (you === 1) score += opponent;
  else if (!you) score += opponent === 1 ? 3 : opponent - 1;
  else score += opponent === 3 ? 1 : opponent + 1;

  return score;
});
console.log(scores.reduce((acc, curr) => acc + curr, 0));
