// Undirected Graph

// Queue for BFS
class Queue {
    constructor() {
        this.queue = []
    }

    enqueue(d) {
        this.queue.push(d);
    }

    dequeue() {
        return this.queue.shift();
    }

    isEmpty() {
        return this.queue.length <= 0;
    }
}

class Stack {
    constructor() {
        this.stack = []
    }
    push(d) {
        this.stack.push(d)
    }
    pop() {
        return this.stack.pop()
    }
    isEmpty() {
        return this.stack.length === 0
    }
}

class Graph {

    constructor() {
        this.graph = new Map() 
    }

    addEdge(u, v)  {
        if(this.graph.get(u)) {
            const newEntry = this.graph.get(u);
            newEntry.push(v);
            this.graph.set(u, newEntry);
        } else {
            this.graph.set(u, [v])
        }
    }

    bfs() {
        let q = new Queue()
        let visitedMap = new Map(this.graph);
        for(let [k, v] of this.graph) {
            visitedMap.set(k, false)
            for(let i = 0; i < v.length; i++) {
                visitedMap.set(v[i], false)
            }
        }
        q.enqueue(this.graph.entries().next().value[0]);
        let result = ''
        while(!q.isEmpty()) {
            let front = q.dequeue()
            if(!visitedMap.get(front))
             result += front + ' ==> '
            visitedMap.set(front, true)
            this.graph.get(front)?.forEach(node => {
                visitedMap.get(node) === false ? q.enqueue(node): null
            })
        }
        return result
    }

    dfs() {
        const s = new Stack();
        const visitedMap = new Map();
        for(let [k,v] of this.graph) {
            visitedMap.set(k, false)
            for(let i = 0; i < v.length; i++) {
                visitedMap.set(v[i], false)
            }
        }
        s.push(this.graph.entries().next().value[0]);
        let result = '';
        while(!s.isEmpty()) {
            let top = s.pop();
            if(!visitedMap.get(top)) {
                result += top + ' ==> '
            }
            this.graph.get(top)?.forEach(node => {
                visitedMap.get(node) === false ? s.push(node): null
            })
        }
        return result
    }

    print() {
        for (let [k, v] of this.graph) {
            let str = '';
            v.forEach(element => {
                str += element + ', '
            });
            console.log('' + k, ' ==> ' + str)
        }
    }
}

const g = new Graph();

g.addEdge(1,2)
g.addEdge(1,3)
g.addEdge(1,5)
g.addEdge(3,4)
g.addEdge(3,6)
g.print()
console.log(g.bfs())
console.log(g.dfs())