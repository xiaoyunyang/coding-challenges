# LeetCode

41 - First Missing Postiive

- [problem](https://leetcode.com/problems/first-missing-positive)
- [solution](/leetcode/41-first-missing-positive.js)
- [repl](https://repl.it/@xiaoyunyang/leetcode-first-missing-positive)
- hash table, O(N) solution

42 - Trapping Rain Water

- [problem](https://leetcode.com/problems/trapping-rain-water/)
- [solution](/leetcode/42-trapping-rain-water.js)
- [repl](https://repl.it/@xiaoyunyang/leetcode-trapping-rain-water)
- while-loop, two pointers, O(N) solution

43 - Multiply Strings

- [problem](https://leetcode.com/problems/multiply-strings/)
- [solution](/leetcode/43-multiply-strings.js)
- [repl](https://repl.it/@xiaoyunyang/leetcode-multiply-strings)
- nested for-loops, O(N^2) solution

# Cracking the Coding Interview

## Arrays and Strings

1.1 - isUnique

- Problem: Determine if string contains unique characters. What if you cannot use additional data structures?
- [solution](/CTCI/1-1-is-unique.js)
- [repl](https://repl.it/@xiaoyunyang/CTCI-1-1-is-unique)
- O(N) solution with hash table or O(NlogN) with sorting.

1.2 - checkPermutation

- Problem: given two strings, determine if the second string is a permutation (anagram) of the first string.
- [solution](/CTCI/1-2-check-permutation.js)
- [repl](https://repl.it/@xiaoyunyang/CTCI-1-2-check-permutation)
- O(N) solution with hash table or O(NlogN) with sorting. Optimization up-front: if lengths of the strings are different, return false immediately.

1.3 - URLify

- Problem: given a string, replace all the whitespaces with "%20".
- [solution](/CTCI/1-3-URLify.js)
- [repl](https://repl.it/@xiaoyunyang/CTCI-1-3-URLify)
- O(N) solution. Use regex `/^\s$` to test each character. Need to handle edge cases such as if there are mutiple whitespaces in a row or whitespaces at the end of the string.
