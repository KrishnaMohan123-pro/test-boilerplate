class Node {
    constructor(data, n, p) {
        this.data = data;
        this.n = n || null;
        this.p = p || null;
    }
}

class DoublyLinkedList {
    constructor(node) {
        this.head = node
    }
    insertAtStart(node) {
        node.n = this.head
        if(this.head !== null) {
            this.head.p = node
        }
        this.head = node
    }

    insertAtEnd(node) {
        let c = this.head;
        while(c.n) {
            c = c.n
        }
        c.n = node;
        node.p = c
        console.log(this.head)
    }

    insertBeforeNode(node, k) {
        let p = this.head, c = this.head;
        while(c && c.data !== k) {
            p = c
            c = c.n
        }
        if(!c) {
            alert('No Data Found');
            return
        }
        node.n = c;
        c.p = node;
        node.p = p;
        p.n = node
    }

    delete(k) {
        let c = this.head, p = this.head;
        while(c && c.data !== k) {
            c = c.n
        }
        if(!c) {
            alert('No key found')
            return
        }  
        p.n = c.n
        c.n.p = p
        c.p = null;
        c.n = null;
        console.log(this.head)
        return c.data
    }

    print() {
        console.log(this.head)
        let c = this.head, str = '';
        while (c) {
            str += c.data + (c.n === null? '' : ' ==> ')
            c = c.n 
        }
        console.log(str)
    }
}

const n1 = new Node(25),
    n2 = new Node(30),
    n3 = new Node(35),
    n4 = new Node(40),
    n5 = new Node(45),
    n6 = new Node(50);

const Dll = new DoublyLinkedList(n1);
Dll.insertAtStart(n2);
Dll.insertAtStart(n3);
Dll.insertAtStart(n4);
Dll.insertAtEnd(n5);
Dll.insertBeforeNode(n6, 30)

Dll.print()
Dll.delete(50)
Dll.print()

