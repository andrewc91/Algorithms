function Node(val){
  this.value = val;
  this.left = null;
  this.right = null;
}

function BST(){
  this.root = null;

  this.add = function(val){
    if (!this.root){
      this.root = new Node(val);
      return this;
    }

    var current = this.root;

    while (current){
      if (val >= current.value && current.right){
        current = current.right;
      }
      else if (val >= current.value && !current.right){
        current.right = new Node(val);
        return this;
      }
      if (val < current.value && current.left){
        current = current.left;
      }
      else if (val < current.value && !current.left){
        current.left = new Node(val);
        return this;
      }
    }
  }

  this.contain = function(val){
    if (!this.root){
      return null;
    }
    var current = this.root;

    while (current){
      if (val == current.value){
        return true;
      }
      if (val > current.value){
        current = current.right;
      }
      if (val < current.value){
        current = current.left;
      }
    }
    return false;
  }

  this.min = function(){
    if (!this.root){
      return null;
    }

    var current = this.root;
    while (current.left){
      current = current.left;
    }
    return current.value;
  }

  this.max = function(){
    if (!this.root){
      return null;
    }

    var current = this.root;
    while (current.right){
      current = current.right;
    }
    return current.value;
  }

  this.isEmpty = function(){
    if (!this.root){
      return true;
    }
    return false;
  }

  this.remove = function(val){
    var removeNode = function(node, val){
      if (!node){
        return null;
      }
      if (val === node.value){
        if (node.left == null && node.right == null){
          return null;
        }
        if (node.left == null){
          return node.right;
        }
        if (node.right == null){
          return node.left;
        }

        var tempNode = node.right;
        while (tempNode.left !== null){
          tempNode = tempNode.left;
        }
        node.value = tempNode.value;
        node.right = removeNode(node.right, tempNode.value);
        return node;
      }
      else if (val < node.value){
        root.left = removeNode(node.left, val);
        return node;
      }
      else {
        node.right = removeNode(node.right, val);
        return node;
      }
    }
     this.root = removeNode(this.root, val);
  }

  this.BFS = function(){
    var queue = [];
    var list = [];
    var node = this.root;
    queue.push(node);

    while (queue.length > 0){
      node = queue.shift();
      list.push(node.value);
      if (!node){
        return;
      }
      if(node.left){
        queue.push(node.left)
      }
      if(node.right){
        queue.push(node.right)
      }
    }
    return list;
  }
}

var tree = new BST();
tree.add(12)
tree.add(5)
tree.add(15)
tree.add(3)
tree.add(7)
tree.add(9)
tree.add(1)
tree.add(13)
tree.add(17)
tree.add(19)
console.log(tree.BFS());


function size(root){
  if (!root){
    return 0;
  }
  var leftSize = size(root.left);
  var rightSize = size(root.right);
  return leftSize + rightSize + 1;
}

function height(root){
  if (!root){
    return 0;
  }

  var leftHeight = height(root.left) + 1;
  var rightHeight = height(root.right) + 1;

  if (leftHeight > rightHeight){
    return leftHeight;
  }
  return rightHeight;
}


function isBalanced(root){
  if (!root){
    return 0;
  }

  var leftHeight = height(root.left) + 1;
  var rightHeight = height(root.right) + 1;

  if (Math.abs(leftHeight - rightHeight) > 1){
    return false;
  }
  return true;
}

function inOrder(node){
  if (node){
    inOrder(node.left);
    console.log(node.value);
    inOrder(node.right);
  }
}

function preOrder(node){
  if (node){
    console.log(node.value);
    preOrder(node.left);
    preOrder(node.right);
  }
}

function postOrder(node){
  if (node){
    postOrder(node.left);
    postOrder(node.right);
    console.log(node.value);
  }
}


function maxDepth(root){
  if (!root){
    return 0;
  }
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}
