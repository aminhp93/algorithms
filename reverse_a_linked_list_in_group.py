class Node:
	def __init__(self, data):
		self.data = data
		self.next = None

class LinkedList:
	def __init__(self):
		self.head = None

	def push(self, data):
		new_node = Node(data)
		new_node.next = self.head
		self.head = new_node

	def printList(self):
		temp = self.head
		while (temp):
			print(temp.data)
			temp = temp.next

	def reverse(self, head, k):
		print("reverse function")
		current = head
		next = None
		prev = None
		count = 0

		while (current and count < k):
			next = current.next
			current.next = prev
			prev = current
			current = next
			count += 1

		if next is not None:
			head.next = self.reverse(next, k)

		return prev

llist = LinkedList()
llist.push(9)
llist.push(8)
llist.push(7)
llist.push(6)
llist.push(5)
llist.push(4)
llist.push(3)
llist.push(2)
llist.push(1)


print("Given linked list")
llist.printList()
llist.head = llist.reverse(llist.head, 3)
print("\n Reversed Linked List")
llist.printList()




