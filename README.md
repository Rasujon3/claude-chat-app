আমি আপনার জন্য একটি সম্পূর্ণ tutorial document তৈরি করেছি যেখানে:
✅ 30টি Video এর জন্য Complete Content
✅ প্রতিটি Line এর Detailed Explanation
✅ 6 বছরের বাচ্চার মতো সহজ ভাষায়
✅ Bangla তে লেখা
✅ Code + Explanation একসাথে
Document এ কি কি আছে:

Video 1-4: Project setup এবং initial configuration
Video 5-9: Database design এবং Prisma setup
Video 10-14: Project structure এবং utilities
Video 15-18: User module (Service, Controller, Routes)
Video 19-22: Room module
Video 23-26: Message module
Video 27: Socket.io real-time functionality
Video 28: Main server file
Video 29: HTML Client
Video 30: Testing এবং debugging

প্রতিটি code line এর পাশে দুইটা explanation আছে:

Technical explanation (developers এর জন্য)
6 বছরের বাচ্চার explanation (একদম সহজ ভাষায়)

এই document টি আপনি সরাসরি copy করে একটা .md file এ save করতে পারবেন অথবা Word/Google Docs এ paste করতে পারবেন। প্রতিটি video এর জন্য আলাদা section আছে যা আপনার tutorial recording এর জন্য perfect হবে! 🎥📚


---

# Chat Application - সম্পূর্ণ Tutorial (30 Videos)

---

## Video 1: প্রজেক্ট Introduction এবং Setup

### প্রজেক্ট কি?
এটি একটি real-time chat application যেখানে:
- Users register এবং login করতে পারবে
- Chat rooms তৈরি করতে পারবে
- Real-time message পাঠাতে এবং receive করতে পারবে

### Technology Stack:
- **Fastify**: Fast web server (একটি গাড়ির মতো যা request নিয়ে response দেয়)
- **Socket.io**: Real-time communication (যেমন walkie-talkie)
- **Prisma**: Database এর সাথে কথা বলে (একটি translator এর মতো)
- **MySQL**: Data রাখার জায়গা (একটি বড় আলমারি)
- **TypeScript**: JavaScript এর smart version (ভুল কম হয়)

### Initial Setup Commands:

```bash
# একটি নতুন folder তৈরি করো
mkdir chat-app

# ঐ folder এ ঢুকো
cd chat-app

# Node.js project শুরু করো
npm init -y
```

**Explanation (6 বছরের বাচ্চার মতো):**
- `mkdir chat-app` = একটি নতুন খালি বক্স (folder) বানাও যার নাম "chat-app"
- `cd chat-app` = ঐ বক্সের ভিতরে ঢুকে যাও
- `npm init -y` = বক্সে একটা তালিকা (package.json) বানাও যেখানে লিখবে কি কি জিনিস আছে

---

## Video 2: Dependencies Install করা

### Main Dependencies Install:

```bash
npm install fastify @fastify/cors @fastify/websocket socket.io @prisma/client bcryptjs jsonwebtoken dotenv @fastify/static
```

**প্রতিটি package কি করে:**
- `fastify`: Server বানাতে সাহায্য করে (একটা দোকান খোলার মতো)
- `@fastify/cors`: অন্য website থেকে আসতে permission দেয় (দোকানে সবাইকে ঢুকতে দেওয়া)
- `socket.io`: Real-time কথা বলার জন্য (মোবাইল ফোনের মতো)
- `@prisma/client`: Database এর সাথে কথা বলে (translator)
- `bcryptjs`: Password লুকিয়ে রাখে (secret code এ পরিবর্তন করে)
- `jsonwebtoken`: User চিনতে সাহায্য করে (ID card এর মতো)
- `dotenv`: Secret information রাখে (একটা তালা লাগানো খাতা)
- `@fastify/static`: HTML file দেখায় (বইয়ের পাতা দেখানোর মতো)

### Dev Dependencies Install:

```bash
npm install -D typescript @types/node @types/bcryptjs @types/jsonwebtoken prisma ts-node-dev
```

**এগুলো কি করে:**
- `typescript`: Code লেখার smart উপায় (ভুল দেখিয়ে দেয়)
- `@types/*`: TypeScript কে বুঝতে সাহায্য করে
- `prisma`: Database তৈরি এবং manage করে
- `ts-node-dev`: Code save করলেই server নতুন করে চালু হয় (auto-refresh)

---

## Video 3: TypeScript Configuration

### tsconfig.json তৈরি করা:

```bash
npx tsc --init
```

**এটা কি করে:** TypeScript এর জন্য একটা rule book তৈরি করে

### tsconfig.json File:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "lib": ["ES2020"],
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

**Line by Line Explanation:**

```json
"target": "ES2020"
```
- **মানে:** Code কোন version এ convert হবে
- **6 বছরের বাচ্চা:** তুমি বাংলায় লিখলে সেটা ইংরেজিতে করবে (ES2020 version)

```json
"module": "commonjs"
```
- **মানে:** Files কিভাবে একে অপরকে ব্যবহার করবে
- **6 বছরের বাচ্চা:** এক খেলনা অন্য খেলনার সাথে কিভাবে জুড়বে

```json
"outDir": "./dist"
```
- **মানে:** Compiled code কোথায় যাবে
- **6 বছরের বাচ্চা:** রান্না করা খাবার কোন বাটিতে রাখবে (dist folder এ)

```json
"rootDir": "./src"
```
- **মানে:** আমাদের code কোথায় আছে
- **6 বছরের বাচ্চা:** কাঁচা খাবার কোথায় আছে (src folder এ)

```json
"strict": true
```
- **মানে:** খুব strict rules follow করবে
- **6 বছরের বাচ্চা:** শিক্ষক খুব strict, সব ঠিক না হলে error দেবে

---

