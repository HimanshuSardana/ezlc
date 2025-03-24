import { categories } from "@/constants/data";
import { Navbar } from "@/components/Navbar";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Card } from "@/components/card";
import { AnimatedCard } from "@/components/AnimatedCard";
import { motion } from "framer-motion";

function findCategoryByPath(slug: string[], nodes: any): any | null {
        if (!Array.isArray(nodes)) return null;

        for (const node of nodes) {
                if (node.id === slug[0]) {
                        if (slug.length === 1) return node;
                        if (Array.isArray(node.subcategories)) {
                                return findCategoryByPath(slug.slice(1), node.subcategories);
                        }
                }
        }
        return null;
}


export default function CategoryPage({ params }: { params: { slug: string[] } }) {
        const currentUrl = `/categories/${params.slug.join("/")}`;
        const category = findCategoryByPath(params.slug, categories[0]);

        if (!category) return notFound();

        return (
                <div>
                        <Navbar />
                        <div className="mx-[10%] flex flex-col gap-3">
                                <div className="min-h-[10vh] flex flex-col gap-3 items-start justify-center">
                                        <h3 className="font-black text-3xl">{category.name}</h3>
                                        <p className="text-lg text-muted-foreground">{category.description}</p>
                                </div>
                                <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 grid-auto-rows">
                                        {category.subcategories && category.subcategories.map((subcategory: any, index: number) => (
                                                <AnimatedCard key={index} index={index} name={subcategory.name} description={subcategory.description} url={`${currentUrl}/${subcategory.url}`} />
                                        ))}
                                </div>
                                {category.problems && (
                                        <div>
                                                <h2>Problems</h2>
                                                <ul>
                                                        {category.problems.map((problem: any) => (
                                                                <li key={problem.name}>{problem.name}: {problem.description}</li>
                                                        ))}
                                                </ul>
                                        </div>
                                )}
                        </div>

                </div>
        );
}

