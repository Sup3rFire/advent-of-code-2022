const rawInput = Deno.readTextFileSync("input.txt");

const groups = rawInput.split("\n").reduce<string[][]>(
  (acc, curr) => {
    if (acc[acc.length - 1].length < 3) acc[acc.length - 1].push(curr);
    else acc.push([curr]);
    return acc;
  },
  [[]]
);

const badges: string[] = groups
  .map(
    (group) =>
      group[0]
        .split("")
        .find(
          (value) => group[1].includes(value) && group[2].includes(value)
        ) as string
  )
  .slice(0, -1);

console.log(
  badges.reduce(
    (acc, curr) =>
      acc + parseInt(curr, 36) - 9 + (curr == curr.toLowerCase() ? 0 : 26),
    0
  )
);
