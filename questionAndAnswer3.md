16. Explain synchronous vs asynchronous code execution.

Synchronous code runs strictly line-by-line. Each line must finish before the next one starts.Behavior is: If a line of code takes a long time (like fetching a massive file), the entire application freezes. This is known as blocking

Asynchronous code starts a task and immediately moves to the next line of code without waiting. Behavior is: Time-consuming tasks (like database queries or API requests) run in the background. When the background task finishes, a notification (via callbacks, promises, or async/await) tells the program to process the result.
