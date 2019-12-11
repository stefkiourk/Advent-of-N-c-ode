require("fs").readFile('./input.txt', 'utf8', (err, data) => {
    var moduleFuel = 0, fuels = [];

    data.split("\n").forEach(mass => {
        moduleFuel = 0;
        do {
            moduleFuel+= mass = Math.floor(mass/3) - 2; 
        } while  (mass > 5)
        fuels.push(moduleFuel); 
    });

    console.log(fuels.reduce((a, b) => a +b));
});