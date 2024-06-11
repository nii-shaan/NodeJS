(function () {
  const superHero = "Batman";
  console.log(superHero);
})();

(function () {
  const superHero = "Superman";
  console.log(superHero);
})();

//* Node js uses this same pattern and every module is an iffe

//* Before a module's code is executed, Node.js will wrap it with a function wrapper that provides moudule scope

// ! Summary
//* Each loaded module in Node.js is wrapped with an iffe that provides private scoping of code



