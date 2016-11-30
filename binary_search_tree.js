var Node = (function() {
    function Node(data, left, right) {
        this.data = data;
        this.left = left;
        this.right = right;
    }

    Node.prototype.show = function() {
        return this.data
    }

    return Node
})()


var BST = (function() {
    function BST() {
        this.root = null
    }

    BST.prototype.insert = function(data) {
        if (this.root == null) {
            this.root = new Node(data)
        } else {
            var current = this.root
            while (current) {
                if (data < current.data) {
                    if (!current.left) {
                        current.left = new Node(data)
                        break
                    } else {
                        current = current.left
                    }
                } else {
                    if (!current.right) {
                        current.right = new Node(data)
                        break
                    } else {
                        current = current.right
                    }
                }
            }
        }

    }

    BST.prototype.inOrder = function(node) {
        if (node) {
            this.inOrder(node.left);
            console.log(node.data);
            this.inOrder(node.right);
        }
    }

    BST.prototype.preOrder = function(node) {
        if (node) {
            console.log(node.data)
            this.preOrder(node.left)
            this.preOrder(node.right)
        }
    }

    BST.prototype.postOrder = function(node) {
        if (node) {
            this.postOrder(node.left)
            this.postOrder(node.right)
            console.log(node.data)
        }
    }

    BST.prototype.getMin = function() {
        var current = this.root
        while (current.left) {
            current = current.left
        }
        return current.data
    }

    BST.prototype.find = function(data) {
        var current = this.root;
        while (current.data != data) {
            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
            if (current == null) {
                return null;
            }
        }
        return current;
    }

    BST.prototype.remove = function(data) {
        root = removeNode(this.root, data)
    }

    function removeNode(node, data) {
        if (node == null) {
            return null
        }

        if (data == node.data) {
            if (node.left == null && node.right == null) {
                return null
            }

            if (node.left == null) {
                return node.right
            }

            if (node.right == null) {
                return node.left
            }

            var tempNode = node.right.getMin()
            node.data = tempNode.data
            node.right = removeNode(node.right, tempNode.data)
        } else if (data < node.data) {
            node.left = removeNode(node.left, data)
            return node
        } else {
            node.right = removeNode(node.right, data)
            return node
        }
    }



    return BST
})()





var bst = new BST();
bst.insert(23);
bst.insert(45);
bst.insert(16);
bst.insert(37);
bst.insert(3);
bst.insert(99);
bst.insert(22);
bst.insert(38);
bst.insert(2);

console.log(bst.getMin())

console.log("In Order")
bst.inOrder(bst.root)

console.log("Pre Order")
bst.preOrder(bst.root)

console.log("Post Order")
bst.postOrder(bst.root)

console.log(bst.find(16))
console.log(bst.remove(16))
