"use strict";
//Object.defineProperty(exports, "__esModule", { value: true });

//Primitive DataTypes
let myString = 'justiφs';
let myNumber = 555;
let isBool = true;
let Null;
//Object Data Types
let myArray = [];
let mySet = {};
//function is also an object datatype
// Special Datatypes
let newVar;
let myAny;
newVar = "Henshin";
newVar = 913;
newVar = true;
myAny = "hey";
myAny = 99;
myAny = true;
//Structural DataTypes
var Role;
(function (Role) {
    Role[Role["admin"] = 0] = "admin";
    Role[Role["manager"] = 1] = "manager";
    Role[Role["empleyee"] = 2] = "empleyee";
})(Role || (Role = {}));
//tuple
let student;
student = ['Faiz', 555];
// literal types
let direction;
// direction="top";
direction = "up";
// Union Types
let myUnion;
myUnion = 'Connected';
myUnion = 1215;
myUnion = false;
//Functions
//Normal Functions
function greet() {
    document.writeln('Hey');
}
// normal parameterized function
function greetWithName(name) {
    document.writeln(`Hey there ${name}`);
}
// Arrow function
const functionOne = () => {
    document.writeln('this is a normal arrow function');
};
// parameterized Arrow function
const add = (a, b, c) => {
    document.writeln(`${a + b + c}`);
};
add(5, 5, 5); //positional arguments

//2 normal 
function start() {
    document.writeln('lets begin the experiment');
}
function victory() {
    document.writeln('The laws of victory have been set');
}
//2 Arrow 
const standby = () => {
    document.writeln('Are you ready?');
};
const upgrade = () => {
    document.writeln('Hazard On');
};
//2 normal parameterized
function wake(user) {
    document.writeln(`Good morning,${user}!`);
}
function strike(rider) {
    document.writeln(`${rider} kick`);
}
//2 parameterized arrow
const avg = (x, y, z) => {
    document.writeln(`The average is (${(x + y + z) / 2}`);
};
const build = (b1, b2) => {
    document.writeln(`${b1} ${b2} Best Match`);
};

start();
build("Rabbit", "Tank");
strike("Genius")
//# sourceMappingURL=script.js.map
