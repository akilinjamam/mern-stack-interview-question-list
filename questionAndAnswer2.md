7. What's the difference between `setTimeout`, `Promise.then`, and `process.nextTick`?

The primary difference lies in execution priority and where they sit in the asynchronous queue system.process.

nextTick has the highest priority and executes immediately after the current synchronous block finishes, before any event loop phases or microtasks.

Promise.then handles microtasks, executing immediately after the process.nextTick queue empties but before the event loop moves to macro-tasks like timers.

setTimeout handles macro-tasks, scheduling callbacks to run in a future event loop "Timers" phase after a minimum specified delay (even with 0ms).

Order of Execution:
1.1. Synchronous Start and 2. Synchronous End print immediately because synchronous operations always run first.
2.4. process.nextTick executes next. Node.js drains the nextTickQueue the moment the current execution stack empties.
3.5. Promise.then executes after process.nextTick. The V8 engine empties the microtask queue right before returning control to the main event loop.
4.6 setTimeout executes last. Its callback is placed in the macrotask timer phase, which runs on the subsequent iteration of the event loop

process.nextTick is a Node.js-exclusive method that schedules a callback function to run at the highest possible priority in the asynchronous execution queue

```
console.log("1. Synchronous Start");

setTimeout(() => {
  console.log("6. setTimeout (Macrotask)");
}, 0);

Promise.resolve().then(() => {
  console.log("5. Promise.then (Microtask)");
});

process.nextTick(() => {
  console.log("4. process.nextTick");
});

console.log("2. Synchronous End");


```

8. Explain prototypal inheritance. How does `__proto__` differ from `prototype`?

Prototype inheritance in JavaScript allows objects to inherit properties and methods from other objects. Each object in JavaScript has an internal link to another object called its prototype. This chain of prototypes forms the prototype chain.

When you access a property or method on an object, JavaScript first checks the object itself.
If the property or method isn’t found, it moves up the prototype chain until it finds the property or reaches the end of the chain (null).

Let's start with the fundamental concepts:
prototype is a property of constructor functions. It defines the properties and methods that will be shared by all instances of the constructor.
**proto** is a property of objects that points to their prototype. It is the actual link between objects in the prototype chain.

Understanding the Chain

When you try to access a property on an object, JavaScript follows this process:
Check if the property exists on the object itself
If not, check the object's **proto** (which points to the constructor's prototype)
Continue up the prototype chain until the property is found or the chain ends
This mechanism is known as dynamic dispatch or delegation. Unlike static dispatch (where references are resolved at compile time), dynamic dispatch resolves references at runtime, allowing for full mutability of the inheritance chain.

```
function Animal(name) {
  	this.name = name;
}

Animal.prototype.speak = function () {
  	console.log(`${this.name} makes a sound.`);
};

const dog = new Animal("Buddy");

console.log(dog.name);
dog.speak();

```

9. What is the difference between `==` and `===`?

`==` means compayre only value and `===` means compare value and type of value

10. Explain `call`, `apply`, and `bind`.

call() invokes a function immediately, sets the function's this value to its first argument, and passes the remaining arguments individually to the function.

```
function greet(age, profession) {
  console.log(this.name);
  console.log(age);
  console.log(profession);
}

const person = {
  name: "Akil"
};

greet.call(person, 20, "Developer");

```

the apply() method works like call(): it invokes a function immediately, sets the function's this value using the first argument, and passes the second argument as an array (array-like object) which is passes through the function's parameters.

```

function introduce(age, profession) {
  console.log(this.name);
  console.log(age);
  console.log(profession);
}

const person = {
  name: "Akil"
};

introduce.apply(person, [20, "Developer"]);

```

The bind() method does not invoke the function immediately. Instead, it returns a new function with this explicitly set to the first argument, while the remaining arguments are passed to the function's parameters when the new function is called.

```
function introduce(age, profession) {
  console.log(this.name);
  console.log(age);
  console.log(profession);
}

const person = {
  name: "Akil"
};

const newFunction = introduce.bind(
  person,
  20,
  "Developer"
);

newFunction();

```

