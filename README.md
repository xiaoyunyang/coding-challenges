# Coding Challenges Collection

> Solutions to coding challenges and algorithm and data structure building blocks

## Data Structures

- [Linked List](/datastructure/LinkedList.js)
- [Queue](/datastructure/Queue.js)
- [Dequeue](/datastructure/Dequeue.js)
- [MinHeap](/datastructure/MinHeap.js)
- [Union Find](/datastructure/UnionFind.js)
- Binary Search Tree
  - [BST Node](/datastructure/Node/BSTNode.js)
  - [BST Utils](/datastructure/BSTUtils.js)
- Trie
  - [Prefix Trie](/datastructure/TriePrefix.js)

Nodes

- [Singly Node](/datastructure/Node/SinglyNode.js) - use to implement Linked List
- [Doubly Node](/datastructure/Node/DoublyNode.js) - use to implement a Queue
- [Graph Node](/datastructure/Node/GraphNode.js) - use in Graph problems
- [BST Node](/datastructure/Node/BSTNode.js) - use in Binary Search Tree problems
- [Tree Node](/datastructure/Node/TreeNode.js) - use in Tree problems

## LeetCode

TOC

- [Coding Challenges Collection](#coding-challenges-collection)
  - [Data Structures](#data-structures)
  - [LeetCode](#leetcode)
    - [Leetcode 2020 04 Challenge](#leetcode-2020-04-challenge)
    - [Leetcode 2020 05 Challenge](#leetcode-2020-05-challenge)
    - [Leetcode 2020 06 Challenge](#leetcode-2020-06-challenge)
    - [Leetcode 2020 07 Challenge](#leetcode-2020-07-challenge)
    - [Leetcode 2020 08 Challenge](#leetcode-2020-08-challenge)
    - [Leetcode 2020 09 Challenge](#leetcode-2020-09-challenge)
    - [Leetcode 2020 11 Challenge](#leetcode-2020-11-challenge)
    - [Leetcode 2020 12 Challenge](#leetcode-2020-12-challenge)
    - [Leetcode 2021 01 Challenge](#leetcode-2021-01-challenge)
  - [Cracking the Coding Interview](#cracking-the-coding-interview)
    - [Arrays and Strings](#arrays-and-strings)
    - [Linked List](#linked-list)
    - [Stacks and Queues](#stacks-and-queues)
    - [Graph](#graph)
    - [Math and Logic Puzzles](#math-and-logic-puzzles)
    - [Moderate Problems](#moderate-problems)
    - [Hard Problems](#hard-problems)
  - [Misc](#misc)
    - [Flood Fill](#flood-fill)
    - [Deserialize-1](#deserialize-1)
    - [Shuffle](#shuffle)
    - [Sort 2D Array](#sort-2d-array)
    - [Array](#array)

1 - Two Sum

- [problem](https://leetcode.com/problems/two-sum/)
- [solution](/leetcode/1-two-sum.js)
- [repl](https://repl.it/@xiaoyunyang/1-two-sum)
- O(N) solution using one pass hash table storing the index of the complement number Complement is defined as `target - nums[i]`.

3 - Longest Substring Without Repeating Characters

- [problem](https://leetcode.com/problems/longest-substring-without-repeating-characters/)
- [solution](/leetcode/3-longest-substring-without-repeating-characters.js)
- [repl](https://repl.it/@xiaoyunyang/3-longest-substring-without-repeating-characters)
- O(N) solution using dynamic programming (kadane's algorithm). Keep track of the last time you saw the character in a hash table.

20 - Valid Parentheses

- [problem](https://leetcode.com/problems/valid-parentheses/)
- [solution](/leetcode/20-valid-parentheses.js)
- [repl](https://repl.it/@xiaoyunyang/20-valid-parentheses)
- O(N) solution using a stack to make sure every type of open bracket is immediately followed by a close bracket of the same type.

39 - Combination Sum

- [problem](https://leetcode.com/problems/combination-sum/)
- [solution](/leetcode/39-combination-sum.js)
- [repl](https://repl.it/@xiaoyunyang/39-combination-sum)
- O(N^T) solution using recursive backtracking.

40 - Combination Sum II

- [problem](https://leetcode.com/problems/combination-sum-ii/)
- [solution](/leetcode/40-combination-sum-ii.js)
- [repl](https://repl.it/@xiaoyunyang/40-combination-sum-ii)
- O(N^T) solution using recursive backtracking.

41 - First Missing Positive

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

129 - Sum Root to Leaf Numbers

- [problem](https://leetcode.com/problems/sum-root-to-leaf-numbers/)
- [solution](/leetcode/129-sum-root-to-leaf-numbers.js)
- [repl](https://repl.it/@xiaoyunyang/129-sum-root-to-leaf-numbers)
- O(Log N) solution via tree traversal

135 - Candy

- [problem](https://leetcode.com/problems/candy/)
- [solution](/leetcode/135-candy.js)
- [repl](https://repl.it/@xiaoyunyang/135-candy)
- O(N) Solution using Greedy algorithm. Evaluate left2right and right2left, then combine solution via max of the two.

146 - LRU Cache

- [problem](https://leetcode.com/problems/lru-cache/)
- [solution](/leetcode/146-lru-cache.js)
- [repl](https://repl.it/@xiaoyunyang/146-lru-cache)

300 - Longest Increasing Subsequence

- [problem](https://leetcode.com/problems/longest-increasing-subsequence/)
- [solution](/leetcode/300-longest-increasing-subsequence.js)
- [repl](https://repl.it/@xiaoyunyang/300-longest-increasing-subsequence)
- O(N^2) solution using LIS dynamic programming or O(N logN) solution greedy algorithm.

347 - Top K Frequent Elements

- [problem](https://leetcode.com/problems/top-k-frequent-elements/)
- [solution](/leetcode/347-top-k-frequent-elements.js)
- [repl](https://repl.it/@xiaoyunyang/347-top-k-frequent-elements)
- O(N log N) Solution by creating a frequency table.

452 - Minimum Number of Arrows to Burst Balloons

- [problem](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/)
- [solution](/leetcode/452-minimum-number-of-arrows-to-burst-balloons.js)
- [repl](https://repl.it/@xiaoyunyang/452-minimum-number-of-arrows-to-burst-balloons)

594 - Longest Harmonious Subsequence

- [problem](https://leetcode.com/problems/longest-harmonious-subsequence/)
- [solution](/leetcode/594-longest-harmonious-subsequence.js)
- [repl](https://repl.it/@xiaoyunyang/594-longest-harmonious-subsequence)
- O(N) Solution by creating a frequency table and updating a global maximum subsequence length in the loop.

690 - Employee Importance

- [problem](https://leetcode.com/problems/employee-importance/)
- [solution](/leetcode/690-employee-importance.js)
- [repl](https://repl.it/@xiaoyunyang/690-employee-importance)
- O(V\*E) Solution by first creating a hash table for easy indexing of nodes in a graph, then traverse that graph via BFS.

721 - Accounts Merge

- [problem](https://leetcode.com/problems/accounts-merge/)
- [solution](/leetcode/721-accounts-merge.js)
- [repl](https://repl.it/@xiaoyunyang/721-accounts-merge)
- Solution using graph search. emails are the vertices. create bi-directional edges from first email to every other email of each account

820 - Short Encoding of Words

- [problem](https://leetcode.com/problems/short-encoding-of-words)
- [solution](/leetcode/820-short-encoding-of-words.js)
- [repl](https://repl.it/@xiaoyunyang/leetcode-short-encoding-of-words)
- [whiteboarding](/whiteboarding/leetcode/820-short-encoding-of-words.png)
- Solution using trie of the reversed strings

945 - Minimum Increments to Make Array Unique

- [problem](https://leetcode.com/problems/minimum-increment-to-make-array-unique/)
- [solution](/leetcode/945-minimum-increments-to-make-array-unique.js)
- [repl](https://repl.it/@xiaoyunyang/945-minimum-increments-to-make-array-unique)
- O(N logN) solution using greedy algorithm.

953 - Verifying An Alien Dictionary

- [problem](https://leetcode.com/problems/verifying-an-alien-dictionary/)
- [solution](/leetcode/953-verifying-an-alien-dictionary.js)
- [repl](https://repl.it/@xiaoyunyang/953-verifying-an-alien-dictionary)
- O(N) solution using hash map to translate from alien alphabet to normal alphabet, then do a simple comparison in a loop to verify ascending order.

1138 - Alphabet Board Path

- [problem](https://leetcode.com/problems/alphabet-board-path/)
- [solution](/leetcode/1138-alphabet-board-path.js)
- [repl](https://repl.it/@xiaoyunyang/1138-alphabet-board-path)
- Solution by solving a system of equations

1276 - Number of Burgers With No Waste Of Ingredients

- [problem](https://leetcode.com/problems/number-of-burgers-with-no-waste-of-ingredients)
- [solution](/leetcode/1276-number-of-burgers-with-no-waste-of-ingredients.js)
- [repl](https://repl.it/@xiaoyunyang/1276-number-of-burgers-with-no-waste-of-ingredients)
- [whiteboarding](/whiteboarding/leetcode/1276-number-of-burgers-with-no-waste-of-ingredients.png)
- Solution by solving a system of equations

1386 - Cinema Seat Allocation

- [problem](https://leetcode.com/problems/cinema-seat-allocation/)
- [solution](/leetcode/1386-cinema-seat-allocation.js)
- [repl](https://repl.it/@xiaoyunyang/1386-cinema-seat-allocation)
- O(N) solution using bitmask, where N is the number of reserved seats.

1464 - Maximum Product of Two Elements in an Array

- [problem](https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/)
- [solution](/leetcode/1464-maximum-product-of-two-elements-in-an-array.js)
- [repl](https://repl.it/@xiaoyunyang/1464-maximum-product-of-two-elements-in-an-array)
- O(NlogN) solution by sorting the array.

1465 - Maximum Area of a Piece of Cake After Horizontal and Vertical Cuts

- [problem](https://leetcode.com/problems/maximum-area-of-a-piece-of-cake-after-horizontal-and-vertical-cuts/)
- [solution](/leetcode/1465-maximum-area-a-piece-of-cake.js)
- [repl](https://repl.it/@xiaoyunyang/1465-maximum-area-a-piece-of-cake)
- O(N+M) solution by keeping track of the maximum gaps made by the horizontal and vertical cuts. Then multiple these max gaps.

1470 - Shuffle the Array

- [problem](https://leetcode.com/problems/shuffle-the-array/)
- [solution](/leetcode/1470-shuffle-the-array.js)
- [repl](https://repl.it/@xiaoyunyang/1470-shuffle-the-array)
- O(N) solution by merging two arrays.

1471 - The k Strongest Values in an Array

- [problem](https://leetcode.com/problems/the-k-strongest-values-in-an-array/)
- [solution](/leetcode/1471-the-k-strongest-values-in-an-array.js)
- [repl](https://repl.it/@xiaoyunyang/1471-the-k-strongest-values-in-an-array)
- O(N logN) solution by pre-sorting the array and using a while-loop and two pointers.

1472 - Design Browser History

- [problem](https://leetcode.com/problems/design-browser-history/)
- [solution](/leetcode/1472-design-browser-history.js)
- [repl](https://repl.it/@xiaoyunyang/1472-design-browser-history)
- Solution using a stack and a pointer for supporting forward operations.

### Leetcode 2020 04 Challenge

136 - Single Number

- [problem](https://leetcode.com/problems/single-number/)
- [solution](/leetcode/136-single-number.js)
- [repl](https://repl.it/@xiaoyunyang/136-single-number)
- O(N) solution and O(N) space using a set. O(N) solution and O(1) space using XOR and reduce.

202 - Happy Number

- [problem](https://leetcode.com/problems/happy-number/)
- [solution](/leetcode/202-happy-number.js)
- [repl](https://repl.it/@xiaoyunyang/202-happy-number)
- O(N) solution and O(N) space using a set for cycle detection.

53 - Maximum Subarray

- [problem](https://leetcode.com/problems/maximum-subarray/)
- [solution](/leetcode/53-maximum-subarray.js)
- [repl](https://repl.it/@xiaoyunyang/53-maximum-subarray)
- O(N) solution using Kadane's Algorithm (DP)

283 - Move Zeroes

- [problem](https://leetcode.com/problems/move-zeroes/)
- [solution](/leetcode/283-move-zeroes.js)
- [repl](https://repl.it/@xiaoyunyang/283-move-zeroes)
- O(N) solution using a while-loop and two pointers

122 - Best Time to Buy and Sell Stock II

- [problem](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/)
- [solution](/leetcode/122-best-time-to-buy-and-sell-stocks-ii.js)
- [repl](https://repl.it/@xiaoyunyang/122-best-time-to-buy-and-sell-stocks-ii)
- O(N) solution by adding to result if current price is greater than previous price.

### Leetcode 2020 05 Challenge

278 - First Bad Version

- [problem](https://leetcode.com/problems/first-bad-version/)
- [solution](/leetcode/278-first-bad-version.js)
- [repl](https://repl.it/@xiaoyunyang/278-first-bad-version)
- O(logN) solution using binary search.

771 - Jewels And Stones

- [problem](https://leetcode.com/problems/jewels-and-stones/)
- [solution](/leetcode/771-jewels-and-stones.js)
- [repl](https://repl.it/@xiaoyunyang/771-jewels-and-stones)
- O(N) solution using a Set.

383 - Ransom Note

- [problem](https://leetcode.com/problems/ransom-note/)
- [solution](/leetcode/383-ransom-note.js)
- [repl](https://repl.it/@xiaoyunyang/383-ransom-note)
- O(N) solution by repeated updates to array. Faster than frequency table.

476 - Number Complement

- [problem](https://leetcode.com/problems/number-complement/)
- [solution](/leetcode/476-number-complement.js)
- [repl](https://repl.it/@xiaoyunyang/476-number-complement)
- O(k) Solution using while loop and xor to toggle bits. k is the most significant bit that's a one.

387 - First Unique Character

- [problem](https://leetcode.com/problems/first-unique-character-in-a-string/)
- [solution](/leetcode/387-first-unique-character-in-a-string.js)
- [repl](https://repl.it/@xiaoyunyang/387-first-unique-character)
- O(N) solution using JS built-in array methods `indexOf` and `lastIndexOf` to find if char is unique. Use Set to store the duplicates.

169 - Majority Element

- [problem](https://leetcode.com/problems/majority-element)
- [solution](/leetcode/169-majority-element.js)
- [repl](https://repl.it/@xiaoyunyang/169-majority-element)
- O(N) and constant space solution using Boyer-Moore majority vote algorithm.

993 - Cousins in Binary Tree

- [problem](https://leetcode.com/problems/cousins-in-binary-tree/)
- [solution](/leetcode/993-cousins-in-binary-tree.js)
- [repl](https://repl.it/@xiaoyunyang/993-cousins-in-binary-tree)
- O(logN) solution via 2 tree traversals.

1232 - Check If It Is a Straight Line

- [problem](https://leetcode.com/problems/check-if-it-is-a-straight-line/)
- [solution](/leetcode/1232-check-if-it-is-a-straight-line.js)
- [repl](https://repl.it/@xiaoyunyang/993-cousins-in-binary-tree)
- O(N) solution via comparison with a reference slope.

367 - Valid Perfect Square

- [problem](https://leetcode.com/problems/valid-perfect-square/)
- [solution](/leetcode/367-valid-perfect-square.js)
- [repl](https://repl.it/@xiaoyunyang/367-valid-perfect-square)
- O(log N) solution using binary search. Conditional guard return true if input is 0 and 1.

997 - Find the Town Judge

- [problem](https://leetcode.com/problems/find-the-town-judge/)
- [solution](/leetcode/997-find-the-town-judge.js)
- [repl](https://repl.it/@xiaoyunyang/997-find-the-town-judge)
- O(N) solution using an easier version of union-find disjoint set

733 - Flood Fill

- [problem](https://leetcode.com/problems/flood-fill/)
- [solution](/leetcode/733-flood-fill.js)
- [repl](https://repl.it/@xiaoyunyang/733-flood-fill)
- O(N+M) Solution using BFS and DFS

540 - Single Element in a Sorted Array

- [problem](https://leetcode.com/problems/single-element-in-a-sorted-array/)
- [solution](/leetcode/540-single-element-in-a-sorted-array.js)
- [repl](https://repl.it/@xiaoyunyang/540-single-element-in-a-sorted-array)
- O(logN) solution using binary search

402 - Remove K-Digit

- [problem](https://leetcode.com/problems/remove-k-digits/)
- [solution](/leetcode/402-remove-k-digits.js)
- [repl](https://repl.it/@xiaoyunyang/402-remove-k-digits)
- O(N \* K) solution using greedy algorithm.

208 - Implement Trie (Prefix Tree)

- [problem](https://leetcode.com/problems/implement-trie-prefix-tree/)
- [solution](/leetcode/208-implement-trie-prefix-tree.js)
- [repl](https://repl.it/@xiaoyunyang/208-implement-trie-prefix-tree)
- Each node is an object with key being the letter and value being a node or `end` boolean, marking where that this is the end of a word.

918 - Maximum Sum Circular Subarray

- [problem](https://leetcode.com/problems/maximum-sum-circular-subarray/)
- [solution](/leetcode/918-maximum-sum-circular-subarray.js)
- [repl](https://repl.it/@xiaoyunyang/918-maximum-sum-circular-subarray)
- O(N) solution using Kadane's algorithm to find Min subarray and max subarray.

328 - Odd Even Linked List

- [problem](https://leetcode.com/problems/odd-even-linked-list/)
- [solution](/leetcode/328-odd-even-linked-list.js)
- [repl](https://repl.it/@xiaoyunyang/328-odd-even-linked-list)
- O(N) solution using by maintaining a pointer to the end of the odd list and the beginning of the even list.

438 - Find All Anagrams in a String

- [problem](https://leetcode.com/problems/find-all-anagrams-in-a-string/)
- [solution](/leetcode/438-find-all-anagrams-in-a-string.js)
- [repl](https://repl.it/@xiaoyunyang/438-find-all-anagrams-in-a-string)
- O(N) solution using the sliding window technique to update a 26-length array to keep track of the character frequency.

567 - Permutation In String

- [problem](https://leetcode.com/problems/permutation-in-string/)
- [solution](/leetcode/567-permutation-in-string.js)
- [repl](https://repl.it/@xiaoyunyang/567-permutation-in-string)
- O(N) solution using the sliding window technique to update a 26-length array to keep track of the character frequency.

901 - Online Stock Span

- [problem](https://leetcode.com/problems/online-stock-span/)
- [solution](/leetcode/901-online-stock-span.js)
- [repl](https://repl.it/@xiaoyunyang/901-online-stock-span)
- O(N) solution using two stacks to keep track of the prices and the previous results of next. The top of the prices stack is always the minimum price seen so far.

94 - Kth Smallest Element in a BST

- [problem](https://leetcode.com/problems/kth-smallest-element-in-a-bst/)
- [solution](/leetcode/230-kth-smallest-element-in-a-bst.js)
- [repl](https://repl.it/@xiaoyunyang/230-kth-smallest-element-in-a-bst)
- O(logN) solution using In-order Traversal.

1277 - Count Square Submatrices with All Ones

- [problem](https://leetcode.com/problems/count-square-submatrices-with-all-ones/)
- [solution](/leetcode/1277-count-square-submatrices-with-all-ones.js)
- [repl](https://repl.it/@xiaoyunyang/1277-count-square-submatrices-with-all-ones)
- O(N \* M) solution using dynamic programming. Create a sum matrix to keep track of number of ones seen in a row from top, left, and left diagonal

451 - Sort Characters By Frequency

- [problem](https://leetcode.com/problems/sort-characters-by-frequency/)
- [solution](/leetcode/451-sort-characters-by-frequency.js)
- [repl](https://repl.it/@xiaoyunyang/451-sort-characters-by-frequency)
- O(N) solution using hash table

986 - Interval List Intersections

- [problem](https://leetcode.com/problems/interval-list-intersections/)
- [solution](/leetcode/986-interval-list-intersections.js)
- [repl](https://repl.it/@xiaoyunyang/986-interval-list-intersections)
- O(N) solution one while loop and two pointers

1008 - Construct Binary Search Tree from Preorder Traversal

- [problem](https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/)
- [solution](/leetcode/1008-construct-binary-search-tree-from-preorder-traversal.js)
- [repl](https://repl.it/@xiaoyunyang/1008-construct-binary-search-tree-from-preorder-traversal)
- O(N) solution by recursively building the sub-tree if the sub-tree falls within a range.

1035 - Uncrossed Lines

- [problem](https://leetcode.com/problems/uncrossed-lines/)
- [solution](/leetcode/1035-uncrossed-lines.js)
- [repl](https://repl.it/@xiaoyunyang/1035-uncrossed-lines)
- O(A \* B) solution using dynamic programming. Create a sub-problem solution matrix to keep track of the max uncrossed lines for the sub-arrays. The sub-problem is whether to include the current two items from A and B in the solution or not.

525 - Contiguous Array

- [problem](https://leetcode.com/problems/contiguous-array/)
- [solution](/leetcode/525-contiguous-array.js)
- [repl](https://repl.it/@xiaoyunyang/525-contiguous-array)
- O(N) dynamic programming solution using a variation of Kadane's algorithm and a hash table.

886 - Possible Bipartition

- [problem](https://leetcode.com/problems/possible-bipartition/)
- [solution](/leetcode/886-possible-bipartition.js)
- [repl](https://repl.it/@xiaoyunyang/886-possible-bipartition)
- O(N) solution using BFS and node coloring technique

338 - Counting Bits

- [problem](https://leetcode.com/problems/counting-bits/)
- [solution](/leetcode/338-counting-bits.js)
- [repl](https://repl.it/@xiaoyunyang/338-counting-bits)
- O(N) solution using dynamic programming

207 - Course Schedule

- [problem](https://leetcode.com/problems/course-schedule/)
- [solution](/leetcode/207-course-schedule.js)
- [repl](https://repl.it/@xiaoyunyang/207-course-schedule)
- O(N) solution using DFS cycle detection

973 - K Closest Points to Origin

- [problem](https://leetcode.com/problems/k-closest-points-to-origin/)
- [solution](/leetcode/973-k-closest-points-to-origin.js)
- [repl](https://repl.it/@xiaoyunyang/973-k-closest-points-to-origin)
- O(N) solution by sorting the input array

973 - K Closest Points to Origin

- [problem](https://leetcode.com/problems/edit-distance/)
- [solution](/leetcode/72-edit-distance.js)
- [repl](https://repl.it/@xiaoyunyang/72-edit-distance)
- O(N \* M) solution using dynamic programming

### Leetcode 2020 06 Challenge

520 - Detect Capital

- [problem](https://leetcode.com/problems/detect-capital/)
- [solution](/leetcode/520-detect-capital.js)
- [repl](https://repl.it/@xiaoyunyang/520-detect-capital)
- Solution by finding all the capital letters in the word

237 - Delete Node in a Linked List

- [problem](https://leetcode.com/problems/delete-node-in-a-linked-list/)
- [solution](/leetcode/237-delete-node-in-a-linked-list.js)
- O(1) Solution

1029 - Two City Costs

- [problem](https://leetcode.com/problems/two-city-scheduling)
- [solution](/leetcode/1029-two-city-scheduling.js)
- [repl](https://repl.it/@xiaoyunyang/leetcode-1029-two-city-scheduling)
- [whiteboarding](/whiteboarding/leetcode/1029-two-city-scheduling.png)
- Solution using a while loop with two pointers to go through a sorted list of cost difference between the cities

344 - Reverse String

- [problem](https://leetcode.com/problems/reverse-string/)
- [solution](/leetcode/344-reverse-string.js)
- O(N) solution using two pointers and a while loop to swap front and back elements of the array.

528 - Random Pick with Weights

- [problem](https://leetcode.com/problems/random-pick-with-weight/)
- [solution](/leetcode/528-random-pick-with-weight.js)
- [repl](https://repl.it/@xiaoyunyang/528-random-pick-with-weight)
- O(logN) solution by binary search over cumulative probability densities.

406 - Queue Reconstruction by Height

- [problem](https://leetcode.com/problems/queue-reconstruction-by-height/)
- [solution](/leetcode/406-queue-reconstruction-by-height.js)
- [repl](https://repl.it/@xiaoyunyang/406-queue-reconstruction-by-height)
- O(N logN) solution by pre-sorting the array by descending height and ascending K, then repeatedly update the result array.

231 - Power of Two

- [problem](https://leetcode.com/problems/power-of-two/)
- [solution](/leetcode/231-power-of-two.js)
- [repl](https://repl.it/@xiaoyunyang/231-power-of-two)
- O(logN) solution by repeatedly mod and divide the number by 2.

392 - is Subsequence

- [problem](https://leetcode.com/problems/is-subsequence/)
- [solution](/leetcode/392-is-subsequence.js)
- [repl](https://repl.it/@xiaoyunyang/392-is-subsequence)
- O(N) solution by traversing all the characters of the longer string once and deleting the head character of the shorter string whenever it matches a character from teh longer string.

35 - Search Insert Position

- [problem](https://leetcode.com/problems/search-insert-position/)
- [solution](/leetcode/35-search-insert-position.js)
- O(N) solution.

75 - Sort Colors

- [problem](https://leetcode.com/problems/sort-colors/)
- [solution](/leetcode/75-sort-colors.js)
- [repl](https://repl.it/@xiaoyunyang/75-sort-colors)
- Dutch national flag problem. Solution using two pointers to keep track of the boundaries of the outer colors.

380 - Insert Delete GetRandom O(1)

- [problem](https://leetcode.com/problems/insert-delete-getrandom-o1/)
- [solution](/leetcode/380-insert-delete-getrandom-o1.js)
- [repl](https://repl.it/@xiaoyunyang/380-insert-delete-getrandom-o1)
- Solution using a map and an array in the datastructure to achieve O(1) delete and getRandom, respectively.

787 - Cheapest Flight with K Stops

- [problem](https://leetcode.com/problems/cheapest-flights-within-k-stops/)
- [solution](/leetcode/787-cheapest-flight-with-k-stops.js)
- [repl](https://repl.it/@xiaoyunyang/787-cheapest-flight-with-k-stops)
- Solution by BFS in a graph while keeping track of distance and k

700 - Search in a Binary Tree

- [problem](https://leetcode.com/problems/search-in-a-binary-search-tree/)
- [solution](/leetcode/700-search-in-a-binary-search-tree.js)
- Solution by standard tree traversal

468 - Valid IP Address

- [problem](https://leetcode.com/problems/validate-ip-address/)
- [solution](/leetcode/468-valid-ip-address.js)
- [repl](https://repl.it/@xiaoyunyang/468-valid-ip-address)
- Solution by regex and many if-statements.

130 - Surrounded Regions

- [problem](https://leetcode.com/problems/surrounded-regions/)
- [solution](/leetcode/130-surrounded-regions.js)
- [repl](https://repl.it/@xiaoyunyang/130-surrounded-regions)
- Solution using BFS and a set for keeping track of Os connected to any O on the edge.

275 - H-Index II

- [problem](https://leetcode.com/problems/h-index-ii/)
- [solution](/leetcode/275-h-index-ii.js)
- [repl](https://repl.it/@xiaoyunyang/275-h-index-ii)
- O(logN) solution using binary search

137 - Single Number II

- [problem](https://leetcode.com/problems/single-number-ii/)
- [solution](/leetcode/137-single-number-ii.js)
- [repl](https://repl.it/@xiaoyunyang/137-single-number-ii)
- O(N) and constant space using bitwise operation.

### Leetcode 2020 07 Challenge

441 - Arranging Coins

- [problem](https://leetcode.com/problems/arranging-coins/)
- [solution](/leetcode/441-arranging-coins.js)
- [repl](https://repl.it/@xiaoyunyang/441-arranging-coins)
- O(N) solution using while loop with early return.

107 - Binary Tree Level Order Traversal II

- [problem](https://leetcode.com/problems/binary-tree-level-order-traversal-ii/)
- [solution](/leetcode/107-binary-tree-level-order-traversal-ii.js)
- [repl](https://repl.it/@xiaoyunyang/107-binary-tree-level-order-traversal-ii)
- O(N) solution using tree traversal while incrementing level and reverse the result array in a post-processing step.

66 - Plus One

- [problem](https://leetcode.com/problems/plus-one/)
- [solution](/leetcode/66-plus-one.js)
- [repl](https://repl.it/@xiaoyunyang/66-plus-one)
- O(N) solution using `unshift` to add new digit to the front of the array and use carry. Need to have a post processing step to add the extra one to the front as necessary.

### Leetcode 2020 08 Challenge

226 - Invert Binary Tree

- [problem](https://leetcode.com/problems/invert-binary-tree/)
- [solution](/leetcode/226-invert-binary-tree.js)
- O(log N) Solution. 2 recursive calls per level for logN levels.

705 - Design HashSet

- [problem](https://leetcode.com/problems/design-hashset/)
- [solution](/leetcode/705-design-hashset.js)
- Solution using a JS object.

125 - Valid Palindrome

- [problem](https://leetcode.com/problems/valid-palindrome/)
- [solution](/leetcode/125-valid-palindrome.js)
- [repl](https://repl.it/@xiaoyunyang/125-valid-palindrome)
- Solution two pointers and a while loop.

342 - Power of Four

- [problem](https://leetcode.com/problems/power-of-four/)
- [solution](/leetcode/problems/342-power-of-four.js)
- [repl](https://repl.it/@xiaoyunyang/342-power-of-four)
- O(log_4 N) solution by recursively dividing the number by 4 until the number is equal to 1.

442 - Find All Duplicates in an Array

- [problem](https://leetcode.com/problems/find-all-duplicates-in-an-array/)
- [solution](/leetcode/problems/442-find-all-duplicates-in-an-array.js)
- O(N) solution using the repeated array update strategy. As we loop, we can negate the elements at index `j` where `j=Math.abs(nums[i])-1`. This works because the constraint: `1 ≤ a[i] ≤ n (n = size of array)`. If anytime we detect that element at index `j` is negative, that means the current element is a duplicate.

### Leetcode 2020 09 Challenge

949 - Largest Time for Given Digits

- [problem](https://leetcode.com/problems/largest-time-for-given-digits/)
- [solution](/leetcode/949-largest-time-for-given-digits.js)
- [repl](https://repl.it/@xiaoyunyang/949-largest-time-for-given-digits)
- Solution using one loop and process of elimination. Pro-tip: Make A lot of helper functions.

220 - Contains Duplicate III

- [problem](https://leetcode.com/problems/contains-duplicate-iii/)
- [solution](/leetcode/220-contains-duplicate-iii.js)
- [repl](https://repl.it/@xiaoyunyang/220-contains-duplicate-iii)
- O(N logN) solution by sorting the array first and using two pointers and one while loop.

459 - Repeated Substring Pattern

- [problem](https://leetcode.com/problems/repeated-substring-pattern/)
- [solution](/leetcode/459-repeated-substring-pattern.js)
- [repl](https://repl.it/@xiaoyunyang/459-repeated-substring-pattern)
- O(N ^2) solution using a sliding window

1305 - All Elements in Two Binary Search Trees

- [problem](https://leetcode.com/problems/all-elements-in-two-binary-search-trees/)
- [solution](/leetcode/1305-all-elements-in-two-binary-search-trees.js)
- [repl](https://repl.it/@xiaoyunyang/1305-all-elements-in-two-binary-search-trees)
- Solution using two in-order traversals (time complexity O(N)) to create two sorted arrays from the BSTs, then loop through both arrays at the same time in one while-loop (time complexity O(N)) to merge the two sorted arrays, similar to the merge step of merge sort.

290 - Word Pattern

- [problem](https://leetcode.com/problems/word-pattern/)
- [solution](/leetcode/290-word-pattern.js)
- [repl](https://repl.it/@xiaoyunyang/290-word-pattern)
- O(N) solution using two hash maps.

1022 - Sum of Root To Leaf Binary Numbers

- [problem](https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/)
- [solution](/leetcode/1022-sum-of-root-to-leaf-binary-numbers.js)
- [repl](https://repl.it/@xiaoyunyang/1022-sum-of-root-to-leaf-binary-numbers)
- O(logN) solution using binary tree traversal and helper function to convert binary to a decimal number.

165 - Compare Version Numbers

- [problem](https://leetcode.com/problems/compare-version-numbers/)
- [solution](/leetcode/165-compare-version-numbers.js)
- [repl](https://repl.it/@xiaoyunyang/165-compare-version-numbers)
- O(N) solution using the weighted sum approach.

299 - Bulls and Cows

- [problem](https://leetcode.com/problems/bulls-and-cows/)
- [solution](/leetcode/299-bulls-and-cows.js)
- [repl](https://repl.it/@xiaoyunyang/299-bulls-and-cows)
- O(N) solution using one frequency table and "cancel out" the matches.

152 - Maximum Product Subarray

- [problem](https://leetcode.com/problems/maximum-product-subarray/)
- [solution](/leetcode/152-maximum-product-subarray.js)
- [repl](https://repl.it/@xiaoyunyang/152-maximum-product-subarray)
- O(N) solution using Kadane's algorithm and tracking both minimum and maximum local solutions.

216 - Combination Sum III

- [problem](https://leetcode.com/problems/combination-sum-iii/)
- [solution](/leetcode/216-combination-sum-iii.js)
- [repl](https://repl.it/@xiaoyunyang/216-combination-sum-iii)
- O(10^k) solution using Backtracking (DFS).

57 - Insert Interval

- [problem](https://leetcode.com/problems/insert-interval/)
- [solution](/leetcode/57-insert-interval.js)
- [repl](https://repl.it/@xiaoyunyang/57-insert-interval)
- O(N) solution using interval covering technique.

198 - House Robber

- [problem](https://leetcode.com/problems/house-robber/)
- [solution](/leetcode/198-house-robber.js)
- [repl](https://repl.it/@xiaoyunyang/198-house-robber)
- O(N) solution using DP Table.

58 - Length of Last Word

- [problem](https://leetcode.com/problems/length-of-last-word/)
- [solution](/leetcode/58-length-of-last-word.js)
- [repl](https://repl.it/@xiaoyunyang/58-length-of-last-word)
- O(N) solution using basic loop and `String.prototype.split` method.

421 - Maximum XOR of Two Numbers in an Array

- [problem](https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/)
- [solution](/leetcode/421-maximum-xor-of-two-numbers-in-an-array.js)
- [repl](https://repl.it/@xiaoyunyang/421-maximum-xor-of-two-numbers-in-an-array)
- O(N^2) solution using two loops.

1041 - Robot Bounded in Circle

- [problem](https://leetcode.com/problems/robot-bounded-in-circle/)
- [solution](/leetcode/1041-robot-bounded-in-circle.js)
- [repl](https://repl.it/@xiaoyunyang/1041-robot-bounded-in-circle)
- O(N) solution which stepping through the entire array of moves to calculate the robot's final direction and location.

121 - Best Time to Buy and Sell Stocks

- [problem](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)
- [solution](/leetcode/121-best-time-to-buy-and-sell-stocks.js)
- [repl](https://repl.it/@xiaoyunyang/121-best-time-to-buy-and-sell-stocks)
- O(N) solution by updating the min, max, and maxProfit as you step through the array.

1291 - Sequential Digit

- [problem](https://leetcode.com/problems/sequential-digits/)
- [solution](/leetcode/1291-sequential-digit.js)
- [repl](https://repl.it/@xiaoyunyang/1291-sequential-digit)
- O(N) solution by setting the limits of loops to min number of digits to max number of digits.

### Leetcode 2020 11 Challenge

1290 - Convert Binary Number in a Linked List to Integer

- [problem](https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/)
- [solution](/leetcode/1290-convert-binary-number-in-a-linked-list-to-integer.js)
- [repl](https://repl.it/@xiaoyunyang/1290-convert-binary-number-in-a-linked-list-to-integer)
- O(N) solution. Trick is to use `Number.parseInt()` using 2 as the radix.

1446 - Consecutive Characters

- [problem](https://leetcode.com/problems/consecutive-characters/)
- [solution](/leetcode/1466-consecutive-characters.js)
- O(N) solution. Update a globalMax every time you loop.

1217 - Minimum Cost to Move Chips to The Same Position

- [problem](https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position/)
- [solution](/leetcode/1217-minimum-cost-to-move-chips-to-the-same-position.js)
- [repl](https://repl.it/@xiaoyunyang/1217-minimum-cost-to-move-chips-to-the-same-position)
- O(N) solution. Keep track of the parity of each number as you loop through the array.

1283 - Find the Smallest Divisor Given a Threshold

- [problem](https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/)
- [solution](/leetcode/1283-find-the-smallest-divisor-given-a-threshold.js)
- [repl](https://repl.it/@xiaoyunyang/1283-find-the-smallest-divisor-given-a-threshold)
- O(log N) solution using binary search.

445 - Add Two Numbers II

- [problem](https://leetcode.com/problems/add-two-numbers-ii/)
- [solution](/leetcode/445-add-two-numbers-ii.js)
- O(N) solution using two stacks.

563 - Binary Tree Tilt

- [problem](https://leetcode.com/problems/binary-tree-tilt/)
- [solution](/leetcode/563-binary-tree-tilt.js)
- [repl](https://repl.it/@xiaoyunyang/563-binary-tree-tilt)
- O(logN) solution by tree traversal.

1026 - Maximum Difference Between Node and Ancestor

- [problem](https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/)
- [solution](/leetcode/1026-maximum-difference-between-node-and-ancestor.js)
- O(logN) solution by tree traversal. The solution is the max of the left subtree solution and right subtree solution.

832 - Flipping an Image

- [problem](https://leetcode.com/problems/flipping-an-image/)
- [solution](/leetcode/832-flipping-an-image.js)
- [repl](https://repl.it/@xiaoyunyang/832-flipping-an-image)
- O(N \* M) solution by traversing the matrix. Use two pointers in a while loop method for optimization.

593 - Valid Square

- [problem](https://leetcode.com/problems/valid-square/)
- [solution](/leetcode/593-valid-square.js)
- [repl](https://repl.it/@xiaoyunyang/593-valid-square)
- Solution using the [geometric property of a square](https://softwareengineering.stackexchange.com/questions/176938/how-to-check-if-4-points-form-a-square): find distances between all the points and check that there exists two unique non-zero distances. Optimization using a set (cleaner code).

47 - Permutations II

- [problem](https://leetcode.com/problems/permutations-ii/)
- [solution](/leetcode/47-permutations-ii.js)
- [repl](https://repl.it/@xiaoyunyang/47-permutations-ii)
- Solution using recursion (dfs). Keep track of nodes we have visited. Sort the `nums` to make sure we skip the same value. When the current value is equal to the previous value, we only use this value if the previous is used.

116 - Populating Next Right Pointers in Each Node

- [problem](https://leetcode.com/problems/populating-next-right-pointers-in-each-node/)
- [solution](/leetcode/116-populating-next-right-pointers-in-each-node.js)
- [repl](https://repl.it/@xiaoyunyang/116-populating-next-right-pointers-in-each-node)
- O(N) solution using BFS. The trick is to recognize the number of nodes to at each level doubles.

845 - Longest Mountain in Array

- [problem](https://leetcode.com/problems/longest-mountain-in-array/)
- [solution](/leetcode/845-longest-mountain-in-array.js)
- [repl](https://repl.it/@xiaoyunyang/longest-mountain-in-array)
- O(N) solution using the range splitting method.

858 - Mirror Reflection

- [problem](https://leetcode.com/problems/mirror-reflection/)
- [solution](/leetcode/858-mirror-reflection.js)
- Solution using modulo to calculate ratio of p and q.

56 - Merge Intervals

- [problem](https://leetcode.com/problems/merge-intervals/)
- [solution](/leetcode/56-merge-intervals.js)
- [repl](https://repl.it/@xiaoyunyang/56-merge-intervals)
- O(N) solution using a stack to keep track of the previous interval

394 - Decode String

- [problem](https://leetcode.com/problems/decode-string/)
- [solution](/leetcode/394-decode-string.js)
- [repl](https://repl.it/@xiaoyunyang/394-decode-string)
- O(N) solution using a stack and while loops inside a for-loop.

804 - Unique Morse Code Words

- [problem](https://leetcode.com/problems/unique-morse-code-words/)
- [solution](/leetcode/804-unique-morse-code-words.js)
- [repl](https://repl.it/@xiaoyunyang/804-unique-morse-code-words)
- O(N) solution using set to keep track of unique morse code patterns.

337 - House Robber III

- [problem](https://leetcode.com/problems/house-robber-iii/)
- [solution](/leetcode/337-house-robber-iii.js)
- [repl](https://repl.it/@xiaoyunyang/337-house-robber-iii)
- O(logN) solution using tree-traversal and divide and conquer algorithm.

239 - Sliding Window Maximum

- [problem](https://leetcode.com/problems/sliding-window-maximum/)
- [solution](/leetcode/239-sliding-window-maximum.js)
- [repl](https://repl.it/@xiaoyunyang/239-sliding-window-maximum)
- O(N) solution using Dequeue. Keep track of indices in dequeue. Prune the dequeue of out of range indices and indices whose associated number is less than the current num.

1306 - Jump Game III

- [problem](https://leetcode.com/problems/jump-game-iii/)
- [solution](/leetcode/1306-jump-game-iii.js)
- [repl](https://repl.it/@xiaoyunyang/1306-jump-game-iii)
- O(N) solution using DFS.

### Leetcode 2020 12 Challenge

104 - Maximum Depth of Binary Tree

- [problem](https://leetcode.com/problems/maximum-depth-of-binary-tree/)
- [solution](/leetcode/104-max-depth-of-binary-tree.js)
- O(logN) solution using tree traversal

605 - Can Place Flowers

- [problem](https://leetcode.com/problems/can-place-flowers/)
- [solution](/leetcode/605-can-place-flowers.js)
- [repl](https://repl.it/@xiaoyunyang/605-can-place-flowers)
- O(N) solution by counting zeros and using a function to map number of zeros to number of flowers that can be planted. Alternatively, use greedy algorithm.

117 - Populating Next Right Pointers in Each Node II

- [problem](https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/)
- [solution](/leetcode/117-populating-next-right-pointers-in-each-node-ii.js)
- [repl](https://repl.it/@xiaoyunyang/117-populating-next-right-pointers-in-each-node-ii)
- O(N) solution by keeping track of level in the queue and BFS

59 - Spiral Matrix II

- [problem](https://leetcode.com/problems/spiral-matrix-ii/)
- [solution](/leetcode/59-spiral-matrix-ii.js)
- [repl](https://repl.it/@xiaoyunyang/59-spiral-matrix-ii)
- O(N^2) solution using switch statements and index math.

1010 - Pairs of Songs With Total Durations Divisible by 60

- [problem](https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/)
- [solution](/leetcode/1010-pairs-of-songs-with-durations-divisible-by-60.js)
- [repl](https://repl.it/@xiaoyunyang/1010-pairs-of-songs-with-durations-divisible-by-60)
- O(N) solution and constant space complexity algorithm using hash table to count the frequency of the complements of each time.

941 - Valid Mountain Array

- [problem](https://leetcode.com/problems/valid-mountain-array/)
- [solution](/leetcode/941-valid-mountain-array.js)
- [repl](https://repl.it/@xiaoyunyang/941-valid-mountain-array)
- O(N) solution using two while loops to walk the array once from left to right in two phases.

80 - Remove Duplicates from Sorted Array II

- [problem](https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/)
- [solution](/leetcode/80-remove-duplicates-from-sorted-array-ii.js)
- [repl](https://repl.it/@xiaoyunyang/80-remove-duplicates-from-sorted-array-ii)
- O(N) solution using a while-loop, `splice` to modify the array in place, and no data-structure (taking advantage of the fact that the array of nums is sorted in ascending order).

865 - Smallest Subtree with all the Deepest Nodes

- [problem](https://leetcode.com/problems/smallest-subtree-with-all-the-deepest-nodes/)
- [solution](/leetcode/865-smallest-subtree-with-all-the-deepest-nodes.js)
- [repl](https://repl.it/@xiaoyunyang/865-smallest-subtree-with-all-the-deepest-nodes)
- O(logN) solution using tree traversal.

312 - Burst Balloons

- [problem](https://leetcode.com/problems/burst-balloons/)
- [solution](/leetcode/312-burst-balloons.js)
- [repl](https://repl.it/@xiaoyunyang/312-burst-balloons)
- O(N^2) solution using DP table. Each entry of the DP table stores the max coins we get from bursting bubbles between `left` and `right`.

977 - Squares of a Sorted Array

- [problem](https://leetcode.com/problems/squares-of-a-sorted-array/)
- [solution](/leetcode/977-squares-of-a-sorted-array.js)
- [repl](https://repl.it/@xiaoyunyang/977-squares-of-a-sorted-array)
- O(N) solution using a stack to keep track of the squares of the negative numbers and perform a merge operation similar to merge sort.

98 - Validate Binary Search Tree

- [problem](https://leetcode.com/problems/validate-binary-search-tree/)
- [solution](/leetcode/98-validate-binary-search-tree.js)
- [repl](https://repl.it/@xiaoyunyang/98-validate-binary-search-tree)
- O(N) solution tree traversal and composition.

334 - Increasing Triplet Subsequence

- [problem](https://leetcode.com/problems/increasing-triplet-subsequence/)
- [solution](/leetcode/334-increasing-triplet-subsequence.js)
- [repl](https://repl.it/@xiaoyunyang/334-increasing-triplet-subsequence)
- O(N) solution by updating `first` and `second` in a loop.

880 - Decoded String At Index

- [problem](https://leetcode.com/problems/decoded-string-at-index/)
- [solution](/leetcode/880-decoded-string-at-index.js)
- [repl](https://repl.it/@xiaoyunyang/880-decoded-string-at-index)
- O(N) and O(1) solution using index math.

110 - Balanced Binary Tree

- [problem](https://leetcode.com/problems/balanced-binary-tree/)
- [solution](/leetcode/110-balanced-binary-tree.js)
- [repl](https://repl.it/@xiaoyunyang/110-balanced-binary-tree)
- O(log N) tree traversal.

24 - Swap Nodes in Pairs

- [problem](https://leetcode.com/problems/swap-nodes-in-pairs/)
- [solution](/leetcode/24-swap-nodes-in-pairs.js)
- [repl](https://repl.it/@xiaoyunyang/24-swap-nodes-in-pairs)
- O(N) linked list traversal using three pointers `prev`, `curr`, and `next`.

### Leetcode 2021 01 Challenge

1640 - Check Array Formation Through Concatenation

- [problem](https://leetcode.com/problems/check-array-formation-through-concatenation/)
- [solution](/leetcode/1640-check-array-formation-through-concatenation.js)
- [repl](https://repl.it/@xiaoyunyang/1640-check-array-formation-through-concatenation)
- O(N) solution using a hash table and two pointers.

1379 - Find a Corresponding Node of a Binary Tree in a Clone of That Tree

- [problem](https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/)
- [solution](/leetcode/1379-find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree.js)
- O(logN) solution using tree traversal.

21 - Merge Two Sorted Lists

- [problem](https://leetcode.com/problems/merge-two-sorted-lists/)
- [solution](/leetcode/21-merge-two-sorted-lists.js)
- [repl](https://repl.it/@xiaoyunyang/21-merge-two-sorted-lists)
- O(N) solution using while-loop to only increment one list node at a time. For the interim data structure for merged list, use array instead of linked list for better space performance

88 - Merge Sorted Array

- [problem](https://leetcode.com/problems/merge-sorted-array/)
- [solution](/leetcode/88-merge-sorted-array.js)
- [repl](https://repl.it/@xiaoyunyang/88-merge-sorted-array)
- O(N) solution using while-loop.

2 - Add Two Numbers

- [problem](https://leetcode.com/problems/add-two-numbers/)
- [solution](/leetcode/2-add-two-numbers.js)
- O(N) solution using while-loop, carry, and keeping track of the tail of the result linked list.

## Cracking the Coding Interview

### Arrays and Strings

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

- Problem: Given a string with a number of characters in a row, compress the string by replacing the repeated characters with the character, followed by the number of occurrences. For example, aabcccccaaa becomes a2b1c5a3. If the compressed string would not be smaller than the original string, the function shall return the original string.
- [solution](/CTCI/1-6-string-compression.js)
- [repl](https://repl.it/@xiaoyunyang/CTCI-1-6-string-compression)
- O(N) solution. Make sure to check edge cases. There is an optimization we could do to break from the loop operation when a condition is met.

### Linked List

See JavaScript Implementations of [LinkedList](/datastructure/LinkedList.js) (also available in [repl](https://repl.it/@xiaoyunyang/LinkedList)).

2.1 - Remove Dups

- Problem: Remove duplicates from an unsorted linked list. How would you solve this problem if a temporary buffer is not allowed?
- [solution](/CTCI/2-1-remove-dups.js)
- [repl](https://repl.it/@xiaoyunyang/CTCI-2-1-remove-dups)
- O(N) solution using a hash table and using the `curr` and `prev` pointers. With no buffers, we use the "runner technique" where we iterate through the linked list using `curr` pointer while we have another pointer called `runner` that goes through the rest of the list which comes after `curr` to check and remove any duplicates.

### Stacks and Queues

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

### Math and Logic Puzzles

6.1 - The Heavy Pill

- Problem: You have 20 bottles of pills. 19 bottles have 1.0 gram pills, but one has pills of weight 1.1 grams. Given a scale that provides an exact measurement, how would you find the heavy bottle? You can only use the scale once.
- [solution](/CTCI/6-1-the-heavy-pill.js)
- [repl](https://repl.it/@xiaoyunyang/CTCI-6-1-the-heavy-pill)

### Moderate Problems

16.10 - Living People

- Problem: Given a list of people with their birth and death years, implement a method to compute the year with the most number of people alive.
- [solution](/CTCI/16-10-living-people.js)
- [repl](https://repl.it/@xiaoyunyang/CTCI-16-10-living-people)

  16.20 - Phoney Words

- Problem: On old cellphones,users typed on a numeric keypad and the phone would provide a list of words that matched these numbers. Each digit mapped to a set of 0 - 4 letters. Implement an algorithm to return a list of matching words, given a sequence of digits representing a phone number. You are provided a list of valid words (provided in whatever data structure you'd like).

  ```
  1     2     3
        ABC   DEF
  4     5     6
  GHI   JKL   MNO
  7     8     9
  TUV   WXYZ  PQRS
        0
  ```

- [solution](/CTCI/16-20-phoney-words.js)
- [repl](https://repl.it/@xiaoyunyang/CTCI-16-20-phoney-words)
- Note: O(M \* N) where M is number of valid words in the dictionary and N is the length of the phone number. Because N is a small number (phone numbers are usually length 10), we can treat this as a constant. Therefore, the runtime is O(M).

  16.21 - Sum Swap

- Problem: Given two arrays of integers, find a pair of values (one value from each array) that you can swap to give the two arrays the same sum
- [solution](/CTCI/16-21-sum-swap.js)
- [repl](https://repl.it/@xiaoyunyang/CTCI-16-21-sum-swap)

### Hard Problems

17.26 - Sparse Similarity

- Problem: Print out the documents IDs and their similarity score iff the similarity score is greater than 0. We define similarity score as the result of dividing the number of intersections with the number of unions. For example:

  Input:

  ```javascript
  const input = {
    13: [14, 15, 100, 9, 3],
    16: [32, 1, 9, 3, 5],
    19: [15, 29, 2, 6, 8, 7],
    24: [7, 10],
  };
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

## Misc

### Flood Fill

- Problem:

  Given grid and point:

  ```javascript
  let grid = [
    // grid could be any size
    ["blue", "blue", "red", "red", "red"],
    ["pink", "pink", "red", "red", "red"],
    ["red", "pink", "green", "green", "red"],
    ["red", "red", "green", "red", "green"],
    ["red", "green", "red", "red", "red"],
  ];

  let p = [4, 2]; // a valid location in the grid
  ```

  find all the locations which has the same color as the given location return the location (indices) in ascending order. For example, given the grid and point above, you should return:

  ```javascript
  [
    [3, 3],
    [4, 2],
    [4, 3],
    [4, 4],
  ];
  ```

- [solution](/misc/flood-fill.js)
- [repl](https://repl.it/@xiaoyunyang/flood-fill)
- The key to solving this problem is you can use depth-first-search (DFS) or breadth-first-search (BFS) and maintain a list of explored nodes. I solved the problem using both DFS with recursion and BFS using queue + while loop. Both provide the same result. For printing out the list of points in ascending order, I had a separate function that sorted the result using JavaScript's built-in sort (quicksort), which has O(NlogN) runtime. A potential optimization for the overall algorithm is to maintain the result as a heap rather than an array. Using an array, insert is O(1) as we use the `Array.prototype.push` method; however, the tradeoff is we need to run the O(N logN) algorithm at the end. However, if we use a min heap, inserting into a min heap is O(logN). The advantage is we don't have to sort afterwards, rather, we extract the min from the min heap (runtime O(1)) until the heap is empty. In a min heap, the parent is guaranteed to be smaller than its children so we could recursively extract elements in increasing order from the min heap starting from the root of the heap and working our way down the children.
- The recursion approach is also called the implicit stack-based approach because we are creating call stacks when we recurse. This is less memory efficient than a real stack.
- For more on the flood fill problem, read the [wiki article](https://www.wikiwand.com/en/Flood_fill)

### Deserialize-1

- Problem:

  Given:

  ```javascript
  const locations = [
    { id: 1, name: "San Francisco Bay Area", parent_id: null },
    { id: 2, name: "San Jose", parent_id: 3 },
    { id: 3, name: "South Bay", parent_id: 1 },
    { id: 4, name: "San Francisco", parent_id: 1 },
    { id: 5, name: "Manhattan", parent_id: 6 },
    { id: 6, name: "New York", parent_id: null },
    { id: 7, name: "Menlo Park", parent_id: 1 },
    { id: 8, name: "Brooklyn", parent_id: 6 },
    { id: 9, name: "Alphabet City", parent_id: 10 },
    { id: 10, name: "East Village", parent_id: 13 },
    { id: 11, name: "Greenpoint", parent_id: 8 },
    { id: 12, name: "Williamsburg", parent_id: 8 },
    { id: 13, name: "Lower Manhattan", parent_id: 5 },
    { id: 14, name: "Soho", parent_id: 13 },
    { id: 15, name: "Financial District", parent_id: 13 },
  ];
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

### Shuffle

- Problem: Shuffle an array.
- [solution](/misc/shuffle.js)
- [repl](https://repl.it/@xiaoyunyang/knuth-shuffle-and-sort)
- Note: Use the Knuth Shuffle (aka [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher–Yates_shuffle))

### Sort 2D Array

- Problem: Sort a 2D array of pairs. The rule is we want to sort by the first elem, then the second elem.
- [solution](/misc/sort2DArr.js)
- [repl](https://repl.it/@xiaoyunyang/knuth-shuffle-and-sort)
- Note: Write custom `compare` function to pass into `Array.sort`.

### Array

Least Frequent Array Elements

- Problem: Given an array of integers, return an array containing the integer that occurs the least number of times. If there are multiple answers, return all possibilities within the resulting array sorted in ascending order. When no solution can be deduced, return an empty array.

  ```
  Example
  Input: [10, 941, 13, 13, 13, 941]
  Output: [10]
  ```

- [solution](/misc/least-frequent-array-element.js)
- [repl](https://repl.it/@xiaoyunyang/least-frequent-array-element)
