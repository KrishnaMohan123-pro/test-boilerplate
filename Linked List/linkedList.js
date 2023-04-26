function Node(data, next) {
    this.data = data;
    this.next = next || null;
}

function LinkedList() {
    this.head = null
    this.insertAtStart = function (node) {
        node.next = this.head;
        this.head = node;
        return this.head;
    }
    this.insertAtEnd = function (node) {
        if (this.head === null) {
            this.head = node;
        } else {
            let c = this.head;
            while (c.next !== null) {
                c = c.next;
            }
            c.next = node
        }
    }
    this.insertBeforeNode = function (node, k) {
        let c = this.head;
        if (c.data === k) {
            node.next = this.head;
            this.head = node;
        } else {
            while (c && c.next && c.next.data !== k) {
                c = c.next
            }
            node.next = c.next;
            c.next = node;
        }

        return this.head;
    }
    this.insertAfterNode = function (node, k) {
        let c = this.head;
        while (c && c.data !== k) {
            c = c.next;
        }
        if (!c) {
            console.log('Enter valid key')
        } else {
            node.next = c.next;
            c.next = node
        }
        return this.head
    }
    this.deleteNode = function (k) {
        if (!this.head) {
            console.log('no list found')
            return
        }
        let c = this.head;
        let prev = c;
        while (c && c.data !== k) {
            prev = c
            c = c.next
        }
        if (!c) {
            console.log('enter correct key')
            return
        }
        if (c === this.head) {
            this.head = c.next
        } else {
            prev.next = c.next
        }
        return this.head
    }
    this.reverse = function() {
        let c = this.head, p = null, n = null;
        while(c !== null) {
            n = c.next;
            c.next = p;
            p = c
            c = n;
        }
        this.head = p
    }
    this.reverseRecursive = function (curr, prev) {
        if(curr === null) {
            this.head = prev
            return
        }
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        this.reverseRecursive(next, prev)
    }
    this.findMiddleNode = function() {
        let fast = this.head, slow = this.head;
        while(fast && fast.next) {
            fast = fast.next.next;
            slow = slow.next
        }
        return slow.data
    }
    this.makeLoopAtPosition = function(k) {
        let c = this.head, p = this.head;
        while(k > 0) {
            p = p.next;
            k--
        }
        console.log('p ==> ', p)
        while(c.next) {
            c = c.next
        }
        c.next = p
        console.log(this.head)
    }
    this.findLoop = function() {
        let f = this.head, s = this.head;
        while(f && f.next) {
            f = f.next.next;
            s = s.next;
            if(f.data === s.data) break
        }
        if(!f || !f.next) {
            console.log('No Loop Found')
        } else {
            console.log('loop found, pointers at =>', f, s)
        }
        return s
    }
    this.findLoopPosition = function() {
        let c = this.head, s = this.findLoop();
        while(c && s && c !== s) {
            c = c.next;
            s = s.next
        }
        return s

    }
    this.removeLoop =function () {
        let c = this.head, s = this.findLoop(), p = null;
        while(c && s && c !== s) {
            p = s
            c = c.next;
            s = s.next
        }
        p.next = null
    }
    this.removeDuplicatesInSorted = function() {
        let c = this.head;
        while (c) {
            let p = c.next
            while (p && c.data === p.data) {
                p = p.next
            }
            c.next = p;
            c = c.next
        }
    }
    this.removeDuplicates = function() {
        const map = new Map();
        let c = this.head;
        let p = null
        while(c) {
            if(!map.has(c.data)) {
                map.set(c.data, true)
                p = c
            } else {
                p.next = c.next;
            }
            c = p.next
        }
    }
    this.sort012s = function() {
         const ll0 = new LinkedList(), 
         ll1 = new LinkedList(), 
         ll2 = new LinkedList();
         let c = this.head;
         while (c) {
            if(c.data === 0) {
                ll0.insertAtEnd(new Node(0));
            }
            if(c.data === 1) {
                ll1.insertAtEnd(new Node(1));
            }
            if(c.data === 2) {
                ll2.insertAtEnd(new Node(2));
            }
            c = c.next
         }
         this.head = ll0.head;
         c = this.head
         while(c.next) c = c.next;
         c.next = ll1.head;
         while(c.next) c = c.next;
         c.next = ll2.head;
    }
    this.merge = function(list) {
        let c = this.head, l = list.head, result = new LinkedList();
        while(c && l) {
            if(c.data <= l.data) {
                result.insertAtEnd(new Node(c.data))
                c = c.next
            } else {
                result.insertAtEnd(new Node(l.data))
                l = l.next
            }
        }
        while(l) {
            result.insertAtEnd(new Node(l.data))
            l = l.next
        }
        while(c) {
            result.insertAtEnd(new Node(c.data));
            c = c.next
        }
        this.head = result.head
        console.log('head==>', this.head)
    }
    this.isPalindrome = function() {
        // approach 1 --> save in an array and check
        // approach 2 --> reverse the array from the mid and then check
    }
    this.mergeSort = function() {
        
    }
    this.printList = function () {
        let c = this.head;
        let str = '';
        while (c !== null) {
            str = str + c.data + (c.next === null ? '' : ' ==> ');
            c = c.next;
        }
        console.log(str);
    }
}

