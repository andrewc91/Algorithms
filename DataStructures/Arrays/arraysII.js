function balancePoint(arr){
  var point = 1;
  var sum = 0;

  for (var i = arr.length - 1; i > 1; i--){
    for (var j = 0; j <= arr.length - 1 - point; j++){
      sum = sum + arr[j];
    }
    if (sum === arr[i]){
      return true;
    }
    point = point + 1;
    sum = 0;
  }
  return false;
}

function mode(arr){
  var count = 1;
  var value = arr[0];
  var preCount = 1;

  for (var i = 0; i < arr.length; i++){
    if (arr[i] == arr[i + 1]){
      count++;
    }
    else if ((arr[i] != arr[i+1]) || (arr[i+1] == null)){
      if (count > preCount){
        value = arr[i];
        preCount = count;
        count = 1;
      }
    }
  }
  return value;
}
