var def = require('q').defer();

def.promise.then(console.log);
setTimeout(def.resolve, 300, "RESOLVED!");
