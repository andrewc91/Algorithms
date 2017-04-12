function LinkedList()
{
  this.head = null;
}

LinkedList.prototype.isEmpty = function(){
  if (this.head == null){
    return true;
  }
  return false;
}


LinkedList.prototype.addFront = function(val)
{
  var node = {
    value: val,
    next: this.head
  }
  this.head = node;
}


LinkedList.prototype.removeFront = function(){
  if (!this.head){
    return null;
  }
  else {
    this.head = this.head.next;
  }
}

LinkedList.prototype.contains = function(val){
  var current = this.head;

  while(current){
    if (current.value == val){
      return true;
    }
    current = current.next;
  }
  return false;
}

LinkedList.prototype.front = function(){
  if (!this.head){
    return null;
  }
  return this.head.value;
}

LinkedList.prototype.length = function(){
  var current = this.head;
  var count = 0;

  if (!this.head){
    return null;
  }

  while (current){
    count += 1;
    current = current.next;
  }
  console.log(count);
}

LinkedList.prototype.max = function(){
  if (!this.head){
    return null;
  }
  var current = this.head;
  var max = this.head.value;

  while (current){
    if (current.value > max){
      max = current.value;
    }
    current = current.next;
  }
  return max;
}

LinkedList.prototype.min = function(){
  if (!this.head){
    return null;
  }
  var current = this.head;
  var min = this.head.value;

  while (current){
    if (current.value < min){
      min = current.value;
    }
    current = current.next;
  }
  return min;
}

LinkedList.prototype.average = function(){
  if (!this.head){
    return null;
  }
  var current = this.head;
  var sum = 0;
  var count = 0;

  while (current){
    sum = sum + current.value;
    count++;
    current = current.next;
  }
  var average = sum / count;
  return average;
}

LinkedList.prototype.addBack = function(val){
  var current = this.head;
  var node = {
    value: val,
    next: null
  };

  if (!this.head){
    this.head = node;
  }

  while (current){
    if (current.next === null){
      current.next = node;
      break;
    }
    else {
      current = current.next;
    }
  }
}

LinkedList.prototype.back = function(){
  var current = this.head;
  while (current){
    if (current.next == null){
      return current.value;
    }
    current = current.next;
  }
}

LinkedList.prototype.removeBack = function(){
  var current = this.head;

  while (current){
    if (current.next.next == null){
      current.next = null;
      break;
    }
    current = current.next;
  }
}

LinkedList.prototype.minFront = function(){
  var min = this.head;
  var current = this.head;
  var temp;
  var tempNode;

  while (current){
    if ((current.next !== null) && (current.next.value < min.value)){
      min = current.next;
      tempNode = current;
    }

    current = current.next;
  }

  if (tempNode){
    tempNode.next = tempNode.next.next;
    temp = this.head;
    this.head = min;
    min.next = temp;
  }
  else {
    return min;
  }
}

LinkedList.prototype.maxBack = function(){
  var max = this.head;
  var current = this.head;
  var tempNode;

  while (current){
    if ((current.next != null) && (current.next.value > max.value)){
      max = current.next;
      tempNode = current;
    }
    if (current.next == null){
      break;
    }
    current = current.next;
  }
  if (tempNode){
    tempNode.next = tempNode.next.next;
    current.next = max;
    max.next = null;
  }
  else {
    this.head = this.head.next;
    current.next = max;
    max.next = null;
  }
}

LinkedList.prototype.prepend = function(val, before){
  var walker = this.head;
  var runner = this.head.next;
  var added = false;
  var temp;

  while (runner){
    if (this.head.value === before){
      var node = {
        value: val,
        next: null
      }
      temp = this.head;
      this.head = node;
      node.next = temp;
      added = true;
    }
    if (runner.value === before){
      var node = {
        value: val,
        next: null
      }
      walker.next = node;
      node.next = runner;
      added = true;
    }
    runner = runner.next;
    walker = walker.next;
  }
  if (added == false){
    var node = {
      value: val,
      next: null
    }
    walker.next = node;
  }
}

LinkedList.prototype.append = function(val, after){
  var walker = this.head;
  var runner = this.head.next;
  var added = false;
  var temp;

  if (this.head.value == after){
    var node = {
      value: val,
      next: null
    }
    this.head.next = node;
    node.next = runner;
    return;
  }
  while (runner){
    if (runner.value == after){
      var node = {
        value: val,
        next: null
      }
      temp = runner.next;
      runner.next = node;
      node.next = temp;
      added = true;
    }
    runner = runner.next;
    walker = walker.next;
  }
  if (added == false){
    var node = {
      value: val,
      next: null
    }
    walker.next = node;
  }
}

LinkedList.prototype.removeVal = function(val){
  var walker = this.head;
  var runner = this.head.next;

  if (this.head.value == val){
    this.head = runner;
    return;
  }
  while (runner){
    if (runner.value == val){
      walker.next = runner.next;
      return;
    }
    runner = runner.next;
    walker = walker.next;
  }
  return;
}

LinkedList.prototype.removeNegatives = function(){
  var walker = this.head;
  var runner = this.head.next;

  while (runner){
    if (this.head.value < 0){
      runner = runner.next;
      this.head = this.head.next;
      walker = this.head;
      continue;
    }

    if (runner.value < 0){
      runner = runner.next;
      walker.next = runner;
      continue;
    }

    runner = runner.next;
    walker = walker.next;
  }
}

LinkedList.prototype.secondLastValue = function(){
  var current = this.head;

  if (!current.next){
    return null;
  }
  if (!current.next.next){
    return this.head;
  }
  while (current){
    if (current.next.next == null){
      return current;
    }
    current = current.next;
  }
}

LinkedList.prototype.nthFromEnd = function(num){
  var current = this.head;
  var count = 0;

  while (current){
    if (count == num){
      return current.value;
    }
    count++;
    current = current.next;
  }
  if (count < num){
    return null;
  }
}

LinkedList.prototype.secondLargest = function(){
  var current = this.head;
  var max = 0
  var secondMax = 0

  while (current){
    if ((current.value > secondMax) && (current.value < max)){
      secondMax = current.value;
    }
    if (current.value > max){
      secondMax = max;
      max = current.value;
    }
    current = current.next;
  }
  return secondMax;
}

LinkedList.prototype.zipList = function(LL1, LL2){
  var current1 = LL1.head;
  var current2 = LL2.head;
  var temp = LL1.head;

  if (!current1.next){
    current1.next = current2;
    return LL1;
  }

  if (!current2.next){
    temp = current1.next;
    current1.next = current2;
    current2.next = temp;
    return LL1
  }

  while (current1 && current2){
    current1 = current1.next;
    temp.next = current2;
    temp = current2;
    current2 = current2.next;
    temp.next = current1;
    temp = current1;

    if (current1.next == null){
      current1.next = current2;
      break;
    }
  }
  return LL1;
}

LinkedList.prototype.reverse = function(){
  if (!this.head || !this.head.next){
    return this.head;
  }

  var previous = null;
  var runner = this.head;
  var hold;

  while (runner){
    hold = runner.next;
    runner.next = previous;
    previous = runner;
    runner = hold;
  }
  this.head = previous;
}

var list = new LinkedList();

list.addBack(9);
list.addBack(10);
list.addBack(2);
list.addBack(3);
list.addBack(1);
console.log(list);
console.log(list.nthFromEnd(3))
