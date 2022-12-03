const rawInput = Deno.readTextFileSync("input.txt");
const elves = rawInput.split("\n\n");
const calories = elves.map((carrying) =>
  carrying.split("\n").reduce((acc, curr) => acc + +curr, 0)
);
calories.sort((a, b) => b - a);
console.log(calories[0] + calories[1] + calories[2]);
