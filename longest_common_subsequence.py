# def longest_common_subsequence(str1, str2):
# 	len1 = len(str1)
# 	len2 = len(str2)

# 	L = [[None] * (len2 + 1) for i in xrange(len1 + 1)]
# 	print L
# 	for i in range(len1 + 1):
# 		for j in range(len2 + 1):
# 			if i == 0 or j == 0:
# 				L[i][j] = 0
# 			elif str1[i - 1] == str2[j - 1]:
# 				print i
# 				print j
# 				print L[i][j]
# 				print L[i - 1][j - 1]
# 				L[i][j] = L[i - 1][j - 1] + 1
# 				print L[i][j]

# 			else:
# 				L[i][j] == max(L[i - 1][j], L[i][j - 1])

# 	return L[len1][len2]


# X = "AGGTAB"
# Y = "GXTXAYB"
# print "length of LCS is ", longest_common_subsequence(X, Y)


def longest_common_subsequence_2(str1, str2, length_str1, length_str2):
	if length_str1 == 0 or length_str2 == 0:
		return 0
	elif str1[length_str1 - 1] == str2[length_str2 - 1]:
		return 1 + longest_common_subsequence_2(str1, str2, length_str1 - 1, length_str2 - 1)
	else:
		return max(longest_common_subsequence_2(str1, str2, length_str1 - 1, length_str2), longest_common_subsequence_2(str1, str2, length_str1, length_str2 - 1))



X = "AGGTAB"
Y = "GXTXAYB"
print "Length of LCS is ", longest_common_subsequence_2(X, Y, len(X), len(Y))



