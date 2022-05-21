// implement a circular queue array
class CircularQueue {
  constructor(size){
    this.queue = [];
    this.size = size;
    this.front = -1;
    this.back = -1;
  }

  enqueue(val){
    if (this.isFull()){
      return;
    }
    else if (this.isEmpty()){
      this.front = 0;
      this.back = 0;
    }
    else {
      this.back = (this.back + 1) % this.size;
    }
    this.queue[this.back] = val;
  }

  dequeue(){
    if (this.isEmpty()){
      return;
    }
    else if (this.front === this.back){
      this.front = -1;
      this.back = -1;
    }
    else {
      this.front = (this.front + 1) % this.size;
    }
  }

  isEmpty(){
    if (this.front === -1 && this.back === -1){
      return true;
    }
    else {
      return false;
    }
  }

  isFull(){
    if ((this.back + 1) % this.size === this.front){
      return "Queue is full";
    }
  }
}

let cirqueue = new CircularQueue(10);
cirqueue.enqueue(15);



console.log(cirqueue);

