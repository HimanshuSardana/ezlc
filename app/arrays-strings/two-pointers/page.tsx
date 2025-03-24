"use client"
import { usePathname } from 'next/navigation'
import React from 'react'
import { Button } from '@/components/ui/button'
import { Moon } from 'lucide-react'
import { Card } from '@/components/card'
import { motion } from 'framer-motion'

function SubSubCategoryPage() {
        const pathname = usePathname()
        const subcategories = [
                {
                        "name": "Pointers Moving in Opposite Directions",
                        "description": "Two pointers moving towards each other to find pairs or rearrange elements.",
                        "url": "/opposite-direction"
                },
                {
                        "name": "Pointers Moving in Same Direction",
                        "description": "Two pointers moving in the same direction for merging, traversal, or fast-slow techniques.",
                        "url": "/same-direction"
                }
        ]

        return (
                <>
                        <Navbar />
                        <div className="mx-[10%] flex flex-col gap-3">
                                <div className="min-h-[10vh] flex flex-col gap-3 items-start justify-center">
                                        <h3 className="font-black text-3xl">Two Pointers</h3>
                                        <p className="text-lg text-muted-foreground">Techniques involving two pointers moving in the same or opposite directions to solve problems efficiently.</p>
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

export default SubSubCategoryPage

