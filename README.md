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

135 - Candy

- [problem](https://leetcode.com/problems/candy/)
- [solution](/leetcode/135-candy.js)
- [repl](https://repl.it/@xiaoyunyang/leetcode-candy)
- O(N) superposition. Evaluate left2right and right2left, then combine solution via max of the two.

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

### Graph

4.1 - Route Between Nodes

- Problem: Given a Directed Graph, design an algorithm to find out whether there is a route between two nodes.
- [solution](/CTCI/4-1-route-between-nodes.js)
- [repl](https://repl.it/@xiaoyunyang/CTCI-4-1-route-between-nodes)
- We can use either BFS or DFS for this problem. BFS is more efficient. Make sure we set graph node state to `UNVISITED`, `VISITED`, `VISITING` as we traverse through the graph.

4.2 - Minimal Tree

- Problem: Given a sorted (increasing order) array with unique elements, write an algorithm to create a Binary Search Tree (BST) with minimal height.
- [solution](/CTCI/4-2-minimal-tree.js)
- [repl](https://repl.it/@xiaoyunyang/CTCI-4-2-minimal-tree)

### Hard Problems

17.26 - Sparse Similarity

- Problem: Print out the documents IDs and their similarity score iff the similarity score is greater than 0. We define similarity score as the result of dividing the number of intersections with the number of unions. For example:

  Input:

  ```javascript
  const input = {
    13: [14,15,100,9,3],
    16: [32, 1, 9, 3, 5],
    19: [15, 29, 2, 6, 8, 7],
    24: [7, 10]
  }
  ```

  Output:
  
  ```
  13,16 : 0.25
  19,24 : 0.14285714285714285
  13,19 : 0.1
  ```

- [solution](/CTCI/17-26-sparse-similarity.js)
- [repl](https://repl.it/@xiaoyunyang/CTCI-hard-sparse-similarity)
- My solution involves building two hash tables.

# Misc

## Flood Fill

- Problem:

  Given:

  ```javascript
  let grid = [ // grid could be any size
    ['blue', 'blue', 'red', 'red', 'red'],
    ['pink', 'pink', 'red', 'red', 'red'],
    ['red', 'pink', 'green', 'green', 'red'],
    ['red', 'red', 'green', 'red', 'green'],
    ['red', 'green', 'red', 'red', 'red'],
  ]
  let p = [4,2] // a valid location on the grid
  ```

  find all the locations which has the same color as the given location return the location (indices) in ascending order. For example, given the grid and point above, you should return:

  ```javascript
  [ [ 3, 3 ], [ 4, 2 ], [ 4, 3 ], [ 4, 4 ] ]
  ```

- [solution](/misc/flood-fill.js)
- [repl](https://repl.it/@xiaoyunyang/flood-fill)
- The key to solving this problem is you can use depth-first-search (DFS) or breadth-first-search (BFS) and maintain a list of explored nodes. I solved the problem using both DFS with recursion and BFS using queue + while loop. Both provide the same result. For printing out the list of points in ascending order, I had a separate function that sorted the result using JavaScript's built-in sort (quicksort), which has O(NlogN) runtime. A potential optimization for the overall algorithm is to maintain the result as a heap rather than an array. Using an array, insert is O(1) as we use the `Array.prototype.push` method; however, the tradeoff is we need to run the O(N logN) algorithm at the end. However, if we use a min heap, inserting into a min heap is O(logN). The advantage is we don't have to sort afterwards, rather, we extract the min from the min heap (runtime O(1)) until the heap is empty. Everytime we extract, the heap performs a bubble down operation (runtime O(N)). We are still going to get O(N logN) runtime with the min heap?
- For more on the flood fill problem, read the [wiki article](https://www.wikiwand.com/en/Flood_fill)

## Deserialize-1

- Problem:

  Given:

  ```javascript
  const locations = [
    {"id": 1, "name": "San Francisco Bay Area", "parent_id": null},
    {"id": 2, "name": "San Jose", "parent_id": 3},
    {"id": 3, "name": "South Bay", "parent_id": 1},
    {"id": 4, "name": "San Francisco", "parent_id": 1},
    {"id": 5, "name": "Manhattan", "parent_id": 6},
    {"id": 6, "name": "New York", "parent_id": null},
    {"id": 7, "name": "Menlo Park", "parent_id": 1},
    {"id": 8, "name": "Brooklyn", "parent_id": 6},
    {"id": 9, "name": "Alphabet City", "parent_id": 10},
    {"id": 10, "name": "East Village", "parent_id": 13},
    {"id": 11, "name": "Greenpoint", "parent_id": 8},
    {"id": 12, "name": "Williamsburg", "parent_id": 8},
    {"id": 13, "name": "Lower Manhattan", "parent_id": 5},
    {"id": 14, "name": "Soho", "parent_id": 13},
    {"id": 15, "name": "Financial District", "parent_id": 13}
  ]
  ```
  
  Print out:

  ```
  New York
  -Brooklyn
  --Greenpoint
  --Williamsburg
  -Manhattan
  --Lower Manhattan
  ---East Village
  ----Alphabet City
  ---Financial District
  ---Soho
  San Francisco Bay Area
  -Menlo Park
  -San Francisco
  -South Bay
  --San Jose
  ```
  
  Rules: (1) Child locations should be immediately after their parent, with an extra dash prepended. (2) Locations of the same level of depth should be alphabetically sorted. (3) Assume that the actual list of location will be longer (up to 100 locations), and have max up to 5 levels of depth

- [solution](/misc/deserialize-1.js)
- [repl](https://repl.it/@xiaoyunyang/AngelList-coding-test)
- My solution involves recursively building a tree where each node is a general [TreeNode](/datastructure/Node/TreeNode.js) and nodes are inserted into an ordered array of children using a `insertIntoSortedArr` function.