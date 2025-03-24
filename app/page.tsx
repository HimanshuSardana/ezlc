"use client"
import { Moon, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card } from "@/components/card";

export default function Home() {
        const categories = [
                {
                        "name": "Arrays & Strings",
                        "description": "Problems related to arrays, strings, and their common techniques.",
                        "url": "/arrays-strings"
                },
                {
                        "name": "Hashing & Counting",
                        "description": "Efficient lookup problems using HashMaps, HashSets, and frequency counts.",
                        "url": "/hashing-counting"
                },
                {
                        "name": "Linked List",
                        "description": "Problems involving linked lists, cycle detection, and pointer manipulations.",
                        "url": "/linked-list"
                },
                {
                        "name": "Stacks & Queues",
                        "description": "LIFO and FIFO data structures for solving expression evaluation and monotonic problems.",
                        "url": "/stacks-queues"
                },
                {
                        "name": "Recursion & Backtracking",
                        "description": "Problems requiring recursion, subset generation, and constraint satisfaction.",
                        "url": "/recursion-backtracking"
                },
                {
                        "name": "Binary Search & Sorting",
                        "description": "Efficient searching and sorting techniques like binary search, quicksort, and mergesort.",
                        "url": "/binary-search-sorting"
                },
                {
                        "name": "Trees & Graphs",
                        "description": "Fundamental tree and graph problems including traversal, shortest paths, and spanning trees.",
                        "url": "/trees-graphs"
                },
                {
                        "name": "Dynamic Programming",
                        "description": "Optimization problems using subproblems and memoization techniques.",
                        "url": "/dynamic-programming"
                },
                {
                        "name": "Bit Manipulation",
                        "description": "Solving problems using bitwise operators and binary tricks.",
                        "url": "/bit-manipulation"
                },
                {
                        "name": "Greedy Algorithms",
                        "description": "Optimization problems that use locally optimal choices for global results.",
                        "url": "/greedy-algorithms"
                },
                {
                        "name": "Tries & String Matching",
                        "description": "String search and pattern matching techniques using Tries and KMP algorithm.",
                        "url": "/tries-string-matching"
                },
                {
                        "name": "Heap & Priority Queue",
                        "description": "Problems using heaps for efficient retrieval of smallest or largest elements.",
                        "url": "/heap-priority-queue"
                }
        ]

        return (
                <>
                        <Navbar />
                        <div className="mx-[10%] flex flex-col gap-3">
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-[10vh] flex flex-col gap-3 items-start justify-center">
                                        <h3 className="font-black text-3xl">EzLC</h3>
                                        <p className="text-lg text-muted-foreground">A directory of LeetCode problems categorized by patterns and subpatterns.</p>
                                </motion.div>
                                <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 grid-auto-rows">
                                        {categories.map((category, index) => (
                                                <motion.div
                                                        key={index}
                                                        initial={{ opacity: 0, y: 20 }}
                                                        whileInView={{ opacity: 1, y: 0, transition: { delay: index * 0.1 } }}
                                                        viewport={{ once: true, amount: 0.5 }}
                                                >
                                                        <Card {...category} />
                                                </motion.div>
                                        ))}
                                </div>
                        </div>

                </>
        )
}

function Navbar() {
        return (
                <div className="nav flex gap-3 justify-between px-[10%] py-10 items-center">
                        <h3 className="brand font-extrabold">Ez<span className="text-primary">LC</span></h3>
                        <Button size={"icon"} variant={"ghost"}>
                                <Moon />
                        </Button>
                </div>

        )
}