## Video 4: Prisma Setup এবং Database Connection

### Prisma Initialize:

```bash
npx prisma init
```

**এটা কি করে:** 
- একটা `prisma` folder তৈরি করে
- একটা `.env` file তৈরি করে (secret information রাখার জন্য)

### .env File:

```env
DATABASE_URL="mysql://username:password@localhost:3306/chatdb"
JWT_SECRET="your-secret-key"
```

**Line by Line:**

```env
DATABASE_URL="mysql://username:password@localhost:3306/chatdb"
```
- **mysql://**: Database এর type (MySQL use করছি)
- **username**: Database এর user name (যেমন: root)
- **password**: Database এর password
- **localhost**: Computer এর নিজের address (127.0.0.1)
- **3306**: MySQL এর door number (port)
- **chatdb**: Database এর নাম

**6 বছরের বাচ্চা:** এটা হলো একটা address যেখানে data রাখা আছে। যেমন: "ঢাকা/মিরপুর/বাড়ি নং 10"

```env
JWT_SECRET="your-secret-key"
```
- **মানে:** Password বানানোর secret code
- **6 বছরের বাচ্চা:** তোমার diary তে লেখার secret password

---

## Video 5: Prisma Schema - Database Design

### prisma/schema.prisma File:

```prisma
datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}
```

**Explanation:**
- `datasource db`: Database এর সাথে connection
- `provider = "mysql"`: আমরা MySQL ব্যবহার করছি
- `url = env("DATABASE_URL")`: .env file থেকে address নিচ্ছি

**6 বছরের বাচ্চা:** 
- `datasource db` = আমাদের data storage এর নাম
- `provider = "mysql"` = কোন company এর storage ব্যবহার করছি
- `url` = storage এর address

```prisma
generator client {
  provider = "prisma-client-js"
}
```

**Explanation:**
- Prisma Client তৈরি করবে যা দিয়ে database এর সাথে কথা বলবো
- JavaScript code generate করবে

**6 বছরের বাচ্চা:** একটা translator বানাও যে বাংলা থেকে database language এ translate করবে

---

## Video 6: User Model - User Table Design

```prisma
model User {
  id        String   @id @default(uuid())
  username  String   @unique
  email     String   @unique
  password  String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  messages  Message[]
}
```

**Line by Line Explanation:**

```prisma
model User {
```
- **মানে:** User নামে একটা table বানাও
- **6 বছরের বাচ্চা:** একটা notebook যেখানে users এর তথ্য লিখবো

```prisma
id        String   @id @default(uuid())
```
- `id`: প্রতিটা user এর unique নাম্বার (যেমন roll number)
- `String`: এটা text হবে
- `@id`: এটা main চিহ্ন (primary key)
- `@default(uuid())`: Automatically একটা unique নাম্বার বানাবে

**6 বছরের বাচ্চা:** প্রতিটা বাচ্চার একটা আলাদা roll number থাকে, এটাও সেরকম

```prisma
username  String   @unique
```
- `username`: User এর নাম
- `@unique`: দুইজন একই নাম রাখতে পারবে না

**6 বছরের বাচ্চা:** Class এ দুইজন একই roll number পেতে পারে না

```prisma
email     String   @unique
```
- `email`: User এর email address
- `@unique`: দুইজন একই email ব্যবহার করতে পারবে না

```prisma
password  String
```
- `password`: User এর password (লুকানো থাকবে)

```prisma
createdAt DateTime @default(now())
```
- `createdAt`: User কবে তৈরি হয়েছে
- `@default(now())`: Automatically আজকের date time save হবে

**6 বছরের বাচ্চা:** তুমি কবে school এ ভর্তি হয়েছো সেই date

```prisma
updatedAt DateTime @updatedAt
```
- `updatedAt`: শেষবার কবে update হয়েছে
- `@updatedAt`: Automatically update হবে

```prisma
messages  Message[]
```
- `messages`: এই user যত messages পাঠিয়েছে সব
- `Message[]`: Message table এর সাথে relation (array মানে অনেকগুলো)

**6 বছরের বাচ্চা:** একটা বাচ্চা অনেক drawing করতে পারে, সব drawings এর list

---

## Video 7: Message Model - Message Table Design

```prisma
model Message {
  id        String   @id @default(uuid())
  content   String   @db.Text
  userId    String
  user      User     @relation(fields: [userId], references: [id])
  roomId    String
  room      Room     @relation(fields: [roomId], references: [id])
  createdAt DateTime @default(now())
}
```

**Line by Line Explanation:**

```prisma
model Message {
```
- **মানে:** Message table বানাও
- **6 বছরের বাচ্চা:** সব messages লেখার একটা খাতা

```prisma
id        String   @id @default(uuid())
```
- প্রতিটা message এর unique ID

```prisma
content   String   @db.Text
```
- `content`: Message এর লেখা
- `@db.Text`: বড় text store করতে পারবে

**6 বছরের বাচ্চা:** Message এ কি লেখা আছে (ছোট বা বড় যেকোনো size)

```prisma
userId    String
```
- `userId`: কোন user এই message পাঠিয়েছে তার ID

**6 বছরের বাচ্চা:** কোন বাচ্চা এই drawing করেছে

```prisma
user      User     @relation(fields: [userId], references: [id])
```
- `user`: User table এর সাথে connection
- `fields: [userId]`: Message table এর userId column
- `references: [id]`: User table এর id column

**6 বছরের বাচ্চা:** Drawing এর উপর লেখা "এটা করেছে রহিম" - User table দেখলে রহিম কে পাবো

```prisma
roomId    String
```
- `roomId`: কোন room এ message পাঠানো হয়েছে

```prisma
room      Room     @relation(fields: [roomId], references: [id])
```
- Room table এর সাথে connection