const n1 = new Node(25),
    n2 = new Node(30),
    n3 = new Node(35),
    n4 = new Node(40),
    n5 = new Node(45),
    n6 = new Node(30),
    n7 = new Node(45),
    n8 = new Node(35),
    n9 = new Node(25);

console.log('----------------------L1------------------')
let L1 = new LinkedList();
L1.insertAtStart(n1);
L1.insertAtStart(n2);
L1.insertAtEnd(n3);
L1.insertBeforeNode(n4, 35);
L1.insertAfterNode(n5, 40);
L1.insertAtEnd(n6);
L1.insertAtEnd(n7);
L1.insertAtEnd(n8);
L1.insertAtEnd(n9);

L1.removeDuplicates()
L1.printList();

// L1.deleteNode(25);
// L1.deleteNode(30);
// L1.deleteNode(35);
// L1.deleteNode(40);
// L1.deleteNode(45);
console.log('-----------------loops-------------------')
// L1.findLoop();
// console.log(L1.findMiddleNode())

// L1.makeLoopAtPosition(2)
// L1.findLoop()
// console.log(L1.findLoopPosition())
// L1.removeLoop();
// console.log(L1.findLoopPosition())
// L1.printList()

console.log('-----------------L2--------------------------')
const L2 = new LinkedList();

const node1 = new Node(15)
const node2 = new Node(15)
const node3 = new Node(25)
const node4 = new Node(25)
const node5 = new Node(25)
const node6 = new Node(30)
const node7 = new Node(35)
const node8 = new Node(35)

L2.insertAtEnd(node1)
L2.insertAtEnd(node2)
L2.insertAtEnd(node3)
L2.insertAtEnd(node4)
L2.insertAtEnd(node5)
L2.insertAtEnd(node6)
L2.insertAtEnd(node7)
L2.insertAtEnd(node8)
console.log('before duplicates are removed ==>')
L2.printList()
L2.removeDuplicatesInSorted();
console.log('after duplicates are removed ==>')
L2.printList()

console.log('----------------sort 0s, 1s, 2s linked list----------------------')

const nodeList = [
    new Node(0), 
    new Node(1), 
    new Node(2),
    new Node(0),
    new Node(2),
    new Node(1),
    new Node(0),
    new Node(0),
    new Node(1),
    new Node(1),]

const L3 = new LinkedList();
nodeList.forEach(node => L3.insertAtEnd(node))
L3.sort012s()
L3.printList()


console.log('--------------------merge sorted linked lists---------------------')

const sortedList1 = [
    new Node(1),
    new Node(3),
    new Node(5),
    new Node(7),
    new Node(9),
]

const sortedList2 = [
    new Node(0),
    new Node(2),
    new Node(4),
    new Node(6),
    new Node(8),
]

const L4 = new LinkedList(), L5 = new LinkedList();
sortedList1.forEach(node => L4.insertAtEnd(node))
sortedList2.forEach(node => L5.insertAtEnd(node))

L4.merge(L5)
L4.printList()