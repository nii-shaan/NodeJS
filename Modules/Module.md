# Modules

A Module is an encapsulated and reusable chunk of code that has its own context
In Node.js, each file is teated as separate module

# Types of Modules:

1. Local Modules: Modules that we create in our application
2. Built-in Modules: Modules that Node.js ships with out of the box
3. Third party modules: Modules written by other developers that we can use in our application

# Local Modules Summary:

- In Node.js, each file is a module that is isolated by default
- To load a module into another file, we use the `require()` function
- When index.js is executed, the code in the module is also executed
- If the file we are requiring is a javascipt file, we can skip specifying the extension and node.js will infer it on our behalf

# Module scope :

_Each module has their own scope_

# Module Wrapper

- Every Module is an IIFE, it has by default 5 parameters, They are: exports, require, module, **filename, **dirname
  A module is like this:

`(Function(exports, require, module, __filename, __dirname){`
`const superhero ="Batman";`
`console.log(superhero);`
`})`

- `exports`: is reference to object module.exports
- `require`: a function that is used to import other modules
- `module`: object that represents the current module and its metadata. `module.exports` `module.filename` etc..
- `__filename`: path of the current file
- `__dirname`: path of the current directory

# Module Caching :

- Once a `require("./path")` is done then the module is cached("remembered") for performance purpose
- so if we again did same require the node engine will give us the cached one/ remembered one which helps in performance

# import-export:

- When we assign the reference of an object than the reference point is breaked and treats the reference as an another object

# CommonJS:

- Each file is treated as a module
- Variables, functions, classes, etc. are not accessible to others files by default
- Explicitly tell the module system which parts of your code should be exported via module.exports or exports
- To import code into a file, use the require() function

# ES Modules:

- At the time NodeJs was created, there was no built-in module system in JavaScript
- Node.js defaulted to CommonJS as its module system
- As of ES2015, JavaScript does have a standardized module system as part of the language itself
- That module system is called EcmaScript Modules or ES Modules or ESM for short

# ES Modules Summary:

- ES Modules is the ECMAScript standard for modules
- It was introduced with ES2015
- Node.js 14 and above support ES Modules
- Instead of module.exports, we use the export keyword
- The export can be default or named
- We import the exported variables or functions using the import keyword
- If it is a default export, we can assign any name while importing

# Importing JSON:

- JavaScript Object Notation
- A data interchange format commonly used with web servers

# watch mode:

- To use watch mode use command `node --watch [filename.js]`
- watch mode is nodejs is a feature from v18+, if it detects any change in the code it re-runs automatically

# _Section Summary_:

- What is module and what is the need for modules?
- Types of modules in Node.js
- Local Modules
- CommonJS module format
- Module wrapper (IIFE)
- Module caching
- Patterns for importing and exporting modules in CommonJS and ESM Format
- Importing JSON data and watch mode

# Built-in Modules:

- Modules that Node.js ships with
- Also referred to as core modules
- Import the module before you use it
  _focusing on_
  `path` **modules/path**
  `events` **modules/events**
  `fs` **modules/fs**
  `stream`
  `http`