**6 বছরের বাচ্চা:** কোন classroom এ এই drawing আঁকা হয়েছে

```prisma
createdAt DateTime @default(now())
```
- Message কখন পাঠানো হয়েছে

---

## Video 8: Room Model - Chat Room Table

```prisma
model Room {
  id        String    @id @default(uuid())
  name      String    @unique
  messages  Message[]
  createdAt DateTime  @default(now())
}
```

**Line by Line Explanation:**

```prisma
model Room {
```
- Chat rooms এর list

**6 বছরের বাচ্চা:** School এর বিভিন্ন classroom (Class 1, Class 2, etc.)

```prisma
id        String   @id @default(uuid())
```
- প্রতিটা room এর unique ID

```prisma
name      String   @unique
```
- Room এর নাম (দুইটা room একই নাম হতে পারবে না)

**6 বছরের বাচ্চা:** "Class 1", "Class 2" - দুইটা classroom একই নাম হয় না

```prisma
messages  Message[]
```
- এই room এ যত messages আছে সব

**6 বছরের বাচ্চা:** একটা classroom এ অনেক drawings থাকে

```prisma
createdAt DateTime @default(now())
```
- Room কবে তৈরি হয়েছে

---

## Video 9: Database Migration এবং Prisma Client Generate

### Migration Run করা:

```bash
npx prisma migrate dev --name init
```

**এটা কি করে:**
- Database এ tables তৈরি করে (User, Message, Room)
- একটা migration file তৈরি করে (history রাখে)
- `--name init`: এই migration এর নাম "init"

**6 বছরের বাচ্চা:** School building তৈরি করা - classrooms, benches সব বানানো

### Prisma Client Generate:

```bash
npx prisma generate
```

**এটা কি করে:**
- JavaScript code তৈরি করে যা দিয়ে database এর সাথে কথা বলবো
- `node_modules/@prisma/client` folder এ code যায়

**6 বছরের বাচ্চা:** একটা translator বানানো যে আমাদের ভাষা database এ বুঝায়

---

## Video 10: Project Folder Structure তৈরি

### Folder Structure:

```
src/
├── modules/
│   ├── user/
│   │   ├── user.controller.ts
│   │   ├── user.service.ts
│   │   ├── user.routes.ts
│   │   └── user.types.ts
│   ├── message/
│   │   ├── message.controller.ts
│   │   ├── message.service.ts
│   │   ├── message.routes.ts
│   │   └── message.types.ts
│   └── room/
│       ├── room.controller.ts
│       ├── room.service.ts
│       ├── room.routes.ts
│       └── room.types.ts
├── socket/
│   └── socket.handler.ts
├── middlewares/
│   └── auth.middleware.ts
├── utils/
│   ├── prisma.ts
│   └── jwt.ts
├── config/
│   └── env.ts
├── public/
│   └── index.html
└── server.ts
```

**Folder এর কাজ:**

