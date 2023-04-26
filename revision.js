Array.prototype.swap = function(i, j) {
    const temp = this[i];
    this[i] = this[j];
    this[j] = temp;
}

Array.prototype.bubbleSort = function() {
    for(let i = 0; i < this.length; i++) {
        for(let j = 0; j < this.length - i;  j++) {
            if(this[j] > this[j + 1]) {
                this.swap(j, j + 1)
            }
        }
    }
    return this
}

Array.prototype.selectionSort = function() {
    for(let i = 0; i < this.length - 1; i++) {
        let min = i;
        for(let j = i + 1; j < this.length; j++) {
            if(this[min] > this[j]) {
                min = j
            }
        }
        this.swap(i, min)
    }
    return this
}

Array.prototype.insertionSort = function() {
    for (let i = 1; i < this.length - 1; i++) {
        if(this[i] > this[i + 1]) {
            let j = i + 1;
            while(j > 0 && this[j] < this[j - 1]) {
                this.swap(j, j - 1);
                j--;
            }
        }
    }
    return this
}

Array.prototype.mergeSort = function() {
    function main (arr) {
        mergeSortUtil(arr, 0, arr.length - 1)
        return arr
    }
    function mergeSortUtil(arr, s, e) {
        if(s >= e) return
        const mid = s + parseInt((e-s) / 2);
        mergeSortUtil(arr, s, mid);
        mergeSortUtil(arr, mid + 1, e);
        merge(arr, s, mid, e)
    }
    function merge(arr, s, m, e) {
        let l = [], r = [], n1 = m - s + 1, n2 = e - m;
        for(let i = 0; i < n1; i++) {
            l.push(arr[s + i])
        }
        for(let i = 0; i < n2; i++) {
            r.push(arr[m + i + 1])
        }
        let i = 0, j = 0, k = s
        while(i < n1 && j < n2) {
            if(l[i] < r[j]) {
                arr[k++] = l[i++]
            } else {
                arr[k++] = r[j++]
            }
        }
        while(i < n1) {
            arr[k++] = l[i++]
        }
        while(j < n2) {
            arr[k++] = r[j++]
        }
    }
    return main(this)
}

Array.prototype.quickSort = function() {
    const me = this
    function main(arr) {
        quickSortUtil(arr, 0, arr.length - 1);
        return arr
    }
    function quickSortUtil(arr, s, e) {
        if(s < e) {
            const pi = partition(arr, s, e);
            quickSortUtil(arr, s, pi - 1);
            quickSortUtil(arr, pi + 1, e)
        }
    }
    function partition(arr, s, e) {
        let p = arr[e]
        let i = s - 1;
        for(let j = s; j < e; j++) {
            if(arr[j] < p) {
                i++;
                me.swap(i, j)
            }
        }
        me.swap(e, i + 1)
        return i + 1
    }
    return main(this)
}

Array.prototype.binarySearch = function(k) {
    let s = 0, e = this.length;
    while(s <= e) {
        let mid = s + parseInt((e - s) / 2);
        if(this[mid] === k) return mid
        if(k > this[mid]) s = mid + 1
        else e = mid - 1
    }
    return -1
}


console.log([4,5,1,2,7,6,3,8,9].bubbleSort())
console.log([4,5,1,2,7,6,3,8,9].selectionSort())
console.log([4,5,1,2,7,6,3,8,9].insertionSort())
console.log([4,5,1,2,7,6,3,8,9].mergeSort())
console.log([4,5,1,2,7,6,3,8,9].quickSort())
console.log([1,2,3,4,5,6,7,8,9].binarySearch(5))


class LinkedListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    addAtStart(d) {
        const newNode = new LinkedListNode(d);
        newNode.next = this.head;
        this.head = newNode
    }
    
    addAtLast(d) {
        if(!this.head) {
            this.head = new LinkedListNode(d)
        } else {
            let c = this.head;
            while(c.next) {
                c = c.next;
            }
            c.next = new LinkedListNode(d)
        }
    }

    insertBefore(d, k) {
        if(this.head.data === k) {
            this.addAtStart(d)
            return;
        }
        let c = this.head, p;
        while(c && c.data !== k) {
            p = c;
            c = c.next
        }
        if(!c) {
            alert('no node found');
            return
        }
        const newNode = new LinkedListNode(d);
        newNode.next = c;
        p.next = newNode;
    }

    deleteStart() {
        if(!this.head) {
            alert('no list found')
            return;
        }
        this.head = this.head.next;
    }

    deleteEnd() {
        if(!this.head) {
            alert('no list found')
            return;
        }
        if (!this.head.next) {
            this.head = null
        } else {
            let c = this.head, p = this.head;
            while(c.next) {
                p = c
                c = c.next;
            }
            p.next = null
        }
    }

    reverse() {
        let c = this.head, p = null, n = null;
        while(c) {
            n = c.next;
            c.next = p;
            p = c;
            c = n
        }
        this.head = p
    }

    mergeSorted(l) {
        let result = new LinkedList();
        let h1 = this.head, h2 = l.head;
        while(h1 && h2) {
            if(h1.data < h2.data) {
                result.addAtLast(h1.data)
                h1 = h1.next
            } else {
                result.addAtLast(h2.data)
                h2 = h2.next
            }
        }
        while(h1) {
            result.addAtLast(h1.data);
            h1 = h1.next
        }
        while(h2) {
            result.addAtLast(h2.data);
            h2 = h2.next
        }
        this.head = result.head;
    }
    
    print() {
        let c = this.head, str = '';
        while(c) {
            str += c.data + '==>'
            c = c.next;
        }
        console.log(str)
    }
}


