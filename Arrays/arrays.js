function Array(){
  this.arr = [];
}

Array.prototype.push = function(val){
  this.arr.push(val);
}

Array.prototype.pop = function(){
  this.arr.pop();
}

function pushFront(arr, x){
  for (var i = arr.length - 1; i >= 0; i--){
    arr[i + 1] = arr[i];
  }
  arr[0] = x;
  return arr;
}

function popFront(arr){
  var temp = arr[0];
  for (var i = 0; i < arr.length; i++){
    arr[i] = arr[i + 1];
  }
  arr.pop();
  console.log(arr);
  console.log(temp);
}

function insertAt(arr, idx, val){
  for (var i = arr.length - 1; i >= idx; i--){
    arr[i + 1] = arr[i];
  }
  arr[idx] = val;
  console.log(arr);
}

function removeAt(arr, idx){
  var temp = arr[idx];
  for (var i = idx; i < arr.length - 1; i++){
    arr[i] = arr[i + 1];
  }
  arr.pop();
  console.log(temp);
  console.log(arr);
}

function swapPairs(arr){
  var temp;
  for (var i = 0; i < arr.length; i = i + 2){
    if (arr[i + 1]){
      temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }
  console.log(arr);
}

function removeDuplicates(arr){
  var newArr = [];
  for (var i = 0; i < arr.length; i++){
    if (arr[i] in newArr){
      continue;
    }
    if (arr[i] !== arr[i+1]){
      newArr[newArr.length] = arr[i];
    }
  }
  console.log(newArr);
}

function minToFront(arr){
  var min = arr[0];
  var temp;
  var idx;
  for (var i = 0; i < arr.length; i++){
    if (arr[i] < min){
      min = arr[i];
      idx = i;
    }
  }
  if (arr[0] == min){
    return arr;
  }
  else {
    for (var i = idx; i > 0; i--){
      temp = arr[i];
      arr[i] = arr[i - 1];
      arr[i - 1] = temp;
    }
  }
  console.log(arr);
}

function reverseArray(arr){
  var temp;
  for (var i = 0; i < Math.floor(arr.length/2); i++){
    temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  console.log(arr);
}

function rotateArray(arr, shift){
  var temp;
  while (shift > 0){
    for (var i = arr.length - 1; i > 0; i--){
      temp = arr[i];
      arr[i] = arr[i-1];
      arr[i-1] = temp;
    }
    shift--
  }
  console.log(arr);
}

function removeNegatives(arr){
  var count = 0;
  var put = 0;

  for (var i = 0; i < arr.length; i++){
    if (arr[i] >= 0){
      arr[put] = arr[i];
      put++;
    }
    else {
      count++;
    }
  }
  arr.length = arr.length - count;
  console.log(arr);
}

function secondLast(arr){
  if (arr.length < 2){
    console.log(null);
  }
  else {
    console.log(arr[arr.length-2]);
  }
}

function secondLargest(arr){
  var first;
  var second;
  if (arr.length < 2){
    return null;
  }

  if (arr[0] > arr[1]){
    first = arr[0];
    second = arr[1];
  }
  else {
    first = arr[1];
    second = arr[0];
  }

  for (var i = 2; i < arr.length; i++){
    if (arr[i] > second){
      if (arr[i] > first){
        second = first;
        first = arr[i];
      }
    }
  }
  return second;
}

function NthLast(arr, val){
  if (arr.length < 2){
    console.log(null);
  }
  console.log(arr[arr.length-val]);
}

removeDuplicates([1,2,3,4,5,4])
