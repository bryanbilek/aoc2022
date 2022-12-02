// Importing the fs module
fs = require("fs")

// Intitializing the readFileLines with filename
fs.readFile('day 1/input.txt', function(err, data) {
    if(err) throw err;

    let array = data.toString().split('\n');
    let mapped = array.map(item => item === '' ? ' ' : Number(item));
    
    let sums = [];
    let curTotal = 0;
    for (let item of mapped) {
        if (item !== ' ') {
            curTotal += item;
        } else {
            sums.push(curTotal);
            curTotal = 0;
        }
    }
    //Part One Solution
    return Math.max(...sums);

    //Part Two Solution
    // let sorted = sums.sort((a,b) => b-a);
    // return sorted[0] + sorted[1] + sorted[2];
});