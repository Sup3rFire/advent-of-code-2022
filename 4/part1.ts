const rawInput = Deno.readTextFileSync("input.txt").trim();

const fullyContains = rawInput
  .split("\n")
  .map((pair) =>
    pair.split(",").map((person) => person.split("-").map((value) => +value))
  )
  .filter(
    (pair) =>
      (pair[0][0] <= pair[1][0] && pair[0][1] >= pair[1][1]) ||
      (pair[1][0] <= pair[0][0] && pair[1][1] >= pair[0][1])
  );

console.log(fullyContains.length);