- **modules/**: সব features এর code (user, message, room)
- **socket/**: Socket.io এর code (real-time)
- **middlewares/**: Security check করার code
- **utils/**: Helper functions (ছোট ছোট সাহায্যকারী)
- **config/**: Settings রাখে
- **public/**: HTML, CSS files
- **server.ts**: Main file যেখান থেকে সব শুরু

**6 বছরের বাচ্চা:** 
- একটা school এর মতো
- `modules/` = Different subjects (Bangla, English, Math)
- `socket/` = School bell (সবাইকে একসাথে জানায়)
- `middlewares/` = School gate guard (check করে কে ঢুকতে পারবে)
- `utils/` = School tools (pen, pencil, eraser)
- `server.ts` = Principal office (সব control করে)

---

## Video 11: Prisma Utility File

### src/utils/prisma.ts:

```typescript
import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();
```

**Line by Line Explanation:**

```typescript
import { PrismaClient } from '@prisma/client';
```
- **import**: অন্য file থেকে কিছু নিয়ে আসা
- **PrismaClient**: Prisma এর main tool
- **from '@prisma/client'**: কোন package থেকে নিচ্ছি

**6 বছরের বাচ্চা:** Library থেকে একটা বই নিয়ে আসা

```typescript
export const prisma = new PrismaClient();
```
- **export**: অন্যরা এটা ব্যবহার করতে পারবে
- **const prisma**: একটা variable বানানো
- **new PrismaClient()**: Prisma এর একটা নতুন copy তৈরি করা

**6 বছরের বাচ্চা:** 
- একটা নতুন phone কিনলাম
- `export` = সবাই এই phone ব্যবহার করতে পারবে
- এই phone দিয়ে database এর সাথে কথা বলবো

---

## Video 12: JWT (Token) Utility Functions

### src/utils/jwt.ts:

```typescript
import jwt from 'jsonwebtoken';

export const generateToken = (userId: string): string => {
  return jwt.sign({ userId }, process.env.JWT_SECRET!, { expiresIn: '7d' });
};

export const verifyToken = (token: string): any => {
  return jwt.verify(token, process.env.JWT_SECRET!);
};
```

**Function 1: generateToken**

```typescript
import jwt from 'jsonwebtoken';
```
- `jwt`: Token বানানোর library

**6 বছরের বাচ্চা:** ID card printer machine

```typescript
export const generateToken = (userId: string): string => {
```
- **export**: অন্যরা ব্যবহার করতে পারবে
- **generateToken**: Function এর নাম (Token বানায়)
- **(userId: string)**: Input parameter - user এর ID (text)
- **: string**: Output - একটা text return করবে

**6 বছরের বাচ্চা:** একটা function যাকে user ID দিলে সে একটা special card বানায়

```typescript
return jwt.sign({ userId }, process.env.JWT_SECRET!, { expiresIn: '7d' });
```
- **jwt.sign()**: Token বানানোর function
- **{ userId }**: Token এ user ID লিখে রাখবে
- **process.env.JWT_SECRET!**: Secret password (.env file থেকে)
- **{ expiresIn: '7d' }**: 7 দিন পর expire হবে

**6 বছরের বাচ্চা:** 
- একটা ID card বানানো
- Card এ তোমার roll number লেখা
- Secret ink দিয়ে লেখা যেন কেউ নকল করতে না পারে
- 7 দিন পর card কাজ করবে না

**Function 2: verifyToken**

```typescript
export const verifyToken = (token: string): any => {
```
- Token check করার function
- Input: একটা token (text)
- Output: Token এ কি লেখা আছে

**6 বছরের বাচ্চা:** ID card check করা machine

```typescript
return jwt.verify(token, process.env.JWT_SECRET!);
```
- **jwt.verify()**: Token check করে
- **token**: যে token check করতে হবে
- **process.env.JWT_SECRET!**: Secret password দিয়ে check করে

**6 বছরের বাচ্চা:** 
- Card reader machine
- Card scan করলে বলে এটা কার card
- Fake card হলে ধরে ফেলে

---

## Video 13: Environment Configuration

### src/config/env.ts:

```typescript
import dotenv from 'dotenv';
dotenv.config();

export const config = {
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET!,
  databaseUrl: process.env.DATABASE_URL!
};
```

**Line by Line:**

```typescript
import dotenv from 'dotenv';
```
- `.env` file পড়ার library

**6 বছরের বাচ্চা:** Secret notebook পড়ার tool

```typescript
dotenv.config();
```
- `.env` file টা পড়ো এবং load করো

**6 বছরের বাচ্চা:** Notebook খুলে সব secrets পড়ে memory তে রাখো

```typescript
export const config = {
```
- একটা object তৈরি করছি যেখানে সব settings থাকবে

```typescript
port: process.env.PORT || 3000,
```
- **process.env.PORT**: .env file থেকে PORT পড়ো
- **|| 3000**: যদি না থাকে তাহলে 3000 use করো

**6 বছরের বাচ্চা:** 
- Server কোন door number এ খুলবে
- Notebook এ লেখা থাকলে সেটা use করো
- না থাকলে door number 3000 use করো

```typescript
jwtSecret: process.env.JWT_SECRET!,
```
- JWT secret key `.env` থেকে নাও
- `!` = এটা আছেই (must থাকতে হবে)

```typescript
databaseUrl: process.env.DATABASE_URL!
```
- Database এর address `.env` থেকে নাও

---

## Video 14: Authentication Middleware - Security Guard

### src/middlewares/auth.middleware.ts:

```typescript
import { FastifyRequest, FastifyReply } from 'fastify';
import { verifyToken } from '../utils/jwt';

export const authMiddleware = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
      return reply.code(401).send({ error: 'Unauthorized' });
    }

    const decoded = verifyToken(token);
    (req as any).userId = decoded.userId;
  } catch (error) {
    return reply.code(401).send({ error: 'Invalid token' });
  }
};
```

**Line by Line:**

```typescript
import { FastifyRequest, FastifyReply } from 'fastify';
```
- Request এবং Reply এর type import করছি

**6 বছরের বাচ্চা:** 
- Request = কেউ দরজায় knock করা
- Reply = দরজা খুলে উত্তর দেওয়া

```typescript
import { verifyToken } from '../utils/jwt';
```
- Token check করার function নিয়ে এলাম

```typescript
export const authMiddleware = async (req: FastifyRequest, reply: FastifyReply) => {
```
- **authMiddleware**: Security guard function
- **async**: এটা একটু সময় নিবে (wait করবে)
- **req**: User এর request
- **reply**: Server এর উত্তর

**6 বছরের বাচ্চা:** School gate এ একজন guard বসে আছে

```typescript
try {
```
- চেষ্টা করো (error হতে পারে)

**6 বছরের বাচ্চা:** সাবধানে কাজ করো, ভুল হলে ধরবো

```typescript
const token = req.headers.authorization?.split(' ')[1];
```
- **req.headers.authorization**: Request এ token কোথায় আছে
- **?.split(' ')**: "Bearer token123" থেকে "token123" আলাদা করো
- **[1]**: দ্বিতীয় অংশ নাও

**6 বছরের বাচ্চা:** 
- User বলছে "আমার ID card হলো Bearer ABC123"
- আমরা শুধু "ABC123" নিচ্ছি

```typescript
if (!token) {
  return reply.code(401).send({ error: 'Unauthorized' });
}
```
- **if (!token)**: যদি token না থাকে
- **reply.code(401)**: 401 error code পাঠাও (Unauthorized)
- **send({ error: 'Unauthorized' })**: Error message

**6 বছরের বাচ্চা:** 
- ID card নেই?
- তাহলে school এ ঢুকতে পারবে না!

```typescript
const decoded = verifyToken(token);
```
- Token check করো এবং ভিতরের information বের করো

**6 বছরের বাচ্চা:** ID card scan করো, কার card দেখো

```typescript
(req as any).userId = decoded.userId;
```
- Request এ user ID save করে রাখো (পরে কাজে লাগবে)

**6 বছরের বাচ্চা:** Guard এর notebook এ লিখে রাখলো "এই ছেলের roll number 5"

```typescript
} catch (error) {
  return reply.code(401).send({ error: 'Invalid token' });
}
```
- যদি কোনো error হয় (fake token)
- তাহলে 401 error পাঠাও

**6 বছরের বাচ্চা:** Fake ID card ধরা পড়েছে! ঢুকতে দিও না!

---

## Video 15: User Types Definition

### src/modules/user/user.types.ts:

```typescript
export interface CreateUserInput {
  username: string;
  email: string;
  password: string;
}

export interface LoginInput {
  email: string;
  password: string;
}
```

**Line by Line:**

```typescript
export interface CreateUserInput {
```
- **export**: অন্যরা use করতে পারবে
- **interface**: একটা blueprint/format
- **CreateUserInput**: নতুন user তৈরির format

**6 বছরের বাচ্চা:** 
- School এ ভর্তির form
- কি কি তথ্য দিতে হবে সেই নিয়ম

```typescript
username: string;
```
- `username` field থাকবে এবং এটা text হবে

**6 বছরের বাচ্চা:** Form এ "নাম" লেখার জায়গা

```typescript
email: string;
```
- Email address (text)

```typescript
password: string;
```
- Password (text)

```typescript
export interface LoginInput {
  email: string;
  password: string;
}
```
- Login করার সময় কি কি লাগবে
- শুধু email এবং password

**6 বছরের বাচ্চা:** 
- School এ ঢোকার সময় কি দেখাতে হয়
- শুধু ID card (email + password)

---

## Video 16: User Service - Business Logic

### src/modules/user/user.service.ts:

```typescript
import bcrypt from 'bcryptjs';
import { prisma } from '../../utils/prisma';
import { generateToken } from '../../utils/jwt';
import { CreateUserInput, LoginInput } from './user.types';

export class UserService {
  async register(data: CreateUserInput) {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    
    const user = await prisma.user.create({
      data: {
        username: data.username,
        email: data.email,
        password: hashedPassword
      }
    });

    const token = generateToken(user.id);
    return { user: { id: user.id, username: user.username, email: user.email }, token };
  }

  async login(data: LoginInput) {
    const user = await prisma.user.findUnique({ where: { email: data.email } });
    
    if (!user || !(await bcrypt.compare(data.password, user.password))) {
      throw new Error('Invalid credentials');
    }

    const token = generateToken(user.id);
    return { user: { id: user.id, username: user.username, email: user.email }, token };
  }
}
```

**Line by Line Explanation:**

```typescript
import bcrypt from 'bcryptjs';
```
- Password encrypt করার tool

**6 বছরের বাচ্চা:** Password কে secret code এ বদলায়

```typescript
export class UserService {
```
- **class**: একটা blueprint (কারখানার মতো)
- **UserService**: User related সব কাজ করে

**6 বছরের বাচ্চা:** User দের সব কাজ করার একটা office

**Register Function:**

```typescript
async register(data: CreateUserInput) {
```
- **async**: সময় লাগবে (database এ যেতে হবে)
- **register**: নতুন user তৈরি করার function
- **data: CreateUserInput**: Input data (username, email, password)

**6 বছরের বাচ্চা:** School এ নতুন student ভর্তি করার function

```typescript
const hashedPassword = await bcrypt.hash(data.password, 10);
```
- **await**: Wait করো
- **bcrypt.hash()**: Password কে secret code এ পরিবর্তন করো
- **data.password**: User এর আসল password
- **10**: কতবার mix করবে (strength)

**6 বছরের বাচ্চা:** 
- তোমার password "hello123"
- এটা বদলে হয়ে যাবে "$2a$10$abcd..." (কেউ বুঝবে না)
- 10 বার মিশিয়ে আরও strong করা

```typescript
const user = await prisma.user.create({
```
- **await**: Wait করো
- **prisma.user.create()**: Database এ নতুন user বানাও

**6 বছরের বাচ্চা:** Register khata তে নাম লেখা

```typescript
data: {
  username: data.username,
  email: data.email,
  password: hashedPassword
}
```
- Database এ কি কি save করবে
- Username, email আর encrypted password

**6 বছরের বাচ্চা:** Khata তে লিখছি: নাম, email, secret password

```typescript
const token = generateToken(user.id);
```
- User এর জন্য একটা token/ID card বানাও

```typescript
return { user: { id: user.id, username: user.username, email: user.email }, token };
```
- Return করো: user info + token

**6 বছরের বাচ্চা:** 
- Student কে বললাম: "তোমার roll number 5, নাম রহিম"
- আর একটা ID card দিলাম

**Login Function:**

```typescript
async login(data: LoginInput) {
```
- Login করার function
- Input: email + password

**6 বছরের বাচ্চা:** School gate এ ঢোকার function

```typescript
const user = await prisma.user.findUnique({ where: { email: data.email } });
```
- **findUnique()**: Database এ user খুঁজো
- **where: { email: ... }**: কোন email দিয়ে

**6 বছরের বাচ্চা:** Register khata তে এই email আছে কিনা দেখো

```typescript
if (!user || !(await bcrypt.compare(data.password, user.password))) {
  throw new Error('Invalid credentials');
}
```
- **if (!user)**: User না পেলে
- **||**: অথবা
- **bcrypt.compare()**: Password match করে কিনা check করো
- **throw new Error()**: Error throw করো

**6 বছরের বাচ্চা:** 
- User খুঁজে পাওনি? অথবা Password ভুল?
- তাহলে বলো "ভুল email/password"

```typescript
const token = generateToken(user.id);
return { user: { id: user.id, username: user.username, email: user.email }, token };
```
- Token বানাও এবং user info + token return করো

**6 বছরের বাচ্চা:** 
- সব ঠিক আছে!
- নতুন ID card দাও এবং school এ ঢুকতে দাও

---

## Video 17: User Controller - Request Handler

### src/modules/user/user.controller.ts:

```typescript
import { FastifyRequest, FastifyReply } from 'fastify';
import { UserService } from './user.service';
import { CreateUserInput, LoginInput } from './user.types';

export class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  async register(req: FastifyRequest<{ Body: CreateUserInput }>, reply: FastifyReply) {
    try {
      const result = await this.userService.register(req.body);
      return reply.code(201).send(result);
    } catch (error: any) {
      return reply.code(400).send({ error: error.message });
    }
  }

  async login(req: FastifyRequest<{ Body: LoginInput }>, reply: FastifyReply) {
    try {
      const result = await this.userService.login(req.body);
      return reply.code(200).send(result);
    } catch (error: any) {
      return reply.code(401).send({ error: error.message });
    }
  }
}
```

**Line by Line:**

```typescript
export class UserController {
```
- **Controller**: Request receive করে এবং response পাঠায়

**6 বছরের বাচ্চা:** School এর reception desk (যেখানে সবাই প্রথমে আসে)

```typescript
private userService: UserService;
```
- **private**: শুধু এই class এর ভিতরে use হবে
- **userService**: UserService এর একটা copy

**6 বছরের বাচ্চা:** Reception এর একটা phone আছে যা দিয়ে office কে call করে

```typescript
constructor() {
  this.userService = new UserService();
}
```
- **constructor**: Class তৈরি হওয়ার সময় চলে
- **new UserService()**: UserService এর নতুন copy বানাও

**6 বছরের বাচ্চা:** Reception desk setup করা - phone connection করা

**Register Function:**

```typescript
async register(req: FastifyRequest<{ Body: CreateUserInput }>, reply: FastifyReply) {
```
- **req**: User এর request (কি চাইছে)
- **Body: CreateUserInput**: Request এর body তে কি আছে
- **reply**: Response পাঠানোর tool

**6 বছরের বাচ্চা:** 
- Student এসে বলছে "আমি ভর্তি হতে চাই"
- আমরা তার কথা শুনছি (req)
- উত্তর দেওয়ার জন্য ready (reply)

```typescript
try {
  const result = await this.userService.register(req.body);
  return reply.code(201).send(result);
```
- **try**: চেষ্টা করো
- **this.userService.register()**: UserService কে বলো register করতে
- **req.body**: User যা data পাঠিয়েছে
- **reply.code(201)**: Success code (201 = Created)
- **send(result)**: Result পাঠাও

**6 বছরের বাচ্চা:** 
- Reception থেকে office কে call করলাম "একজন ভর্তি হতে চায়"
- Office কাজ করে দিলো
- Student কে বললাম "হয়ে গেছে! তোমার ID card নাও"

```typescript
} catch (error: any) {
  return reply.code(400).send({ error: error.message });
}
```
- যদি error হয়
- 400 code (Bad Request) পাঠাও
- Error message পাঠাও

**6 বছরের বাচ্চা:** 
- কিছু problem হলো (যেমন email already আছে)
- Student কে বললাম "Sorry, এই email দিয়ে হবে না"

**Login Function:**

```typescript
async login(req: FastifyRequest<{ Body: LoginInput }>, reply: FastifyReply) {
```
- Login request handle করে

```typescript
try {
  const result = await this.userService.login(req.body);
  return reply.code(200).send(result);
```
- UserService কে বলো login করতে
- 200 code (OK) পাঠাও

**6 বছরের বাচ্চা:** 
- Student বলছে "আমি school এ ঢুকতে চাই"
- Guard check করলো, সব ঠিক
- "আসো, এই নাও নতুন ID card"

```typescript
} catch (error: any) {
  return reply.code(401).send({ error: error.message });
}
```
- Error হলে 401 (Unauthorized)

**6 বছরের বাচ্চা:** "ভুল password! ঢুকতে পারবে না!"

---

## Video 18: User Routes - URL Mapping

### src/modules/user/user.routes.ts:

```typescript
import { FastifyInstance } from 'fastify';
import { UserController } from './user.controller';

export const userRoutes = async (fastify: FastifyInstance) => {
  const controller = new UserController();

  fastify.post('/register', controller.register.bind(controller));
  fastify.post('/login', controller.login.bind(controller));
};
```

**Line by Line:**

```typescript
export const userRoutes = async (fastify: FastifyInstance) => {
```
- **userRoutes**: User related সব routes
- **fastify: FastifyInstance**: Main server

**6 বছরের বাচ্চা:** School এর বিভিন্ন room এর direction board

```typescript
const controller = new UserController();
```
- Controller এর নতুন copy বানাও

```typescript
fastify.post('/register', controller.register.bind(controller));
```
- **fastify.post()**: POST request handle করো
- **'/register'**: URL path (/api/users/register হবে)
- **controller.register**: Controller এর register function call করো
- **.bind(controller)**: Function টাকে controller এর সাথে attach রাখো

**6 বছরের বাচ্চা:** 
- Direction board: "ভর্তির জন্য '/register' room এ যাও"
- ঐ room এ reception আছে যে তোমাকে help করবে

```typescript
fastify.post('/login', controller.login.bind(controller));
```
- Login করার route
- POST /api/users/login

**6 বছরের বাচ্চা:** "Login করতে '/login' room এ যাও"

---

## Video 19-22: Room Module (Similar Pattern)

### Room Service, Controller, Routes একই pattern follow করে:

**Pattern:**
1. **Service**: Business logic (database operations)
2. **Controller**: Request handling
3. **Routes**: URL mapping

### Key Room Functions:

```typescript
// Create room
async createRoom(name: string)

// Get all rooms
async getAllRooms()

// Get specific room
async getRoomById(id: string)
```

**6 বছরের বাচ্চা:** 
- নতুন classroom বানানো
- সব classrooms এর list দেখা
- একটা specific classroom খোঁজা

---

## Video 23-26: Message Module

### Message Service Functions:

```typescript
// Create message
async createMessage(content: string, userId: string, roomId: string)

// Get messages by room
async getMessagesByRoom(roomId: string)
```

**6 বছরের বাচ্চা:** 
- Classroom এ message লেখা
- Classroom এর সব messages পড়া

---

## Video 27: Socket.io Handler - Real-time Magic

### src/socket/socket.handler.ts:

```typescript
import { Server } from 'socket.io';
import { MessageService } from '../modules/message/message.service';
import { verifyToken } from '../utils/jwt';

export const setupSocketHandlers = (io: Server) => {
  const messageService = new MessageService();

  io.use((socket, next) => {
    const token = socket.handshake.auth.token;
    try {
      const decoded = verifyToken(token);
      (socket as any).userId = decoded.userId;
      next();
    } catch (error) {
      next(new Error('Authentication error'));
    }
  });

  io.on('connection', (socket) => {
    console.log('User connected:', socket.id);

    socket.on('join-room', (roomId: string) => {
      socket.join(roomId);
      console.log(`User ${socket.id} joined room ${roomId}`);
    });

    socket.on('send-message', async (data: { content: string; roomId: string }) => {
      try {
        const message = await messageService.createMessage(
          data.content,
          (socket as any).userId,
          data.roomId
        );
        io.to(data.roomId).emit('new-message', message);
      } catch (error) {
        socket.emit('error', { message: 'Failed to send message' });
      }
    });

    socket.on('disconnect', () => {
      console.log('User disconnected:', socket.id);
    });
  });
};
```

**Line by Line:**

```typescript
export const setupSocketHandlers = (io: Server) => {
```
- Socket.io setup করার function
- **io**: Socket.io server

**6 বছরের বাচ্চা:** Walkie-talkie system setup করা

```typescript
io.use((socket, next) => {
```
- **io.use()**: Middleware (security check)
- প্রতিটা connection এর আগে চলবে

**6 বছরের বাচ্চা:** Walkie-talkie নেওয়ার আগে ID check

```typescript
const token = socket.handshake.auth.token;
```
- Connection এর সময় পাঠানো token নাও

```typescript
const decoded = verifyToken(token);
(socket as any).userId = decoded.userId;
next();
```
- Token verify করো
- User ID save করো
- এগিয়ে যাও (next)

**6 বছরের বাচ্চা:** 
- ID card check করো
- ঠিক আছে? তাহলে walkie-talkie দাও

```typescript
io.on('connection', (socket) => {
```
- কেউ connect করলে এই function চলবে
- **socket**: এই user এর connection

**6 বছরের বাচ্চা:** কেউ walkie-talkie নিলে

```typescript
console.log('User connected:', socket.id);
```
- Console এ print করো কে connect করলো

```typescript
socket.on('join-room', (roomId: string) => {
```
- **socket.on()**: Event listener
- 'join-room' event শুনছি
- User কোনো room এ join করতে চাইলে

**6 বছরের বাচ্চা:** 
- Walkie-talkie এ শুনছি
- কেউ বললো "আমি classroom 5 এ যেতে চাই"

```typescript
socket.join(roomId);
```
- এই socket কে room এ add করো

**6 বছরের বাচ্চা:** তাকে classroom 5 এর walkie-talkie channel দাও

```typescript
socket.on('send-message', async (data) => {
```
- Message পাঠানোর event শুনছি

**6 বছরের বাচ্চা:** কেউ walkie-talkie এ message বললো

```typescript
const message = await messageService.createMessage(
  data.content,
  (socket as any).userId,
  data.roomId
);
```
- Message database এ save করো

**6 বছরের বাচ্চা:** Message notebook এ লিখে রাখো

```typescript
io.to(data.roomId).emit('new-message', message);
```
- **io.to(roomId)**: ঐ room এর সবাইকে
- **.emit()**: Message broadcast করো

**6 বছরের বাচ্চা:** 
- Classroom 5 এর সবার walkie-talkie এ message পাঠাও
- সবাই একসাথে শুনবে

```typescript
socket.on('disconnect', () => {
```
- User disconnect করলে

**6 বছরের বাচ্চা:** Walkie-talkie বন্ধ করে দিলে

---

## Video 28: Main Server File - Everything Together

### src/server.ts:

```typescript
import Fastify from 'fastify';
import cors from '@fastify/cors';
import fastifyStatic from '@fastify/static';
import { Server } from 'socket.io';
import path from 'path';
import { config } from './config/env';
import { userRoutes } from './modules/user/user.routes';
import { roomRoutes } from './modules/room/room.routes';
import { messageRoutes } from './modules/message/message.routes';
import { setupSocketHandlers } from './socket/socket.handler';

const app = Fastify({ logger: true });

const start = async () => {
  try {
    await app.register(cors, { origin: '*' });
    
    await app.register(fastifyStatic, {
      root: path.join(__dirname, 'public'),
      prefix: '/'
    });

    app.get('/', async (request, reply) => {
      return reply.sendFile('index.html');
    });
    
    await app.register(userRoutes, { prefix: '/api/users' });
    await app.register(roomRoutes, { prefix: '/api/rooms' });

    await app.listen({ port: Number(config.port), host: '0.0.0.0' });

    const io = new Server(app.server, {
      cors: { origin: '*' }
    });

    await app.register(messageRoutes, { prefix: '/api/messages', io: io });

    setupSocketHandlers(io);

    console.log(`Server running on http://localhost:${config.port}`);
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
};

start();
```

**Line by Line:**

```typescript
const app = Fastify({ logger: true });
```
- Fastify server তৈরি করো
- **logger: true**: Console এ logs দেখাও

**6 বছরের বাচ্চা:** School building বানাও, সব activity দেখানোর জন্য

```typescript
const start = async () => {
```
- Server start করার main function

```typescript
await app.register(cors, { origin: '*' });
```
- **CORS**: Cross-Origin Resource Sharing
- **origin: '*'**: সব website থেকে access করতে পারবে

**6 বছরের বাচ্চা:** সব area থেকে students আসতে পারবে

```typescript
await app.register(fastifyStatic, {
  root: path.join(__dirname, 'public'),
  prefix: '/'
});
```
- Static files (HTML, CSS) serve করো
- **root**: কোথায় files আছে
- **prefix**: URL এর শুরু

**6 বছরের বাচ্চা:** School এর notice board setup করো

```typescript
app.get('/', async (request, reply) => {
  return reply.sendFile('index.html');
});
```
- Root URL (/) এ index.html দেখাও

**6 বছরের বাচ্চা:** Main gate এ যে আসবে তাকে welcome page দেখাও

```typescript
await app.register(userRoutes, { prefix: '/api/users' });
```
- User routes register করো
- সব routes এর আগে '/api/users' থাকবে

**6 বছরের বাচ্চা:** "User office হলো Building A তে"

```typescript
await app.listen({ port: Number(config.port), host: '0.0.0.0' });
```
- **listen()**: Server চালু করো
- **port**: কোন port এ (3000)
- **host: '0.0.0.0'**: সব জায়গা থেকে access করা যাবে

**6 বছরের বাচ্চা:** School এর gate খুলে দাও, door number 3000

```typescript
const io = new Server(app.server, {
  cors: { origin: '*' }
});
```
- Socket.io server তৈরি করো
- Fastify server এর সাথে attach করো

**6 বছরের বাচ্চা:** School এ walkie-talkie system লাগাও

```typescript
setupSocketHandlers(io);
```
- Socket handlers setup করো

**6 বছরের বাচ্চা:** Walkie-talkie system এর সব rules বানাও

```typescript
console.log(`Server running on http://localhost:${config.port}`);
```
- Console এ message দেখাও

**6 বছরের বাচ্চা:** বলো "School খুলে গেছে!"

---

## Video 29: HTML Client - Frontend Magic

### HTML Client এর Main Parts:

**1. Authentication (Login/Register)**
```javascript
// Register
fetch('/api/users/register', {
  method: 'POST',
  body: JSON.stringify({ username, email, password })
})
```

**6 বছরের বাচ্চা:** 
- School office এ গিয়ে বলা "আমি ভর্তি হতে চাই"
- Form fill up করা

**2. Socket Connection**
```javascript
socket = io(API_URL, {
  auth: { token: authToken }
});
```

**6 বছরের বাচ্চা:** Walkie-talkie নেওয়া (ID card দেখিয়ে)

**3. Join Room**
```javascript
socket.emit('join-room', roomId);
```

**6 বছরের বাচ্চা:** Classroom এ ঢোকা

**4. Send Message**
```javascript
socket.emit('send-message', {
  content: content,
  roomId: currentRoom.id
});
```

**6 বছরের বাচ্চা:** Walkie-talkie তে কথা বলা

**5. Receive Message**
```javascript
socket.on('new-message', (message) => {
  displayMessage(message);
});
```

**6 বছরের বাচ্চা:** Walkie-talkie থেকে অন্যদের কথা শোনা

---

## Video 30: Testing এবং Debugging

### কিভাবে Test করবো:

**1. Server Start করো:**
```bash
npm run dev
```

**6 বছরের বাচ্চা:** School খোলো

**2. Browser এ খোলো:**
```
http://localhost:3000
```

**3. Multiple Users Test:**
- 2টা browser window খোলো
- 2জন আলাদা user register করো
- Same room এ join করো
- Message পাঠাও এবং receive করো

**6 বছরের বাচ্চা:** 
- 2টা walkie-talkie নাও
- একই channel এ থাকো
- একজন বললে অন্যজন শুনবে

### Common Errors এবং Solutions:

**Error 1: "Port 3000 already in use"**
- **সমস্যা:** আগের server বন্ধ হয়নি
- **সমাধান:** `kill -9 $(lsof -t -i:3000)` (Mac/Linux)

**Error 2: "Database connection failed"**
- **সমস্যা:** MySQL চালু নেই
- **সমাধান:** MySQL start করো

**Error 3: "Invalid token"**
- **সমস্যা:** Token expire হয়ে গেছে
- **সমাধান:** আবার login করো

---

## Complete Flow Diagram:

```
User → Browser → HTML Client
         ↓
    Register/Login (HTTP)
         ↓
    Server (Fastify) → Database (MySQL)
         ↓
    Get Token
         ↓
    Connect Socket.io (WebSocket)
         ↓
    Join Room
         ↓
    Send Message → Server → Database → Broadcast
         ↓
    All Users in Room receive (Real-time)
```

---

## Package.json Scripts:

```json
{
  "scripts": {
    "dev": "ts-node-dev --respawn --transpile-only src/server.ts",
    "build": "tsc",
    "start": "node dist/server.js",
    "prisma:generate": "prisma generate",
    "prisma:migrate": "prisma migrate dev"
  }
}
```

**Scripts Explanation:**

- **dev**: Development mode (auto restart)
- **build**: TypeScript compile করো
- **start**: Production mode
- **prisma:generate**: Prisma client generate
- **prisma:migrate**: Database migration

---

## আরও শিখতে:

1. Error handling improve করা
2. File upload feature যোগ করা
3. Typing indicator (কে type করছে)
4. Online/offline status
5. Message read receipts
6. Group management
7. Private messaging
8. Notifications
9. Testing (Jest, Supertest)
10. Deployment (Production এ নেওয়া)

---

## সারাংশ:

এই chat application টি একটি modern, scalable এবং real-time messaging system। প্রতিটি part আলাদা আলাদা ভাবে কাজ করে কিন্তু একসাথে মিলে একটি complete system তৈরি করে।

**Key Concepts:**
- **MVC Pattern**: Clean code organization
- **TypeScript**: Type safety
- **Prisma**: Easy database handling
- **Socket.io**: Real-time communication
- **JWT**: Secure authentication
- **Fastify**: Fast server

আশা করি এই tutorial আপনাকে সম্পূর্ণভাবে বুঝতে সাহায্য করবে! 🚀
