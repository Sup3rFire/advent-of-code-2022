const rawInput = Deno.readTextFileSync("input.txt");

const intersect = rawInput
  .split("\n")
  .map(
    (line) =>
      line
        .slice(0, line.length / 2)
        .split("")
        .filter((item) =>
          line
            .slice(line.length / 2)
            .split("")
            .includes(item)
        )[0]
  )
  .reduce<string[]>((acc, curr) => {
    if (curr != undefined) acc.push(curr);
    return acc;
  }, []);

console.log(
  intersect.reduce(
    (acc, curr) =>
      acc + parseInt(curr, 36) - 9 + (curr == curr.toLowerCase() ? 0 : 26),
    0
  )
);
