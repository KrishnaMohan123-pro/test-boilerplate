function Node(data, next) {
    this.data = data;
    this.next = next || null
}

function Stack() {
    this.head = null
    this.push = function (node) {
        node.next = this.head;
        this.head = node
        return this.head
    }
    this.pop = function () {
        if (this.head === null) {
            alert('The stack is empty')
            return null
        } else {
            const {
                data
            } = this.head;
            this.head = this.head.next
            return data
        }
    }
    this.printStack = function () {
        let c = this.head;
        while (c) {
            console.log(c.data)
            c = c.next
        }
    }
}


const n1 = new Node(25),
    n2 = new Node(30),
    n3 = new Node(35),
    n4 = new Node(40),
    n5 = new Node(45);
console.log('Stack Created')
const S1 = new Stack();
S1.push(n1);
S1.push(n2);
S1.push(n3);
S1.push(n4);
S1.push(n5);

S1.printStack();
console.log('Stack Popped Top ==> ' + S1.pop());
console.log('Stack Popped Top ==> ' + S1.pop());
console.log('Stack Popped Top ==> ' + S1.pop());
console.log('Stack Popped Top ==> ' + S1.pop());
console.log('Stack Popped Top ==> ' + S1.pop());
console.log('Stack Popped Top ==> ' + S1.pop());
console.log('Final Stack')
S1.printStack()