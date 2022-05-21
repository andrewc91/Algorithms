// O(n) run time and O(n) space complexity
// 1.1
function isUnique(string){
    const map = {};
  
    for (let i = 0; i < string.length; i++){
      if (map[string[i]] === 1){
        return false;
      }
      else {
        map[string[i]] = 1;
      }
    }
    return true;
  }


// 1.2
function checkPermutation(s1, s2){
  if (s1.length !== s2.length){
    return false;
  }
  var map = {};

  for (var i = 0; i < s1.length; i++){
    let c = s1[i];
    if (!map[c]){
      map[c] = 1;
    }
    else {
      map[c] += 1;
    }
  }

  for (var i = 0; i < s2.length; i++){
    let c = s2[i];
    if (map[c] > 0){
      map[c] -= 1;
    }
    else {
      return false;
    }
  }
  return true;
}


// 1.3
function urlIfy(string, trueLength){
  let space = 0;
  let i;

  for (i = 0; i < trueLength; i++){
    if (string[i] === " "){
      space++;
    }
  }

  let idx = trueLength - 1 + space * 2;
  let str = string.split('');

  for (i = trueLength-1; i >= 0; i--){
    if (str[i] !== " "){
      str[idx] = str[i];
      idx--;
    }
    else {
      str[idx] = '0';
      str[idx-1] = '2';
      str[idx-2] = '%';
      idx -= 3;
    }
  }
  let result = str.join('');
  return result;
}



function isPalindrome(str){
  let reg = /[\W_]/g;
  let newStr = str.toLowerCase().replace(reg, "");
  let i;
  let length = newStr.length;

  for (i = 0; i < Math.floor(length/2); i++){
    if (newStr[i] !== newStr[length-1-i]){
      return false;
    }
  }
  return true;
}



// In O(n) runtime
// 1.4
function palindromePermutation(str){
  var oddCount = 0;
  var map = {};

  for (var i = 0; i < str.length; i++){
    if (!map[str[i]]){
      map[str[i]] = 1;
    }
    else {
      map[str[i]] += 1;
    }
  }

  for (key in map){
    if (map[key] % 2 !== 0){
      oddCount++;
    }
  }

  if (oddCount > 1){
    return false;
  }
  return true;
}



// In O(n) runtime
// 1.5
function oneAway(s1, s2){
  if (Math.abs(s1.length - s2.length) > 1){
    return false;
  }

  var count = 0;
  var i = 0;
  var j = 0;

  while (i < s1.length && j < s2.length){
    if (s1[i] !== s2[j]){
      if (count === 1){
        return false;
      }
      if (s1.length > s2.length){
        i += 1;
      }
      else if (s2.length > s1.length){
        j += 1;
      }
      else {
        i += 1;
        j += 1;
      }
      count++;
    }
    else {
      i += 1;
      j += 1;
    }
  }
  if (i < s1.length || j < s2.length){
    count += 1;
  }
  return true;
}



// 1.6
function stringCompression(str){
  var count = 1;
  var answer = [];

  for (var i = 0; i < str.length; i++){
    if (str[i] === str[i+1]){
      count++;
    }
    else {
      answer.push(str[i]);
      answer.push(count);
      count = 1;
    }
  }
  answer = answer.join('');
  return answer;
}



// 1.8
function zeroMatrix(matrix){
  var rowZero = false;
  var colZero = false;

  // check if first column has a 0
  for (var i = 0; i < matrix.length; i++){
    if (matrix[i][0] == 0){
      colZero = true;
      break;
    }
  }

  // check if first row has a 0
  for (var j = 0; j < matrix[0].length; j++){
    if (matrix[0][j] == 0){
      rowZero = true;
      break;
    }
  }

  // check the inside to find 0s
  for (var i = 1; i < matrix.length; i++){
    for (var j = 1; j < matrix[0].length; j++){
      if (matrix[i][j] === 0){
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  for (var i = 1; i < matrix.length; i++){
    if (matrix[i][0] == 0){
      zeroRow(matrix, i);
    }
  }

  for (var j = 1; j < matrix[0].length; j++){
    if (matrix[0][j] == 0){
      zeroColumn(matrix, j);
    }
  }

  if (rowZero){
    zeroRow(matrix, 0);
  }

  if (colZero){
    zeroColumn(matrix, 0);
  }
}

function zeroColumn(matrix, column){
  for (var i = 0; i < matrix.length; i++){
    matrix[i][column] = 0;
  }
}

function zeroRow(matrix, row){
  for (var j = 0; j < matrix[0].length; j++){
    matrix[row][j] = 0;
  }
}