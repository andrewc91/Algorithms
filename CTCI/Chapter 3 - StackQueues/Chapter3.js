// 3.2
class MinStack {
    constructor(){
        this.stack = [];
        this.minStack = [];
        this.min = Number.MAX_VALUE;
    }

    get(){
        return {
            stack,
            minStack
        };
    }

    push(value){
        if (value <= this.min){
            this.stack.push(value);
            this.minStack.push(value);
            this.min = value;
            return;
        }
        this.stack.push(value);
    }

    pop(){
        if (this.stack.length === 0){
            return null;
        }
        let value = this.stack.pop();
        if (value === this.minStack[this.minStack.length-1]){
            this.minStack.pop();
        }
        return value;
    }

    getMin(){
        if (this.minStack.length === 0){
            return this.min;
        }
        else {
            return this.minStack[this.minStack.length-1];
        }
    }
}


// 3.3
class StackPlate {
    constructor(size){
        this.stack = [];
        this.size = size;
    }

    push(val){
        if (this.stack.length === 0 || this.stack[this.stack.length-1].length === this.size){
            const newStack = [];
            newStack.push(val);
            this.stack.push(newStack);
        }
        else {
            this.stack[this.stack.length-1].push(val);
        }
    }

    pop(){
        if (this.stack.length === 0){
            return null;
        }

        if (this.stack[this.stack.length-1].length === 0){
            this.stack.pop();
            return this.stack[this.stack.length-1].pop();
        }
        return this.stack[this.stack.length-1].pop();
    }
}

let stack = new StackPlate(3);
stack.push(10);
stack.push(10);
stack.push(10);
stack.push(10);
stack.push(10);
stack.push(10);
stack.push(10);
stack.push(10);
stack.pop();

stack.pop();

stack.pop();

stack.pop();
stack.pop();
stack.pop();
stack.push(10);
stack.push(10);



// 3.4
class QueueStack {
    constructor(){
        var newStack = [];
        var oldStack = [];
    }

    enqueue(value){
        newStack.push(value);
    }

    dequeue(){
        if (oldStack.length > 0){
            return oldStack.pop();
        }
        else {
            shiftStack();
            return oldStack.pop();
        }
    }

    shiftStack(){
        if (oldStack.length === 0){
            while (newStack.length > 0){
                oldStack.push(newStack.pop());
            }
        }
    }

    get(){
        return {
            newStack,
            oldStack
        };
    }
}



// 3.5
function stackSort(stack) {
    const temp = [];
    while (stack.length !== 0) {
        let value = stack.pop();
        while (temp.length !== 0 && peek(temp) > value) {
            stack.push(temp.pop());
        }
        temp.push(value);
    }

    while (temp.length !== 0) {
        stack.push(temp.pop());
    }
    return stack;
}

function peek(stack){
    return stack[stack.length-1];
}

console.log(stackSort([8, 1, 4, 6, 2, 2, 10, 1]))