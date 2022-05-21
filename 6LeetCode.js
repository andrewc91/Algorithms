// #1 Two Sums
function twoSum(arr, number){
  for (var i = 0; i < arr.length - 1; i++){
    for (var j = 1; j < arr.length; j++){
      if (arr[i] + arr[j] == number){
        return [arr[i], arr[j]];
      }
    }
  }
  return false;
}

// #1 Two Sums (Optimized)
function twoSum2(arr, number){
  var map = {};

  for (var i = 0; i < arr.length; i++){

    if (map[number - arr[i]] >= 0){
      return [map[number - arr[i]], i];
    }
    else {
      map[arr[i]] = i;
    }
  }
  return false;
}


// #2 Add Two Numbers
function addTwoNumbers(list1, list2){
  let r1 = list1;
  let r2 = list2;
  let result = new Node(0); // dummy node
  let runner = result;
  let sum = 0;

  while (r1 && r2){
    sum /= Math.trunc(sum/10);
    let x = (r1 !== null) ? r1.val : 0;
    let y = (r2 !== null) ? r2.val : 0;
    sum = sum + x + y;
    runner.next = new Node(sum%10);
    runner = runner.next;

    if (r1 != null){r1 = r1.next;}
    if (r2 != null){r2 = r2.next;}
  }
  if (Math.trunc(sum/10) === 1){
    runner.next = new Node(1);
  }
  return result.next;
}



// #3 Longest Substring without repeating characters
function longestSubstringWithoutRepeat(str){
  if (str.length === 0){
    return 0;
  }
  if (str.length === 1){
    return 1;
  }

  let map = new Map();
  let start = 0;
  let count = 0;
  let max = 0;
  let length = str.length;

  for (let i = 0; i < length; i++){
    if (map.has(str[i]) && map.get(str[i]) >= start){
      start = map.get(str[i]) + 1;
      count = 1;
    }
    else {
      count++;
    }
    map.set(str[i], i);
    max = Math.max(max, count);
  }

  return max;
}


// #7 Reverse Integer
function reverseInteger(num) {
  let result = 0;

  while (num) {
    let temp = num % 10;
    result = result * 10 + temp;
    num = (num - temp) / 10;
  }
  return result;
}


// #9 Palindrome Number
function palindromeNumber1(num){
  num = num.toString();

  for (var i = 0; i < Math.floor(num.length / 2); i++){
    if (num[i] !== num[num.length - 1 - i]){
      return false;
    }
  }
  return true;
}

// #9 Palindrome Number (better)
function palinDromeNumber2(x){
  var num = x;
  var res = 0;

  while (num > 0){
    res = res * 10 + num % 10;
    num = Math.floor(num / 10);
  }
  if (x === res){
    return true;
  }
  return false;
}


// #14 Longest Common Prefix
function longestCommonPrefix(strings){
  if (strings.length === 0){
    return "";
  }
  if (strings.length === 1){
    return strings[0];
  }

  var prefix = strings[0];
  console.log(prefix);
  for (var i = 1; i < strings.length; i++){
    while (strings[i].indexOf(prefix) !== 0){
      prefix = prefix.substring(0, prefix.length -1);
      console.log(prefix);
      if (prefix.length === 0){
        return "";
      }
    }
  }
  return prefix;
}

// #14 Longest Common Prefix (Better)
function longestCommonPrefixRedux(strings){
  if (!strings.length){
    return "";
  }

  let answer = "";
  const word = strings[0].split('');

  for (let i = 0; i < word.length; i++){
    let count = 0;
    for (let j = 0; j < strings.length; j++){
      if (word[i] === strings[j][i]){
        count++;
      }
    }

    if (count === strings.length){
      answer += word[i];
    }
    else {
      return answer;
    }
  }
  return answer;
}


// #19 Remove Nth Node From End of List
function removeNthEnd(head, n){
  if (!head){
    return null;
  }

  let node = new Node(0);
  node.next = head;
  let current = node;
  let runner = head;

  while (n > 0){
    runner = runner.next;
    n--;
  }

  while (runner){
    runner = runner.next;
    current = current.next;
  }

  if (current.next === null){
    current.next = null;
  }
  else {
    current.next = current.next.next;
  }
  return node.next;
}

