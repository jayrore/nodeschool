var def = require('q').defer();
def.promise.then(
	null, 
	function (error) {
  		console.log(error.message);
	});
setTimeout(def.reject, 300, new Error("REJECTED!"));