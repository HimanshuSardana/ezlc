"use client"
import { usePathname } from 'next/navigation'
import React from 'react'
import { Button } from '@/components/ui/button'
import { Moon } from 'lucide-react'
import { Card } from '@/components/card'
import { motion } from 'framer-motion'

function SubCategoryPage() {
        const pathname = usePathname()
        const subcategories = [
                {
                        "name": "Two Pointers",
                        "description": "Techniques involving two pointers moving in the same or opposite directions to solve problems efficiently.",
                        "url": "/two-pointers"
                },
                {
                        "name": "Sliding Window",
                        "description": "Optimized approach for handling subarray problems by dynamically adjusting a window over the input.",
                        "url": "/sliding-window"
                },
                {
                        "name": "Prefix Sum & Difference Array",
                        "description": "Techniques used for efficient range sum queries and subarray computations.",
                        "url": "/prefix-sum-difference-array"
                },
                {
                        "name": "Kadane’s Algorithm",
                        "description": "Dynamic programming approach to finding the maximum sum subarray efficiently.",
                        "url": "/kadanes-algorithm"
                },
                {
                        "name": "Sorting-Based",
                        "description": "Problem-solving strategies that leverage sorting and custom comparators.",
                        "url": "/sorting-based"
                },
                {
                        "name": "Matrix Traversal",
                        "description": "Common techniques for navigating 2D matrices such as DFS, BFS, and pattern-based traversal.",
                        "url": "/matrix-traversal"
                }
        ]

        return (
                <>
                        <Navbar />
                        <div className="mx-[10%] flex flex-col gap-3">
                                <div className="min-h-[10vh] flex flex-col gap-3 items-start justify-center">
                                        <h3 className="font-black text-3xl">Arrays and Strings</h3>
                                        <p className="text-lg text-muted-foreground">Problems related to arrays, strings, and their common techniques.</p>
                                </div>
                                <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 grid-auto-rows">
                                        {subcategories.map((subcategory, index) => (
                                                <motion.div
                                                        key={index}
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={{ opacity: 1, y: 0, transition: { delay: index * 0.1 } }}
                                                >
                                                        <Card key={index} {...subcategory} url={`${pathname}/${subcategory.url}`} />
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

export default SubCategoryPage
