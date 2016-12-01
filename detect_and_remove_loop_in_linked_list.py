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

	def detectAndRemoveLoop(self):
		pointer_1 = pointer_2 = self.head

		while(pointer_1 and pointer_2 and pointer_2.next):
			pointer_1 = pointer_1.next
			pointer_2 = pointer_2.next.next

			if pointer_1 == pointer_2:
				self.removeLoop(pointer_1)
				return 1

		return 0

	def detectAndRemoveLoop_2(self):
		pointer_1 = pointer_2 = self.head

		while(pointer_1 and pointer_2 and pointer_2.next):
			pointer_1 = pointer_1.next
			pointer_2 = pointer_2.next.next

			if pointer_1 == pointer_2:
				self.removeLoop_2(pointer_1)
				return 1

		return 0

	def removeLoop(self, loop_node):
		pointer_1 = self.head

		while (1):
			pointer_2 = loop_node
			while (pointer_2.next != loop_node and pointer_2.next != pointer_1):
				pointer_2 = pointer_2.next

			if pointer_2.next == pointer_1:
				break

			pointer_1 = pointer_1.next

		pointer_2.next = None


	def removeLoop_2(self, loop_node):
		pointer_1 = loop_node
		pointer_2 = loop_node

		k = 1
		while (pointer_1.next != pointer_2):
			pointer_1 = pointer_1.next
			k += 1

		pointer_1 = self.head
		pointer_2 = self.head

		for i in range(k):
			pointer_2 = pointer_2.next

		# while (pointer_2 != pointer_1):
		# 	pointer_1 = pointer_1.next
		# 	pointer_2 = pointer_2.next

		# pointer_2 = pointer_2.next

		# while (pointer_2.next != pointer_1):
		# 	pointer_2 = pointer_2.next
		
		pointer_2.next.next = None





llist = LinkedList()
llist.push(10)
llist.push(4)
llist.push(15)
llist.push(20)
llist.push(50)
 
# Create a loop for testing
llist.head.next.next.next.next.next = llist.head.next.next
 
# llist.detectAndRemoveLoop()

llist.detectAndRemoveLoop_2()
 
print "Linked List after removing loop"
llist.printList()












