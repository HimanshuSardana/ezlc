import { categories } from "@/constants/data";
import { Navbar } from "@/components/Navbar";
import { AnimatedCard } from "@/components/AnimatedCard";
import { h3 } from "framer-motion/client";

export default function CategoriesPage() {
        const currentUrl = `/categories`;
        return (
                <>
                        <Navbar />
                        <div className="mx-[10%] flex flex-col gap-3">
                                <h3 className="font-black text-3xl">EzLC</h3>
                                <p className="text-lg text-muted-foreground">A directory of LeetCode problems categorized by patterns and subpatterns.</p>
                                <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 grid-auto-rows">
                                        {categories.map((category, index) => (
                                                <AnimatedCard key={index} index={index} name={category.name} description={category.description} url={`${currentUrl}/${category.url}`} />
                                        ))}
                                </div>
                        </div>
                </>
        )
}
