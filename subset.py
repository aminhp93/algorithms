def subsets(nums):
  if nums is None: return None
  subsets = [[]] 
  next = [] 
  for n in nums:
    for s in subsets:
      next.append(s + [n])
    subsets += next
    next = []
  return subsets 

# print(subsets([1,2,3]))

def subs(l):
    if len(l) == 1:
        return [l]
    res = []
    print res, "1"
    subsets = subs(l[0:-1])
    print subsets
    res = res+subsets
    print res, "2"
    res.append([l[-1]])
    print res, "3"
    for sub in subsets:
        res.append(sub+[l[-1]])
        print res, "4"
    return res

print(subs([1,2,3,4]))
print([1,2,3][-1])





