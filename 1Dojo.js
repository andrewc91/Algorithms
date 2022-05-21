// Print 1-255

function printNumbers(){
    for (var i = 1; i <= 255; i++){
        console.log(i);
    }
}


// Print odd numbers from 1-100

function printOdds(){
    for (var i = 1; i <= 100; i=i+2){
        console.log(i);
    }
}


// Print sum of all odd numbers from 1-100

function sumOdds(){
    var sum = 0;
    for (var i = 1; i <= 100; i=i+2){
        sum += i;
    }
    console.log(sum);
}


// Iterate through an array

function iterateArray(arr){
    for (var i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}


// Find the max in an array

function findMax(arr){
    if (arr.length = 0){
        return null;
    }

    let max = arr[0];
    for (let i = 1; i < arr.length; i++){
        if (arr[i] > max){
            max = arr[i];
        }
    }
    console.log(max);
}


// Find the average in an array

function findAverage(arr){
    let answer = 0;
    for (let i = 0; i < arr.length; i++){
        answer += arr[i];
    }
    let answer = answer / arr.length;
    console.log(answer);
}


// Build an array of odd numbers from 1-100

function arrayOdds(){
    let result = [];
    for (let i = 1; i <= 100; i=i+2){
        result.push(i);
    }
    console.log(result);
}


// Takes an array and returns how many elements are greater than Y

function greaterY(arr, y){
    let count = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > y){
            count++;
        }
    }
    console.log(count);
}


// Square each value in the array

function squareArray(arr){
    for (let i = 0; i < arr.length; i++){
        arr[i] = arr[i] * arr[i];
    }
    console.log(arr);
}


// Replace any negative numbers in array with 0

function replaceNegatives(arr){
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < 0){
            arr[i] = 0;
        }
    }
    console.log(arr);
}


// Find the min, max, and average of an array

function minMaxAvg(arr){
    if (arr.length < 1){
        return null;
    }

    let min = arr[0];
    let max = arr[0];
    let sum = arr[0];

    for (let i = 1; i < arr.length; i++){
        if (arr[i] > max){
            max = arr[i];
        }
        if (arr[i] < min){
            min = arr[i];
        }
        sum += arr[i];
    }
    let avg = sum / arr.length;
    console.log([min, max, avg]);
}


// Shift each element in the array by one to the left (replace last with 0)

function shiftArray(arr){
    for (let i = 1; i < arr.length; i++){
        arr[i-1] = arr[i];
    }
    arr[arr.length-1] = 0;
    return arr;
}

// Replace any negative number in array and change it to "Dojo"

function toString(arr){
    for (var i = 0; i < arr.length; i++){
        if (arr[i] < 0){
            arr[i] = "Dojo";
        }
    }
    console.log(arr);
}


// Create an array and fill it with 10 random values between 1-100

function randomArray(){
    let result = [];
    for (let i = 0; i < 10; i++){
        result.push(Math.floor(Math.random() * 100) + 1);
    }
    console.log(result);
}


// Swap the first and last number in the array

function swapNumbers(arr){
    let temp;
    temp = arr[0];
    arr[0] = arr[arr.length-1];
    arr[arr.length-1] = temp;
    console.log(arr);
}


// Reverse an array
function reverseArray(arr) {
    if (!arr || arr.length < 1) {
        return null;
    }
    if (arr.length === 1) {
        return arr[0];
    }
    let i;
    let length = arr.length;

    for (i = 0; i < Math.floor(length / 2); i++) {
        let temp = arr[i];
        arr[i] = arr[length - 1 - i];
        arr[length - 1 - i] = temp;
    }
    return arr;
}


// Insert a new number Y at index X in an array

function insertXY(arr, num, idx){
    var temp;
    arr.push(num);
    for (var i = arr.length-1; i > idx; i--){
        temp = arr[i];
        arr[i] = arr[i-1];
        arr[i-1] = temp;
    }
    console.log(arr);
}


// Remove any negative numbers in an array

function removeNegatives(arr){
    var count = 0;
    
    for (var i = 0; i < arr.length; i++){
        if (arr[i] < 0){
            count++;
        }
        else {
            arr[i - count] = arr[i];
        }
    }
    arr.length = arr.length - count;
    console.log(arr);
}



// SORTS

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
    let newMin;

    for (let i = 0; i < length - 1; i++) {
        min = i;
        for (let j = i + 1; j < length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
                newMin = true;
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


// Binary Search (log n); (Iteratively)

function binarySearchIterate(arr, target){
    let low = 0,
    high = arr.length-1,
    mid = 0;
  
    while (low <= high){
      mid = Math.floor((low + high)/2);
        if (arr[mid] === target){
          return true;
        }
        else if (target > arr[mid]){
          low = mid + 1;
        }
        else {
          high = mid - 1;
        }
    }
    return false;
}


// Binary Search (log n); (Recursively)

function binarySearchRecursive(arr, target){

    var binarySearch = function(arr, target, start, end){
        if (start > end){
            return false;
        }
        let mid = Math.floor((start + end)/2);
        
        if (target === arr[mid]){
            return arr[mid];
        }
        if (target < arr[mid]){
            end = mid - 1;
            return binarySearch(arr, target, start, end);
        }
        if (target > arr[mid]){
            start = mid + 1;
            return binarySearch(arr, target, start, end);
        }
    }
    return binarySearch(arr, target, 0, arr.length-1);
}
