var Stack = (function() {
    function Stack() {
        this.dataStore = []
        this.top = 0
    }

    Stack.prototype.push = function(item) {
        this.dataStore.push(item)
    }

    Stack.prototype.pop = function() {
        this.dataStore.pop()
    }

    Stack.prototype.display = function() {
        for (var i = 0; i < this.dataStore.length; i++) {
            console.log(this.dataStore[i])
        }
    }

    return Stack;
})()



var stack = new Stack()
stack.push("Bulbasaur")
stack.push("Charmander")
stack.push("Squirtle")

stack.display()

console.log("taking out Squitlre")
stack.pop()
stack.display()
console.log("Adding Pikachu")
stack.push("Pikachu")
stack.display()


module.exports = Stack
