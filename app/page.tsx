import { useTheme } from "next-themes";
import { SunIcon as Sun, Moon, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card } from "@/components/card";
import { categories } from "@/data";
import { getProblems } from "./actions/getProblems";
import { Navbar } from "@/components/Navbar";

export default async function Home() {
        return (
                <>
                        <Navbar />
                        <div className="mx-[10%] flex flex-col gap-3">
                                <div className="min-h-[10vh] flex flex-col gap-3 items-start justify-center">
                                        <h3 className="font-black text-3xl">DSA Atlas</h3>
                                        <p className="text-lg text-muted-foreground">A directory of LeetCode problems categorized by patterns and subpatterns.</p>
                                </div>
                                <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 grid-auto-rows">
                                        {categories.map((category, index) => (
                                                <div key={index} className="h-full">
                                                        <Card {...category} />
                                                </div>
                                        ))}
                                </div>
                        </div>
                </>
        )
}
