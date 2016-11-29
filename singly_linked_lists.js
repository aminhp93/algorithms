var SinglyLinkedList = (function() {
    function Node(element) {
        this.element = element
        this.next = null
    }

    function SinglyLinkedList() {
        this.head = new Node("head")
    }


    SinglyLinkedList.prototype.find = function(element) {
        var currentNode = this.head

        while (currentNode.element !== element) {
            currentNode = currentNode.next
        }
        return currentNode
    }

    SinglyLinkedList.prototype.insert = function(newElement, element) {

        var newNode = new Node(newElement);
        var current = this.find(element);
        newNode.next = current.next;
        current.next = newNode;

    }


    SinglyLinkedList.prototype.display = function() {
        var currentNode = this.head

        while (currentNode.next) {
            console.log(currentNode.next.element)
            currentNode = currentNode.next
        }
    }

    SinglyLinkedList.prototype.findPrevious = function(element) {
        var currentNode = this.head

        while (currentNode.next !== null && currentNode.next.element !== element) {
            currentNode = currentNode.next
        }

        return currentNode
    }

    SinglyLinkedList.prototype.remove = function(element) {
        var previousNode = this.findPrevious(element)

        previousNode.next = previousNode.next.next

    }

    SinglyLinkedList.prototype.nodeCount = function() {
        var currentNode = this.head
        var count = 0

        while (currentNode.next !== null) {
            currentNode = currentNode.next
            count++
        }
        return count
    }


    return SinglyLinkedList
})()

module.exports = SinglyLinkedList

var cities = new SinglyLinkedList();
cities.insert("Los Angeles", "head")
cities.insert("San Fran", "Los Angeles")
cities.insert("Seattle", "San Fran")
cities.display()

var basketballTeams = new SinglyLinkedList();
basketballTeams.insert("Lakers", "head");
basketballTeams.insert("Blazers", "Lakers");
basketballTeams.insert("Celtics", "Blazers");
basketballTeams.insert("Kings", "Celtics");
basketballTeams.display();
console.log("Removing Celtics");
basketballTeams.remove("Celtics");
basketballTeams.display();
