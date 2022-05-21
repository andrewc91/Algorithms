function bubbleSort(arr) {
  let length = arr.length;

  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

function betterBubble(arr) {
  let length = arr.length;
  let swapped;

  for (let i = 0; i < length - 1; i++) {
    swapped = false;
    for (let j = 0; j < length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        swapped = true;
      }
    }
    if (swapped === false) {
      break;
    }
  }
  return arr;
}

function selectionSort(arr) {
  let length = arr.length;
  let min;

  for (let i = 0; i < length - 1; i++) {
    min = i;
    for (let j = i + 1; j < length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      swap(arr, i, min);
    }
  }
  return arr;
}

function insertionSort(arr) {
  let length = arr.length;
  let value, j;

  for (let i = 1; i < length; i++) {
    value = arr[i];
    j = i - 1;
    while (j >= 0 && value < arr[j]) {
      swap(arr, j, j + 1);
      j--;
    }
  }
  return arr;
}

function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}


function mergeSort(arr){
  if (arr.length <= 1){
    return arr;
  }
  let mid = Math.floor(arr.length/2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);

}

function merge(arr1, arr2){
  var result = [];
  var i = 0;
  var j = 0;

  while ((i < arr1.length) && (j < arr2.length)) {
    if (arr1[i] == arr2[j]) {
      result.push(arr1[i]);
      result.push(arr2[j]);
      i++;
      j++;
    }
    else {
      if (arr1[i] < arr2[j]){
        result.push(arr1[i]);
        i++;
      }
      else {
        result.push(arr2[j]);
        j++;
      }
    }
  }
  while (i < arr1.length){
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length){
    result.push(arr2[j]);
    j++;
  }
  return result;
}


// function partition(arr){
//   if (arr.length < 2){
//     return;
//   }
//
//   var pivot = arr[0];
//   var wall = 0;
//
//   for (var i = 0; i < arr.length; i++){
//     if(arr[i] < pivot){
//       wall += 1
//       arr.swap(i, wall)
//     }
//   }
//   arr.swap(0, wall)
//   return arr;
// }
//
// Array.prototype.swap = function(idx1, idx2){
//     var temp = this[idx1]
//     this[idx1] = this[idx2]
//     this[idx2] = temp
// }


function quickSort(arr){

  function partition(left, right){
    if (right - left < 2){
      return;
    }

    var pivot = arr[left];
    var wall = left;

    for (var i = left; i <= right; i++){
      if (arr[i] < pivot){
        wall += 1;
        arr.swap(i, wall);
      }
    }
    arr.swap(left, wall);

    partition(left, wall-1);
    partition(wall+1, right);
  }
  return partition(0, arr.length-1);
}