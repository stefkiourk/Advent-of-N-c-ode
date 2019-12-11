require("fs").readFile('./input.txt', 'utf8', (err, data) => {
    console.log(
        data.split("\n")
        .map(x => Math.floor(x/3) - 2)
        .reduce((a, b) => a + b)
    );
});