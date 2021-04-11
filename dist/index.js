//  Question 1
//  Declare an array that accepts only number and boolean values
var multipleTypes;
//  Question 2
//  Declare a tuple that takes 3 values: a boolean, a string, and a number
var tuple;
//  Question 3
//  Set the Type for the arguments and return value for this function.
function getFullName(firstName, lastName) {
    return firstName + " + " + lastName;
}
[
    { name: "Burt", age: 77, jobTitle: "Magician" },
    { name: "Walt", age: 11 },
    { name: "Spencer", age: 107, jobTitle: "Bus conductor" },
];
//  Question 5
//  Create a numeric enum that has 3 members: Paid, Unpaid, Unknown.
var Response;
(function (Response) {
    Response[Response["Paid"] = 0] = "Paid";
    Response[Response["Unpaid"] = 1] = "Unpaid";
    Response[Response["Unknown"] = 2] = "Unknown";
})(Response || (Response = {}));
//  Question 6
//  Create a Person class.
//  The class's constructor should set a name property when instantiated, 
//  and the class should contain a method that returns the string: 
//  "My name is " + the value of the name property.
var Name = /** @class */ (function () {
    function Name(person) {
        this.name = person;
    }
    Name.prototype.displayName = function () {
        return "My name is " + this.name;
    };
    return Name;
}());
//  Question 7
//  Create type aliases for the arguments in this function.
function getDetails(name, details) { }
function getDetails(name, details) { }