const l1 = new LinkedList();
l1.addAtStart(1);
l1.addAtStart(2);
l1.addAtStart(3);
l1.addAtStart(4);
l1.addAtStart(5);
l1.addAtStart(6);
l1.print();
l1.deleteStart();
l1.print();
l1.deleteEnd();
l1.print();
l1.reverse();
l1.print();
l1.insertBefore(1, 5);
l1.print();


const l2 = new LinkedList(), l3 = new LinkedList();
l2.addAtLast(1)
l2.addAtLast(3)
l2.addAtLast(5)
l2.addAtLast(7)

l3.addAtLast(2)
l3.addAtLast(4)
l3.addAtLast(6)

l2.mergeSorted(l3);
l2.print();

class BinaryTreeNode {
    constructor(d) {
        this.data = d;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(d) {
        function insertUtil(root, data) {
            if(!root) {
                root = new BinaryTreeNode(data);
                return root;
            }
            if(root.data > data) {
                root.left = insertUtil(root.left, data)
            } else {
                root.right = insertUtil(root.right, data)
            }
            return root
        }
        this.root = insertUtil(this.root, d)
    }

    max(root) {
        let r = root || this.root;
        while(r.right) {
            r = r.right
        }
        return r.data
    }

    min(root) {
        let r = root || this.root;
        while(r.left) {
            r = r.left
        }
        return r.data
    }

    inorder() {
        let str = '';
        function inorderUtil(root) {
            if(root) {
                inorderUtil(root.left);
                str += root.data + '==>'
                inorderUtil(root.right)
            }
        }
        inorderUtil(this.root);
        console.log(str)
    }

    preorder() {
        let str = ''
        function preorderUtil(root){ 
            if(root) {
                str += root.data + '==>'
                preorderUtil(root.left);
                preorderUtil(root.right)
            }
        }
        preorderUtil(this.root)
        console.log(str)
    }

    postorder() {
        let str = ''
        function postorderUtil(root){ 
            if(root) {
                postorderUtil(root.left);
                postorderUtil(root.right);
                str += root.data + '==>';
            }
        }
        postorderUtil(this.root)
        console.log(str)
    }
}

const bst = new BinarySearchTree();
bst.insert(5);
bst.insert(2);
bst.insert(3);
bst.insert(1);
bst.insert(8);
bst.insert(7);
bst.insert(4);
bst.insert(9);
console.log('inorder');
bst.inorder()
console.log('preorder');
bst.preorder();
console.log('postorder');
bst.postorder();
console.log(bst.max());
console.log(bst.min());

class Queue {
    constructor() {
        this.arr = [];
    }

    enqueue(d) {
        this.arr.push(d);
    }

    dequeue() {
        return this.arr.shift();
    }

    front() {
        return this.arr[0];
    }

    isEmpty() {
        return this.arr.length <= 0;
    }
}

class Graph {
    constructor() {
        this.graph = new Map()
    }

    addEdge(u, v) {
        if(this.graph.has(u)) {
            const newEdge = this.graph.get(u);
            newEdge.push(v);
            this.graph.set(u, newEdge)
        } else {
            this.graph.set(u, [v])
        }
    }

    bfs() {
        let visited = new Map();
        let q = new Queue();
        for(let [k, v] of this.graph) {
            if (!visited.has(k)) visited.set(k, false)
            v.forEach(e => !visited.has(e) ? visited.set(e, false) : null)
        }
        q.enqueue(this.graph.entries().next().value[0]);
        
    }

    print() {
        for(let[k, v] of this.graph) {
            let str = '';
            v.forEach(e => str += e + ', ')
            console.log(k + '==>' + str)
        }
        
    }
}

const g = new Graph();
g.addEdge(1,2)
g.addEdge(1,3)
g.addEdge(1,5)
g.addEdge(1,6)
g.addEdge(2,4)
g.addEdge(2,5)
g.addEdge(3,2)
g.addEdge(3,6)
g.print()
g.bfs()



function outest(c) {
    function outer(b) {
        var a = 10
        function inner() {
            console.log(a, b, c)
        }
        // if var a = 10 written here, a in inner will be 10 only
        // if let a = 10, works the same
        return inner
    }
    return outer
}
let a = 100

outest(20)(30)()



// closures are helpful for data hiding and encapsulation
var count = 0
function counter() {
    count++;
}

counter();
counter();
// globally accessible
console.log(count)
// count cannot be accessed outside the constructor function
function CounterImplementation() {
    var count = 0;
    this.increase = function() {
        count++
        console.log(count)
    }
    this.decrease = function() {
        count--
        console.log(count)
    }
}

let c1 = new CounterImplementation();
c1.increase()

// closures can cause over consumption of memory
// garbage collector --> frees up the unutilized memory

function out() {
    let a = 10, b = 20;
    function inner() {
        debugger
        console.log(a)
    }
    return inner
}

out()()