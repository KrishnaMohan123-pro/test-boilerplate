function Node(data, next) {
    this.data = data;
    this.next = next || null
}

function Queue() {
    this.head = null;

    this.enqueue = function(node) {
            node.next = this.head;
            this.head = node;
    }
    
    this.dequeue = function() {
        if (this.head === null) {
            alert('Empty Queue');
            return null;
        }
        if(this.head.next === null) {
            this.head = null;
            return null;
        }
        let p = c = this.head;
        while(c.next !== null) {
            p = c;
            c = c.next;
        }
        const { data } = c;
        p.next = null
        return data
    }

    this.printQueue = function() {
        let c = this.head;
        let str = ''
        while (c) {
            str += c.data + (c.next===null? '' : ' ==> ')
            c = c.next 
        }
        console.log(str)
    }
}

const n1 = new Node(25), 
n2 = new Node(30), 
n3 = new Node(35), 
n4 = new Node(40),
n5 = new Node(45);

const Q1 = new Queue();
Q1.enqueue(n1);
Q1.enqueue(n2);
Q1.enqueue(n3);
Q1.enqueue(n4);
Q1.enqueue(n5);

Q1.printQueue();
console.log('element dequeued ==> ' + Q1.dequeue())
console.log('element dequeued ==> ' + Q1.dequeue())
console.log('element dequeued ==> ' + Q1.dequeue())
console.log('element dequeued ==> ' + Q1.dequeue())
console.log('element dequeued ==> ' + Q1.dequeue())

Q1.printQueue()