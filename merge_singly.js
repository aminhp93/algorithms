var SinglyLinkedList = require('./singly_linked_list.js')

var sll = new SinglyLinkedList();

sll.insert(6, "head");
sll.insert(5, 6);
sll.insert(3, 5);
sll.insert(1, 3);
sll.insert(8, 1);
sll.insert(7, 8);
sll.insert(2, 7);
sll.insert(4, 2);



function mergeSortLinkedList(sll) {
    if (sll.nodeCount() < 2) {
        return sll;
    }

    var left = new SinglyLinkedList();
    var right = new SinglyLinkedList();

    var currentLeftNode = left.head
    var currentLeftNode = right.head
    var currentListNode = sll.head

    for (var i = 0; i < sll.nodeCount(); i++) {
        if (i < (sll.nodeCount()) / 2) {

        } else {

        }
        currentListNode = currentListNode.next

    }

    function mergeLinkedList(left, right) {


    }

    var answer = mergeSortLinkedList(left, right);
    answer.display()
