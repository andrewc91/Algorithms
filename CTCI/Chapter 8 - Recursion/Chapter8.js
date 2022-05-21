// 8.1 Triple Steps   O(3^n)
function tripleStep(n){
    if (n === 0){
      return 0;
    }
    let count = 0;
  
    let stepIt = function(steps){
      if (steps === 0){
        count++;
      }
      else if (steps > 0){
        stepIt(steps - 1);
        stepIt(steps - 2);
        stepIt(steps - 3);
      }
      return count;
    }
    return stepIt(n);
  }


  // 8.3 Magic Index
  function magicIndex(arr){
    var binarySearch = function(arr, low, high){
      if (low > high){
        return false;
      }
      var mid = Math.floor((low + high) / 2);
  
      if (mid === arr[mid]){
        return mid;
      }
      if (mid > arr[mid]){
        low = mid + 1;
        return binarySearch(arr, low, high);
      }
      if (mid < arr[mid]){
        high = mid - 1;
        return binarySearch(arr, low, high);
      }
    }
    return binarySearch(arr, 0, arr.length-1);
  }



  // 8.9 Generate Parens
  function generateParens(n){
    const total = n * 2;
    let result = [];
    let parens = "";
    let open = 0;
    let close = 0;

    let generate = function(arr, parens, open, close) {
      if ((open + close) === total) {
        arr.push(parens);
      } else {
        if (open < n) {
          generate(arr, parens + '(', open + 1, close);
        }
        if (close < open) {
          generate(arr, parens + ')', open, close + 1);
        }
      }
    }
    generate(result, parens, open, close);
    return result;
  }



var permuteString = function (string) {
  var answers = [];
  var recurse = function (currPerm, remainingChars) {
    if (remainingChars.length === 0) {
      answers.push(currPerm);
    } else {
      for (var i = 0; i < remainingChars.length; i++) {
        console.log('zero is ' + currPerm + remainingChars.charAt(i));
        console.log('first is ' + remainingChars.slice(0, i));
        console.log('second is ' + remainingChars.slice(i + 1));
        recurse(currPerm + remainingChars.charAt(i), remainingChars.slice(0, i) + remainingChars.slice(i + 1));
      }
    }
  };
  recurse('', string);
  return answers;
};

/* TEST */

console.log(permuteString('and'));
// var testy = 'and'
// console.log(testy.slice(0, 0))
// console.log(testy.slice(0, 1));
