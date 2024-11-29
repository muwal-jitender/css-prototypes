class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(item) {
        this.items.push(item);
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
        for (const item of items) {
            console.log(item);
        }
    }
}

