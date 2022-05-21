function LinkedList(){
  this.head = null
}

LinkedList.prototype.add = function(val){
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

LinkedList.prototype.copy = function() {
	var list = new LinkedList();
	var current = this.head;

	while (current) {
		list.add(current.value);
		current = current.next;
	}
	return list;
};

LinkedList.prototype.reverse = function(){
  if (!this.head || !this.head.next){
    return this.head;
  }
  var runner = this.head.next;
  var hold = this.head;
  var previous = null;

  while (runner){
    hold.next = previous;
    previous = hold;
    hold = runner;
    runner = runner.next;
  }
  hold.next = previous;
  this.head = hold;
}

function isPalindrome(list){
  if (!list.head){
    return null;
  }
  if (!list.head.next){
    return true;
  }

  // split the linked list in half

  let runner = list.head;
  let walker = list.head;
  while (runner){
    runner = runner.next.next;
    if (runner === null){
      var list2 = walker.next;
      break;
    }
    if (runner.next === null){
      var list2 = walker.next.next;
      break;
    }
    walker = walker.next;
  }
  walker.next = null;

  // reverse the first half the linked list

  let previous = null;
  let hold;
  runner = list.head;
  while (runner){
    hold = runner.next;
    runner.next = previous;
    previous = runner;
    runner = hold;
  }
  runner = previous;

  // iterate through both halves and see if they match

  while (runner){
    if (runner.value !== list2.value){
      return false;
    }
    runner = runner.next;
    list2 = list2.next;
  }
  return true;
}

var list = new LinkedList();
list.add(2)
list.add(2)
list.add(12)
list.add(8)
list.add(10)
list.add(8)
list.add(14)
list.add(2)
list.add(2)
