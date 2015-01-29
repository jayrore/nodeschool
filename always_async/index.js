var def = require('q').defer();
def.promise.then(console.log);
def.resolve("SECOND");
console.log("FIRST");