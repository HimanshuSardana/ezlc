import { Button } from "./ui/button"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

type CardProps = {
        name: string,
        description: string,
        url: string
}

export function Card({ name, description, url }: CardProps) {
        return (
                <div className="bg-accent/50 p-5 border rounded-md h-full">
                        <div className="flex items-start justify-between">
                                <div className="flex flex-col gap-2">
                                        <h3 className="text-lg font-bold">{name}</h3>
                                        <p className="text-muted-foreground">{description}</p>
                                </div>
                                <Button size={"icon"} variant={"secondary"} className="rounded-full bg-inherit hover:bg-border/80" asChild>
                                        <Link href={url}>
                                                <ChevronRight size={28} />
                                        </Link>
                                </Button>
                        </div>
                </div>
        )
}

