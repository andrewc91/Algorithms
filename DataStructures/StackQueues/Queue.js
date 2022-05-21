class Node {
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    enqueue(val){
        let node = new Node(val);
        if (!this.head){
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
    }

    dequeue(){
        if (!this.head){
            return null;
        }
        let node = this.head;
        if (this.head === this.tail){
            this.tail = null;
        }
        this.head = this.head.next;
        return node.value;
    }

    contains(val){
        if (!this.head){
            return null;
        }
        let current = this.head;

        while (current){
            if (current.value === val){
                return true;
            }
            current = current.next;
        }
        return false;
    }

    isEmpty(){
        if (!this.head){
            return true;
        }
        return false;
    }

    
}

let queue = new Queue();
queue.enqueue(15)
queue.enqueue(20);
queue.enqueue(35);
queue.enqueue(50);
queue.dequeue();
console.log(queue);