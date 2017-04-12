function countdown(num){
  var arr = [];

  for (var i = num; i >= 0; i--){
    arr.push(i);
  }
  return arr.length;
}
console.log(countdown(5));


function makeBig(arr){
  for (var i = 0; i < arr.length; i++){
    if (arr[i] < 0){
      arr[i] = "big";
    }
  }
  return arr;
}
console.log(makeBig([-1,3,5,-5]));


function previousLengths(arr){
  for (var i = arr.length - 1; i > 0; i--)
  {
    arr[i] = arr[i-1].length;
  }
  arr[0] = 0;
  return arr;
}
console.log(previousLengths(["hello", "my", "friend"]));


function lowHigh(arr){
  var max = arr[0];
  var min = arr[0];

  for (var i = 0; i < arr.length; i++){
    if (arr[i] > max){
      max = arr[i];
    }
    if (arr[i] < min){
      min = arr[i];
    }
  }
  console.log(min);
  return max;
}
console.log(lowHigh([4,2,6,7,1]));


function addSeven(arr){
  var newArr = [];

  for (var i = 0; i < arr.length; i++){
    newArr[i] = arr[i] + 7;
  }
  return newArr;
}
console.log(addSeven([1,1,5,3]));


function printReturnOne(arr){
  console.log(arr[arr.length-2]);
  for (var i = 0; i < arr.length; i++){
    if (arr[i] % 2 != 0){
      return arr[i];
    }
  }
}
console.log(printReturnOne([1,5,3,2,1]));

function printOneReturnAnother(arr){
  if (arr.length > 1){
    console.log(arr[arr.length-2]);
  }
  else {
    return null;
  }
  for (var i = 0; i < arr.length; i++){
    if (arr[i] % 2 != 0){
      return arr[i];
    }
  }
}
console.log(printOneReturnAnother([2,4,6,9,8,2]))

function reverseArray(arr){
  var temp;

  for (var i = 0; i < arr.length/2; i++){
    temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr;
}
console.log(reverseArray([1,2,3,4,5]));

function evenOdds(arr){
  var even_count = 0;
  var odd_count = 0;

  for (var i = 0; i < arr.length; i++){
    if (arr[i] % 2 == 0){
      even_count++;
      odd_count = 0;

      if (even_count == 3){
        console.log("Even more so!");
      }
    }
    if (arr[i] % 2 != 0){
      odd_count++;
      even_count = 0;

      if (odd_count == 3){
        console.log("That's odd!");
      }
    }
  }
}
evenOdds([1,2,6,4,5,6,7,7,9])

function fibonacci(num){
  var temp;
  var a = 0;
  var b = 1;

  while (num > 0){
    temp = b;
    b = a + b;
    a = temp;
    num--;
  }
  return a;
}
console.log(fibonacci(7));
