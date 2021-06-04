//normal function
normalFunction = function() {
	return 'normal function';
};
console.log(normalFunction());

// arrow function
arrowFunction = () => 'arrow function';
console.log(arrowFunction());

// arrow function with parameters
arrowFunction2 = (baal) => baal;
console.log(arrowFunction2("parameter with braces"));

// arrow function with parameters but
// without braces
arrowFunction2 = baal => baal;
console.log(arrowFunction2("parameter without braces"));