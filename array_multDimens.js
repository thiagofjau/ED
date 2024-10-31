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

// Creating a multidimensional array
// let multidimensionalArray = [
//     [
//         [1, 2, 3],
//         [4, 5, 6]
//     ],
//     [
//         [7, 8, 9],
//         [10, 11, 12]
//     ],
//     [
//         [13, 14, 15],
//         [16, 17, 18]
//     ],
//     [
//         [19, 20, 21],
//         [22, 23, 24]
//     ]
// ];

// // Looping through the multidimensional array
// for (let i = 0; i < multidimensionalArray.length; i++)/*array1 onde tem os 4*/ {
//     for (let j = 0; j < multidimensionalArray[i].length; j++) /*array2 onde tem os 2 */ {
//         for (let k = 0; k < multidimensionalArray[i][j].length; k++)/*array3 onde tem 3 elem*/ {
//             console.table(multidimensionalArray[i][j][k]);
//         }
//     }
// }

// let array2D = [
//     [1, 2, 3, 4], //array0
//     [4, 5, 6], //array 1
//     [7, 8, 9],//2
//     [12,23,45,23,11,12]//3
// ];

// // Iterando sobre o array 2D
// for (let i = 0; i < array2D.length; i++) {
//     for (let j = 0; j < array2D[i].length; j ++) {
//         console.log(`array2D[${i}][${j}] = ${array2D[i][j]}`);
//     }
// }

// let array3D = [
//     [   //array0começo-i
//        /*array0-j*/ [1/*pos 0-k*/, 2, 3],
//         [4, 5, 6],//array1
//          [12,21,34,5]//array2
//         //array0Fim
//     ],
//     [   //array1começo
//         [7, 8, 9], /*ex: 8 101 */
//         [10, 11, 12],
//         [100, 101, 102]
//         //array1fim
//     ]
// ];

// // Iterando sobre o array 3D
// for (let i = 0; i < array3D.length; i++) {
//     for (let j = 0; j < array3D[i].length; j++) {
//         for (let k = 0; k < array3D[i][j].length; k++) {
//             console.log(`array3D[${i}][${j}][${k}] = ${array3D[i][j][k]}`);
//         }
//     }
// }