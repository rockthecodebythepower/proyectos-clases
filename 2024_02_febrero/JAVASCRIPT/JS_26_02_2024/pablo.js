function time(a, b, c, d) {
    let aStrings = [a, b, c, d].map((num) => num.toString());
  
    let x = [];
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        let temp = aStrings[i] + aStrings[j];
        x.push(parseInt(temp));
      }
    }
  
    x.sort((a, b) => b - a);
  
    let hour, minutes;
    for (let num of x) {
      if (num < 59) {
        // console.log(num + ":");
        minutes = num;
        break;
      }
    }
  
    for (let num of x) {
      if (num < 24) {
        // console.log(num);
        hour = num;
        break;
      }
    }
  
    return(hour + ":" + minutes);
  }
  