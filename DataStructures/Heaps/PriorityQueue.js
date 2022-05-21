class Node {
    constructor(val, priority){
        this.value = val;
        this.priority = priority
    }
}

class PriorityQueue {
    constructor(){
        this.queue = [];
    }

    enqueue(val, priority){
        let node = new Node(val, priority);
        let added = false;

        for (let i = 0; i < this.queue.length; i++){
            if (node.priority < this.queue[i].priority){
                this.queue.splice(i, 0, node);
                added = true;
                break;
            }
        }
        if (added === false){
            this.queue.push(node);
        }
    }

    dequeue(){
        if (this.queue.length === 0){
            return null;
        }
        return this.queue.shift();
    }

    printData(){
        if (this.queue.length === 0) {
            return null;
        }

        for (let i = 0; i < this.queue.length; i++) {
            console.log(`${this.queue[i].data} - ${this.queue[i].priority}`);
        }
    }

    
}

let pq = new PriorityQueue();
