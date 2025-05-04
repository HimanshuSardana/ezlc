export const categories = [
        {
                "title": "Arrays & Strings",
                "slug": "arrays-strings",
                "subcategories": [
                        {
                                "title": "Basic Manipulation",
                                "slug": "basic-manipulation",
                                "subsubcategories": [
                                        {
                                                "title": "Searching & Finding (Linear Search, Binary Search)",
                                                "slug": "searching-finding-linear-search-binary-search",
                                                "description": "Locating a specific element within a collection of data, using strategies that examine each element sequentially or efficiently narrow the search space based on ordered properties."
                                        },
                                        {
                                                "title": "Sorting & Ordering (Bubble Sort, Insertion Sort, Merge Sort, Quick Sort)",
                                                "slug": "sorting-ordering-bubble-sort-insertion-sort-merge-sort-quick-sort",
                                                "description": "These problems involve arranging a collection of items (like numbers or strings) into a specific order, such as ascending or descending, based on a defined comparison criterion. The efficiency and approach used to achieve this ordering can vary significantly between different solutions."
                                        },
                                        {
                                                "title": "Reversal & Rotation",
                                                "slug": "reversal-rotation",
                                                "description": "Problems involving manipulating the order of elements within a data structure by inverting a portion or shifting elements cyclically. These often require clever techniques to achieve efficient solutions, especially when constraints on memory or time complexity are present."
                                        },
                                        {
                                                "title": "Element Counting & Frequency",
                                                "slug": "element-counting-frequency",
                                                "description": "These problems involve determining how many times specific values or items appear within a dataset, often requiring efficient methods to store and retrieve the count for each distinct element. The goal is typically to analyze the distribution of values and identify the most frequent or least frequent occurrences."
                                        },
                                        {
                                                "title": "Sliding Window",
                                                "slug": "sliding-window",
                                                "description": "These problems involve maintaining a contiguous sub-sequence (or sub-array) of elements that expands and contracts to satisfy a given condition or optimize a value. Solutions often involve efficiently updating the computation as the sub-sequence \"slides\" along the larger sequence."
                                        }
                                ],
                                "description": "Working with fundamental building blocks like arrays, strings, or numbers, these problems involve operations such as rearranging elements, extracting specific portions, or modifying their basic properties. They often serve as a foundation for more complex algorithms and data structures."
                        },
                        {
                                "title": "Two Pointers",
                                "slug": "two-pointers",
                                "subsubcategories": [
                                        {
                                                "title": "Finding Pairs & Subarrays",
                                                "slug": "finding-pairs-subarrays",
                                                "description": "Identifying groups of elements (either pairs or sequences) within a larger dataset that satisfy specific conditions or possess particular properties. The goal often involves optimizing the search for these groups or calculating their attributes."
                                        },
                                        {
                                                "title": "Partitioning & Rearrangement",
                                                "slug": "partitioning-rearrangement",
                                                "description": "Problems that involve re-ordering elements within a data structure (often an array) based on a certain condition or pivot value, typically without creating extra space. These focus on grouping similar items together or achieving a desired relative order amongst elements."
                                        },
                                        {
                                                "title": "Palindrome related problems",
                                                "slug": "palindrome-related-problems",
                                                "description": "Problems that involve strings, sequences, or numbers where the sequence is the same when read forward or backward, often requiring analysis, manipulation, or verification of this symmetrical property. These problems commonly explore string manipulation techniques, efficient comparison methods, or properties related to symmetry and reversal."
                                        }
                                ],
                                "description": "A technique that uses two iterators to traverse a data structure, often an array or linked list, typically converging towards the middle or moving in the same direction to find a specific pattern or solution. This approach helps optimize algorithms by reducing the number of iterations required."
                        },
                        {
                                "title": "Advanced Array/String Techniques",
                                "slug": "advanced-array-string-techniques",
                                "subsubcategories": [
                                        {
                                                "title": "Prefix/Suffix Sums",
                                                "slug": "prefix-suffix-sums",
                                                "description": "Calculating cumulative values from the start or end of a sequence allows for efficient computation of sums or other aggregate functions over any contiguous subrange within that sequence. These precomputed values can then be leveraged to answer range queries in constant time."
                                        },
                                        {
                                                "title": "Dynamic Programming on Arrays/Strings",
                                                "slug": "dynamic-programming-on-arrays-strings",
                                                "description": "These problems involve finding optimal solutions to larger problems by breaking them down into overlapping subproblems solvable on subsequences or substrings of an input array or string, storing and reusing the solutions to these subproblems to avoid redundant computations. The key is identifying the recursive relation between subproblems and efficiently memorizing computed results."
                                        },
                                        {
                                                "title": "String Matching (KMP, Rabin-Karp)",
                                                "slug": "string-matching-kmp-rabin-karp",
                                                "description": "These algorithms efficiently find occurrences of a specific pattern within a larger text string by cleverly pre-processing the pattern or text to avoid redundant comparisons. They achieve this by leveraging information about previously matched characters to minimize backtracking."
                                        },
                                        {
                                                "title": "Matrix Traversal",
                                                "slug": "matrix-traversal",
                                                "description": "Algorithms that systematically access and process each element within a two-dimensional array or matrix. They often involve specific patterns like row-major, column-major, or spiral, to visit every cell in a defined order."
                                        }
                                ],
                                "description": "Efficient methods for manipulating and analyzing sequences of data, often involving clever algorithmic approaches to optimize for space and time complexity beyond basic iteration and indexing."
                        }
                ],
                "description": "Problems focused on organizing and manipulating sequences of elements, often dealing with character-based or numerical data and efficient access based on index or position. They explore techniques for processing, searching, and transforming ordered collections of data."
        },
        {
                "title": "Linked Lists",
                "slug": "linked-lists",
                "subcategories": [
                        {
                                "title": "Basic Operations",
                                "slug": "basic-operations",
                                "subsubcategories": [
                                        {
                                                "title": "Insertion & Deletion",
                                                "slug": "insertion-deletion",
                                                "description": "Problems that focus on adding and removing elements from a data structure while maintaining its integrity and specified properties, often involving careful manipulation of pointers or indices. These problems assess proficiency in managing data organization and resource allocation within a data structure."
                                        },
                                        {
                                                "title": "Traversal & Searching",
                                                "slug": "traversal-searching",
                                                "description": "Exploring the elements within a data structure, either to process each one or to locate a specific element that satisfies a certain condition. These processes often involve visiting elements in a systematic order or strategically narrowing down the search space."
                                        },
                                        {
                                                "title": "Reversal",
                                                "slug": "reversal",
                                                "description": "Transforming a sequential data arrangement by inverting the order of its elements, often within a specific range or entirely. These problems focus on manipulating element positions to achieve a mirrored or reversed sequence."
                                        }
                                ],
                                "description": "Fundamental actions performed on data, such as adding, removing, searching, or modifying elements, that serve as building blocks for more complex algorithms and data structures."
                        },
                        {
                                "title": "Two Pointer Techniques",
                                "slug": "two-pointer-techniques",
                                "subsubcategories": [
                                        {
                                                "title": "Finding Middle Node",
                                                "slug": "finding-middle-node",
                                                "description": "Given a linked list, the objective is to locate and return the node that resides in the approximate center of the list's structure. Often, this involves efficiently traversing the list to determine its length or employing techniques like the \"tortoise and hare\" algorithm."
                                        },
                                        {
                                                "title": "Detecting Cycles",
                                                "slug": "detecting-cycles",
                                                "description": "Identifying if a sequence of nodes or vertices revisits a previously encountered node, indicating a looping path within a graph or other structure. This often involves determining if traversal leads back to a starting point without fully exploring all possible paths."
                                        },
                                        {
                                                "title": "Finding Intersections",
                                                "slug": "finding-intersections",
                                                "description": "Identifying common elements or regions between multiple sets of data, such as lists or geometric shapes. These problems focus on efficiently locating shared components within distinct data collections."
                                        }
                                ],
                                "description": "Efficiently solve problems on arrays or linked lists by maintaining two pointers that move through the data structure, often in a coordinated manner, to find specific elements or meet certain conditions. This approach reduces time complexity by avoiding nested loops in many cases."
                        },
                        {
                                "title": "Advanced Linked List Problems",
                                "slug": "advanced-linked-list-problems",
                                "subsubcategories": [
                                        {
                                                "title": "Merge & Sort",
                                                "slug": "merge-sort",
                                                "description": "Algorithms that combine two or more sorted sequences into a single sorted sequence. These are often employed within sorting algorithms to recursively break down and then rebuild the data in order."
                                        },
                                        {
                                                "title": "Operations with Multiple Lists",
                                                "slug": "operations-with-multiple-lists",
                                                "description": "Problems that involve manipulating and combining data stored across several distinct linear collections, often requiring synchronized access or comparison between elements in different collections. Common tasks include merging, comparing, or transforming elements based on their position or value across these lists."
                                        },
                                        {
                                                "title": "Complex manipulations",
                                                "slug": "complex-manipulations",
                                                "description": "Problems involving intricate data transformations or rearrangements, often requiring careful consideration of edge cases and maintaining data integrity throughout the process. These problems necessitate a deep understanding of data structures and algorithms to efficiently achieve the desired outcome."
                                        }
                                ],
                                "description": "Problems that involve complex manipulations of linked list structures, often requiring multiple pointers, recursion, or clever space optimization. These challenges typically extend beyond basic traversal and insertion/deletion to solve intricate problems related to list transformations or identifying specific patterns."
                        }
                ],
                "description": "A linear data structure where elements are stored in nodes, and each node contains a value and a pointer to the next node in the sequence, enabling dynamic memory allocation and efficient insertion/deletion."
        },
        {
                "title": "Trees",
                "slug": "trees",
                "subcategories": [
                        {
                                "title": "Binary Trees",
                                "slug": "binary-trees",
                                "subsubcategories": [
                                        {
                                                "title": "Traversal (Inorder, Preorder, Postorder, Level Order)",
                                                "slug": "traversal-inorder-preorder-postorder-level-order",
                                                "description": "Systematic ways to visit each node in a tree (or graph), processing the node's data according to a specific order defined by the chosen method. Different methods cater to different processing needs, such as expression evaluation or graph exploration."
                                        },
                                        {
                                                "title": "Search & Modification",
                                                "slug": "search-modification",
                                                "description": "Problems where the goal is to locate specific data elements within a data structure and potentially alter them, or the structure itself, based on the search results."
                                        },
                                        {
                                                "title": "Height & Depth Calculation",
                                                "slug": "height-depth-calculation",
                                                "description": "Determining the distance of a node from the root or the farthest leaf is often crucial for understanding tree structure and optimizing algorithms that operate on hierarchical data. These calculations provide key insights into tree balance, node relationships, and the complexity of traversal operations."
                                        },
                                        {
                                                "title": "Binary Search Tree operations",
                                                "slug": "binary-search-tree-operations",
                                                "description": "Managing a hierarchical data structure involves performing actions like inserting, deleting, searching, and balancing nodes while maintaining the specific ordering property that dictates the left subtree contains smaller values and the right subtree contains larger values."
                                        }
                                ],
                                "description": "Hierarchical data structures where each node has at most two children, enabling efficient organization and retrieval of information based on relationships between nodes."
                        },
                        {
                                "title": "N-ary Trees",
                                "slug": "n-ary-trees",
                                "subsubcategories": [
                                        {
                                                "title": "Traversal",
                                                "slug": "traversal",
                                                "description": "Visiting every node in a data structure, such as a tree or graph, in a specific order to process or examine each one. This systematic exploration ensures that all elements are accessed and potentially modified."
                                        },
                                        {
                                                "title": "Search & Modification",
                                                "slug": "search-modification",
                                                "description": "Problems that involve locating specific data within a structure and potentially altering the structure's contents based on the search results. These tasks often combine efficient search algorithms with operations that update or restructure the data to maintain its integrity."
                                        }
                                ],
                                "description": "Hierarchical data structures where each node can have any number of child nodes, enabling representation of more complex relationships than binary trees. Common problems involve traversal, searching, and manipulation of these multi-branched tree structures."
                        },
                        {
                                "title": "Tree Algorithms",
                                "slug": "tree-algorithms",
                                "subsubcategories": [
                                        {
                                                "title": "Tree DP",
                                                "slug": "tree-dp",
                                                "description": "\"Problems solvable by cleverly traversing a tree structure and computing results at each node based on the pre-computed results from its children, allowing for efficient solutions to otherwise complex tree-related questions. It usually involves recursively solving subproblems on each subtree and combining them to obtain the solution for the entire tree.\""
                                        },
                                        {
                                                "title": "Lowest Common Ancestor (LCA)",
                                                "slug": "lowest-common-ancestor-lca",
                                                "description": "Given two nodes in a tree, find the shared ancestor that is located farthest from the root. This problem involves identifying the deepest node in a tree that is an ancestor of both specified nodes."
                                        },
                                        {
                                                "title": "Tree Serialization/Deserialization",
                                                "slug": "tree-serialization-deserialization",
                                                "description": "Converting a tree structure into a linear format (like a string) for storage or transmission, and then reconstructing the original tree from that linear representation."
                                        }
                                ],
                                "description": "These algorithms involve traversing and manipulating hierarchical data structures where elements have parent-child relationships. They are commonly used for tasks such as searching, sorting, and representing relationships between data."
                        }
                ],
                "description": "Hierarchical data structures that organize information in a parent-child relationship, enabling efficient searching, sorting, and representing relationships between data elements."
        },
        {
                "title": "Graphs",
                "slug": "graphs",
                "subcategories": [
                        {
                                "title": "Basic Graph Traversal",
                                "slug": "basic-graph-traversal",
                                "subsubcategories": [
                                        {
                                                "title": "Depth-First Search (DFS)",
                                                "slug": "depth-first-search-dfs",
                                                "description": "A traversal technique that explores as far as possible along each branch before backtracking. It systematically visits all vertices in a graph or tree structure by diving deep along each path before exploring siblings."
                                        },
                                        {
                                                "title": "Breadth-First Search (BFS)",
                                                "slug": "breadth-first-search-bfs",
                                                "description": "An algorithm for traversing or searching tree or graph data structures, exploring all the neighbor nodes at the present depth prior to moving on to the nodes at the next depth level. It is often used to find the shortest path between two nodes in an unweighted graph."
                                        },
                                        {
                                                "title": "Connected Components",
                                                "slug": "connected-components",
                                                "description": "Identifying groups of elements that are reachable from each other within a larger set, effectively partitioning the set into distinct, self-contained subsets. These subsets represent islands of connectivity where any element can be reached from any other element within the same subset."
                                        }
                                ],
                                "description": "Exploring all reachable vertices in a graph starting from a given node, systematically visiting each vertex and edge while avoiding cycles. These algorithms are used to analyze graph connectivity, find paths, and solve various graph-related problems."
                        },
                        {
                                "title": "Shortest Paths",
                                "slug": "shortest-paths",
                                "subsubcategories": [
                                        {
                                                "title": "Dijkstra's Algorithm",
                                                "slug": "dijkstra-s-algorithm",
                                                "description": "An algorithm that finds the shortest path between nodes in a graph, particularly useful for graphs with non-negative edge weights. It iteratively explores the graph, maintaining a set of known shortest paths and expanding it until the destination node is reached."
                                        },
                                        {
                                                "title": "Bellman-Ford Algorithm",
                                                "slug": "bellman-ford-algorithm",
                                                "description": "An algorithm that finds the shortest paths from a single source vertex to all other vertices in a weighted graph, even if the graph contains negative edge weights. It can also detect the presence of negative-weight cycles in the graph."
                                        },
                                        {
                                                "title": "Floyd-Warshall Algorithm",
                                                "slug": "floyd-warshall-algorithm",
                                                "description": "This algorithm efficiently computes the shortest paths between all pairs of vertices in a weighted graph, even with negative edge weights, by iteratively considering all possible intermediate nodes. It determines these shortest paths using a dynamic programming approach."
                                        }
                                ],
                                "description": "Finding the most efficient route between two points in a network, minimizing a cost metric like distance, time, or expense. These problems involve determining the optimal path through a graph or network, considering factors such as edge weights and node connections."
                        },
                        {
                                "title": "Minimum Spanning Trees",
                                "slug": "minimum-spanning-trees",
                                "subsubcategories": [
                                        {
                                                "title": "Prim's Algorithm",
                                                "slug": "prim-s-algorithm",
                                                "description": "An algorithm that finds the minimum-cost spanning tree for a weighted, undirected graph by iteratively adding the lowest-cost edge that connects a new vertex to the growing tree. It guarantees to find a tree connecting all vertices with the minimum possible total edge weight."
                                        },
                                        {
                                                "title": "Kruskal's Algorithm",
                                                "slug": "kruskal-s-algorithm",
                                                "description": "An algorithm to find a minimum spanning tree for a weighted, undirected graph by iteratively adding the cheapest edge that doesn't create a cycle. It prioritizes edges by weight, systematically building the spanning tree until all vertices are connected at minimal cost."
                                        }
                                ],
                                "description": "Finding the set of connections with the lowest total cost that link all nodes in a network together without creating any closed loops.  This ensures every node is reachable with the least possible overall connection expense."
                        },
                        {
                                "title": "Topological Sort & Directed Acyclic Graphs (DAGs)",
                                "slug": "topological-sort-directed-acyclic-graphs-dags",
                                "subsubcategories": [
                                        {
                                                "title": "Topological Sort",
                                                "slug": "topological-sort",
                                                "description": "Given a directed acyclic graph, this orders the vertices in such a way that for every directed edge from vertex A to vertex B, vertex A comes before vertex B in the ordering. The algorithm finds a linear ordering of elements that have dependencies on each other."
                                        },
                                        {
                                                "title": "Cycle detection in directed graphs",
                                                "slug": "cycle-detection-in-directed-graphs",
                                                "description": "Determining if a path exists within a network of nodes that leads back to a previously visited node. This involves finding closed loops within a structure where connections have a defined direction."
                                        }
                                ],
                                "description": "Ordering a set of elements where dependencies exist between them, ensuring that each element appears before all elements that depend on it, is a key task often solvable when the dependency graph has no cycles."
                        },
                        {
                                "title": "Advanced Graph Algorithms",
                                "slug": "advanced-graph-algorithms",
                                "subsubcategories": [
                                        {
                                                "title": "Max Flow/Min Cut",
                                                "slug": "max-flow-min-cut",
                                                "description": "Finding the maximum amount of flow possible through a network from a source to a sink, which is equivalent to finding the minimum capacity of edges that, if removed, would disconnect the source and the sink."
                                        },
                                        {
                                                "title": "Bipartite Matching",
                                                "slug": "bipartite-matching",
                                                "description": "Finding the largest set of pairings between two distinct groups where each element can be matched with at most one element from the other group is a core optimization problem. This involves maximizing the number of exclusive relationships or assignments between members of two separate sets."
                                        }
                                ],
                                "description": "Problems that require sophisticated techniques to analyze and manipulate complex relationships between entities, often involving specialized data structures and intricate traversal strategies to efficiently solve optimization or connectivity-related tasks."
                        }
                ],
                "description": "A collection of nodes connected by edges, representing relationships and enabling exploration of connections and paths between entities. They are used to model networks, relationships, and dependencies between objects."
        },
        {
                "title": "Dynamic Programming (DP)",
                "slug": "dynamic-programming-dp",
                "subcategories": [
                        {
                                "title": "1D DP",
                                "slug": "1d-dp",
                                "subsubcategories": [
                                        {
                                                "title": "Fibonacci-like Sequences",
                                                "slug": "fibonacci-like-sequences",
                                                "description": "Sequences where each element is defined as a function of preceding elements, typically involving a sum or other simple operation on a fixed number of prior terms, extending the concept of the classic sequence."
                                        },
                                        {
                                                "title": "Maximum Subarray Problems",
                                                "slug": "maximum-subarray-problems",
                                                "description": "Finding the contiguous sequence of numbers within an array that yields the largest sum. This involves identifying the subarray with the greatest possible positive aggregate value."
                                        },
                                        {
                                                "title": "Climbing Stairs variants",
                                                "slug": "climbing-stairs-variants",
                                                "description": "These problems involve determining the number of ways to reach a specific destination, typically by taking a limited set of step sizes at each stage, often with varying constraints or costs associated with each step. Solutions generally rely on dynamic programming or recursion to build up the solution from smaller subproblems."
                                        }
                                ],
                                "description": "Problems where optimal solutions for larger subproblems are built iteratively, relying only on pre-computed solutions of smaller subproblems arranged in a single linear dimension. This approach is useful when the current state can be determined from a single previous state."
                        },
                        {
                                "title": "2D DP",
                                "slug": "2d-dp",
                                "subsubcategories": [
                                        {
                                                "title": "Matrix Path Problems",
                                                "slug": "matrix-path-problems",
                                                "description": "Finding the shortest or optimal route through a grid, often with constraints on allowed movements (up, down, left, right, diagonally) and potentially involving weighted cells or obstacles. These problems typically involve traversing a two-dimensional array to reach a destination while optimizing a specific criterion like path length, cost, or value."
                                        },
                                        {
                                                "title": "Longest Common Subsequence (LCS)",
                                                "slug": "longest-common-subsequence-lcs",
                                                "description": "Finding the longest sequence of elements that appear in the same order within two or more given sequences, though not necessarily contiguously, is the core challenge. The solution involves identifying the maximal overlapping sequence present across the input sequences."
                                        },
                                        {
                                                "title": "Edit Distance",
                                                "slug": "edit-distance",
                                                "description": "Given two sequences, these problems aim to find the minimum number of single-character operations (insertions, deletions, or substitutions) required to transform one sequence into the other. These problems quantify the similarity or dissimilarity between two sequences."
                                        }
                                ],
                                "description": "These problems involve building a table where each cell's value depends on values from multiple neighboring cells, typically to find optimal solutions related to paths, subsequences, or arrangements within a two-dimensional grid or matrix. The solution is often derived by iteratively computing values in the table based on previously calculated values."
                        },
                        {
                                "title": "DP with Bitmasking",
                                "slug": "dp-with-bitmasking",
                                "subsubcategories": [
                                        {
                                                "title": "Traveling Salesman Problem (TSP) variants",
                                                "slug": "traveling-salesman-problem-tsp-variants",
                                                "description": "These problems involve finding the shortest possible route that visits each location in a set exactly once and returns to the starting point, with variations exploring different constraints or objectives related to distance, cost, or specific location requirements."
                                        },
                                        {
                                                "title": "Subset Sum Problems",
                                                "slug": "subset-sum-problems",
                                                "description": "These problems explore determining if a specific target value or a particular condition can be achieved by selecting a combination of elements from a given set. The core challenge involves finding a subset of numbers within the set that satisfies a defined mathematical property, often summation."
                                        }
                                ],
                                "description": "Problems that utilize bit manipulation to represent subsets or states, often combined with dynamic programming to efficiently explore all possible combinations and optimize a solution across them. They are useful when the size of the input is small enough that all possible combinations can be represented by individual bits within an integer."
                        },
                        {
                                "title": "DP on Trees",
                                "slug": "dp-on-trees",
                                "subsubcategories": [
                                        {
                                                "title": "Maximum path sum on tree",
                                                "slug": "maximum-path-sum-on-tree",
                                                "description": "Find the path within a tree whose nodes have values such that the sum of node values along the path is maximized. This often involves considering paths that may or may not pass through the root."
                                        },
                                        {
                                                "title": "Tree diameter.",
                                                "slug": "tree-diameter",
                                                "description": "Finding the longest path between any two nodes in a tree. This path does not necessarily have to pass through the root."
                                        }
                                ],
                                "description": "Problems where solutions for nodes in a tree are computed based on solutions of their children, often involving recursion or dynamic programming techniques to avoid redundant calculations and optimize efficiency. These problems often involve considering various states or configurations at each node, depending on its relationship with its parent or children."
                        },
                        {
                                "title": "Knapsack Problems",
                                "slug": "knapsack-problems",
                                "subsubcategories": [
                                        {
                                                "title": "0/1 Knapsack",
                                                "slug": "0-1-knapsack",
                                                "description": "Given a set of items, each with a weight and a value, select the most valuable combination of items to fit within a knapsack of limited weight capacity. The catch is that each item can only be taken entirely or left behind (no fractional amounts)."
                                        },
                                        {
                                                "title": "Unbounded Knapsack",
                                                "slug": "unbounded-knapsack",
                                                "description": "Given a set of items with associated values and weights, find the maximum total value of items that can fit within a given weight capacity, where you are allowed to take multiple instances of each item."
                                        }
                                ],
                                "description": "Given a set of items, each with a weight and a value, these problems involve determining the most valuable combination of items to include in a collection without exceeding a specified weight limit. The goal is to maximize the total value of the selected items while adhering to the weight constraint."
                        }
                ],
                "description": "An algorithmic technique that solves complex problems by breaking them down into overlapping subproblems, solving each subproblem only once, and storing the solutions to avoid redundant computations. It optimizes efficiency by building solutions iteratively from smaller, memoized results."
        },
        {
                "title": "Backtracking",
                "slug": "backtracking",
                "subcategories": [
                        {
                                "title": "Permutations & Combinations",
                                "slug": "permutations-combinations",
                                "subsubcategories": [
                                        {
                                                "title": "Generating Permutations",
                                                "slug": "generating-permutations",
                                                "description": "Creating all possible orderings or arrangements of a given set of elements is the core task. Each unique arrangement must include all elements exactly once."
                                        },
                                        {
                                                "title": "Generating Combinations",
                                                "slug": "generating-combinations",
                                                "description": "Given a set of items, these problems focus on creating all possible unique selections of a specific size, where the order of the selected items does not matter. The goal is to systematically enumerate each valid group without repetition."
                                        },
                                        {
                                                "title": "Subsets",
                                                "slug": "subsets",
                                                "description": "Finding all possible combinations of elements from a given set, where order doesn't matter and elements can either be included or excluded in each combination.  This involves generating all possible groupings of elements from a collection."
                                        }
                                ],
                                "description": "Problems that involve finding the different possible arrangements or selections of items from a set, considering order and repetition as specified. These problems often require calculating the total number of ways these arrangements or selections can be made."
                        },
                        {
                                "title": "Constraint Satisfaction",
                                "slug": "constraint-satisfaction",
                                "subsubcategories": [
                                        {
                                                "title": "N-Queens Problem",
                                                "slug": "n-queens-problem",
                                                "description": "These problems involve placing a number of queens on a chessboard such that no two queens threaten each other, meaning no two share the same row, column, or diagonal. The challenge lies in finding all possible valid arrangements of queens on the board."
                                        },
                                        {
                                                "title": "Sudoku Solver",
                                                "slug": "sudoku-solver",
                                                "description": "Finding a valid configuration of numbers to fill a partially completed grid, adhering to constraints that each row, column, and subgrid contains unique numbers. It involves systematically trying possibilities and backtracking when constraints are violated to arrive at a complete and valid solution."
                                        },
                                        {
                                                "title": "Word Search",
                                                "slug": "word-search",
                                                "description": "Given a grid of characters, determine if a given word can be constructed by traversing adjacent (horizontally or vertically) letters in the grid, potentially reusing cells. You're essentially searching for a specific path within a matrix that spells out the target word."
                                        }
                                ],
                                "description": "Finding solutions that adhere to a specific set of limitations or conditions is the goal of these problems. Solutions must meet all requirements simultaneously to be considered valid."
                        },
                        {
                                "title": "Branch & Bound",
                                "slug": "branch-bound",
                                "subsubcategories": [
                                        {
                                                "title": "Optimization related backtracking problems",
                                                "slug": "optimization-related-backtracking-problems",
                                                "description": "Problems that involve finding the best solution from a set of possible solutions by systematically exploring choices and undoing them if they lead to a suboptimal result, often using a bounding function to prune unpromising branches of the search space."
                                        }
                                ],
                                "description": "An optimization technique that explores potential solutions by systematically dividing the problem into subproblems, discarding subsets of solutions proven to be suboptimal based on pre-calculated bounds."
                        }
                ],
                "description": "A problem-solving technique that explores all possible solutions incrementally, abandoning paths that don't lead to a valid answer and reverting to a previous state to try a different choice. It's commonly used for constraint satisfaction and combinatorial optimization problems."
        },
        {
                "title": "Greedy Algorithms",
                "slug": "greedy-algorithms",
                "subcategories": [
                        {
                                "title": "Interval Problems",
                                "slug": "interval-problems",
                                "subsubcategories": [
                                        {
                                                "title": "Meeting Rooms",
                                                "slug": "meeting-rooms",
                                                "description": "These problems involve determining if a set of time intervals can be scheduled without any overlaps, often focusing on minimizing the number of resources needed to accommodate all intervals. Solutions typically leverage sorting and comparison techniques to analyze interval conflicts."
                                        },
                                        {
                                                "title": "Activity Selection",
                                                "slug": "activity-selection",
                                                "description": "Given a set of tasks with start and finish times, the goal is to select the maximum number of non-overlapping tasks that can be completed."
                                        }
                                ],
                                "description": "Problems that involve finding overlaps, merging, scheduling, or optimizing arrangements related to ranges or segments on a number line or time axis. Solutions often involve sorting, tracking start/end points, and efficiently determining intersections or containments."
                        },
                        {
                                "title": "Scheduling Problems",
                                "slug": "scheduling-problems",
                                "subsubcategories": [
                                        {
                                                "title": "Job Sequencing",
                                                "slug": "job-sequencing",
                                                "description": "Given a set of tasks each with a deadline and a profit, the goal is to select a subset of tasks that maximizes the total profit, while ensuring that each selected task is completed by its deadline."
                                        },
                                        {
                                                "title": "Task scheduling.",
                                                "slug": "task-scheduling",
                                                "description": "Optimizing the execution order of interdependent activities to meet deadlines, minimize resource consumption, or maximize throughput is a common computational challenge. The aim is to find the most efficient sequence in which to complete a collection of processes, often subject to constraints like precedence rules or resource limitations."
                                        }
                                ],
                                "description": "Problems that involve determining the optimal allocation of resources (like time or processors) to tasks, aiming to maximize efficiency, minimize costs, or meet specific deadlines. These frequently focus on how to order and assign jobs to achieve the best overall outcome given constraints."
                        },
                        {
                                "title": "Optimization Problems",
                                "slug": "optimization-problems",
                                "subsubcategories": [
                                        {
                                                "title": "Fractional Knapsack",
                                                "slug": "fractional-knapsack",
                                                "description": "Given a set of items each with a weight and a value, determine the maximum total value of items that can be placed into a knapsack with a limited weight capacity, allowing for taking fractions of items."
                                        },
                                        {
                                                "title": "Minimum coins.",
                                                "slug": "minimum-coins",
                                                "description": "Given a set of coin denominations, the problem aims to find the smallest number of coins needed to make up a specific target amount. Often utilizes dynamic programming or greedy approaches to optimize the solution."
                                        }
                                ],
                                "description": "Problems that seek the best possible solution from a set of feasible solutions, typically aiming to maximize or minimize a specific objective function subject to certain constraints. These problems often involve finding the most efficient or optimal way to allocate resources, schedule tasks, or make decisions."
                        }
                ],
                "description": "These techniques solve optimization problems by making the locally optimal choice at each step, hoping to find a global optimum. They prioritize immediate gains without considering the long-term consequences of each decision."
        },
        {
                "title": "Bit Manipulation",
                "slug": "bit-manipulation",
                "subcategories": [
                        {
                                "title": "Basic Bit Operations",
                                "slug": "basic-bit-operations",
                                "subsubcategories": [
                                        {
                                                "title": "Setting & Clearing Bits",
                                                "slug": "setting-clearing-bits",
                                                "description": "Modifying individual bits within an integer by changing their value to either 1 (set) or 0 (clear). These techniques are often used for efficient representation and manipulation of flags or states within a single variable."
                                        },
                                        {
                                                "title": "Bitwise AND, OR, XOR",
                                                "slug": "bitwise-and-or-xor",
                                                "description": "Problems that involve directly manipulating the individual bits of numbers to achieve specific results, such as setting, clearing, toggling, or extracting information from bits. These problems often leverage logical operations applied at the bit level for tasks like efficient computation or data representation."
                                        },
                                        {
                                                "title": "Counting Set Bits",
                                                "slug": "counting-set-bits",
                                                "description": "Determining the number of bits that are set to 1 in a given integer. Algorithms are optimized for efficiency in identifying these 'on' bits."
                                        }
                                ],
                                "description": "Problems that involve manipulating individual bits within integers, often for purposes such as efficient calculations, compact data representation, and low-level programming. These problems often utilize bitwise operators like AND, OR, XOR, NOT, and shifts to achieve their goals."
                        },
                        {
                                "title": "Bitwise Techniques",
                                "slug": "bitwise-techniques",
                                "subsubcategories": [
                                        {
                                                "title": "Subsets & Power Sets",
                                                "slug": "subsets-power-sets",
                                                "description": "Generating all possible combinations of elements from a given set, including the empty set, involves systematically exploring each element's presence or absence within potential combinations. This covers creating all possible groups that can be formed from the original set's members."
                                        },
                                        {
                                                "title": "Finding Single Numbers",
                                                "slug": "finding-single-numbers",
                                                "description": "Identifying unique elements within a dataset where all other elements appear a specific number of times. The goal is to isolate the element(s) occurring with a different frequency than the rest."
                                        },
                                        {
                                                "title": "Gray Code",
                                                "slug": "gray-code",
                                                "description": "Problems involving generating or manipulating sequences of binary numbers where successive values differ in only one bit position are commonly encountered. These sequences are useful in error correction, hardware design, and combinatorial generation."
                                        }
                                ],
                                "description": "Techniques that leverage operations on individual bits of numbers to efficiently solve problems related to arithmetic, sets, and logic. These methods can optimize space and time complexity by directly manipulating the binary representation of data."
                        }
                ],
                "description": "Problems that leverage the properties of individual bits within a number's binary representation to perform efficient calculations and modifications. These techniques are often used for tasks like setting, clearing, toggling, and testing specific bits, as well as optimizing arithmetic and logical operations."
        },
        {
                "title": "Heaps (Priority Queues)",
                "slug": "heaps-priority-queues",
                "subcategories": [
                        {
                                "title": "Basic Heap Operations",
                                "slug": "basic-heap-operations",
                                "subsubcategories": [
                                        {
                                                "title": "Insertion & Deletion",
                                                "slug": "insertion-deletion",
                                                "description": "Problems in this category involve modifying data structures by adding new elements or removing existing ones while maintaining the integrity and desired properties of the structure. The efficiency of these operations is a key consideration, often depending on the specific data structure and its underlying implementation."
                                        },
                                        {
                                                "title": "Heapify",
                                                "slug": "heapify",
                                                "description": "Transforming an arbitrary array into a data structure where the parent node has a specific order relationship (e.g., greater than or less than) with its children. It arranges elements to satisfy the heap property, enabling efficient retrieval of the minimum or maximum element."
                                        }
                                ],
                                "description": "Efficiently manage a collection of elements by prioritizing access to either the largest or smallest element, allowing for quick retrieval and updates while maintaining the priority order. These operations form the foundation for priority queue implementations and algorithms that require ordered data retrieval."
                        },
                        {
                                "title": "Heap Applications",
                                "slug": "heap-applications",
                                "subsubcategories": [
                                        {
                                                "title": "Kth Largest/Smallest Element",
                                                "slug": "kth-largest-smallest-element",
                                                "description": "Finding the element that would be located at a specific rank within a sorted version of a dataset, without necessarily sorting the entire dataset.  This often involves identifying the element that has a certain number of elements greater than or less than it."
                                        },
                                        {
                                                "title": "Merge K Sorted Lists",
                                                "slug": "merge-k-sorted-lists",
                                                "description": "Combine multiple individually sorted lists into a single, fully sorted list. This task typically involves efficiently comparing and merging elements from all input lists to maintain the sorted order in the final output."
                                        },
                                        {
                                                "title": "Median from Data Stream",
                                                "slug": "median-from-data-stream",
                                                "description": "Maintaining the middle element of a dynamically growing set of numbers requires efficient tracking of both the smaller and larger halves of the data. Solutions often leverage balanced data structures to ensure quick updates and retrieval of the central value(s)."
                                        }
                                ],
                                "description": "Problems that leverage a tree-based data structure to efficiently find the smallest or largest element, often used in scenarios requiring priority-based processing or maintaining ordered collections. These problems utilize the structure's properties to provide logarithmic time complexity for insertions and deletions, especially for extreme value retrieval."
                        }
                ],
                "description": "Data structures that provide efficient access to the element with the highest (or lowest) priority, allowing for quick retrieval and removal of the most important item. These are often implemented using tree-based structures that maintain a specific ordering property among parent and child nodes."
        },
        {
                "title": "Stacks & Queues",
                "slug": "stacks-queues",
                "subcategories": [
                        {
                                "title": "Basic Stack Operations",
                                "slug": "basic-stack-operations",
                                "subsubcategories": [
                                        {
                                                "title": "Parentheses matching",
                                                "slug": "parentheses-matching",
                                                "description": "Given a string containing opening and closing delimiters, determine if each opening delimiter has a corresponding closing delimiter of the same type in the correct order. Solving this involves ensuring that the delimiters are properly nested and balanced."
                                        },
                                        {
                                                "title": "Expression evaluation",
                                                "slug": "expression-evaluation",
                                                "description": "Compute the numerical result of an expression, typically involving arithmetic or logical operators and operands, based on defined precedence and associativity rules. These algorithms parse and process input strings to determine and calculate the final value."
                                        }
                                ],
                                "description": "Fundamental actions involving a last-in, first-out (LIFO) data structure, including adding elements to the top, removing elements from the top, and inspecting the top element. These operations form the building blocks for managing data in a stack-like manner."
                        },
                        {
                                "title": "Basic Queue Operations",
                                "slug": "basic-queue-operations",
                                "subsubcategories": [
                                        {
                                                "title": "Level order traversal applications",
                                                "slug": "level-order-traversal-applications",
                                                "description": "Problems solvable by systematically visiting nodes of a tree or graph layer by layer, often useful for finding shortest paths in unweighted graphs or processing nodes based on their distance from a starting point."
                                        },
                                        {
                                                "title": "Sliding window maximum",
                                                "slug": "sliding-window-maximum",
                                                "description": "Efficiently find the maximum value within a specific-sized contiguous subarray (window) as it moves sequentially through a larger array, typically without recalculating the maximum for each new window position from scratch."
                                        }
                                ],
                                "description": "Problems dealing with manipulating data in a first-in, first-out (FIFO) manner, involving adding elements to the rear and removing elements from the front. These problems focus on managing data in a linear structure where items are processed in the order they arrive."
                        },
                        {
                                "title": "Advanced Stack/Queue usage",
                                "slug": "advanced-stack-queue-usage",
                                "subsubcategories": [
                                        {
                                                "title": "Monotonic Stack",
                                                "slug": "monotonic-stack",
                                                "description": "A specific type of stack that maintains its elements in either strictly increasing or decreasing order, useful for efficiently solving problems involving nearest smaller/larger element lookups."
                                        },
                                        {
                                                "title": "Deque applications",
                                                "slug": "deque-applications",
                                                "description": "Problems that leverage the ability to efficiently add and remove elements from both ends of a data structure to solve tasks like maintaining sliding window information or implementing specialized queue-like behaviors. The data structure's dual-ended nature enables optimal solutions for tasks involving ordered processing from either direction."
                                        }
                                ],
                                "description": "Problems that leverage stack or queue properties in non-trivial ways, often requiring creative combinations or modifications to solve complex algorithmic tasks efficiently. These go beyond basic implementations and necessitate deeper understanding to optimize performance or achieve specific problem constraints."
                        }
                ],
                "description": "Ordered collections that manage element access based on specific rules: either the last element added is the first removed, or the first element added is the first removed."
        }
]

