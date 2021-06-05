class MinHeap {
    constructor() {
        this.heap = []
    }

    getLeftIndex(index) {
        return 2 * index + 1
    }

    getRightIndex(index) {
        return 2 * index + 2
    }

    getParentIndex(index) {
        if (index === 0) {
            return undefined
        }
        return Math.floor((index - 1) / 2)
    }

    insert(value) {
        if (value != null) {
            this.heap.push(value)
            this.shiftUP(this.heap.length - 1)
            return true
        }
        return false
    }

    size() {
        return this.heap.length
    }

    isEmpty() {
        return this.size() === 0
    }

    findMinnum() {
        return this.isEmpty() ? undefined : this.heap[0]
    }

    extract() {
        if (this.isEmpty()) {
            return undefined
        }
        if (this.size() == 1) {
            return this.heap.shift()
        }
        const removeValue = this.heap.shift()
        this.shiftDown(0)
        return removeValue
    }

    peek() {
    }

    shiftUP(index) {
        let parent = this.getParentIndex(index)
        while (index > 0 && this.heap[index] < this.heap[parent]) {
            [this.heap[index], this.heap[parent]] = [this.heap[parent], this.heap[index]]
            index = parent
            parent = this.getParentIndex(parent)
        }
    }

    shiftDown(index) {
        let element = index
        const left = this.getLeftIndex(index)
        const right = this.getRightIndex(index)
        const size = this.size()
        if (left < size && this.heap[element] > this.heap[left]) {
            element = left
        }
        if (right < size && this.heap[element] > this.heap[right]) {
            element = right
        }
        if (element > index) {
            [this.heap[element], this.heap[index]] = [this.heap[index], this.heap[element]]
            this.shiftDown(element)
        }
    }
}

const heap = new MinHeap()
heap.insert(2)
heap.insert(3)
heap.insert(4)
heap.insert(5)
heap.insert(1)


console.log(heap.extract());
console.log(heap.extract());
console.log(heap.extract());
