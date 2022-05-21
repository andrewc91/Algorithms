function outer(x){
    let b = 10;

    let inner = function(){
        var a = 20;
        return a + b + x;
    }
    return inner;
}

let a = outer(10);
let b = outer(1);
console.log(a);
console.log(a());
console.log(b());



function coont(){
    let counter = 0;

    function coonter(){
        counter++;
        console.log(counter);
    }
    return coonter;
}

let x = coont();
let y = coont();
y()
x()
x()
x()
y()


// parseInt will turn strings to numeric value
// non-numeric will stay string
let num1 = "123";
let badNum = "123abc";
num1 = parseInt(num1);
console.log(num1 + 123);
console.log(num1+555);
console.log(badNum + 555);

// eval() will apply math calculations to numeric strings 
let strExp = "10 + 10";
console.log(eval(strExp));
console.log(eval(('5 * 100')));
let myArr = ["225" + "+" + "150"];
myArr = myArr.join(' ');
console.log(myArr);
console.log(eval(myArr));

let operate = "10 + 5 + 50 - 10";
function doMath(str){
    splitStr = str.split(' ');
    console.log(splitStr);
    let answer = parseInt(splitStr[0]);
    for (let i = 1; i < splitStr.length; i++){
        console.log(answer);
        switch(splitStr[i]){
            case "+":
                answer += parseInt(splitStr[i+1]);
                break;
            
            case "-":
                answer -= parseInt(splitStr[i+1]);
        }
    }
    return answer;
}
console.log(doMath(operate));




// Switch-Case Statements
let language = "Spanish"
switch (language){
    case "English":
        console.log("I speak English");
        break;
    
    case "Korean":
        console.log("I speak Korean baby!");
        break;
    
    case "Spanish":
        console.log("Spanish speaker here!");
        break;
    
    default:
        console.log("What do ya speak again?");
}
