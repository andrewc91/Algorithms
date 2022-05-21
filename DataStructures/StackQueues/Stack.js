class Stack {
    constructor(){
        this.stack = [];
    }

    push(val){
        this.stack.push(val);
        return stack;
    }

    pop(){
        if (this.stack.length > 0){
            this.stack.pop();
        }
        return null;
    }

    peek(){
        if (!this.stack.length < 1){
            return null;
        }
        return this.stack[this.stack.length-1];
    }

    isEmpty(){
        if (this.stack.length === 0){
            return true;
        }
        return false;
    }

    contain(val){
        if (this.stack.length === 0){
            return null;
        }
        for (let i = 0; i < this.stack.length; i++){
            if (this.stack[i] === val){
                return true;
            }
        }
        return false;
    }

    getSize(){
        return this.stack.length;
    }
}