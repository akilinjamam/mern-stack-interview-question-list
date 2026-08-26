16. Explain synchronous vs asynchronous code execution.

Synchronous code runs strictly line-by-line. Each line must finish before the next one starts.Behavior is: If a line of code takes a long time (like fetching a massive file), the entire application freezes. This is known as blocking

Asynchronous code starts a task and immediately moves to the next line of code without waiting. Behavior is: Time-consuming tasks (like database queries or API requests) run in the background. When the background task finishes, a notification (via callbacks, promises, or async/await) tells the program to process the result.

17. What are Promises? Explain `Promise.all`, `Promise.race`, `Promise.allSettled`, `Promise.any`.

In JavaScript, a Promise is an object representing the eventual completion (or failure) of an asynchronous operation

Promise.all() is used when your code relies on multiple related asynchronous tasks to all complete successfully before moving forward

```
// If one fails, the whole block fails immediately
Promise.all([fetchUsers(), fetchPosts(), fetchComments()])
  .then(([users, posts, comments]) => { /* Handle all data */ })
  .catch(error => console.error("One of the requests failed:", error));
```

Promise.allSettled() is used when you want to execute a batch of independent operations and always need to know the final outcome of every single task.

```
Promise.allSettled([fetchProfile(), fetchAds()])
  .then(results => {
    results.forEach(result => {
      if (result.status === 'fulfilled') {
        console.log("Success value:", result.value);
      } else {
        console.log("Failed reason:", result.reason);
      }
    });
  });


```

Promise.race() returns a promise that settles as soon as the very first promise in the array settles—whether it completes successfully or fails

```
const downloadFile = fetch('https://example.com');
const timeout = new Promise((_, reject) => setTimeout(() => reject('Timeout!'), 5000));

// Whichever is faster wins the race
Promise.race([downloadFile, timeout])
  .then(file => console.log("Downloaded successfully"))
  .catch(err => console.error("Failed or timed out:", err));

```

Promise.any() listens for the first promise that completes

```
Promise.any([fetchFromMirrorA(), fetchFromMirrorB(), fetchFromMirrorC()])
  .then(fastestData => console.log("Got data from fastest working server"))
  .catch(aggregateError => console.error("All mirrors failed:", aggregateError.errors));


```
