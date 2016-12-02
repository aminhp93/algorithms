def longest_increasing_subsequence(arr):
	n = len(arr)

	lis = [1] * n
	for i in range(1, n):
		for j in range(0, i):
			if arr[i] > arr[j] and lis[i] < lis[j] + 1:
				print arr[i], arr[j]
				lis[i] = lis[j] + 1
				print lis
	maximum = 0
	for i in range(n):
		maximum = max(maximum, lis[i])

	return maximum


# arr = [9,10,11,1,2,3,4,5]
arr = [10, 22, 9, 33, 21, 50, 41, 60]

print "Length of lis is", longest_increasing_subsequence(arr)