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
    var removeNode = function(root, val){
      if (!root){
        return null;
      }
      if (val === root.value){
        if (root.left == null && root.right == null){
          return null;
        }
        if (root.left == null){
          return root.right;
        }
        if (root.right == null){
          return root.left;
        }

        var tempNode = root.right;
        while (tempNode.left !== null){
          tempNode = tempNode.left;
        }
        root.value = tempNode.value;
        root.right = removeNode(root.right, tempNode.value);
        return root;
      }
      else if (val < root.value){
        root.left = removeNode(root.left, val);
        return root;
      }
      else {
        root.right = removeNode(root.right, val);
        return root;
      }
    }
    this.root = removeNode(this.root, val);
  }
}

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

var tree = new BST();
tree.add(40)
tree.add(60)
tree.add(70)
tree.add(55)
tree.add(20)
tree.add(10)
tree.add(30)
tree.add(35)
tree.remove(20)
