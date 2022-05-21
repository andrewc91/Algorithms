// Return an array of the 2 numbers sorted
function twoNumberSum(arr, target) {
    let result = [];
    let map = {};
    let q;
    map[arr[0]] = arr[0];

    for (let i = 1; i < arr.length; i++) {
        q = target - arr[i];
        if (map[q]) {
            if (map[q] >= arr[i]) {
                result = [arr[i], map[q]];
                return result;
            } else {
                result = [map[q], arr[i]];
                return result;
            }
        }
        map[arr[i]] = arr[i];
    }
    return result;
}

// Rotate array by n-number of times
// O(n) time O(n) space
var rotateArray = function (arr, k) {
    if (arr.length < 2) {
        return arr;
    }
    const ans = arr.slice();
    for (let i = 0; i < arr.length; i++) {
        ans[(i + k) % arr.length] = arr[i];
    }
    return ans;
};

// O(n) time O(1) space
var rotateArrayReverse = function(arr, k){
    k = k % arr.length;

    reverseArray(arr, 0, arr.length-1);
    reverseArray(arr, 0, k - 1);
    reverseArray(arr, k, arr.length-1);
}

function reverseArray(arr, start, end){
    while (start < end){
        var temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

function findClosestValueInBst(tree, target) {
    if (!tree) {
        return null;
    }
    let closest = Infinity;
    let diff;
    let currentNode = tree;
    let answer;

    while (currentNode) {
        diff = Math.abs(currentNode.value - target);
        if (diff < closest) {
            closest = diff;
            answer = currentNode.value;
        }

        if (target > currentNode.value && currentNode.right) {
            currentNode = currentNode.right;
        } else if (target < currentNode.value && currentNode.left) {
            currentNode = currentNode.left;
        } else {
            break;
        }
    }
    return answer;
}

function invertBinaryTree(tree){
    const queue = [tree];
    while (queue.length > 0){
        let current = queue.shift();
        if (current === null){
            continue;
        }
        swapLeftRight(current);
        queue.push(current.left);
        queue.push(current.right);
    }
}

function swapLeftRight(node){
    let left = node.left;
    node.left = node.right;
    node.right = left;
}



let toot = {
    100: 50,
    "Name": "Andrew",
    "Age": 27,
    "Gender": "Male",
    50: 100
}

for (key in toot) {
    console.log(key);
}

let par = [1,2,3,4,5,6];
for (element of par){
    console.log(element);
}

par.forEach((element) =>{
    console.log(element);
})