// String Reversal
function reverseString(str){
    let arr = str.split('');
    let temp;

    for (let i = 0; i < Math.floor(arr.length/2); i++){
        temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    let result = arr.join('');
    return result;
}

function easyReverseString(str){
    return str.split("").reverse().join('');
}

function concatReverseString(str){
    let answer = "";

    for (i = str.length-1; i >= 0; i--){
        answer += str[i];
    }
    return answer;
}

// Reverse Integer
function reverseInteger(num){
    let result = 0;

    while (num){
        let temp = num % 10;
        result = result * 10 + temp;
        num = (num - temp) / 10;
    }
    return result;
}


// Max Characters
function maxChar(str){
    let map = {};
    let max = 0;
    let maxKey;
    
    for (let i = 0; i < str.length; i++){
        if (!map[str[i]]){
            map[str[i]] = 1;
        }
        else {
            map[str[i]] += 1;
        }
    }
    for (key in map){
        if (map[key] > max){
            max = map[key];
            maxKey = key;
        }
    }
    return maxKey;
}


// FizzBuzz
function fizzBuzz(num){
    if (num < 1){
        return null;
    }

    for (let i = 1; i <= num; i++){
        if (i % 15 === 0){
            console.log("FizzBuzz");
        }
        else if (i % 3 === 0){
            console.log("Fizz");
        }
        else if (i % 5 === 0){
            console.log("Buzz");
        }
        else {
            console.log(i);
        }
    }
}


// Chunk Array
function chunkArray(arr, size){
    let result = [];
    let temp = [];
    let count = 0;

    for (let i = 0; i < arr.length; i++){
        if (count !== size){
            temp.push(arr[i]);
            count++;
        }
        
        if (count === size){
            result.push(temp);
            temp = [];
            count = 0;
        }
    }
    if (temp.length > 0){
        result.push(temp);
    }
    return result;
}


// Is Anagram?
let isAnagram = function(string1, string2){
    if (string1.length !== string2.length){
        return false;
    }

    let map = {};
    let strA = string1.toLowerCase();
    let strB = string2.toLowerCase();

    for (let i = 0; i < strA.length; i++){
        if (map[strA[i]]){
            map[strA[i]] += 1;
        }
        else {
            map[strA[i]] = 1;
        }
    }

    for (let i = 0; i < strB.length; i++){
        if (!map[strB[i]]){
            return false;
        }
        else {
            map[strB[i]] -= 1;
            if (map[strB[i]] < 0){
                return false;
            }
        }
    }
    return true;
}


// Capitalize First Letter of Each Words
function capFirst(str){
    if (str.length === 0){
        return null;
    }
    let result = "";
    result += str[0].toUpperCase();

    for (let i = 1; i < str.length; i++){
        if (str[i-1] === " "){
            result += str[i].toUpperCase();
        }
        else {
            result += str[i];
        }
    }
    return result;
}


// Fibonacci Recursive (This runtime is exponential 2^n)
function fibonacci(n){
    if (n === 0){
        return 0;
    }
    if (n === 1 || n === 2){
        return 1;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}


function memFib(n){
    let memo = {};

    var fiboTize = function (n, memo){
        if (memo[n]){
            return memo[n];
        } 
        if (n <= 1){
            return 1;
        }
        return memo[n] = fiboTize(n-1, memo) + fiboTize(n-2, memo);
    }
    return fiboTize(n, memo);
}


// Fibonacci Iterative (This runtime is linear)
function fibo(n){
    let a = 0;
    let b = 1;
    let c = 0;

    while (n > 0){
        c = a + b;
        a = b;
        b = c;
        n--;
    }
    return a;
}



// Implement a Queue
class Queue {
    constructor(){
        this.queue = [];
    }

    add(value){
        this.queue.unshift(value);
    }

    remove(){
        return this.queue.pop();
    }

    peek(){
        if (this.queue.length > 0){
            return this.queue[this.queue.length - 1];
        }
    }
}



// Implement a Linked List
class Node {
    constructor(value){
        this.data = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }

    insertFront(value){
        if (!this.head){
            this.head = new Node(value);
            return;
        }

        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }

    size(){
        if (!this.head){
            return 0;
        }
        let count = 1;
        let runner = this.head;

        while (runner.next){
            runner = runner.next;
            count++;
        }
        return count;
    }

    getFirst(){
        if (!this.head){
            return null;
        }
        return this.head;
    }

    removeFirst(){
        if (!this.head){
            return null;
        }
        else if (!this.head.next){
            return this.head = null;
        }

        return this.head = this.head.next;
    }

    removeLast(){
        if (!this.head){
            return null;
        }

        else if (!this.head.next){
            return this.head = null;
        }

        let runner = this.head;
        while (runner.next.next !== null){
            runner = runner.next;
        }
        runner.next = null;
    }

    getAt(idx){
        if (!this.head){
            return null;
        }
        let runner = this.head;
        let count = 0;

        while (runner){
            if (count === idx){
                return runner;
            }
            runner = runner.next;
            count++;
        }

        return "No index"
    }
}

let list = new LinkedList();
list.insertFront(5);
list.insertFront(4);
list.insertFront(3);
list.insertFront(2);
list.insertFront(10);

// Is Linked List Circular?
function isCircular(list){
    if (!this.head){
        return null;
    }

    let fast = this.head;
    let slow = this.head;

    while (fast.next.next){
        fast = fast.next.next;
        slow = slow.next;

        if (fast === slow){
            return true;
        }
    }
    return false;
}


// Nth From the Last Node
function nthFromLast(list, n){
    if (!list.head){
        return null;
    }

    let runner = list.head;
    let current = list.head;

    while (n > 0){
        if (runner.next === null){
            return null;
        }

        runner = runner.next;
        n--;
    }

    while (runner.next){
        runner = runner.next;
        current = current.next;
    }

    return current;
}


class TreeNode {
    constructor(value){
        this.data = value;
        this.left = null;
        this.right = null;
    }

    insert(value){
        if (value < this.data && this.left){
            // Then we are going to delegate the insertion of this new data to the left node
            this.left.insert(value);
        }
        else if (value < this.data){
            this.left = new TreeNode(value);
        }
        else if (value > this.data && this.right){
            this.right.insert(value);
        }
        else if (value > this.data){
            this.right = new TreeNode(value);
        }
    }

    contains(value){
        if (this.data === value){
            return this;
        }

        if (value > this.data && this.right){
            return this.right.contains(value);
        }
        else if (value < this.data && this.left){
            return this.left.contains(value);
        }
        return false;
    }
}



let array = ['andrew', 'bandrew', 'candrew', 'dandrew'];
console.log(array);
console.log(...array);