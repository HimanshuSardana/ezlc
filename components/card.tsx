"use client"
import { Button } from "./ui/button"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

type CardProps = {
        title: string,
        description?: string,
        slug: string
}

export function Card({ title, description, slug }: CardProps) {
        const pathname = usePathname();
        return (
                <div className="bg-accent/50 p-5 border rounded-md h-full">
                        <div className="flex items-start justify-between">
                                <div className="flex flex-col gap-2">
                                        <h3 className="text-lg font-bold">{title}</h3>
                                        <p className="text-muted-foreground">{description?.slice(0, 120)}...</p>
                                </div>
                                <Button
                                        size="icon"
                                        variant="secondary"
                                        className="rounded-full bg-inherit hover:bg-border/80"
                                        asChild
                                >
                                        <Link href={`${pathname.replace(/\/$/, '')}/${slug}`}>
                                                <ChevronRight size={28} />
                                        </Link>
                                </Button>
                        </div>
                </div>
        );
}

