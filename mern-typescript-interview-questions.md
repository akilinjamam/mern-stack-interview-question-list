# MERN Stack + TypeScript Interview Question Bank

A comprehensive list of the most commonly asked questions, organized by topic. Use this as a checklist — tick off what you're confident on, flag what needs review.

---

## 1. JavaScript Fundamentals

1. What is the difference between `var`, `let`, and `const`?
2. Explain hoisting. What gets hoisted and how?
3. What is the Temporal Dead Zone?
4. Explain closures with an example. Where have you used them practically?
5. What is `this` and how does it behave differently in regular functions vs arrow functions?
6. Explain the event loop, call stack, microtask queue, and macrotask queue.
7. What's the difference between `setTimeout`, `Promise.then`, and `process.nextTick`?
8. Explain prototypal inheritance. How does `__proto__` differ from `prototype`?
9. What is the difference between `==` and `===`?
10. Explain `call`, `apply`, and `bind`.
11. What are higher-order functions? Give examples.
12. Explain debounce vs throttle. When would you use each?
13. What is currying?
14. Explain `map`, `filter`, `reduce` — implement one from scratch.
15. What is event delegation?
16. Explain synchronous vs asynchronous code execution.
17. What are Promises? Explain `Promise.all`, `Promise.race`, `Promise.allSettled`, `Promise.any`.
18. What is async/await and how does it relate to Promises under the hood?
19. What is the difference between deep copy and shallow copy?
20. Explain `null` vs `undefined` vs `NaN`.
21. What are generators and iterators?
22. Explain memory leaks in JavaScript — common causes and how to avoid them.
23. What is the difference between a pure function and an impure function?
24. Explain destructuring, spread, and rest operators.
25. What are WeakMap and WeakSet, and why do they exist?

---

## 2. TypeScript

