import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
        try {
                const { subsubcategory } = await req.json();

                if (!subsubcategory) {
                        return NextResponse.json({ error: "Missing subsubcategory" }, { status: 400 });
                }

                const problems = await prisma.problem.findMany({
                        where: {
                                subsubcategory: subsubcategory,
                        },
                });

                return NextResponse.json({ problems });
        } catch (error) {
                console.error("Error in getProblems API:", error);
                return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
        }
}

