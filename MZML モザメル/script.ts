//Primitive DataTypes
let myString : String = 'justiφs';
let myNumber : number=555;
let isBool:boolean=true;
let Null : null;

//Object Data Types
let myArray=[];
let mySet={};
//function is also an object datatype

// Special Datatypes
let newVar:unknown;
let myAny:any;

newVar="Henshin";
newVar=913;
newVar=true;

myAny="hey";
myAny=99;
myAny=true;

//Structural DataTypes
enum Role{
    admin,
    manager,
    empleyee
}

//tuple
let student : [string , number];
student=['Faiz',555];

// literal types
let direction : "left" | "Right"| "up"|"down";
// direction="top";
direction="up";

// Union Types
let myUnion : String|number|boolean;
myUnion='Connected'
myUnion=1215;
myUnion=false;


//Functions
//Normal Functions
function greet(){
    document.writeln('Hey');
}

// normal parameterized function
function greetWithName(name:string){
    document.writeln(`Hey there ${name}`);
}

// Arrow function
const functionOne = () => {
    document.writeln('this is a normal arrow function');
}

// parameterized Arrow function
const add = (a:number,b:number,c:number)=>{
    document.writeln(`${a+b+c}`);
}
add(5,5,5);//positional arguments



//2 normal 
function start(){
    document.writeln('lets begin the experiment');
}
function victory(){
    document.writeln('The laws of victory have been set');
}

//2 Arrow 
const standby = () => {
    document.writeln('Are you ready?');
}
const upgrade = () => {
    document.writeln('Hazard On');
}

//2 normal parameterized
function wake(user:string){
    document.writeln(`Good morning,${user}!`);
}
function strike(rider:string){
    document.writeln(`${rider} kick`);
}

//2 parameterized arrow
const avg = (x:number,y:number,z:number) =>{
    document.writeln(`The average is (${(x+y+z)/2}`)
}
const build = (b1:string,b2:string)=>{
    document.writeln(`${b1} ${b2} Best Match`)
}

build("Rabbit","Tank")