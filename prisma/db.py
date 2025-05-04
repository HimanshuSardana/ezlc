import csv
import sqlite3

# Path to your Prisma SQLite DB
conn = sqlite3.connect('dev.db')
cursor = conn.cursor()

# create table Problem
cursor.execute("""
    CREATE TABLE IF NOT EXISTS Problem (
        id INTEGER PRIMARY KEY,
        title TEXT,
        description TEXT,
        category TEXT,
        subcategory TEXT,
        subsubcategory TEXT
    )
""")

# Adjust table/column names to match your Prisma schema

# clear table Problem
cursor.execute("DELETE FROM Problem")

with open('../../ezlc-scraper/final_dataset.csv', newline='', encoding='utf-8') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        try:
            cursor.execute("""
                INSERT INTO Problem (id, title, description, category, subcategory, subsubcategory)
                VALUES (?, ?, ?, ?, ?, ?)
            """, (
                int(row['id']),
                row['title'],
                row['description'],
                row['category'],
                row['subcategory'],
                row['subsubcategory']
            ))
        except Exception as e:
            print(f"Error inserting row {row['id']}: {e}")
            continue

conn.commit()
conn.close()


