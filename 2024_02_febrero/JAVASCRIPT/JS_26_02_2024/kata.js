/* Write a function which receives 4 digits and returns the latest time of day that can be built with those digits.

The time should be in HH:MM format.

Examples:

digits: 1, 9, 8, 3 => result: "19:38"
digits: 9, 1, 2, 5 => result: "21:59" ("19:25" is also a valid time, but 21:59 is later)
Notes
Result should be a valid 24-hour time, between 00:00 and 23:59.
Only inputs which have valid answers are tested. */

//!                  rest operator
function latestClock(...nums) {
  nums.sort((a, b) => b - a);

  let d1;
  let d2;
  let d3;
  let d4;
  let canBeD1two = false;

  if (Math.max(...nums) === 0) {
    return "00:00"
  }

  console.log(nums);
  /*  9, 8, 2, 1 */
  if (nums[1] <= 5) {
    canBeD1two = true;
  }

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    // canByD1two = true
    if (canBeD1two && num === 2 && !d1) {
      //! es imposible entrar si son todo 0s
      d1 = num;
      nums.splice(i, 1);
    } else if (num < 2 && !canBeD1two && !d1) {
      //! es imposible entrar porque canBeD1two es true
      d1 = num;
      nums.splice(i, 1);
    }
  }

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (d1 === 2 && num < 4 && !d2) {
      d2 = num;
      nums.splice(i, 1);
    } else if (d1 < 2 && !d2) {
      d2 = num;
      nums.splice(i, 1);
    }
  }

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (num <= 5 && !d3) {
      d3 = num;
      nums.splice(i, 1);
    }
  }

  d4 = nums.pop();
  return d1 + "" + d2 + ":" + d3 + "" + d4;
}

/* console.log(latestClock(1, 9, 8, 3));
console.log(latestClock(9, 1, 2, 5));
console.log(latestClock(1, 2, 8, 9)); */
console.log(latestClock(0, 0, 0, 0));
/* console.log(latestClock(2, 4, 0, 0));
 */
