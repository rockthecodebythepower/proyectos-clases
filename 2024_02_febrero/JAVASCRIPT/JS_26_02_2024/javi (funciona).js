function latestClock(a, b, c, d) {
  let d1, d2, d3, d4;
  let arr = [a, b, c, d];
  arr.sort((a, b) => b - a);
  if (arr.includes(2)) {
    if (arr[1] > 5) {
      if (arr.includes(1)) {
        d1 = 1;
        arr.splice(arr.indexOf(1), 1);
        d2 = arr[0];
        if (arr[1] < 6) {
          d3 = arr[1];
          d4 = arr[2];
        } else {
          d3 = arr[2];
          d4 = arr[1];
        }
      } else {
        d1 = 0;
        arr.splice(arr.indexOf(0), 1);
        d2 = arr[0];
        if (arr[1] < 6) {
          d3 = arr[1];
          d4 = arr[2];
        } else {
          d3 = arr[2];
          d4 = arr[1];
        }
      }
    } else {
      d1 = 2;
      arr.splice(arr.indexOf(2), 1);
      if (arr[0] < 4) {
        d2 = arr[0];
        if (arr[1] < 6) {
          d3 = arr[1];
          d4 = arr[2];
        } else {
          d3 = arr[2];
          d4 = arr[1];
        }
      } else if (arr[1] < 4) {
        d2 = arr[1];
        if (arr[0] < 6) {
          d3 = arr[0];
          d4 = arr[2];
        } else {
          d3 = arr[2];
          d4 = arr[0];
        }
      } else {
        d2 = arr[2];
        if (arr[0] < 6) {
          d3 = arr[0];
          d4 = arr[1];
        } else {
          d3 = arr[1];
          d4 = arr[0];
        }
      }
    }
  } else {
    if (arr.includes(1)) {
      d1 = 1;
      arr.splice(arr.indexOf(1), 1);
      d2 = arr[0];
      if (arr[1] < 6) {
        d3 = arr[1];
        d4 = arr[2];
      } else {
        d3 = arr[2];
        d4 = arr[1];
      }
    } else {
      d1 = 0;
      arr.splice(arr.indexOf(0), 1);
      d2 = arr[0];
      if (arr[1] < 6) {
        d3 = arr[1];
        d4 = arr[2];
      } else {
        d3 = arr[2];
        d4 = arr[1];
      }
    }
  }
  return `${d1}${d2}:${d3}${d4}`;
}
