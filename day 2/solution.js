fs = require("fs")

// Intitializing the readFileLines with filename
fs.readFile('day 2/input.txt', function(err, data) {
    if(err) throw err;

    let array = data.toString().split('\n');

    let scores = { 'A': 1, 'B': 2, 'C': 3, 'X': 1, 'Y': 2, 'Z': 3 };
    let outcomes = { 'win': 6, 'draw': 3 };

    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        let p1 = array[i][0];
        let p2 = array[i][2];

        if (p1 === 'A' && p2 === 'X') {
            // sum += outcomes['draw'];
            // sum += scores['X'];
            sum += scores['C'];
        } else if (p1 === 'B' && p2 === 'Y') {
            sum += outcomes['draw'];
            sum += scores['Y'];
        } else if (p1 === 'C' && p2 === 'Z') {
            // sum += outcomes['draw'];
            sum += outcomes['win'];
            // sum += scores['Z'];
            sum += scores['X'];
        } else if (p1 === 'A' && p2 === 'Y') {
            // sum += outcomes['win'];
            sum += outcomes['draw'];
            // sum += scores['Y'];
            sum += scores['A'];
        } else if (p1 === 'A' && p2 === 'Z') {
            // sum += scores['Z'];
            sum += scores['B'];
            sum += outcomes['win'];//part 2
        } else if (p1 === 'B' && p2 === 'X') {
            sum += scores['X'];
        } else if (p1 === 'B' && p2 === 'Z') {
            sum += outcomes['win'];
            sum += scores['Z'];
        } else if (p1 === 'C' && p2 === 'X') {
            // sum += outcomes['win'];
            // sum += scores['X'];
            sum += scores['B'];
        } else if (p1 === 'C' && p2 === 'Y') {
            // sum += scores['Y'];
            sum += scores['C'];
            sum += outcomes['draw'] //part 2
        }
        
        //Part One Solution
        // return sum;

        //Part Two Solution
        return sum;     
    }
});