11. What are higher-order functions? Give examples.

A higher-order function is a function that takes another function as an argument or returns another function as its result.

```
// example 1
function calculate(a, b, operation) {
    return operation(a, b);
};


function multiply(a, b) {
    return a * b
};

console.log(calculate(4, 5, multiply))

// example 2

function addition(x) {
    return (y) => {
        return y + x
    }
};

const sum = addition(10);
const result = sum(5);
console.log(result)

```

12. Explain debounce vs throttle. When would you use each?

Debounce waits until the events stop happening, then invokes the function once.

```
function debounce(fn, delay) {
  let timer;

  return (...args) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

const search = debounce((query) => {
  console.log("API request:", query);
}, 500);

```

Throttle allows the function to run at most once within a specific time period.

```
function throttle(fn, delay) {
  let lastRun = 0;

  return (...args) => {
    const now = Date.now();

    if (now - lastRun >= delay) {
      lastRun = now;
      fn(...args);
    }
  };
}

const handleScroll = throttle(() => {
  console.log("Scrolling...");
}, 200);

```

13. What is currying?
    Currying is a functional programming technique where a function that takes multiple arguments is transformed into a sequence of functions, each taking one argument at a time.

```

function curringFunction(a) {
    return function (b) {
        return a * b
    }
};

// const result = curringFunction(5);
console.log(curringFunction(8)(5));

```

Explain `map`, `filter`, `reduce` — implement one from scratch.

map() that Transform every element and return New array

filter() which Keep elements that satisfy a condition and return New array

reduce() is a combination of all elements into one result that return single value

15. What is event delegation, event bubbling and event propagation?

Event delegation is a JavaScript design pattern where you attach a single event listener to a parent element to manage events for all of its current and future child elements. Instead of adding separate listeners to every individual child, this technique leverages event bubbling, a process where an event triggered on a child element automatically travels (bubbles) up the DOM tree to its ancestors.

```
// HTML Structure:
// <ul id="parent-list">
//   <li class="item">Item 1</li>
//   <li class="item">Item 2</li>
// </ul>

const parentList = document.getElementById('parent-list');

// Attach ONE listener to the parent container
parentList.addEventListener('click', (event) => {
    // Target the specific element that was clicked
    const clickedElement = event.target;

    // Filter out clicks that didn't happen on an item we care about
    if (clickedElement.classList.contains('item')) {
        console.log(`Clicked on: ${clickedElement.textContent}`);
    }
});



```

Event propagation is the mechanism that defines how an event travels through the Document Object Model (DOM) tree to execute event handlers when an interaction occurs. When you click an element nested inside other elements, the event does not just trigger on that single item; it travels through all of its ancestors

```

<!DOCTYPE html>
<html>

<head>
    <style>
        #div1 {
            background-color: lightgreen;
            padding: 24px;
            border: 1px solid black;
        }

        #div2 {
            background-color: yellow;
            padding: 18px;
            border: 1px solid black;

        }

        #div3 {
            background-color: orange;
            border: 1px solid black;
        }
    </style>
</head>

<body>
    <h1 style="color: green">GeeksForGeeks</h1>
    <h3>What is Event propagation, capturing, bubbling?</h3>

    <div id="div1">
        Component 1
        <div id="div2">
            component 2
            <div id="div3">
                component 3
            </div>
        </div>
    </div>

    <!-- Javascript code for event bubbling -->
    <script>
        let div1 = document.querySelector("#div1");
        let div2 = document.querySelector("#div2");
        let div3 = document.querySelector("#div3");

        div1.addEventListener("click", function (event) {
            alert("Component 1 event clicked");
        });

        div2.addEventListener("click", function (event) {
            alert("Component 2 event clicked");
        });

        div3.addEventListener("click", function (event) {
            alert("Component 3 event clicked");
        });
    </script>
</body>

</html>

```
