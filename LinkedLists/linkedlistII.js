function LinkedList(){
  this.head = null
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

LinkedList.prototype.KthNode = function(number){
  var counter = this.head;
  var count = 0;

  while (counter){
    count++;
    counter = counter.next;
  }

  if (number > count){
    return null;
  }

  var runner = this.head;
  count = count - number;

  while (count){
    runner = runner.next;
    count--;
  }

  return runner.value;
}

LinkedList.prototype.makeLoop = function(){
  var current = this.head;
  var previous = this.head.next.next
  while (current){
    if (current.next.next == null){
      break;
    }
      current = current.next;
  }
  current.next = previous;
}

LinkedList.prototype.hasLoop = function(){
  if (!this.head || !this.head.next){
    return false;
  }

  var walker = this.head;
  var runner = this.head.next;

  while (runner){
    walker = walker.next;
    runner = runner.next.next;

    if (runner == walker){
      return true;
    }
  }
  return false;
}

LinkedList.prototype.loopStart = function(){
  if (!this.head || !this.head.next){
    return false;
  }

  var walker = this.head;
  var runner = this.head.next;

  while (runner){
    walker = walker.next;
    runner = runner.next.next;

    if (runner == walker){
      return runner.value;
    }
  }
  return null;
}

LinkedList.prototype.breakLoop = function(){
  var walker = this.head;
  var runner = this.head.next;
  var hold;

  while (runner){
    walker = walker.next;
    runner = runner.next.next;

    if (walker == runner){
      hold = runner;
      break;
    }
  }
  while (runner.next != hold){
    runner = runner.next;
  }
  runner.next = null;
  if (!hold){
    return null;
  }
}

var list = new LinkedList();
list.addBack(3)
list.addBack(2)
list.addBack(7)
list.addBack(10)
list.addBack(14)
list.addBack(120)
