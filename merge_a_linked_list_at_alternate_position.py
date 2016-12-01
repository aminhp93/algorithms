class LinkedList(object):
	def __init__(self):
		self.head = None

	class Node(object):
		def __init__(self, d):
			self.data = d
			self.next = None

	def push(self, new_data):
		new_node = self.Node(new_data)
		new_node.next = self.head
		self.head = new_node

	def merge(self, b):
		a_curr = self.head
		b_curr = b.head

		while a_curr != None and b_curr != None:
			a_next = a_curr.next
			b_next = b_curr.next

			b_curr.next = a_next
			a_curr.next = b_curr

			a_curr = a_next
			b_curr = b_next
		b.head = b_curr

	def printList(self):
		temp = self.head
		while temp != None:
			print str(temp.data)
			temp = temp.next

llist1 = LinkedList()
llist2 = LinkedList()
llist1.push(3)
llist1.push(2)
llist1.push(1)

 
print "First Linked List:"
llist1.printList()
 
llist2.push(8)
llist2.push(7)
llist2.push(6)
llist2.push(5)
llist2.push(4)
 
print "Second Linked List:"
 
llist2.printList()
llist1.merge(llist2)
 
print "Modified first linked list:"
llist1.printList()
 
print "Modified second link"
llist2.printList()