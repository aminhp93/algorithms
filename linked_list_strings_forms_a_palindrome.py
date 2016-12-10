class Node:
	def __init__(self, data):
		self.data = data
		self.next = None

class LinkedList:
	def __init__(self):
		self.head = None

	def isPalindromeUtil(self, string):
		return (string == string[::-1])

	def isPalindrome(self):
		node = self.head
		temp = []

		while node is not None:
			temp.append(node.data)
			node = node.next
		string = "".join(temp)
		return self.isPalindromeUtil(string)

	def printList(self):
		temp = self.head
		while temp:
			print temp.data
			temp = temp.next

llist = LinkedList()
llist.head = Node('a')
llist.head.next = Node('bc')
llist.head.next.next = Node("d")
llist.head.next.next.next = Node("dcb")
llist.head.next.next.next.next = Node("a")
print "true" if llist.isPalindrome() else "false"


