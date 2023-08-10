let i = 0;

const loopNum = (num) => {
  if(i <= num){
    console.log(i);
    i++;
    loopNum(num)
  } else{
    return;
  }
}

loopNum(10)