1. What is TypeScript and why use it over plain JavaScript?
2. Explain the difference between `interface` and `type`. When would you use one over the other?
3. What are generics? Write a generic function example.
4. Explain `any` vs `unknown` vs `never`.
5. What is type inference?
6. Explain union types vs intersection types.
7. What are utility types? Explain `Partial`, `Pick`, `Omit`, `Record`, `Readonly`.
8. What is a type guard? How do you write a custom one?
9. Explain `keyof`, `typeof`, and indexed access types.
10. What are enums? What's the difference between numeric and string enums?
11. Explain optional chaining (`?.`) and nullish coalescing (`??`).
12. What is the difference between `interface extends` and `type` intersection (`&`)?
13. Explain function overloading in TypeScript.
14. What are decorators? (relevant if you've touched NestJS)
15. Explain strict mode (`strict: true`) and why it matters.
16. What is a discriminated union? Give a practical example.
17. How do you type a React component's props and state?
18. Explain `as const` and when to use it.
19. What are mapped types? Write a simple example.
20. How does TypeScript handle structural typing vs nominal typing?
21. What is declaration merging?
22. How would you type an Express request/response with a custom `req.user` field?
23. What's the difference between `readonly` arrays/properties and `const`?
24. Explain conditional types (`T extends U ? X : Y`).
25. How do you handle typing for third-party JS libraries without types (`.d.ts` files, `declare module`)?

---

## 3. React

1. Explain the Virtual DOM and reconciliation algorithm.
2. What is the difference between state and props?
3. Explain the component lifecycle in class components vs the hook equivalents.
4. What is `useEffect` and how do dependency arrays work? Common pitfalls?
5. Explain `useState` vs `useReducer` — when to use which.
6. What is `useMemo` vs `useCallback`? Give a real scenario for each.
7. Why do list items need a stable `key`? What breaks if you use array index as key?
8. Explain controlled vs uncontrolled components.
9. What is prop drilling and how do you avoid it (Context API, state managers)?
10. Explain the Context API — when does it cause unnecessary re-renders and how do you fix that?
11. What are custom hooks? Write one (e.g., `useDebounce` or `useFetch`).
12. Explain React's batching of state updates (and how it changed in React 18).
13. What is `React.memo` and how is it different from `useMemo`?
14. Explain error boundaries.
15. What is code-splitting and how do you implement it (`React.lazy`, `Suspense`)?
16. Explain the difference between server-side rendering, client-side rendering, and static generation (relevant since you use Next.js).
17. What causes unnecessary re-renders and how do you debug/prevent them?
18. Explain `useRef` — beyond DOM references, what else is it used for?
19. What is the difference between `useLayoutEffect` and `useEffect`?
20. How do you handle forms in React — libraries vs manual state management?
21. Explain stale closures in React (you've dealt with this bug before — be ready to tell the story).
22. What is React Portal and when would you use it?
23. How does React 18's concurrent rendering / automatic batching change things?
24. Explain how you'd optimize a large list render (virtualization, windowing).
25. What state management approach do you prefer and why (Context, Redux, Zustand, etc.)?

---

## 4. Next.js

1. What is the difference between the Pages Router and the App Router?
2. Explain SSR (Server-Side Rendering) vs SSG (Static Site Generation) vs ISR (Incremental Static Regeneration) vs CSR — when would you use each?
3. What are Server Components vs Client Components in the App Router? How do you decide which to use?
4. What does the `"use client"` directive do, and what happens if you forget it?
5. How does data fetching work in the App Router (`fetch` with caching options) vs the old `getServerSideProps`/`getStaticProps`?
6. Explain Next.js's caching layers — request memoization, Data Cache, Full Route Cache, Router Cache. (You've hit a real caching bug here — be ready to walk through it.)
7. What is `revalidatePath` / `revalidateTag` and when do you use them?
8. Explain dynamic routing (`[id]`, `[...slug]`, `[[...slug]]`) and when you'd use catch-all routes.
9. How do Route Handlers (`app/api/.../route.ts`) differ from the old API routes in `pages/api`?
10. What is middleware in Next.js (`middleware.ts`) and what's it commonly used for (auth, redirects, geolocation)?
11. Explain `next/image` — how does it optimize images, and when would you configure a custom loader?
12. What is the difference between `next/link` prefetching behavior and a plain `<a>` tag?
13. How does Next.js handle SEO (metadata API, `generateMetadata`, sitemap/robots generation)?
14. Explain layouts and nested layouts in the App Router — how do they avoid re-rendering on navigation?
15. What are Server Actions? How do they replace traditional API calls for mutations?
16. How would you debug a fetch/caching issue where stale data keeps showing (this is your own past bug — good one to speak to directly)?
17. How do environment variables work in Next.js (`NEXT_PUBLIC_` prefix vs server-only)?
18. How would you handle authentication in Next.js (middleware-based route protection, session/JWT handling across server and client)?
19. What is hydration, and what causes a hydration mismatch error?
20. How do you deploy a Next.js app outside of Vercel (e.g., on a VPS) — what changes (standalone output, custom server, PM2)?

---

## 5. Node.js & Express

1. Explain the Node.js event loop phases (timers, poll, check, close callbacks, etc.).
2. Is Node.js single-threaded? Explain the role of libuv and the thread pool.
3. What are streams in Node.js? Explain Readable, Writable, Duplex, Transform.
4. What's the difference between `process.nextTick`, `setImmediate`, and `setTimeout(fn, 0)`?
5. Explain middleware in Express — how does the `next()` chain work?
6. How do you handle errors globally in Express (error-handling middleware)?
7. What is clustering in Node.js and why would you use it?
8. Explain the difference between `require` and `import`/ES modules.
9. How do you handle authentication — sessions vs JWT? Pros/cons of each?
10. What is CORS and how do you configure it properly in Express?
11. Explain rate limiting — how would you implement it (and how have you used Redis for this)?
12. What is middleware ordering and why does it matter?
13. How do you structure a scalable Express project (routes, controllers, services, repositories)?
14. Explain environment variable management and secrets handling (relevant to your `.env` exposure incident — be ready to discuss what you learned).
15. What is the difference between `process.env` and a config file approach?
16. How do you handle file uploads in Express (multer, streaming)?
17. Explain how you'd implement pagination, filtering, and sorting in a REST API.
18. What is idempotency and why does it matter for POST/PUT endpoints?
19. How do you secure an Express API (helmet, sanitization, rate limiting, validation)?
20. Explain how BullMQ/job queues work and why you'd use them (directly relevant to your MediPOS work).

---

## 6. MongoDB & Mongoose

1. Explain the difference between SQL and NoSQL databases — when would you choose MongoDB?
2. What is a document and a collection in MongoDB?
3. Explain embedding vs referencing — how do you decide which to use?
4. What are indexes? Explain compound indexes (you've used these — be ready to explain your indexing decisions).
5. How does MongoDB's aggregation pipeline work? Explain `$match`, `$group`, `$lookup`, `$project`.
6. What is `$lookup` and how does it simulate a "join"?
7. Explain transactions in MongoDB — when do you need them and how do you implement them with Mongoose?
8. What is the difference between `findOneAndUpdate` and `updateOne`?
9. Explain Mongoose schemas, validators, and middleware (pre/post hooks).
10. What is population in Mongoose and what are its performance trade-offs?
11. How do you handle schema versioning/migrations in MongoDB?
12. Explain the ObjectId structure.
13. What is sharding and replication in MongoDB (conceptually)?
14. How do you optimize a slow MongoDB query? Explain `.explain()`.
15. What is a covered query?
16. Explain optimistic vs pessimistic concurrency control — how would you handle it in MongoDB (relevant for POS stock management)?
17. How do you design a schema for a multi-tenant SaaS (relevant to your MediPOS work)?
18. What is the difference between `lean()` queries and regular Mongoose queries?
19. How do you handle atomic operations for things like stock decrement (`$inc`)?
20. Explain TTL indexes and where you might use them.

---

## 7. System Design / Architecture

1. How would you design a POS system's database schema (branches, inventory, sales, payroll)?
2. How would you scale a Node.js API to handle high traffic?
3. Explain caching strategies — where would you use Redis in a MERN app?
4. How would you design a rate limiter?
5. Explain load balancing — how would you scale horizontally?
6. How do you handle real-time features (e.g., live stock updates, notifications)? Explain WebSockets/Socket.io vs polling.
7. How would you design a multi-branch inventory system that avoids overselling?
8. What is eventual consistency and where might it be acceptable in your system?
9. How do you handle background jobs / async processing (BullMQ, message queues)?
10. How would you design an authentication system supporting roles (admin, cashier, manager)?
11. What's your approach to API versioning?
12. How do you approach designing a low-stock alert pipeline (this maps directly to your n8n project)?
13. How would you handle a database migration on a live production system with zero downtime?
14. Explain the CAP theorem at a high level.
15. How would you design file/image storage for a product catalog (e.g., Eyeline Optica)?

---

## 8. DSA / Coding (Practical, Not Competitive-Level)

1. Reverse a string / array.
2. Find duplicates in an array.
3. Two Sum problem.
4. Check if a string is a palindrome.
5. Flatten a nested array.
6. Implement a debounce/throttle function from scratch.
7. Find the first non-repeating character in a string.
8. Merge two sorted arrays.
9. Implement a basic LRU cache.
10. Traverse a tree (BFS/DFS) — e.g., for a category/product tree.
11. Detect a cycle in a linked list.
12. Group array of objects by a key (common real-world task).
13. Implement your own `Array.prototype.map` or `.reduce`.
14. Find the missing number in an array of 1 to N.
15. Basic recursion — factorial, Fibonacci, and explain time complexity (Big-O) for each solution.

---

## 9. Git & DevOps

1. Explain the difference between `git merge` and `git rebase`.
2. How do you resolve a merge conflict?
3. What is the difference between `git fetch` and `git pull`?
4. Explain a Git branching strategy you'd use in a team (Git Flow, trunk-based, etc.).
5. How do you handle multiple remotes (you've configured this recently — be ready to explain why/how)?
6. What is CI/CD? Walk through a pipeline you've built (your GitHub Actions + PM2 + VPS setup is a strong real example).
7. How do you manage environment secrets in a CI/CD pipeline securely?
8. What is PM2 and why use it in production Node deployments?
9. Explain the difference between `git reset`, `git revert`, and `git checkout`.
10. How would you roll back a bad deployment quickly?

---

## 10. Behavioral / Project-Based (Very Likely to Be Asked)

1. Walk me through a challenging bug you fixed recently (your stale-closure or PM2_HOME mismatch debugging stories fit well here).
2. Tell me about a production incident and how you resolved it (your `.env` exposure/credential rotation story is a strong, honest answer here).
3. How do you approach learning a new technology (n8n, NestJS, etc.)?
4. Describe a system you designed from scratch (MediPOS or the optical shop ERP).
5. How do you handle disagreements about technical approach with a team/client?
6. What would you do differently on a past project if you started again?
7. How do you prioritize tasks when working across multiple client projects?

---

## How to Use This List

- Don't memorize answers word-for-word — understand the **why**, and be ready to back it up with an example from MediPOS, Eyeline Optica, or Muslim Hall.
- For System Design and Behavioral sections especially, your real production experience (VPS debugging, CI/CD, the `.env` incident, multi-branch POS design) is a bigger asset than textbook answers — lean into it.
- DSA is your flagged weak spot — don't aim for competitive programming depth, just clean, confident fundamentals (the ~15 listed above cover most interview asks).
