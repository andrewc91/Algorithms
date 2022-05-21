class LinkedList {
    constructor(){
        this.head = null;
    }

    add(value){
        let node = new Node(value);
        if (!this.head){
            this.head = node;
            return;
        }
        let current = this.head;
        while (current){
            if (current.next === null){
                current.next = node;
                return;
            }
            current = current.next;
        }
    }
}

class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

let list = new LinkedList();
let list2 = new LinkedList();
list.add(7);
list.add(1);
list.add(6);
list.add(6);
list.add(10);
list2.add(5);
list2.add(9);
list2.add(2);



// O(n) run time where N is the number of elements in the linked list
// Remove duplicates with a buffer
// 2.1
function removeDuplicates(list){
    if (!list.head){
        return null;
    }
    else if (!list.head.next){
        return list.head;
    }

    let map = {};
    let previous = list.head;
    let runner = list.head.next;
    map[previous.data] = 1;

    while (runner){
        if (map[runner.data] === 1){
            runner = runner.next;
            previous.next = runner;
            continue;
        }
        else {
            map[runner.data] = 1;
        }
        runner = runner.next;
        previous = previous.next;
    }
    return list;
}

// O(n^2) runtime
// Remove duplicates without a buffer
function removeDuplicates2(list){
    if (!list.head){
        return null;
    }
    let current = list.head;
    let runner = list.head;

    while (current){
        while (runner.next){
            if (runner.next.data === current.data){
                runner.next = runner.next.next;
                continue;
            }
            runner = runner.next;
        }
        current = current.next;
        runner = current;
    }
}


// 2.2
function returnKthEnd(list, k){
    if (!list.head){
        return null;
    }
    else if (k === 0){
        k = 1;
    }
    
    let current = list.head;
    let runner = list.head;
    let i;
    
    for (i = 0; i < k; i++){
        runner = runner.next;
        if (runner === null){
            return false;
        }
    }

    while (runner){
        current = current.next;
        runner = runner.next;
    }
    return current.data;
}



// 2.3
function deleteMiddleNode(node){
    if (node === null || node.next === null){
        return false;
    }
    let temp = node.next;
    node.data = temp.data;
    node.next = temp.next;
    return true;
}



// 2.4
function partitionList(list, val){
    let beforeVal = new LinkedList();
    let afterVal = new LinkedList();
    let current = list.head;

    while (current){
        if (current.data < val){
            beforeVal.add(current.data);
        }
        else {
            afterVal.add(current.data);
        }
        current = current.next;
    }

    current = beforeVal.head;
    while (current.next){
        current = current.next;
    }
    current.next = afterVal.head;
    return beforeVal;
}



// 2.5
function sumList(list1, list2){
    if (!list1 || !list2){
        return null;
    }

    let current = null;
    let result;
    let sum;
    let carry = 0;
    let r1 = list1.head; let r2 = list2.head;

    while (r1 !== null || r2 !== null){
        let x = (r1 !== null) ? r1.data : 0;
        let y = (r2 !== null) ? r2.data : 0;

        sum = x + y + carry;
        carry = Math.floor(sum / 10);

        if (!current){
            current = new Node(sum % 10);
            result = current;
            r1 = r1.next;
            r2 = r2.next;
            continue;
        }

        current.next = new Node(sum % 10);
        current = current.next;
        
        if (r1){
            r1 = r1.next;
        }
        if (r2){
            r2 = r2.next;
        }
    }
    if (carry > 0){
        current.next = new Node(carry);
    }
    return result;
}



// 2.6
function isPalindrome(list){
    let runner = list.head;
    let walker = list.head;
    let stack = [];

    while (runner !== null && runner.next !== null){
        stack.push(walker.data);
        walker = walker.next;
        runner = runner.next.next;
    }

    if (runner !== null){
        walker = walker.next;
    }

    while (walker !== null){
        let top = stack.pop();
        if (top !== walker.data){
            return false;
        }
        walker = walker.next;
    }
    return true;
}



// 2.7
function listIntersection(list1, list2){
    if (!list1.head || !list2.head){
        return null;
    }

    let runner1 = list1.head;
    let runner2 = list2.head;
    let len1 = 0;
    let len2 = 0;

    while (runner1.next){
        len1++;
        runner1 = runner1.next;
    }
    while (runner2.next){
        len2++;
        runner2 = runner2.next;
    }
    if (runner1 !== runner2){
        return null;
    }
    runner1 = list1.head;
    runner2 = list2.head;

    if (len1 > len2){
        for (let i = 0; i < len1 - len2; i++){
            runner1 = runner1.next;
        }
    }
    if (len2 > len1){
        for (let i = 0; i < len2 - len1; i++){
            runner2 = runner2.next;
        }
    }

    while (runner1 !== runner2){
        runner1 = runner1.next;
        runner2 = runner2.next;
    }

    return runner1;
}



// 2.8

function hasLoop(list){
    if (!list.head || !list.head.next){
        return false;
    }

    let runner = list.head;
    let walker = list.head;

    while (runner !== null && runner.next !== null){
        walker = walker.next;
        runner = runner.next.next;

        if (walker === runner){
            return true;
        }
    }
    return false;
}

function loopDetection(list){
    if (!list.head || !list.head.next){
        return null;
    }

    let runner = list.head;
    let walker = list.head;

    while (runner !== null && runner.next !== null){
        walker = walker.next;
        runner = runner.next.next;

        if (walker === runner){
            break;
        }
    }
    
    if (runner === null || runner.next === null){
        return null;
    }

    walker = list.head;
    while (walker !== runner){
        walker = walker.next;
        runner = runner.next;
    }
    return runner;
}