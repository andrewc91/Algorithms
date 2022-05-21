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

    // Iteratively
    addI(value){
        if (!this.root){
            this.root = new Node(value);
            return this;
        }
        let current = this.root;

        while (current){
            if (value >= current.data){
                if (!current.data){
                    current.right = new Node(value);
                    return;
                }
                current = current.right;
            }
            else {
                if (!current.left){
                    current.left = new Node(value);
                }
                current = current.left;
            }
        }
    }

    // Recursively
    addR(value){
        if (!this.root){
            this.root = new Node(value);
            return;
        }
        let current = this.root;

        const searchTree = function(current){
            if (value < current.data){
                if (!current.left){
                    current.left = new Node(value);
                    return;
                }
                else {
                    return searchTree(current.left);
                }
            }
            else if (value > current.data){
                if (!current.right){
                    current.right = new Node(value);
                    return;
                }
                else {
                    return searchTree(current.right);
                }
            }
            else {
                return null;       // if node.data already contains value;
            }
        }
        return searchTree(current); // how we initially call the searchTree function
    }

    contain(value){
        if (!this.root){
            return null;
        }
        let currentNode = this.root;

        const searchTree = function(current){
            if (current.data === value) {
                return true;
            }
            else if (value >= current.data) {
                if (!current.right) {
                    return false;
                }
                else {
                    return searchTree(current.right);
                }
            }
            else {
                if (!current.left) {
                    return false;
                }
                else {
                    return searchTree(current.left);
                }
            }
        }
        return searchTree(currentNode);
    }

    inOrder(){
        if (this.root === null){
            return null;
        }
        var result = [];

        const traverseInOrder = function(currentNode){
            if (currentNode){
                traverseInOrder(currentNode.left);
                result.push(currentNode.data);
                traverseInOrder(currentNode.right);
            }
        }
        traverseInOrder(this.root);
        return result;
    }

    preOrder(){
        if (this.root === null){
            return null;
        }
        var result = [];

        const traversePreOrder = function(currentNode){
            if (currentNode){
                result.push(currentNode.data);
                traversePreOrder(currentNode.left);
                traversePreOrder(currentNode.right);
            }
        }
        traversePreOrder(this.root);
        return result;
    }

    postOrder(){
        if (this.root === null){
            return null;
        }
        var result = [];

        const traversePostOrder = function(currentNode){
            if (currentNode){
                traversePostOrder(currentNode.left);
                traversePostOrder(currentNode.right);
                result.push(currentNode.data);
            }
        }
        traversePostOrder(this.root);
        return result;
    }
}

function BFS(root){
    if (root === null){
        return null;
    }
    let nodes = [];
    let queue = [];

    if (root !== null){
        queue.push(root);
        while (queue.length > 0){
            var node = queue.shift();
            nodes.push(node.data);
            if (node.left !== null){
                queue.push(node.left);
            }
            if (node.right !== null){
                queue.push(node.right);
            }
        }
        return nodes;
    }
}

function findMin(root){
    if (root === null){
        return -1;
    }
    else if (root.left === null){
        return root.data;
    }
    return findMin(root.left);
}

function findMax(root){
    if (root === null){
        return -1;
    }
    else if (root.right === null){
        return root.data;
    }
    return findMax(root.right);
}

// O(n)
function findHeight(root){
    if (root === null){
        return 0;
    }
    var leftHeight = findHeight(root.left);
    var rightHeight = findHeight(root.right);

    return Math.max(leftHeight, rightHeight) + 1;
}

var tree = new BST();
tree.addR(10);
tree.addR(2);
tree.addR(1);
tree.addR(7);
tree.addR(14);
tree.addR(12);
tree.addR(18);
tree.addR(22);
tree.addR(17);
tree.addR(19);
console.log(tree.root.right.right);


// Find the Kth smallest value in the Binary Search Tree making array first
function kthSmallestBrute(root, k){
    var arr = [];
    if (k < 0){
        return null;
    }

    function inOrder(node){
        if (node === null){
            return null;
        }
        inOrder(node.left);
        arr.push(node.data);
        inOrder(node.right);
    }
    inOrder(root);
    return arr[k-1];
}

// Find the Kth smallest value in a Binary Search Tree recursively
function kthSmallest(root, k){
    var count = 0;
    var isFound = false;
    var result;

    function inOrder(node){
        if (node !== null && !isFound){
            inOrder(node.left);
            count++;
            if (count === k){
                result = node.data;
                isFound = true;
                return;
            }
            inOrder(node.right);
        }
    }
    inOrder(root);
    return result;
}


function isValidBST(root){
    
}