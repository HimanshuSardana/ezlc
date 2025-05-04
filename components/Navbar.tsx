"use client"
import { Button } from "./ui/button"
import Link from "next/link";
import { Moon, Sun } from 'lucide-react'
import { useTheme } from "next-themes";

export function Navbar() {
        const { theme, setTheme } = useTheme();
        return (
                <div className="nav flex gap-3 justify-between px-[10%] py-10 items-center">
                        <h3 className="brand font-extrabold">Ez<span className="text-primary">LC</span></h3>
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



