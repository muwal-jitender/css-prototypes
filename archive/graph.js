const isNullOrWhiteSpace = str => str == null || str.trim() === '';
class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(element) {

        if (Array.isArray(element)) {
            element.forEach(item => {
                this.items.push(item);
            });
        }
        else {
            if (isNullOrWhiteSpace(element)) return;
            this.items.push(element);
        }
    }
    dequeue = () => {
        if (this.isEmpty()) return 'No Element in queue';
        const item = this.items[0];
        this.items.shift();
        return item;
    }
    isEmpty() {
        return this.items.length === 0;
    }

    printQueue = () => {
        for (const item of this.items) {
            console.log(item);
        }
    }
}


let graph = new Map();
// first class conecction --> fcc
let fcc = ['Alice', 'Bob', 'Claire'];
graph.set('You', fcc);
graph.set(fcc[1], ['Anuj', 'Peggy']);
graph.set(fcc[2], ['Thom'], ['Jonny']);
graph.set(fcc[0], ['Peggy']);
graph
graph.set('Anuj', []);
graph.set('Peggy', []);
graph.set('Thom', []);
graph.set('Jonny', []);

const search = () => {
    const queue = new Queue();
    queue.enqueue(graph.get('You'));
    let searched = [];
    while (!queue.isEmpty()) {

        const person = queue.dequeue();
        if (searched.includes(person)) continue;
        console.log(`Checking ${person}`);

        if (isSeller(person)) {
            console.log(`${person} is a seller`);
            return true;
        }
        else {
            queue.enqueue(graph.get(person));
            searched.push(person);
        }
    }
    console.log(`There is a no seller in your network`);
    return false;
}

const isSeller = (person) => {
    return person[person.length - 1] === 'z';
}

search();
//queue.printQueue();

//console.log(grapth);