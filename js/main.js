// // this it the basics of call/name functions
// function test() {
// 	console.log("Hello World");
// }



// function addSimple() {
// 	a = 1 + 1;
// }




// test();
// addSimple()
// console.log("a: " + a);

// // anonymous functions dont have a name or choose not to go into a monitor


// var cow = function() {
// 	console.log("sup, Im martin")
// }



// cow()
// var a = 1;
// var b = 2;
// var c;
// parameters are dynamic variables. they will be what ever we put into the funcction. they can be hwhaterver we want them to be. this also means that we can use thiese parameteres for a variety of purposes.
// function addTwoNumbers(firstNumber, secondNumber) {
// 	console.log(firstNumber + secondNumber);
// }

// addTwoNumbers(1, 1);
// addTwoNumbers(2, 1);
// addTwoNumbers(10000, 1);
// console.log(c);


// function addTwoNumbers() {
// 	amount = 0;
// 	for(var i = 0; i < arguments.length; i++) {
// 		amount = amount + arguments[i];
// 	}
// 	console.log("amount: " + amount);
// }

// addTwoNumbers(1, 1, 1, 1, 1, 1);
// addTwoNumbers(2, 1);
// addTwoNumbers(10000, 1);
// addTwoNumbers();

// the Concept of arguments and named parameters
// function addTwoNumbers(firstCow, secondMooMoo) {
// 	console.log("firstCow: " + firstCow);
// 	console.log("secondMooMoo: " + secondMooMoo);
// 	console.log("arguments[2]: " + arguments[2]);
// }

// addTwoNumbers(1, 4, 89);

// var holder = {}
// holder.amount = 0;
// holder.someValueWeWantToAlsoStore = "true man";


// // scope means where things are stored.
// var amount = "cheese";
// function addTwoNumbers() {
// 	console.log("amount: " + window.amount);
// 	var amount = 0;
// console.log("amount: " + amount);
// };
// addTwoNumbers();
// console.log("amount: " + amount);

function setup() {
	let search = document.getElementById("firstName");
	search.focus();
} 

window.addEventListener("load", setup, false);