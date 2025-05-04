import fs from 'fs';
import csv from 'csv-parser';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function importCSV() {
        const problems = [];

        fs.createReadStream('problems.csv')
                .pipe(csv())
                .on('data', (row) => {
                        problems.push({
                                id: parseInt(row.id),
                                title: row.title,
                                description: row.description,
                                category: row.category,
                                subcategory: row.subcategory,
                                subsubcategory: row.subsubcategory,
                        });
                })
                .on('end', async () => {
                        for (const problem of problems) {
                                await prisma.problem.create({ data: problem });
                        }
                        console.log('✅ CSV import complete!');
                        await prisma.$disconnect();
                });
}

importCSV();
