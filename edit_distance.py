def edit_distance(str1, str2, m , n):
	if m == 0:
		return n
	if n == 0:
		return m

	if str1[m - 1] == str2[n - 1]:
		return edit_distance(str1, str2, m - 1, n -1 )

	return 1 + min(edit_distance(str1, str2, m - 1, n), edit_distance(str1, str2, m, n - 1), edit_distance(str1, str2, m- 1, n-1))

str1 = "sunday"
str2 = "saturday"
 
print(edit_distance(str1, str2, len(str1), len(str2)))

def edit_distance_2(str1, str2, m, n):
	dp = [[0 for x in range(n+1)] for x in range(m+1)]
	print dp
	for i in range(m + 1):
		for j in range(n + 1):
			if i == 0:
				dp[i][j] = j
			elif j == 0:
				dp[i][j] = i
			elif str1[i - 1] == str2[j - 1]:
				dp[i][j] = dp[i - 1][j - 1]
			else:
				dp[i][j] = 1 + min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1])
	return dp[m][n]


str1 = "sunday"
str2 = "saturday"
 
print(edit_distance_2(str1, str2, len(str1), len(str2)))