"use client";
import { useParams } from "next/navigation";
import { categories } from "@/data";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/card";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function TopicPage() {
        const params = useParams();
        const topic = categories.find((cat) => cat.slug === params.slug);

        if (!topic) return <p className="p-6 text-red-500">Topic not found.</p>;

        return (
                <>
                        <Navbar />
                        <div className="mx-[10%] flex flex-col gap-6 py-6">
                                <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="min-h-[10vh] flex flex-col gap-3"
                                >
                                        <h1 className="text-3xl font-extrabold">{topic.title}</h1>
                                        <p className="text-lg text-muted-foreground">{topic.description}</p>
                                </motion.div>

                                <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                        {topic.subcategories.map((sub, index) => (
                                                <motion.div
                                                        key={index}
                                                        initial={{ opacity: 0, y: 20 }}
                                                        whileInView={{ opacity: 1, y: 0, transition: { delay: index * 0.1 } }}
                                                        viewport={{ once: true, amount: 0.5 }}
                                                >
                                                        <Card {...sub} />
                                                </motion.div>
                                        ))}
                                </div>
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


