var string = "creature"
// console.log(string);
// console.log(string.length);

// split = string.split("")
// console.log(split);
// // console.log(split[4].split(""));
// console.log(split.join(""));

function removeBlank(str){
  var result = "";

  for (var i = 0; i < str.length; i++){
    if (str[i] !== " "){
      result += str[i];
    }
  }
  console.log(result);
}

function getDigits(str){
  var numbers = [0,1,2,3,4,5,6,7,8,9];
  var result = "";

  for (var i = 0; i < str.length; i++){
    if (str[i] in numbers){
      result += str[i];
    }
  }
  console.log(result);
}


function acronyms(str){
  var result = "";
  var split = str.split(" ");

  for (var i = 0; i < split.length; i++){
    result += split[i][0].toUpperCase();
  }
  console.log(result);
}


function countSpace(str){
  var count = 0;
  var length;
  for (var i = 0; i < str.length; i++){
    if (str[i] == " "){
      count += 1;
    }
  }
  length = str.length - count;
  console.log(length);
}

function shorterString(str, val){
  var split = str.split(" ");

  for (var i = 0; i < split.length; i++){
    if (split[i].length < val){
      split.splice(i, 1)
      i--;
    }
  }
  console.log(split);
}

function reverseString(str){
  var temp;
  var split = str.split("");

  for (var i = 0; i < split.length/2; i++){
    temp = split[i];
    split[i] = split[split.length - 1 - i];
    split[split.length - 1 - i] = temp;
  }
  var newWord = split.join("");
  console.log(newWord);
}

function removeEven(str){
  var split = str.split(" ");
  for (var i = 0; i < split.length; i++){
    if (split[i].length % 2 == 0){
      split.splice(i ,1);
      i--;
    }
  }
  console.log(split);
}

function parensValid(str){
  var open = 0;
  var closed = 0;

  for (var i = 0; i < str.length; i++){
    if (closed > open){
      return false;
    }
    if (str[i] == "("){
      open += 1;
    }
    if (str[i] == ")"){
      closed += 1;
    }
  }
  if (open === closed){
    return true;
  }
  else {
    return false;
  }
}


function isPalindrome(str){
  for (var i = 0; i < Math.floor(str.length / 2); i++){
    if (str[i] !== str[str.length-1-i]){
      return false;
    }
  }
  return true;
}
