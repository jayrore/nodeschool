var def = require('q').defer();
var attachTitle = function(n){ return "DR. "+n; };
def.promise.then(attachTitle).then(console.log);
def.resolve("MANHATTAN")