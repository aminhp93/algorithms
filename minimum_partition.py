def minimum_partition(arr, i, sumCalculated, sumTotal):
	if i == 0:
		return abs((sumTotal - sumCalculated) - sumCalculated)

	return min(minimum_partition(arr, i - 1, sumCalculated + arr[i - 1], sumTotal), minimum_partition(arr, i - 1, sumCalculated, sumTotal))

def findMin(arr, n):
	sumTotal = 0
	for i in range(0, n):
		sumTotal += arr[i]

	return minimum_partition(arr, n, 0, sumTotal)

print findMin([1,4,9,19],4)

def findMin_2(arr, n):
	sum = 0
	for i in range(0, n):
		sum += arr[i]

	dp = [[0 for x in range(sum)] for x in range(n)]
	print dp

	for i in range(0, n):
		dp[i][0] = 1
	print dp

	for i in range(1, sum):
		dp[0][i] = 0
	print dp

	for i in range(1, n):
		for j in range(1, sum ):
			dp[i][j] = dp[i - 1][j]
			if arr[i - 1] <= j:
				dp[i][j] = dp[i - 1][j - arr[i - 1]]

	print dp, "minh"

	diff = 0
	j = sum/2
	print j
	while j > 0:
		if dp[n - 1][j] == 1:
			diff = sum - 2*j
			print diff
			break
		j -= 1
	return diff

print findMin_2([1,4,9,19],4)




















