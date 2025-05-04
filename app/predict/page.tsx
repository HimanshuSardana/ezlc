'use client';
import { Navbar } from '@/components/Navbar';
import { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown'
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { GoogleGenAI } from '@google/genai';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

export default function PredictPage() {
        const [desc, setDesc] = useState('');
        const [result, setResult] = useState<null | Record<string, string>>(null);
        const [loading, setLoading] = useState(false);
        const [error, setError] = useState('');
        const ai = new GoogleGenAI({ apiKey: 'AIzaSyBMtxZEatCMaIaFbjWQacgkqIp39X67M-E' });
        const [formattedSolution, setFormattedSolution] = useState();

        async function getAISolution(desc: string) {
                const prompt = `Here's a DSA problem description. Your job is to provide steps to solve the problem. Return an array of objects in JSON, each object must be of the type: { "text": "string", "code": "code" }. Provide a step-by-step solution to the problem and return the result in JSON format. The problem description is: ${desc}, Include a final step that contains the entire code, the solution must be in c++`;

                try {
                        const response = await ai.models.generateContent({
                                model: 'gemini-2.0-flash',
                                contents: prompt
                        });

                        const text = response.text;
                        console.log('AI Solution:', text);
                        return text;
                } catch (error) {
                        console.error('AI generation error:', error);
                }
        }


        async function getPrediction(desc: string) {
                try {
                        setLoading(true);
                        setError('');
                        setResult(null);

                        const res = await fetch('http://localhost:5000/predict', {
                                method: 'POST',
                                headers: {
                                        'Content-Type': 'application/json',
                                },
                                body: JSON.stringify({ desc }),
                        });

                        if (!res.ok) {
                                const err = await res.json();
                                throw new Error(err.error || 'Request failed');
                        }

                        const data = await res.json();

                        const aiSolution = await getAISolution(desc);
                        console.log('AI Solution:', aiSolution);

                        let cleanSolution = aiSolution;
                        // remove backticks json from aiSolution
                        if (aiSolution?.startsWith('```json')) {
                                cleanSolution = aiSolution.replace('```json', '').replace('```', '').trim();
                        }
                        // @ts-ignore
                        setFormattedSolution(JSON.parse(cleanSolution))

                        setResult(data);
                } catch (err: any) {
                        console.error('Prediction error:', err);
                        setError(err.message || 'Something went wrong');
                } finally {
                        setLoading(false);
                }
        }

        return (
                <>
                        <Navbar />
                        <div className="max-w-full mx-[10%] p-6 space-y-4 flex md:flex-row sm:flex-col gap-8">
                                <div className='flex-[1] flex flex-col gap-2'>
                                        <h1 className="text-2xl font-semibold">Predict Problem Category</h1>

                                        <Textarea
                                                placeholder="Enter problem description..."
                                                value={desc}
                                                onChange={(e) => setDesc(e.target.value)}
                                                rows={6}
                                        />

                                        <Button onClick={() => getPrediction(desc)} disabled={loading} className="w-full mt-3 font-bold">
                                                {loading ? 'Predicting...' : 'Predict'}
                                        </Button>

                                        {error && <p className="text-red-500">{error}</p>}


                                </div>
                                <div className='flex-[1]'>
                                        <h3 className='text-3xl font-extrabold'>Prediction Result</h3>
                                        {loading && <Loader2 className="animate-spin text-primary" />}
                                        {result && (
                                                <ul className="list-none pl-0 space-y-2 mt-2">
                                                        <li className='text-muted-foreground'><strong className='dark:text-white text-black'>Category:</strong> {result.Category}</li>
                                                        <li className='text-muted-foreground'><strong className='dark:text-white text-black'>Subcategory:</strong> {result.Subcategory}</li>
                                                        <li className='text-muted-foreground'><strong className='dark:text-white text-black'>Subsubcategory:</strong> {result.Subsubcategory}</li>
                                                </ul>
                                        )}

                                </div>
                        </div>

                        {formattedSolution && (
                                <>
                                        <h3 className="text-3xl font-extrabold mx-[10%] pt-5 mb-5 border-0 border-t-2 border-1">Solution</h3>
                                        <Accordion type="single" collapsible className="mx-[10%]">
                                                {/* @ts-ignore */}
                                                {formattedSolution.map((item: any, index: number) => (
                                                        <AccordionItem key={index} value={`item-${index}`}>
                                                                <AccordionTrigger className="text-lg font-bold">
                                                                        Step {index + 1}
                                                                </AccordionTrigger>
                                                                <AccordionContent>
                                                                        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
                                                                                {item.text}
                                                                        </ReactMarkdown>
                                                                        <div className='prose bg-neutral-800 dark:prose-neutral dark:prose-invert max-w-5xl'>
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
                                </>
                        )}

                </>
        );
}

