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
- O(N) solution. Use regex `/^\s$` to test each character to see if it is a whitespace. Need to handle edge cases such as if there are mutiple whitespaces in a row or whitespaces at the end of the string.

1.4 - Palindrome Permutation

- Problem: Given a string, determine if the string is a permutation of a palindrome.
- [solution](/CTCI/1-4-palindrome-permutation.js)
- [repl](https://repl.it/@xiaoyunyang/CTCI-1-4-palindrome-permutation)
- O(N) solution using a hash table. Use `str.replace(/\s/g, '')` to get the string without whitespaces.

1.5 - One Away

- Problem: Given s1 and s2, determine if s1 and s2 differ by one edit away. Define edit as inserting a char, deleting a char, or replacing a char.
- [solution](/CTCI/1-5-one-away.js)
- [repl](https://repl.it/@xiaoyunyang/CTCI-1-5-one-away)
- O(N) solution. Modularize the solution by writing helper functions.

1.6 - String Compression

- Problem: Given a string with a number of characters in a row, compress the string by replacing the repeated characters with the character, followed by the number of occurences. For example, aabcccccaaa becomes a2b1c5a3. If the compressed string would not be smaller than the original string, the function shall return the original string.
- [solution](/CTCI/1-6-string-compression.js)
- [repl](https://repl.it/@xiaoyunyang/CTCI-1-6-string-compression)
- O(N) solution. Make sure to check edge cases. There is an optimization we could do to break from the loop operation when a condition is met.

## Linked List

See JavaScript Implementations of [LinkedList](/datastructure/LinkedList.js) (also available in [repl](https://repl.it/@xiaoyunyang/LinkedList)).

2.1 - Remove Dups

- Problem: Remove duplicates from an unsorted linked list. How would you solve this problem if a temporary buffer is not allowed?
- [solution](/CTCI/2-1-remove-dups.js)
- [repl](https://repl.it/@xiaoyunyang/CTCI-2-1-remove-dups)
- O(N) solution using a hash table and using the `curr` and `prev` pointers. With no buffers, we use the "runner technique" where we iterate through the linked list using `curr` pointer while we have another pointer called `runner` that goes through the rest of the list which comes after `curr` to check and remove any duplicates.

## Stacks and Queues

See JavaScript Implementations of [Queue](/datastructure/Queue.js) using Doubly Linked List (also available in [repl](https://repl.it/@xiaoyunyang/Queue)).