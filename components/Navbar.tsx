"use client"
import { useTheme } from "next-themes"
import { SunIcon as Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Navbar() {
        const { theme, setTheme } = useTheme();
        return (
                <div className="nav flex gap-3 justify-between px-[10%] py-10 items-center">
                        <Link href="/"> <h3 className="brand font-extrabold">DSA<span className="text-primary">Atlas</span></h3> </Link>
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

