var SinglyLinkedList = require('./singly_linked_lists.js')


function mergeSortLinkedList(sll) {
    if (sll.nodeCount() < 2) {
        return sll;
    }

    var left = new SinglyLinkedList();
    var right = new SinglyLinkedList();

    var currentLeftNode = left.head
    var currentRightNode = right.head
    var currentListNode = sll.head

    for (var i = 0; i < sll.nodeCount(); i++) {
        if (i < (sll.nodeCount()) / 2) {
            left.insert(currentListNode.next.element, currentLeftNode.element)
            currentLeftNode = currentLeftNode.next
        } else {
            right.insert(currentListNode.next.element, currentRightNode.element)
            currentRightNode = currentRightNode.next
        }
        currentListNode = currentListNode.next

    }

    return mergeLinkedList(mergeSortLinkedList(left), mergeSortLinkedList(right))
}

function mergeLinkedList(left, right) {

    var output = new SinglyLinkedList();
    var currentOutput = output.head;

    //case 1
    while (left.nodeCount() > 0 && right.nodeCount() > 0) {
        if (left.head.next.element <= right.head.next.element) {
            output.insert(left.head.next.element, currentOutput.element)
            left.remove(left.head.next.element)
            currentOutput = currentOutput.next
        } else {
            output.insert(right.head.next.element, currentOutput.element)
            right.remove(right.head.next.element)
            currentOutput = currentOutput.next
        }
    }

    while (left.nodeCount() > 0) {
        output.insert(left.head.next.element, currentOutput.element)
        left.remove(left.head.next.element)
        currentOutput = currentOutput.next
    }

    while (right.nodeCount() > 0) {
        output.insert(right.head.next.element, currentOutput.element)
        right.remove(right.head.next.element)
        currentOutput = currentOutput.next
    }

    return output

}


var sll = new SinglyLinkedList();

sll.insert(6, "head");
sll.insert(5, 6);
sll.insert(3, 5);
sll.insert(1, 3);
sll.insert(8, 1);
sll.insert(7, 8);
sll.insert(2, 7);
sll.insert(4, 2);


var answer = mergeSortLinkedList(sll);
answer.display()
