//  Question 1
//  Declare an array that accepts only number and boolean values

let multipleTypes: (number | boolean)[];



//  Question 2
//  Declare a tuple that takes 3 values: a boolean, a string, and a number

let tuple: [boolean, string, number];



//  Question 3
//  Set the Type for the arguments and return value for this function.

function getFullName(firstName: name, lastName: name): name {
    return `${firstName} + ${lastName}`;
}



//  Question 4
//  Create an interface that could be used for these objects.

interface ErrorMessage {
    jobTitle?: string;
    age?: number;
  }
[
	{ name: "Burt", age: 77, jobTitle: "Magician" },
	{ name: "Walt", age: 11 },
	{ name: "Spencer", age: 107, jobTitle: "Bus conductor" },
];



//  Question 5
//  Create a numeric enum that has 3 members: Paid, Unpaid, Unknown.

enum Response {
	Paid,
	Unpaid,
	Unknown,
}



//  Question 6
//  Create a Person class.
//  The class's constructor should set a name property when instantiated, 
//  and the class should contain a method that returns the string: 
//  "My name is " + the value of the name property.

class Name {
	name: string;

	constructor(person: string) {
		this.name = person;
	}

	displayName() {
		return "My name is " + this.name;
	}
}




//  Question 7
//  Create type aliases for the arguments in this function.

function getDetails(name: string | boolean, details: { id: number | string, status: string | boolean }){}


type StrNum = number | string;
type Details = { id: StrNum; status: string | boolean };

function getDetails(name: StrNum, details: Details) {}