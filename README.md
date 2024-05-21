
## 🚀                     Project Title:)
# Employee Availability Tracking System




# About Project:)

In modern office environments, monitoring employee availability during specific time intervals is crucial for effective resource management and task allocation. To address this need, we have developed an Employee Availability Tracking System. This system enables real-time monitoring of employee presence and availability within designated time intervals.
# Features:)

- Real-time Monitoring: The system provides real-time updates on employee presence within predefined time intervals.
- Customizable Time Intervals: Administrators can define and customize time intervals based on organizational requirements.
- Employee Identification: Each employee is uniquely identified within the system, allowing accurate tracking of their availability.
- Availability Status: Employees are categorized as "Available" or "Unavailable" during specific time intervals based on their presence.
- Dynamic Reporting: Comprehensive reports can be generated to identify available employees during any given time interval.
- Administrative Controls: Administrators have privileged access to manage employee profiles, time intervals, and generate reports.


# Implementation:)
The system utilizes a centralized database to store employee information and their corresponding availability status during specific time intervals. A user-friendly interface facilitates easy interaction for both administrators and employees.
# Usage:)
- Administrator: The administrator configures the system settings, defines time intervals, and monitors employee availability through the provided dashboard.
- Employee: Employees log in to the system to update their availability status during designated time intervals.
# Benefits:)
- Efficient Resource Allocation: By knowing the availability status of employees, tasks can be allocated more efficiently, optimizing productivity.
- Transparency: The system promotes transparency by providing clear visibility into employee presence during specified intervals, fostering accountability.
- Improved Planning: Managers can plan meetings, assignments, and project deadlines more effectively by considering employee availability.
#  Conclusion:)
The Employee Availability Tracking System offers a sophisticated solution for monitoring and managing employee presence within defined time intervals. By leveraging real-time data and customizable features, it enhances organizational efficiency and facilitates informed decision-making.
 

# 🛠 Tech Stack:)

**Frontendt:** React Js,BootStrap,CSS,

**Backend:** Node Js, Express Js,Prisma,Prisma Client,PostgreSQL

**Deployment:** Vercel

🔷 [Prisa]() is an open-source ORM for [Node.js]() [Prisa_Client]():Auto-generated and type-safe database client🔷
[Prisma Migrate]():Declarative data modeling and customizable migrations
🔷 [Prisma Studio](): A GUI to view and edit data in your database.


# Screenshots:)

