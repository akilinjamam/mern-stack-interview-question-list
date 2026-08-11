# javascript Fundamentals:

1. What is the difference between `var`, `let`, and `const`?
   The main differences between var, let, and const in JavaScript are their scope, reassignment rules, and hoisting behavior. var is function-scoped and can be reassigned and redeclared, let is block-scoped and can be reassigned but not redeclared, and const is block-scoped and cannot be reassigned or redeclared.

2. Explain hoisting. What gets hoisted and how?

JavaScript Hoisting

Hoisting refers to the behavior where JavaScript moves the declarations of variables, functions, and classes to the top of their scope during the compilation phase. This can sometimes lead to surprising results, especially when using var, let, const, or function expressions

3. what is Temporal Dead Zone

The Temporal Dead Zone is the period between entering a scope and executing the let or const declaration. During this period, any access to the variable throws a ReferenceError.

4. Explain closures with an example. Where have you used them practically?

In JavaScript, closures are defined as inner functions that have access to variables and parameters of outer function even after the outer function has returned. The below examples show the practical use of closures:

```
// Define the closure
function multFn() {
  var mult = 9;
  return function(val) {
    mult = mult * val;
    return mult;
  }
}

// Use the closure
var mult = multFn();
console.log(mult(18));

```

Example: In this example, a variable mult is defined that is local to the function multFn and is only accessible inside this function. When an inner function is declared, JavaScript creates a closure where the inner function has access to the variable and its parameters

Practical UsesData Privacy: Hiding variables so other parts of code cannot change them by accident.

```
function createSecureWalllet(initialAmmount){
   let balance = initialAmmount

   return {
      deposit: function(amount){
         if(initialAmount > 0){
            balance += amount;
            console.log(`Deposited $${amount}. Current balance is. $${balance}`)
         }
      },
      withdraw:function(amount){
         if(amount > balance){
            console.log('insuficient funds!')
         };
         balance -= amount;
         console.log(`withdraw $${amount}. Current balance is. $${balance}`)
      },
      getBalance: function(){
         return balance
      }
   }
}

// Create a private instance
const myWallet = createSecureWallet(100);

myWallet.deposit(50);      // Deposited $50. Current balance: $150
myWallet.withdraw(30);     // Withdrew $30. Current balance: $120

// Attempting to break or bypass the system:
console.log(myWallet.balance); // undefined (The variable is completely hidden!)
myWallet.balance = 50000;      // This just creates a useless property, it doesn't touch the real balance.
console.log(myWallet.getBalance()); // 120 (The real balance remains safe and untouched!)

```

Event Handlers: Remembering state in user interface clicks or timers.

```
function attachLikeButton(buttonElement, productName) {
  // Each button gets its own isolated, private counter
  let likeCount = 0;

  buttonElement.addEventListener("click", function() {
    // This inner function is a closure that remembers 'likeCount' and 'productName'
    likeCount++;
    buttonElement.textContent = `Liked ${productName} (${likeCount})`;
  });
}

// Setting up the event listeners
const buttonA = document.querySelector("#btn-shoes");
const buttonB = document.querySelector("#btn-shirts");

attachLikeButton(buttonA, "Running Shoes");
attachLikeButton(buttonB, "Cotton Shirts");


for (var i = 1; i <= 3; i++) {
  // We pass 'i' into an immediately invoked function expression (IIFE)
  (function(index) {
    setTimeout(function() {
      // This closure captures the unique 'index' variable for this iteration
      console.log(`Timer ${index} finished!`);
    }, index * 1000);
  })(i);
}
// Out: "Timer 1 finished!" (at 1s)
// Out: "Timer 2 finished!" (at 2s)
// Out: "Timer 3 finished!" (at 3s)


```

Function Factories: Creating custom functions with preset settings.

```
function createLogger(level) {
  const timestamp = () => new Date().toLocaleTimeString();

  return function(message) {
    // The closure has access to both 'level' and the 'timestamp' helper
    console.log(`[${timestamp()}] [${level.toUpperCase()}]: ${message}`);
  };
}

// Instantiate specific loggers with preset settings
const logInfo = createLogger("info");
const logWarning = createLogger("warning");
const logError = createLogger("error");

// Execute the custom loggers
logInfo("User successfully logged in.");
// Output: [12:20:15 PM] [INFO]: User successfully logged in.

logWarning("Database connection is slow.");
// Output: [12:20:16 PM] [WARNING]: Database connection is slow.

logError("Failed to fetch user data.");
// Output: [12:20:17 PM] [ERROR]: Failed to fetch user data.

```

Asynchronous Code: Keeping track of variables during API calls or loops.

```

// Mock function simulating an asynchronous API network request
function fetchServerStatus(serverId) {
  const fakeDelay = Math.random() * 2000; // Random delay up to 2 seconds
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: serverId, online: Math.random() > 0.3 });
    }, fakeDelay);
  });
}

function monitorServers() {
  const serverIds = ["srv-prod-01", "srv-staging-02", "srv-auth-03"];

  for (let i = 0; i < serverIds.length; i++) {
    // Each loop iteration creates a new block scope.
    // 'currentServer' is trapped inside this specific iteration's scope.
    const currentServer = serverIds[i];

    fetchServerStatus(currentServer).then(function(response) {
      // This callback is a closure.
      // Even though the loop ended seconds ago, the closure perfectly
      // remembers exactly which 'currentServer' matches this specific API response.
      console.log(`Result for ${currentServer}: Status is ${response.online ? 'ONLINE' : 'OFFLINE'}`);
    });
  }
}

monitorServers();
// Output (order depends on network speed, but IDs always match correctly):
// "Result for srv-staging-02: Status is ONLINE"
// "Result for srv-prod-01: Status is ONLINE"
// "Result for srv-auth-03: Status is OFFLINE"



```
