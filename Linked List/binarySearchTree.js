function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null
}

function BST() {
    this.root = null;
    
    this.insertNode = function(key) {
        function insert(root, key) {
            if(root === null) {
                root = new Node(key);
                return root;
            }
            if(key < root.data) {
                root.left = insert(root.left, key);
            } else {
                root.right = insert(root.right, key);
            }
            return root;
        }
        this.root = insert(this.root, key);
    }

    this.deleteNode = function(key) {
        const me = this;
        function d(root, key) {
            if (!root) {
                return root
            }
            if(key > root.data) {
                root.right = d(root.right, key)
            } else if (key < root.data) {
                root.left = d(root.left, key)
            } else {
                if(root.left === null) {
                    return root.right
                } else if(root.right === null) {
                    return root.left
                } else {
                    root.data = me.findMin(root.right)
                    root.right = d(root.right, root.data)
                }
            }
            return root
        }
        return d(this.root, key)
    }

    this.findNode = function(key) {
        function find(root, key) {
            if(!root) {
                return false
            }
            if(key === root.data) {
             return true
            }
            if(key > root.data) {
                return find(root.right, key)
            } else {
                return find(root.left, key)
            }
        }
        return find(this.root, key)
    }

    this.findMin = function(root) {
        function find(root) {
            if(root) {
                while(root.left) {
                    root = root.left
                }
            }
            return root.data
        }
        return find(root || this.root)
    }

    this.findMax = function() {
        function find(root) {
            if(root) {
                while(root.right) {
                    root = root.right
                }
            }
            return root.data
        }
        return find(this.root)
    }

    this.inorder = function() {
        function print(root) {
            if(root) {
                print(root.left);
                console.log(root.data);
                print(root.right);
            }
        }
        print(this.root);
    }

    this.preorder = function() {
        function print(root) {
            if(root) {
                console.log(root.data);
                print(root.left);
                print(root.right);
            }
        }
        print(this.root);
    }

    this.postorder = function() {
        function print(root) {
            if(root) {
                print(root.left);
                print(root.right);
                console.log(root.data);
            }
        }
        print(this.root);
    }
}

const bst = new BST();
bst.insertNode(5);
bst.insertNode(2);
bst.insertNode(4);
bst.insertNode(7);
bst.insertNode(6);
console.log('------Inorder--------')
bst.inorder();
console.log('------Preorder--------')
bst.preorder();
console.log('------Postorder--------')
bst.postorder();
console.log('--after deletion---')
console.log(bst.findMin(), bst.findMax())

bst.deleteNode(5)
bst.inorder()