// No implied ordering between siblings
// MaxHeaps, parent must always be larger than children
// MinHeaps, parent must alwasy be smaller than children

function Heap(){
  this.heap = [];
}

Heap.prototype.add = function(val){
  this.heap.push(val);
  this.bubbleUp(this.heap.length-1)
  return this;
}

Heap.prototype.bubbleUp = function(idx) {
  while (idx > 0) {
    var parent = Math.floor((idx-1/2));

    if (this.heap[parent] > this.heap[idx]) {
      var temp = this.heap[parent];
      this.heap[parent] = this.heap[idx];
      this.heap[idx] = temp;
    }

    idx = parent;
  }
};

Heap.prototype.remove = function(idx){
  var temp;

  temp = this.heap[idx];
  this.heap[idx] = this.heap[this.heap.length-1];
  this.heap[this.heap.length-1] = temp;

  while (idx){
    var rightChild = (idx + 1) * 2;
    var leftChild = rightChild - 1;

    if (this.heap[leftChild] == null){
      break;
    }

    if (this.heap[leftChild] && this.heap[rightChild]){
      if (this.heap[leftChild] < this.heap[rightChild]){
        this.swap(idx, leftChild);
        idx = leftChild;
        continue;
      }
      if (this.heap[leftChild] > this.heap[rightChild]){
        this.swap(idx, rightChild);
        idx = rightChild;
        continue;
      }
    }
    if (!this.heap[rightChild]){
      if (this.heap[leftChild] < this.heap[idx]){
        this.swap(idx, leftChild);
        idx = leftChild;
      }
    }
  }
  this.heap.pop();
}

Heap.prototype.swap = function (idx1, idx2) {
  var temp = this.heap[idx1];
  this.heap[idx1] = this.heap[idx2];
  this.heap[idx2] = temp;
  return;
};


var heap = new Heap();
heap.add(5);
heap.add(10);
heap.add(6);
heap.add(20);
heap.add(1);
heap.add(12);
heap.add(2);
heap.add(14);

heap.remove(3)