// #20 Valid Parentheses
function validParens(s){
  if (s.length < 2){
    return false;
  }
  let stack = [];
  let length = s.length;

  for (let i = 0; i < length; i++){
    if (s[i] === '('){
      stack.push(')')
    }
    else if (s[i] === '{'){
      stack.push('}')
    }
    else if (s[i] === '['){
      stack.push(']')
    }
    else if (stack.length === 0 || s[i] !== stack.pop()){
      return false;
    }
  }

  if (stack.length !== 0){
    return false;
  }
  return true;
}


// #21 Merge Two Sorted Lists
function mergeTwoLists(list1, list2){
  let node = new Node(0);
  let current = node;

  while (list1 !== null && list2 !== null){
    if (list1.val <= list2.val){
      current.next = list1;
      list1 = list1.next;
    }
    else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  if (list1 !== null){
    current.next = list1;
  }
  if (list2 !== null){
    current.next = list2;
  }
  return node.next;
}

// #21 Merge Two Sorted Lists (Recursively)
function rMergeTwoLists(list1, list2){
  if (list1 === null){
    return list2;
  }
  if (list2 === null){
    return list1;
  }

  if (list1.val < list2.val){
    list1.next = rMergeTwoLists(list1.next, list2);
    return list1;
  }
  else {
    list2.next = rMergeTwoLists(list2.next, list1);
    return list2;
  }
}


// #22 Generate Parenthesis
function generateParenthesis(n){
  let result = [];
  let total = n*2;

  var generateParens = function(result, str, open, close){
    if (str.length === total){
      result.push(str);
    }
    else {
      if (open < n){
        generateParens(result, str + "(", open + 1, close);
      }
      if (close < open){
        generateParens(result, str + ")", open, close + 1);
      }
    }
  }
  generateParens(result, "", 0, 0);
  return result;
}


// #24 Swap Nodes in Pairs
function swapPairs(head){
  if (!head || !head.next){
    return null;
  }

  let dummy = new Node(0);
  let current = dummy;
  dummy.next = head;

  while (current.next && current.next.next){
    let first = current.next;
    let second = current.next.next;
    first.next = second.next;
    second.next = first;
    current.next = second;
    current = first;
  }
  return dummy.next;
}


// #26 Remove Duplicates from Sorted Array
function removeDuplicates(arr){
  if (!arr || arr.length === 0){
    return null;
  }
  let length = arr.length;
  let i = 0;

  for (let j = 1; j < length; j++){
    if (arr[i] !== arr[j]){
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}


// #27 Remove Element
function removeElement(arr, val){
  if (!arr || arr.length < 1){
    return null;
  }
  let i = 0;
  let back = arr.length;

  while (i < back){
    if (arr[i] === val){
      arr[i] = arr[back-1];
      back--;
    }
    else {
      i++;
    }
  }
  return i;
}


// #28 Implement strStr()
function strStr(haystack, needle){
  if (needle.length === 0){
    return 0;
  }
  let haylength = haystack.length;
  let needlelength = needle.length;
  let count = 0;
  if (needlelength > haylength){
    return -1;
  }

  for (let i = 0; i < haylength; i++){
      for (let j = 1; j < needlelength; j++){
        if (haystack[i + j] !== needle[j]){
          count = 0;
          break;
        }
        else {
          count++;
          if (count === needlelength){
            return i;
          }
        }
      }
  }
  return -1;
}


// #32 Search in Rotated Array
function rotatedArray(arr, target){
  let start = 0;
  let end = arr.length - 1;

  while (start <= end){
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target){
      return mid;
    }

    if (arr[start] <= arr[mid]){
      if (target >= arr[start] && target < arr[mid]){
        end = mid - 1;
      }
      else {
        start = mid + 1;
      }
    }
    else {
      if (target > arr[mid] && target <= arr[end]){
        start = mid + 1;
      }
      else { 
        end = mid - 1;
      }
    }
  }
  return -1;
}

// #34 Find First and Last Position of Element of Sorted Array
function searchRange(arr, target){
  let start = 0;
  let end = arr.length - 1;
  let result = [-1, -1];
  var mid;

  while (start < end){
    mid = Math.floor((start + end) / 2);
    if (target > arr[mid]){
      start = mid + 1;
    }
    else {
      end = mid;
    }
  }
  if (arr[start] !== target){
    return result;
  }
  else {
    result[0] = start;
  }
  end = arr.length - 1;

  while (start < end){
    mid = Math.floor((start + end) / 2 + 1);
    if (target >= arr[mid]){
      start = mid;
    }
    else {
      end = mid - 1;
    }
  }
  result[1] = end;
  return result;
}


// #35 Search Insert Position
function searchInsert(arr, target){
  if (!arr || arr.length === 0){
    return null;
  }
  const length = arr.length;

  for (let i = 0; i < length; i++){
    if (target <= arr[i]){
      return i;
    }
  }
  return length;
}


// #53 Maximum Subarray
function subMaxArray(arr){
  if (!arr || arr.length === 0){
    return 0;
  }
  let max = arr[0];
  let currentSum = arr[0];

  for (let i = 0; i < arr.length; i++){
    currentSum = currentSum > 0 ? currentSum + arr[i] : arr[i];
    if (currentSum > max){
      max = currentSum;
    }
  }
  return max;
}


// #58 Length of Last Word
function lengthOfLastWord(str){
  if (!str || str.length === 0){
    return 0;
  }
  let count = 0;
  let length = str.length;

  for (let i = length-1; i >= 0; i--){
    if (str[i] === " " && count === 0){
      continue;
    }
    else if (str[i] === " "){
      break;
    }
    else {
      count++;
    }
  }
  return count;
}


// #61 Rotate List
function rotateList(head, k){
  if (!head || !head.next){
    return head;
  }
  let current = head;
  let previous = null;
  let count = 0;

  while (current){
    count++;
    current = current.next;
  }
  k = k % count;
  current = head;

  while (current && k > 0){
    if (current.next){
      previous = current;
      current = current.next;
      continue;
    }
    current.next = head;
    head = current;
    previous.next = null;
    k--;
  }
  return head;
}


// #70 Climbing Stairs
function climbingStairs(n){
  if (n <= 0){
    return 0;
  }
  if (n === 1){
    return 1;
  }
  if (n === 2){
    return 2;
  }

  let total = 0;
  let oneBefore = 2;
  let twoBefore = 1;

  for (let i = 2; i < n; i++){
    total = oneBefore + twoBefore;
    twoBefore = oneBefore;
    oneBefore = total;
  }
  return total;
}


// #75 Sort Colors
// One Pass
function sortColorOne(arr){
  if (!arr || arr.length === 0){
    return null;
  }
  let p1 = 0;
  let p2 = arr.length - 1;
  let idx = 0;

  while (idx <= p2){
    if (arr[idx] === 0){
      arr[idx] = arr[p1];
      arr[p1] = 0;
      p1++;
    }
    if (arr[idx] === 2){
      arr[idx] = arr[p2];
      arr[p2] = 2;
      p2--;
      idx--;
    }
    idx++;
  }
}

// Two Pass
function sortColorTwo(arr){
  if (!arr || arr.length === 0){
    return null;
  }
  let count0 = 0;
  let count1 = 0;
  let count2 = 0;
  let length = arr.length;

  for (var i = 0; i < length; i++){
    if (arr[i] === 0){count0++}
    if (arr[i] === 1){count1++}
    if (arr[i] === 2){count2++}
  }

  for (i = 0; i < length; i++){
    if (i < count0){
      arr[i] = 0;
    }
    else if (i < count0 + count1){
      arr[i] = 1;
    }
    else {
      arr[i] = 2;
    }
  }
  return arr;
}


// #83 Remove Duplicates from Sorted List
function removeDuplicatesSorted(head){
  if (!head){
    return null;
  }
  let current = head;
  while (current.next){
    if (current.val === current.next.val){
      current.next = current.next.next;
    }
    else {
      current = current.next;
    }
  }
  return head;
}

// #83 Follow-up: Remove Duplicates from Non-Sorted List
function removeDuplicatesNonSorted(head){
  if (!head || head.next === null){
    return head;
  }
  let node = new Node(0);
  node.next = head;
  let previous = node;
  let current = head;
  let map = {};

  while (current){
    if (map[current.val] === 1){
      current = current.next;
      previous.next = current;
    }
    else {
      map[current.val] = 1;
      current = current.next;
      previous = previous.next;
    }
  }
  return node.next;
}


// #98 Validate Binary Search Tree
// Iteratively
function isValidIterate(root){
  if (root === null){
    return true;
  }
  let stack = [];
  let pre = null;

  while (root !== null || stack.length === 0){
    while (root !== null){
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    if (pre !== null && root.val <= pre.val){
      return false;
    }
    pre = root;
    root = root.right;
  }
  return true;
}

// #98 Validate Binary Search Tree
// Recursively
function isValidRecurse(node){
  var check = function(node, min, max){
    if (max !== null && node.data > max){
      return false;
    }
    if (min !== null && node.data < min){
      return false;
    }
    if (node.left && !check(node.left, min, node.data)){
      return false;
    }
    if (node.right && !check(node.right, node.data, max)){
      return false;
    }
    return true;
  }
  return check(node, null, null);
}


// #111 Minimum Depth of Binary Tree
function minDepth(root){
  if (root === null){
    return 0;
  }
  let leftDepth = minDepth(root.left);
  let rightDepth = minDepth(root.right);

  return (leftDepth === 0 || rightDepth === 0) ? leftDepth + rightDepth + 1 : Math.min(leftDepth, rightDepth) + 1;
}


// #112 Binary Tree Has Path to Sum
var hasPathSum = function (root, sum) {
  if (root === null) {
    return false;
  }
  if (root.left === null && root.right === null && sum === root.val) {
    return true;
  }
  return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
};


// #121 Best Time to Buy and Sell Stock (Buy Once)
function buySellStocksI(arr){
  let min = Number.MAX_VALUE;
  let profit = 0;

  for (let i = 0; i < arr.length; i++){
    if (arr[i] < min){
      min = arr[i];
    }
    else if (arr[i] - min > profit){
      profit = arr[i] - min;
    }
  }
  return profit;
}


// #122 Best Time to Buy an Sell Stock (Buy Multiple)
function buySellStocksII(arr){
  let profit = 0;

  for (let i = 1; i < arr.length; i++){
    if (arr[i] > arr[i-1]){
      profit += arr[i] - arr[i-1];
    }
  }
  return profit;
}



// #141 Linked List Cycle I
function hasCycle(head){
  if (!head || !head.next){
    return false;
  }
  let runner = head;
  let walker = head;

  while (runner.next && runner.next.next){
    runner = runner.next.next;
    walker = walker.next;

    if (runner === walker){
      return true;
    }
  }
  return false;
}


// #142 Linked List Cycle II (Cycle start)
function detectLoop(head){
  if (!head || !head.next){
    return null;
  }
  let runner = head;
  let walker = head;

  while (runner.next && runner.next.next){
    runner = runner.next.next;
    walker = walker.next;

    if (runner === walker){
      while (head !== runner){
        head = head.next;
        runner = runner.next;
      }
      return head;
    }
  }
  return null;
}


// #160 Linked List Intersection
function findIntersection(headA, headB){
  if (!headA || !headB){
    return null;
  }

  let lenA = getLength(headA);
  let lenB = getLength(headB);

  while (lenA > lenB){
    headA = headA.next;
    lenA--;
  }

  while (lenB > lenA){
    headB = headB.next;
    lenB--;
  }

  while (headA !== headB){
    headA = headA.next;
    headB = headB.next;
  }

  return headA;
}

function getLength(node){
  let length = 0;
  while (node){
    node = node.next;
    length++;
  }
  return length;
}


// #203 Remove List Elements
function removeElements(head, val){
  if (!head) {
    return null;
  }
  let dummy = new Node(0);
  dummy.next = head;
  let current = head;
  let previous = dummy;
  head = dummy;

  while (current) {
    if (current.val === val) {
      current = current.next;
      previous.next = current;
    }
    else {
      current = current.next;
      previous = previous.next;
    }
  }
  return head.next;
}


// #206 Reverse Linked List
function reverseList(head){
  if (!head){
    return null;
  }
  if (!head.next){
    return head;
  }
  let prev = null;
  let current = head;
  let hold = current.next;

  while (hold) {
    current.next = prev;
    prev = current;
    current = hold;
    hold = current.next;
  }
  current.next = prev;
  return current;
}


// #225 Implement Stack using Queues
class Stack {
  constructor(){
    this.queue1 = [];
    this.queue2 = [];
  }

  push(value){
    if (this.queue1.length === 0){
      return this.queue1.push(value);
    }
    this.queue2.push(value);

    while (this.queue1.length !== 0){
      this.queue2.push(this.queue1.pop());
    }
    while (this.queue2.length !== 0){
      this.queue1.push(this.queue2.pop());
    }
  }

  pop(){
    if (this.queue1.length === 0){
      return null;
    }
    return this.queue1.pop();
  }

  peek(){
    if (this.queue1.length === 0){
      return null;
    }
    return this.queue1[this.queue1.length-1];
  }

  isEmpty(){
    if (this.queue1.length === 0){
      return true;
    }
    return false;
  }
}


// #226 Invert Binary Tree
var invertTree = function(root){
  if (root === null){
    return null;
  }
  let left = invertTree(root.left);
  let right = invertTree(root.right);
  root.left = right;
  root.right = left;
  return root;
}