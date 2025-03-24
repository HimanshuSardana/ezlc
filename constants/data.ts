export const categories =
        [
                {
                        "id": "arrays-strings",
                        "name": "Arrays & Strings",
                        "description": "Techniques and problems related to arrays and strings, focusing on optimization strategies.",
                        "url": "/arrays-strings",
                        "subcategories": [
                                {
                                        "id": "two-pointers",
                                        "name": "Two Pointers",
                                        "description": "Techniques where two pointers move in a specific manner to optimize searches and comparisons.",
                                        "url": "/two-pointers",
                                        "subcategories": [
                                                {
                                                        "id": "opposite-direction",
                                                        "name": "Pointers Moving in Opposite Directions",
                                                        "description": "Two pointers start from different ends and move towards each other.",
                                                        "url": "/opposite-direction",
                                                        "problems": [
                                                                { "name": "Finding Pairs", "description": "Find pairs that meet a specific condition using the two-pointer approach." },
                                                                { "name": "Partitioning / Rearrangement", "description": "Rearrange elements in an array using two pointers to optimize time complexity." }
                                                        ]
                                                },
                                                {
                                                        "id": "same-direction",
                                                        "name": "Pointers Moving in Same Direction",
                                                        "description": "Two pointers start from the same end and move together.",
                                                        "url": "/same-direction",
                                                        "problems": [
                                                                { "name": "Merging Two Sorted Arrays", "description": "Merge two sorted arrays efficiently by maintaining pointers at each list." },
                                                                { "name": "Fast-Slow Pointer Technique", "description": "Used for cycle detection and finding middle elements in linked lists." }
                                                        ]
                                                }
                                        ]
                                },
                                {
                                        "id": "sliding-window",
                                        "name": "Sliding Window",
                                        "description": "Technique for efficiently solving problems involving contiguous subarrays.",
                                        "problems": [
                                                { "name": "Fixed Window Size", "description": "Sliding window of a fixed length moves over an array to optimize performance." },
                                                { "name": "Variable Window Size", "description": "Dynamically adjust the window size based on given constraints." }
                                        ]
                                }
                        ]
                },
                {
                        "id": "linked-lists",
                        "name": "Linked Lists",
                        "description": "Problems and algorithms related to singly and doubly linked lists.",
                        "url": "/linked-lists",
                        "subcategories": [
                                {
                                        "id": "fast-slow-pointers",
                                        "name": "Fast & Slow Pointers",
                                        "description": "Technique used in cycle detection, finding middle elements, and other list operations.",
                                        "problems": [
                                                { "name": "Detect Cycle in Linked List", "description": "Use Floyd’s cycle detection algorithm to find a cycle." },
                                                { "name": "Find the Middle Node", "description": "Use the slow-fast pointer approach to locate the middle of the list." }
                                        ]
                                },
                                {
                                        "id": "reversal",
                                        "name": "Linked List Reversal",
                                        "description": "Problems related to reversing linked lists and sublists.",
                                        "problems": [
                                                { "name": "Reverse a Linked List", "description": "Reverse a singly linked list using an iterative or recursive approach." },
                                                { "name": "Reverse K-Group Nodes", "description": "Reverse nodes in groups of K in a linked list." }
                                        ]
                                }
                        ]
                },
                {
                        "id": "stacks-queues",
                        "name": "Stacks & Queues",
                        "description": "Stack and queue-based problems including monotonic stacks, min/max queues, and more.",
                        "url": "/stacks-queues",
                        "subcategories": [
                                {
                                        "id": "monotonic-stack",
                                        "name": "Monotonic Stack",
                                        "description": "A stack that maintains a monotonic order for efficient problem solving.",
                                        "problems": [
                                                { "name": "Next Greater Element", "description": "Find the next greater element for each element in an array using a stack." },
                                                { "name": "Largest Rectangle in Histogram", "description": "Find the largest rectangular area in a histogram using a stack." }
                                        ]
                                },
                                {
                                        "id": "priority-queue",
                                        "name": "Priority Queue",
                                        "description": "Heap-based data structure used in optimization problems.",
                                        "problems": [
                                                { "name": "Kth Largest Element in an Array", "description": "Use a min-heap to find the Kth largest element efficiently." },
                                                { "name": "Merge K Sorted Lists", "description": "Use a priority queue to merge multiple sorted linked lists." }
                                        ]
                                }
                        ]
                },
                {
                        "id": "recursion-backtracking",
                        "name": "Recursion & Backtracking",
                        "description": "Recursive problem-solving techniques including backtracking for constraint-based problems.",
                        "url": "/recursion-backtracking",
                        "subcategories": [
                                {
                                        "id": "permutations",
                                        "name": "Permutations & Combinations",
                                        "description": "Generating all possible permutations or combinations of a given set.",
                                        "problems": [
                                                { "name": "Generate Parentheses", "description": "Generate all valid parentheses combinations using backtracking." },
                                                { "name": "N-Queens", "description": "Solve the N-Queens problem using backtracking." }
                                        ]
                                },
                                {
                                        "id": "subsets",
                                        "name": "Subsets & Subsequences",
                                        "description": "Generate all subsets or subsequences of a given array.",
                                        "problems": [
                                                { "name": "Power Set", "description": "Find all subsets of a given set using recursion." },
                                                { "name": "Word Break", "description": "Use recursion to check if a word can be segmented into dictionary words." }
                                        ]
                                }
                        ]
                },
                {
                        "id": "graphs",
                        "name": "Graphs",
                        "description": "Graph algorithms including traversal, shortest paths, and cycle detection.",
                        "url": "/graphs",
                        "subcategories": [
                                {
                                        "id": "graph-traversal",
                                        "name": "Graph Traversal",
                                        "description": "Techniques for traversing graphs using DFS or BFS.",
                                        "problems": [
                                                { "name": "Connected Components", "description": "Find the number of connected components in an undirected graph." },
                                                { "name": "Cycle Detection", "description": "Detect cycles in a directed or undirected graph." }
                                        ]
                                },
                                {
                                        "id": "shortest-path",
                                        "name": "Shortest Path Algorithms",
                                        "description": "Algorithms to find the shortest path in graphs.",
                                        "problems": [
                                                { "name": "Dijkstra’s Algorithm", "description": "Find the shortest path from a source to all nodes in a weighted graph." },
                                                { "name": "Bellman-Ford Algorithm", "description": "Find the shortest paths while handling negative weight edges." }
                                        ]
                                }
                        ]
                },
                {
                        "id": "dynamic-programming",
                        "name": "Dynamic Programming",
                        "description": "Optimization technique that breaks problems into overlapping subproblems.",
                        "url": "/dynamic-programming",
                        "subcategories": [
                                {
                                        "id": "knapsack",
                                        "name": "Knapsack & DP on Subsequences",
                                        "description": "Solving problems related to selecting items under constraints.",
                                        "problems": [
                                                { "name": "0/1 Knapsack", "description": "Select items to maximize value while staying within a weight limit." },
                                                { "name": "Unbounded Knapsack", "description": "Items can be chosen multiple times while maximizing value." }
                                        ]
                                },
                                {
                                        "id": "dp-on-strings",
                                        "name": "Dynamic Programming on Strings",
                                        "description": "Solving problems involving string operations with DP.",
                                        "problems": [
                                                { "name": "Longest Common Subsequence", "description": "Find the longest subsequence common to two strings." },
                                                { "name": "Edit Distance", "description": "Find the minimum edits needed to transform one string into another." }
                                        ]
                                }
                        ]
                }
        ]

