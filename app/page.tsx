"use client"
import { useTheme } from "next-themes";
import { SunIcon as Sun, Moon, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card } from "@/components/card";
import { categories } from "@/data";

export default function Home() {
        return (
                <>
                        <Navbar />
                        <div className="mx-[10%] flex flex-col gap-3">
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-[10vh] flex flex-col gap-3 items-start justify-center">
                                        <h3 className="font-black text-3xl">DSA Atlas</h3>
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




