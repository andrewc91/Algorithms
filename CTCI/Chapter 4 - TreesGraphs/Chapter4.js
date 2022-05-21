class Node {
    constructor(value){
        this.data = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor(){
        this.root = null;
    }

    insert(val){
        if (this.root === null){
            this.root = new Node(val);
            return;
        }
        let root = this.root;
        
        const insertNode = function(current){
            if (val < current.data){
                if (!current.left){
                    current.left = new Node(val);
                    return;
                }
                else {
                    return insertNode(current.left);
                }
            }
            else {
                if (!current.right){
                    current.right = new Node(val);
                    return;
                }
                else {
                    return insertNode(current.right);
                }
            }
        }
        insertNode(root);
    }

    contain(val){
        let root = this.root;

        const searchNode = function(current){
            if (val === current.data){
                return true;
            }
            else if (val < current.data && current.left){
                return searchNode(current.left);
            }
            else if (val > current.data && current.right){
                return searchNode(current.right);
            }
            else {
                return false;
            }
        }
        return searchNode(root);
    }

    inOrder(){
        if (this.root === null){
            return null;
        }
        let result = [];

        const traverse = function(current){
            if (current){
                traverse(current.left);
                result.push(current.data);
                traverse(current.right);
            }
        }
        traverse(this.root);
        return result;
    }

    preOrder(){
        if (this.root === null){
            return null;
        }
        let result = [];

        const traverse = function(current){
            if (current){
                result.push(current.data);
                traverse(current.left);
                traverse(current.right);
            }
        }
        traverse(this.root);
        return result;
    }

    postOrder(){
        if (this.root === null){
            return null;
        }
        let result = [];

        const traverse = function(current){
            if (current){
                traverse(current.left);
                traverse(current.right);
                result.push(current.data);
            }
        }
        traverse(this.root);
        return result;
    }

    levelOrder(){
        if (this.root === null){
            return null;
        }
        let result = [];
        let queue = [];
        queue.push(this.root);

        while (queue.length > 0){
            let node = queue.shift();
            result.push(node.data);

            if (node.left){
                queue.push(node.left)
            }
            if (node.right){
                queue.push(node.right);
            }
        }
        return result;
    }
}




// 4.1





// 4.2
function minimalBST(arr){
    let createTree = function(arr, start, end){
        if (start > end){
            return null;
        }
        let mid = Math.floor((start + end) / 2);
        let node = new Node(arr[mid]);
        node.left = createTree(arr, start, mid-1);
        node.right = createTree(arr, mid+1, end);
        return node;
    }
    return createTree(arr, 0, arr.length-1);
}


// 4.3
// function listOfDepths(root){
//     let result = [];
//     let list = null;
//     let queue = [];
//     let nextQ = [];
//     let current = root;
//     queue.push(current);

//     while (queue.length > 0){
//         current = queue.shift();
//         let node = new Node(current.data);
//         node.next = list;
//         list = node;

//         if (current.left){
//             nextQ.push(current.left);
//         }
//         if (current.right){
//             nextQ.push(current.right);
//         }
//         if (queue.length === 0){
//             result.push(list);
//             list = null;
//             queue = nextQ;
//             nextQ = [];
//         }
//     }
//     return result;
// }


// let tree = new BST();
// tree.insert(30);
// tree.insert(40);
// tree.insert(20);
// tree.insert(25);
// tree.insert(35);
// console.log(tree.root);


// 4.4
function isBalanced(root) {
    return dfsHeight(root) != -1;
}

function dfsHeight(root) {
    if (root == null) {
        return 0;
    }
    const leftHeight = dfsHeight(root.left);
    if (leftHeight === -1) {
        return -1;
    }
    const rightHeight = dfsHeight(root.right);
    if (rightHeight === -1) {
        return -1;
    }
    if (Math.abs(leftHeight - rightHeight) > 1) {
        return -1;
    }
    else {
        return Math.max(leftHeight, rightHeight) + 1;
    }
}


// 4.5
function isValid(root){
    var check = function(node, min, max){
        if (node === null){
            return true;
        }
        if (min !== null && node.data <= min){
            return false;
        }
        if (max !== null && node.data >= max){
            return false;
        }
        return check(node.left, min, node.data) && check(node.right, node.data, max);
    }
    return check(root, null, null);
}


// 4.6 InOrder Succession
function inOrderSuccession(root, node){
    if (node.right){
        return minVal(node.right);
    }
    let successor = null;

    while (root){
        if (node.data < root.data){
            successor = root;
            root = root.left;
        }
        else if (node.data > root.data){
            root = root.right;
        }
        else {
            break;
        }
    }
    return successor;
}

function minVal(node){
    let current = node;
    while (current.left){
        current = current.left;
    }
    return current;
}


// 4.10 Check if Subtree
function isSubtree(root1, root2){
    if (root1 === null){
        return false;
    }
    if (root2 === null){
        return true;
    }
    if (isMatch(root1, root2)){
        return true;
    }
    return isSubtree(root1.left, root2) || isSubtree(root1.right, root2);
}

function isMatch(n1, n2){
    if (n1 === null && n2 === null){
        return true;
    }
    if (n1 === null || n2 === null){
        return false;
    }
    if (n1.data !== n2.data){
        return false;
    }
    return isMatch(n1.left, n2.left) && isMatch(n1.right, n2.right);
}


// 4.12 Paths with Sum
