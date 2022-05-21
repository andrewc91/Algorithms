// Reverse an Array
var reverseArray = function(arr){
    if (arr.length <= 1){
        return arr;
    }
    let length = arr.length;
    let i;
    let end;

    for (i = 0; i < Math.floor(length/2); i++){
        end = length-1-i;
        swap(arr, i, end);
    }
    return arr;
}

function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}


// Do a Binary Search
var binarySearch = function(arr, K){
    if (arr.length === 0){
        return null;
    }
    let low = 0;
    let high = arr.length - 1;
    let mid;

    while (low <= high){
        mid = Math.floor((low + high)/2);
        if (K === arr[mid]){
            return true;
        }
        else if (K > arr[mid]){
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    }
    return false;
}

// Do a Binary Search Recursively
function rBinarySearch(arr, K){

    var binarySearch = function(arr, K, low, high){
        if (low > high){
            return false;
        }
        let mid = Math.floor((low + high)/2);

        if (arr[mid] === K){
            return true;
        }
        if (K > arr[mid]){
            return binarySearch(arr, K, mid + 1, high);
        }
        if (K < arr[mid]){
            return binarySearch(arr, K, low, mid - 1);
        }
    }

    return binarySearch(arr, K, 0, arr.length - 1);
}



// Max SubArray Sum
let maxSubArraySum = function(arr, num){
    let tempSum = 0;
    let maxSum = 0;

    if (arr.length < num){
        return null;
    }

    for (let i = 0; i < num; i++){
        tempSum += arr[i];
    }
    maxSum = tempSum;

    for (let i = num; i < arr.length; i++){
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(tempSum, maxSum);
    }
    
    return maxSum;
}


let reverseLinkedListRecursive = function(head){
    if (head === null || head.next === null){
        return head;
    }

    let reversedHead = reverseLinkedListRecursive(head.next);      // reference to the head of reversed list so you can return it
    head.next.next = head;
    head.next = null;
    return reversedHead;
}