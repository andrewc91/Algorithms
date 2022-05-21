class Node {
    constructor(value){
        this.val = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;        
    }

    addFront(val){
        if (!this.head){
            this.head = new Node(val);
            return;
        }
        let node = new Node(val);
        node.next = this.head;
        this.head = node;
    }

    addEnd(val) {
        if (!this.head) {
            this.head = new Node(val);
            return;
        }
        let current = this.head;

        while (current) {
            if (current.next === null) {
                current.next = new Node(val);
                return;
            } else {
                current = current.next;
            }
        }
    }

    isEmpty(){
        if (!this.head){
            return true;
        }
        return false;
    }

    contains(val) {
        if (!this.head) {
            return null;
        }
        let current = this.head;

        while (current) {
            if (current.value === val) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    removeFront(){
        if (!this.head){
            return null;
        }
        this.head = this.head.next;
    }

    removeEnd(){
        if (!this.head){
            return null;
        }
        let current = this.head;

        while (current){
            if (current.next.next === null){
                current.next = null;
                return;
            }
            current = current.next;
        }
    }

    removeVal(val){
        if (!this.head){
            return null;
        }
        if (this.head.value === val){
            this.head = this.head.next;
            return;
        }
        let current = this.head;

        while (current){
            if (current.next.value === val){
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    }

    getHead(){
        if (!this.head){
            return null;
        }
        return this.head;
    }

    getLength(){
        if (!this.head){
            return 0;
        }
        let current = this.head;
        let count = 0;

        while (current){
            count++;
            current = current.next;
        }
        return count;
    }

    // Get length recursively
    getLengthRecursive(){
        if (!this.head){
            return 0;
        }
        let recurseList = function(current){
            if (current === null){
                return 0;
            }
            return 1 + recurseList(current.next);
        }
        return recurseList(this.head);
    }

    reverseList(){
        if (!this.head || !this.head.next){
            return this.head;
        }
        let previous = null;
        let runner = this.head;
        let hold;

        while (runner){
            hold = current.next;
            runner.next = previous;
            previous = runner;
            runner = hold;
        }
        this.head = previous;
    }

    getEnd(){
        if (!this.head){
            return null;
        }
        let current = this.head;

        while (current){
            if (current.next === null){
                return current.value;
            }
            current = current.next;
        }
    }

    nthFromEnd(n){
        if (!this.head || n < 0){
            return null;
        }
        let current = this.head;
        let count = 0;

        while (current){
            current = current.next;
            count++;
        }
        if (n > count){
            return null;
        }

        current = this.head;
        count = count - n;

        while (count > 0){
            current = current.next;
            count--;
        }
        return current;
    }

    removeKthLast(k){
        if (!this.head){
            return null;
        }
        let current = this.head;
        let count = 0;

        while (current){
            current = current.next;
            count++;
        }
        if (k > count){
            return null;
        }

        current = this.head;
        count = count - k - 1;

        while (count > 0){
            current = current.next;
            count--;
        }
        current.next = current.next.next;
    }

    removeMiddleNode(){
        if (!this.head){
            return null;
        }
        let current = this.head;
        let count = 0;

        while (current){
            current = current.next;
            count++;
        }
        count = Math.floor(count/2) - 1;
        current = this.head;

        while (count > 0){
            current = current.next;
            count--;
        }
        current.next = current.next.next;
    }

    hasLoop(){
        if (!this.head || !this.head.next){
            return false;
        }
        let walker = this.head;
        let runner = this.head.next;

        while (runner){
            walker = walker.next;
            runner = runner.next.next;

            if (runner === walker){
                return true;
            }
        }
        return false;
    }
}

let list = new LinkedList();
list.addFront(10);
list.addFront(20);
list.addFront(30);
list.addFront(40);
list.removeFront();
list.addEnd(100);
console.log(list.head.next);
console.log(list.nthFromEnd(2));
