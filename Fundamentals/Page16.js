function setSwap(){
  var myNumber = 42;
  var myName = "Andrew";
  var temp = myNumber;

  myNumber = myName;
  myName = temp;

  console.log("My Name:", myName, "My Number:", myNumber);
}
setSwap();


function printAndCount(){
  var count = 0;
  for (var i = 512; i <= 4096; i++){
    if (i % 5 == 0){
      console.log(i);
      count++;
    }
  }
  console.log("Count =", count);
}
printAndCount();


function printTo1066(){
  for (var i = -52; i <= 1066; i++){
    console.log(i);
  }
}
printTo1066();


function multipesOfSix(){
  var num = 1;
  while (num <= 60000){
    if (num % 6 == 0){
      console.log(num);
    }
    num++;
  }
}
multipesOfSix();


function beCheerful(){
  for (var i = 1; i <= 98; i++){
    console.log("good morning");
  }
}
beCheerful();


function countingDojoWay(){
  for (var i = 1; i <= 100; i++){
    if (i % 10 == 0){
      console.log(i, "Dojo");
    }
    else if (i % 5 == 0){
      console.log(i, "Coding");
    }
  }
}
countingDojoWay();


function multiplesOfThree(){
  for (var i = -300; i <= 0; i++){
    if (i == -6 || i == -3){
      continue;
    }
    else if (i % 3 == 0){
      console.log(i);
    }
  }
}
multiplesOfThree();


function whatDoYouKnow(incoming){
  console.log(incoming);
}
whatDoYouKnow("hi there");


function printIntegersWhile(){
  var num = 2000;
  while (num <= 5280){
    console.log(num);
    num++;
  }
}
printIntegersWhile();


function yourBirthday(x, y){
  if (x == 9 && y == 9){
    console.log("How did you know?");
  }
  else {
    console.log("Just another day...");
  }
}
yourBirthday(9, 9);


function countdownByFours(){
  var num = 2016;
  while (num > 0){
    console.log(num);
    num -= 4;
  }
}
countdownByFours();


function leapYear(year){
  if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)){
    console.log("A leap year!");
  }
  else {
    console.log("Not a lear year!");
  }
}
leapYear(400);


function flexibleCountdown(low, high, mult){
  for (var i = high; i >= low; i--){
    if (i % mult == 0){
      console.log(i);
    }
  }
}
flexibleCountdown(2, 9, 3);


function finalCountdown(p1, p2, p3, p4){
  for (var i = p2; i <= p3; i++){
    if (i % p1 == 0){
      if (i == p4){
        continue;
      }
      console.log(i);
    }
  }
}
finalCountdown(3,5,17,9);
