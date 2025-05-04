import { Navbar } from "@/components/Navbar";
import { categories } from "@/data";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ReactMarkdown from "react-markdown";
import { getProblems, getPatternNotes } from "@/app/actions/getProblems";
import { ChevronRight } from "lucide-react";

export default async function SubsubcategoryPage({ params }: { params: { slug: string; subcategory: string; subsubcategory: string } }) {
        const { slug, subcategory, subsubcategory } = params;

        const topic = categories.find(cat => cat.slug === slug);
        const sub = topic?.subcategories.find(subcat => subcat.slug === subcategory);
        const subsub = sub?.subsubcategories.find(ss => ss.slug === subsubcategory);

        const problems = await getProblems(subsub.slug);

        if (!topic || !sub || !subsub) {
                return <div>Not found</div>;
        }

        const markdownContent = await getPatternNotes(subsub.title);

        return (
                <>
                        <Navbar />
                        <div className="mx-[10%] flex flex-col gap-3">
                                <h2 className="text-2xl font-extrabold">{subsub.title}</h2>
                                <p className="text-muted-foreground">{subsub.description}</p>

                                {/* Add problems or UI relevant to this subsubcategory */}

                                {/* Tabs for notes and problems */}
                                <Tabs defaultValue="notes" className="w-full">
                                        <TabsList className="grid w-fit grid-cols-2 mb-5">
                                                <TabsTrigger value="notes">Notes</TabsTrigger>
                                                <TabsTrigger value="problems">Problems</TabsTrigger>
                                        </TabsList>
                                        <TabsContent value="notes" className="prose prose-neutral dark:prose-invert max-w-none">
                                                <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
                                                        {markdownContent}
                                                </ReactMarkdown>
                                        </TabsContent>
                                        <TabsContent value="problems">
                                                {problems && (
                                                        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 grid-auto-rows">
                                                                {problems.map((problem, index) => (
                                                                        <div className="bg-accent/50 p-5 border rounded-md h-full">
                                                                                <div className="flex items-start justify-between">
                                                                                        <div className="flex flex-col gap-2">
                                                                                                <h3 className="text-lg font-bold">{problem?.title}</h3>
                                                                                                <p className="text-muted-foreground">{problem?.description?.slice(0, 150)}...</p>
                                                                                        </div>
                                                                                        <Button
                                                                                                size="icon"
                                                                                                variant="secondary"
                                                                                                className="rounded-full bg-inherit hover:bg-border/80"
                                                                                                asChild
                                                                                        >
                                                                                                <Link href={`/problems/${problem?.id}`}>
                                                                                                        <ChevronRight />

                                                                                                </Link>
                                                                                        </Button>
                                                                                </div>
                                                                        </div>
                                                                ))}
                                                        </div>
                                                )}
                                        </TabsContent>
                                </Tabs>

                        </div>
                </>
        );
}