![App Screenshot](https://camo.githubusercontent.com/8ca47797f827bf0787f42a2f0b23e223b624c548d5f1a73bae0e0416938228f6/68747470733a2f2f696d6775722e636f6d2f43544768515a392e706e67)

These tools aim to increase an application developer’s productivity in their database workflows.

Prisma currently supports PostgreSQL, MySQL, SQLite, SQL Server (preview) and MongoDB (preview).
# Prerequisites:)
To practice this lesson, you need to have the following:

*Node.js v10 to v14 is installed on your computer.

*PostgreSQL v13 is running which can easily set up with Docker as demonstrated here.

*Optionally, VsCode and a nice cup of tea ☕️
# Installation:)

server.js
```bash
 $    npm init -y
```
```bash
 $    npm install cors
```
```bash
 $    npm install express
```
```bash
 $    npm install dotenv
```


```bash
 $    npm install prisma -D
```
With the database server running, you can now create your Prisma setup. Run the following command from the Prisma CLI:

```bash
 $    npx prisma init
```
This will print the following output:
```bash
 ✔ Your Prisma schema was created at prisma/schema.prisma
  You can now open it in your favorite editor.
```
# Setting Up Prisma with PostgreSQL:)
In this step, you will install the Prisma CLI, create your initial Prisma schema file, and set up PostgreSQL with Docker and connect Prisma to it. The Prisma schema is the main configuration file for your Prisma setup and contains your database schema.

Start by installing the Prisma CLI with the following command:
```bash
# Set the appropriate value for the Database
DB_HOST=localhost
DB_PORT=5432
DB_SCHEMA=playlist
POSTGRES_USER=africa
POSTGRES_PASSWORD=village_people
POSTGRES_DB=playlist

DATABASE_URL=postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${DB_HOST}:${DB_PORT}/${POSTGRES_DB}?schema=${DB_SCHEMA}&sslmode=prefer

}
```

# Defining Your Data Model and Creating Database Tables:)
In this step, you will define your data model in the Prisma schema file. This data model will then be mapped to the database with Prisma Migrate, which will generate and send the SQL statements for creating the tables that correspond to your data model. Since you’re building a playlist application, the main entities of the application will be artists and songs.

Prisma uses its own data modeling language to define the shape of your application data.

First, open your prisma/schema.prisma file with your favourite editor and make these changes:
```bash
 $   generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
model Employee {
  id          Int       @id @default(autoincrement())
  email       String    @unique
  name        String
  phoneNumber String
  age         Int
  checkIn     DateTime
  checkOut    DateTime?
}
```
```bash
$    npx prisma migrate dev --name "init"
```
This command creates a new SQL migration on your filesystem and sends it to the database. The output of this command will be similar to this:

```bash
Environment variables loaded from .env
Prisma schema loaded from prisma/schema.prisma
Datasource "db": Postgre database "PrismaDB", schema "public" at "localhost:5432"

PostgreSQL database playlist created at localhost:5432

The following migration(s) have been created and applied from new schema changes:

migrations/
  └─ 20210810103751_init/
    └─ migration.sql

Your database is now in sync with your schema.
```

The SQL migration file in the /home/user/Projects/lesson/playlist/prisma/migrations/20210810103751_init/migration.sql directory has the following statements that were executed against the database:


```bash

/*
  Warnings:

  - You are about to drop the `employee` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "employee";

-- CreateTable
CREATE TABLE "Employee" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "checkIn" TIMESTAMP(3) NOT NULL,
    "checkOut" TIMESTAMP(3),

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Employee_email_key" ON "Employee"("email");
```
# Exploring Prisma Client Queries in a Plain Script:)
Prisma Client is an auto-generated and type-safe query builder that you can use to programmatically read and write data in a database from a Node.js or TypeScript application. You will use it for database access within your REST API routes, replacing traditional ORMs, plain SQL queries, custom data access layers, or any other method of talking to a database.

In this step, you will install Prisma Client and get familiar with the queries you can send with it. Before implementing the routes for your REST API in the next steps, you will first explore some of the Prisma Client queries in a plain, executable script.

First, go ahead and install Prisma Client in your project by opening up your terminal and installing the Prisma Client npm package:

```bash
 $    npm install @prisma/client
```
```bash
 $    npm install prisma -D
```
# Server Start:)

```bash
 $    npm install
```
# Frontend
assignmet

```bash
 $    npm install -y
```


The -y flag when passed to NPM commands tells the generator to use the defaults instead of asking the usual questions.
for node module instation
```bash
 $    npm install express
```
for express intalation


# Frontend Start:)

```bash
 $    npm start
```
To run frontend server
# Deployment:)
After thorough development and testing, I have deployed my project on Vercel,
#  Screenshot:)

![Screenshot 2024-05-21 133009](https://github.com/SHARMA-1729/Assignment/assets/129518514/628af7f8-dd30-442c-9abe-9df327ed4157)



![Screenshot 2024-05-21 133030](https://github.com/SHARMA-1729/Assignment/assets/129518514/8e570306-09b6-4503-bf31-1899532ef526)






![Screenshot 2024-05-21 133056](https://github.com/SHARMA-1729/Assignment/assets/129518514/786c7adb-883f-40b1-aa80-71f443bd0bd7)



![Screenshot 2024-05-21 133133](https://github.com/SHARMA-1729/Assignment/assets/129518514/ab7e06c9-1677-4592-b4a2-d8025dc5ba8e)
