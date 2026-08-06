# javascript Fundamentals:

1. What is the difference between `var`, `let`, and `const`?
   The main differences between var, let, and const in JavaScript are their scope, reassignment rules, and hoisting behavior. var is function-scoped and can be reassigned and redeclared, let is block-scoped and can be reassigned but not redeclared, and const is block-scoped and cannot be reassigned or redeclared.

2. Explain hoisting. What gets hoisted and how?

JavaScript Hoisting

Hoisting refers to the behavior where JavaScript moves the declarations of variables, functions, and classes to the top of their scope during the compilation phase. This can sometimes lead to surprising results, especially when using var, let, const, or function expressions

3. what is Temporal Dead Zone

The Temporal Dead Zone is the period between entering a scope and executing the let or const declaration. During this period, any access to the variable throws a ReferenceError.
