var Queue = (function() {
    function Queue() {
        this.dataStore = []
        this.back = 0;
    }

    Queue.prototype.enqueue = function(item) {
        this.dataStore[this.back] = item
        this.back++
    }

    Queue.prototype.dequeue = function() {
        var output = this.dataStore[0]
        for (var i = 1; i < this.back; i++) {
            this.dataStore[i - 1] = this.dataStore[i]
        }
        this.back--;
        return output


    }

    Queue.prototype.display = function() {
        for (var i = 0; i < this.back; i++) {
            console.log(this.dataStore[i])
        }
    }

    return Queue
})();


var queue = new Queue()
queue.enqueue("Bird")
queue.enqueue("Magic")
queue.enqueue("Jordan")
queue.enqueue("Kobe")
queue.display()
console.log("Your can stop waiting Bird")
queue.dequeue()
queue.display()





module.exports = Queue;
