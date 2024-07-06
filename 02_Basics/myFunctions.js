"use strict";
// ************************ FUNCTIONS ************************
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
// addTwo('hello'); // we cannot pass string here as allowed type is number
addTwo(5);
function getUppercase(val) {
    return val.toUpperCase();
}
// getUppercase(5)  // we cannot pass number here as allowed type is string
getUppercase("hello");
function signUpUser(name, email, isAdmin) {
    if (isAdmin === void 0) { isAdmin = false; }
    return name + email + isAdmin;
}
// we have not passed 3rd argument as it is default value is given it wont give error
signUpUser("Anas", "anas@gmail.com");
// in this function we are returning string but we are getting number as an input isnt it is weired behaviour to avoid this we define return value type also
// Wrong way
// function addFive(num: number){
//     return "Hello"
// }
// Right way
function addFive(num) {
    return num + 5;
}
// there can cases where return value can of two types in that situatuion we user other technique we cannot directly define return type in function
function myVal(val) {
    if (val > 5) {
        return true;
    }
    return "200 OK";
}
//in this case return type is more than one and it can be many
// type define with arrow funtion
var geHello = function (s) {
    return "world";
};
geHello("asd");
// type with map function
var heros = ["Thor", "Hulk", "Ironman", "Spiderman"];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
// in above map function we have mentioned type that callback output type will be string but no need to mention every inputs type or iterative value type which is hero in this case typescript automatically detects its type
// void
function consoleError(errMsg) {
    console.log(errMsg);
    // return "Something went wrong"    // it is not allowed void means it is not returning anything 
}
function habdleewrror(errMsg) {
    throw new Error(errMsg);
}
