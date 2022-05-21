function recursiveSigma(number){
  var sum = 0;

  if (number >= 1){
    var intNumber = Math.floor(number);
    var prevNumber = recursiveSigma(number - 1);
    sum = intNumber + prevNumber;
  }
  return sum;
}

function rFactorial(num){
  if (num == 0){
    return 0;
  }
  if (num == 1){
    return 1;
  }
  return num * rFactorial(num - 1)
}

function rFibonacci(num){
  if (num < 0){
    return null;
  }
  if (num == 0){
    return 0;
  }
  if (num == 1){
    return 1;
  }
  var intNum = Math.trunc(num)
  return rFibonacci(intNum - 1) + rFibonacci(intNum - 2);
}

function rTribonacci(num){
  var intNum = Math.trunc(num);

  if (intNum < 0){
    return null;
  }
  if (intNum === 0){
    return 0;
  }
  if (intNum === 1){
    return 0;
  }
  if (intNum === 2){
    return 1;
  }
  return rTribonacci(intNum - 1) + rTribonacci(intNum - 2) + rTribonacci(intNum - 3);
}
