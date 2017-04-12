function bubbleSort(arr){
  var temp;

  for (var i = arr.length - 1; i > 0; i--){
    for (var j = 0; j < i; j++){
      if (arr[j] > arr[j + 1]){
        temp = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

function selectionSort(arr){
  var min;
  var temp;
  var idx;

  for (var i = 0; i < arr.length; i++){
    min = arr[i];
    idx = i;

    for (var j = i+1; j < arr.length; j++){
      if (arr[j] < min){
        min = arr[j];
        idx = j;
      }
    }
    temp = min;
    arr[idx] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

function insertionSort(arr){
  for (var i = 1; i < arr.length; i++){
    var temp = arr[i];
    var j = i-1;
    while ((j >= 0) && (arr[j] > temp)){
      arr[j+1] = arr[j];
      j--;
    }
    arr[j+1] = temp;
  }
  return arr;
}

function combineArray(arr1, arr2){
  var newArr = [];
  var idx1 = 0;
  var idx2 = 0;

  while ((idx1 < arr1.length) && (idx2 < arr2.length)){
    if (arr1[idx1] == arr2[idx2]){
      newArr.push(arr1[idx1]);
      newArr.push(arr2[idx2]);
      idx1++;
      idx2++;
    }
    if (arr1[idx1] < arr2[idx2]){
      newArr.push(arr1[idx1]);
      idx1++;
    }
    if (arr1[idx1] > arr2[idx2]){
      newArr.push(arr2[idx2]);
      idx2++;
    }
  }

  if (idx1 == arr1.length){
    for (var i = idx2; i < arr2.length; i++){
      newArr.push(arr2[i]);
    }
  }
  else {
    for (var i = idx1; i < arr1.length; i++){
      newArr.push(arr1[i]);
    }
  }

  return newArr;
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

Array.prototype.swap = function(idx1, idx2){
    var temp = this[idx1]
    this[idx1] = this[idx2]
    this[idx2] = temp
}
