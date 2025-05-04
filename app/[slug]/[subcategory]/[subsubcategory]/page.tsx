'use client'
import { use, useEffect } from "react";
import { categories } from "@/data";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ReactMarkdown from "react-markdown";

export default function SubsubcategoryPage({ params }: { params: { slug: string; subcategory: string; subsubcategory: string } }) {
        const { slug, subcategory, subsubcategory } = use(params);

        const topic = categories.find(cat => cat.slug === slug);
        const sub = topic?.subcategories.find(subcat => subcat.slug === subcategory);
        const subsub = sub?.subsubcategories.find(ss => ss.slug === subsubcategory);

        if (!topic || !sub || !subsub) {
                return <div>Not found</div>;
        }

        const markdownContent = `
# The N-Queens Problem and its Class

The N-Queens problem is a classic constraint satisfaction problem in which the goal is to place $N$ non-attacking chess queens on an $N \times N$ chessboard. Two queens are considered attacking if they are in the same row, same column, or same diagonal.

## Core Constraints

The fundamental constraints that define the N-Queens problem are:

1.  **One Queen per Row:** Each row of the chessboard must contain exactly one queen.
2.  **One Queen per Column:** Each column of the chessboard must contain exactly one queen.
3.  **No Two Queens on the Same Diagonal:** No two queens can share the same diagonal. This includes both the main diagonals (top-left to bottom-right) and the anti-diagonals (top-right to bottom-left).

## Class of Problems

The N-Queens problem belongs to the class of **NP-complete** problems. This means:

* **NP (Non-deterministic Polynomial time):** A given candidate solution (an arrangement of $N$ queens) can be verified in polynomial time to check if it satisfies all the constraints. We can iterate through all pairs of queens and check if they are attacking each other in $O(N^2)$ time.
* **NP-hard:** The problem is at least as hard as any problem in NP. If we could solve the N-Queens problem in polynomial time, we could also solve any other NP problem in polynomial time (though this is generally believed to be impossible).
* **NP-complete:** It is both in NP and NP-hard.

**Implications of NP-Completeness:**

* **No known efficient (polynomial-time) algorithm exists to solve the N-Queens problem for all possible values of $N$.** As $N$ increases, the time required to find all solutions (or even just one solution) grows exponentially in the worst case.
* **Backtracking algorithms are commonly used to solve the N-Queens problem.** These algorithms explore the search space by placing queens one by one in each row. If a placement leads to a conflict, the algorithm backtracks and tries a different placement.
* **Heuristic and approximation algorithms might be used for very large values of $N$** where finding exact solutions becomes computationally infeasible. However, these algorithms do not guarantee finding a valid solution.

## Variations and Related Problems

The N-Queens problem has several variations and is related to other combinatorial problems:

* **Counting the Number of Solutions:** Instead of just finding one solution, the problem can be to count the total number of distinct valid arrangements of $N$ queens. This is generally more computationally expensive.
* **Finding All Solutions:** Generating all possible valid configurations of $N$ queens.
* **N-Rooks Problem:** A simpler problem where the constraint is only that no two rooks can attack each other (i.e., no two rooks in the same row or column). This problem has a straightforward solution with $N!$ arrangements.
* **Other Chess Piece Placement Problems:** Similar problems can be formulated for other chess pieces like knights, bishops, or kings, often with different attacking constraints.
* **Constraint Satisfaction Problems (CSPs):** The N-Queens problem is a prime example of a CSP, where the goal is to find an assignment of values to variables (queen positions) that satisfy a set of constraints (non-attacking conditions).

## Solving the N-Queens Problem (Backtracking Approach)

A common approach to solve the N-Queens problem is using backtracking:

1.  **Represent the Board:** A 1D array or list of size $N$ can be used to represent the column position of the queen in each row. For example, 'queens[i] = j' means there is a queen in row 'i' and column 'j'.

2.  **Recursive Placement:**
    * Start by trying to place a queen in the first row.
    * For each possible column in the current row, check if placing a queen there is safe (doesn't attack any previously placed queens).
    * If it's safe, place the queen and recursively try to place a queen in the next row.
    * If a valid placement cannot be found in the next row, backtrack by removing the queen from the current position and trying the next column.

3.  **Base Case:** If all $N$ queens have been placed successfully (we reach the $N$-th row), a valid solution has been found.

**Code Snippet (Conceptual Python):**

\`\`\`python
def is_safe(board, row, col, n):
    # Check same column
    for i in range(row):
        if board[i] == col:
            return False

    # Check upper left diagonal
    for i, j in zip(range(row - 1, -1, -1), range(col - 1, -1, -1)):
        if board[i] == j:
            return False

    # Check upper right diagonal
    for i, j in zip(range(row - 1, -1, -1), range(col + 1, n)):
        if board[i] == j:
            return False

    return True

def solve_nqueens_util(board, row, n, solutions):
    if row == n:
        solutions.append(list(board))
        return

    for col in range(n):
        if is_safe(board, row, col, n):
            board[row] = col
            solve_nqueens_util(board, row + 1, n, solutions)
            # Backtrack (no explicit removal needed as we overwrite in the next iteration)

def solve_nqueens(n):
    solutions = []
    board = [-1] * n
    solve_nqueens_util(board, 0, n, solutions)
    return solutions

# Example usage for N=4
n = 4
solutions = solve_nqueens(n)
print(f"Number of solutions for N={n}: {len(solutions)}")
for sol in solutions:
    print(sol)
\`\`\`

## Conclusion

The N-Queens problem serves as an excellent example of an NP-complete constraint satisfaction problem. Its inherent complexity necessitates the use of backtracking or other search algorithms to find solutions, and its variations and related problems highlight the challenges and techniques involved in tackling combinatorial problems. Understanding the N-Queens problem provides valuable insights into the nature of computationally hard problems and the strategies used to address them.
`;

        return (
                <>
                        <Navbar />
                        <div className="mx-[10%] flex flex-col gap-3">
                                <h2 className="text-2xl font-extrabold">{subsub.title}</h2>
                                <p className="text-muted-foreground">{subsub.description}</p>

                                {/* Add problems or UI relevant to this subsubcategory */}

                                {/* Tabs for notes and problems */}
                                <Tabs defaultValue="notes" className="w-full">
                                        <TabsList className="grid w-fit grid-cols-2 mb-5">
                                                <TabsTrigger value="notes">Notes</TabsTrigger>
                                                <TabsTrigger value="problems">Problems</TabsTrigger>
                                        </TabsList>
                                        <TabsContent value="notes" className="prose prose-neutral dark:prose-invert max-w-none">
                                                <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
                                                        {markdownContent}
                                                </ReactMarkdown>
                                        </TabsContent>
                                        <TabsContent value="problems">
                                                <p>Problems</p>
                                        </TabsContent>
                                </Tabs>

                        </div>
                </>
        );
}

function Navbar() {
        const { theme, setTheme } = useTheme();
        return (
                <div className="nav flex gap-3 justify-between px-[10%] py-10 items-center">
                        <h3 className="brand font-extrabold">DSA<span className="text-primary">Atlas</span></h3>
                        <div className="flex gap-2">
                                <Button variant={"ghost"} className="text-primary font-bold" asChild>
                                        <Link href={"/predict"}>Classify Question</Link>
                                </Button>
                                <Button size={"icon"} variant={"ghost"} onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                                        {theme === "dark" ? <Sun /> : <Moon />}
                                </Button>
                        </div>
                </div>

        )
}



