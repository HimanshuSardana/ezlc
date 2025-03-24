"use client"
import React from 'react'
import { Button } from '@/components/ui/button'
import { Moon } from 'lucide-react'
import { Card } from '@/components/card'
import { motion } from 'framer-motion'
import { Separator } from '@/components/ui/separator'
import { ChevronLeft } from 'lucide-react'

function SubSubCategoryPage() {
        const subcategories = []

        return (
                <>
                        <Navbar />
                        <div className="mx-[10%] flex flex-col gap-3">
                                <div className="min-h-[10vh] flex flex-col gap-3 items-start justify-center">
                                        <h3 className="font-black text-3xl">Pointers Moving in Opposite Directions</h3>
                                        <p className="text-lg text-muted-foreground">Two pointers moving towards each other to find pairs or rearrange elements.</p>

                                        <h3 className='font-black text-2xl'>Problems</h3>
                                </div>
                                <div className="grid grid-cols-3 gap-3">
                                        {subcategories?.map((subcategory, index) => (
                                                <motion.div
                                                        key={index}
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={{ opacity: 1, y: 0, transition: { delay: index * 0.1 } }}
                                                >
                                                        <Card key={index} {...subcategory} />
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

