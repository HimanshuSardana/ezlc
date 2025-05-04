import { getProblemById, getProblemSolution } from "@/app/actions/getProblems";
import { Navbar } from "@/components/Navbar";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { ChevronRight } from "lucide-react";

export default async function ProblemPage({ params }) {
        const { id } = params;

        const problem = await getProblemById(id);
        const solution = await getProblemSolution(problem.description);

        let cleanSolution = solution;
        if (solution?.startsWith('```json')) {
                cleanSolution = solution.replace('```json', '').replace('```', '').trim();
        }

        cleanSolution = JSON.parse(cleanSolution);


        return (
                <>
                        <Navbar />
                        <div className="mx-[10%] flex flex-col gap-6 py-6">
                                <h3 className="text-3xl font-extrabold">{problem.title}</h3>
                                <p className="text-lg text-muted-foreground">{problem.description}</p>

                                <div className="flex items-center gap-3">
                                        <p>{problem?.category}</p>
                                        <ChevronRight size={20} />
                                        <p className="">{problem?.subcategory}</p>
                                        <ChevronRight size={20} />
                                        <p className="">{problem?.subsubcategory}</p>
                                </div>

                                <hr className="border-1 border-t" />

                                {/* {JSON.stringify(cleanSolution)} */}
                                <Accordion type="single" collapsible className="w-full">
                                        {cleanSolution && cleanSolution.map((item: any, index: number) => (
                                                <AccordionItem key={index} value={`item-${index}`}>
                                                        <AccordionTrigger className="text-lg font-bold">
                                                                Step {index + 1}
                                                        </AccordionTrigger>
                                                        <AccordionContent>
                                                                <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
                                                                        {item.text}
                                                                </ReactMarkdown>
                                                                <div className='prose prose-neutral dark:prose-invert max-w-5xl'>
                                                                        {item.code && (
                                                                                <pre className=" p-4 rounded-md mt-2">
                                                                                        <code className="text-sm">
                                                                                                {item.code}
                                                                                        </code>
                                                                                </pre>
                                                                        )}
                                                                </div>

                                                        </AccordionContent>
                                                </AccordionItem>
                                        ))}
                                </Accordion>
                        </div>
                </>
        )
}

