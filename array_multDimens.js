let month = [];

let firstWeeks = [];
let lastWeeks = [];

let avgTempWeek1 = [12.5, 13.0, 11.8, 20.1, 19.6, 22.3, 22.6]; //pos 0
let avgTempWeek2 = [22.5, 23.0, 21.8, 20.1, 9.6, 4, 5]; //pos 1

let avgTempWeek3 = [32.5, 31.0, 31.8, 30.1, 9.6, 4, 5]; //pos 2
let avgTempWeek4 = [42.5, 4.0, 41.8, 40.1, 4.6, 4, 5]; //pos 3

firstWeeks = [avgTempWeek1, avgTempWeek2]; //month pos 0
lastWeeks = [avgTempWeek3, avgTempWeek4]; // month pos 1

month = [firstWeeks, lastWeeks]; //pos 0, pos 1

// console.log(month[0][1][2]); //21.8

//percorrer os arrays
for (var x = 0; x < month.length; x++) {
    for (var y = 0; y < month[x].length; y++) {
        for (var z = 0; z < month[x][y].length; z++) {
            console.table(month[x][y][z]);
        }
    }
}
