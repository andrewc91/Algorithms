function SLQueue(){
  this.head = null;
  this.tail = null;
}

SLQueue.prototype.enqueue = function(val){
  var node = {
    value: val,
    next: null
  }

  if (!this.head){
    this.head = node;
  }
  else {
    this.tail.next = node;
  }
  this.tail = node;
}

SLQueue.prototype.dequeue = function(){
  if (!this.head){
    return null;
  }
  var removed = this.head.value;
  this.head = this.head.next;
  return removed;
}

SLQueue.prototype.front = function(){
  if (!this.head){
    return null;
  }
  return this.head;
}

SLQueue.prototype.contains = function(val){
  if (!this.head){
    return null;
  }
  var current = this.head;

  while (current){
    if (current.value == val){
      return true;
    }
    current = current.next;
  }
  return false;
}

SLQueue.prototype.isEmpty = function(){
  if (!this.head){
    return true;
  }
  return false;
}

SLQueue.prototype.size = function(){
  if (!this.head){
    return null;
  }
  var current = this.head;
  var count = 0;

  while (current){
    count++;
    current = current.next;
  }
  return count;
}



var queue = new SLQueue();
queue.enqueue(5)
queue.enqueue(3)
queue.enqueue(1)
queue.enqueue(2)
console.log(queue.size())
