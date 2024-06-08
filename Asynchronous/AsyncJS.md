# Asynchronous JavaScript

- JavaScript is a _synchronous_, _blocking_, _single-threaded_ language

# Synchronous

- If we have two functions which log messages to the console, code executes top down, with only one line executing at any given time

# Blocking

- No matter how long a previous process takes, the subsequent processes won't kick off until the former is completed

- Web apps runs in a browser and it executes an intensive chunk of code without returning control to the browser, the browser can appear to be frozen

# Single-threaded

- A thread is simply a process that your javascript program can use to run a task
- Each thread can only do _one_ task at a time
- JavaScript has just the one thread called the main thread for executing any code

# Summary

- JavaScript is a synchronous, blocking, single-threaded language
- This nature however is not beneficial for writing apps
- We want non-blocking asynchronous behaviour which is made possible by a browser for front-end and Node.js for backend
- This sytle of programming where we don't block the main JavaScript thread is fundamental to Node.js and is at the heart of how some of the built-in module code is written
