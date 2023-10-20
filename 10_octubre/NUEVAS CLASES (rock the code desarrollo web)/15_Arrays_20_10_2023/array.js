//! un array es una lista de elementos separados por comas;

const arrayAleatorio = new Array(
  23, // 0
  "klasdlf", // 1
  true, // 2
  [23, "adlskfa", false, {}], // 3
  true, // 4
  23 // 5
);

/* console.log(arrayAleatorio.length); // 6
console.log(arrayAleatorio[3].length); // 4 */

const arrayRaro = [[[], [], [], []], [[[[], ["encuentrame"]]]], [], []];
//                 ----------------, -------------------------, --, --;
//                        0                      1               2   3

//                           [[[[], ["encuentrame"]]]]
//                            -----------------------
//                                       0

//                            [[[], ["encuentrame"]]]
//                             ---------------------
//                                      0

//                             [[], ["encuentrame"]]
//                              --, ---------------
//                               0,        1

//                                ["encuentrame"]
//                                 -------------
//                                      0

console.log(arrayRaro[1][0][0][1][0].toUpperCase());
//               "encuentrame"