"use server"
import { PrismaClient } from "@/lib/generated/prisma"
import { GoogleGenAI } from "@google/genai"

export async function getProblems(subsubcategory: string) {
        const prisma = new PrismaClient()
        const problems = await prisma.problem.findMany({
                where: {
                        subsubcategory: subsubcategory
                }
        })
        return problems
}

export async function getProblemById(id: any) {
        const prisma = new PrismaClient()
        const problem = await prisma.problem.findUnique({
                where: {
                        id: id
                }
        })
        return problem
}

export async function getProblemSolution(description: string) {
        const genAI = new GoogleGenAI({ apiKey: 'AIzaSyBMtxZEatCMaIaFbjWQacgkqIp39X67M-E', })

        const response = await genAI.models.generateContent({
                model: 'gemini-2.0-flash',
                contents: `Here's a DSA problem description. Your job is to provide steps to solve the problem. Return an array of objects in JSON, each object must be of the type: { "text": "string", "code": "code" }. Provide a step-by-step solution to the problem and return the result in JSON format. The problem description is: ${description}, Include a final step that contains the entire code, the solution must be in c++`
        })

        return response.text
}

export async function getPatternNotes(pattern: string) {
        const genAI = new GoogleGenAI({ apiKey: 'AIzaSyBMtxZEatCMaIaFbjWQacgkqIp39X67M-E', })

        const response = await genAI.models.generateContent({
                model: 'gemini-2.0-flash',
                contents: `Here's a common DSA Subpattern. Your job is to provide a detailed explanation of the pattern, including its use cases, and a code example. The pattern is: ${pattern}. Do not include any text other than the explanation and the code example. The code example should be in c++ and should be a complete code that can be run. Include top level h1 (#) headings and h3 (###) headings`
        })

        return response.text

}
