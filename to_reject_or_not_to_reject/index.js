var def = require('q').defer();
def.promise.then(console.log,console.log);
def.resolve("I FIRED");
def.reject("I DID NOT FIRE");