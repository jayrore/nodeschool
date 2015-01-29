var def = require('q').defer();

var attachTitle = function(name){
		return "DR. "+name;
};

def.promise.then(attachTitle).then(console.log);

def.resolve("MANHATTAN")