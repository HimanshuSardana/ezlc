import { Button } from "./ui/button"
import { Moon } from 'lucide-react'
export function Navbar() {
        return (
                <div className="nav flex gap-3 justify-between px-[10%] py-10 items-center">
                        <h3 className="brand font-extrabold">Ez<span className="text-primary">LC</span></h3>
                        <Button size={"icon"} variant={"ghost"}>
                                <Moon />
                        </Button>
                </div>

        )
}

