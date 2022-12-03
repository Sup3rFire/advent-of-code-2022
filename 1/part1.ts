const rawInput = Deno.readTextFileSync("input.txt");
const elves = rawInput.split("\n\n");
const calories = elves.map((carrying) =>
  carrying.split("\n").reduce((acc, curr) => acc + +curr, 0)
);
console.log(calories.reduce((acc, curr) => (curr > acc ? curr : acc), 0));
