def groupAnagrams(input):
	store = {}
	for word in input:
		sortedWord = ''.join(sorted(word))
		if sortedWord not in store:
			store[sortedWord] = []
		store[sortedWord].append(word)
	
	
	return list(store.values())




input = ["yo", "act", "flop", "tac", "cat", "oy", "olfp"]

print(groupAnagrams(input))
