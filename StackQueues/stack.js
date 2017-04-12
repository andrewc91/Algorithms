function Stack(){
  this.stack = [];
}

Stack.prototype.push = function(val){
  this.stack.push(val);
  return stack;
}

Stack.prototype.pop = function(){
  this.stack.pop();
}

Stack.prototype.top = function(){
  if (!this.stack){
    return null;
  }
  return this.stack[this.stack.length-1]
}

Stack.prototype.contain = function(val){
  if (!this.stack){
    return null;
  }
  for (var i = 0; i < this.stack.length; i++){
    if (this.stack[i] == val){
      return true;
    }
  }
  return false;
}

Stack.prototype.isEmpty = function(){
  if (this.stack.length == 0){
    return true;
  }
  return false;
}

Stack.prototype.size = function(){
  if (!this.stack){
    return null;
  }
  return this.stack.length;
}

var stack = new Stack();
stack.push(1)
stack.push(2)
stack.push(3)
console.log(stack.size())
