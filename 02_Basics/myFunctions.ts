// ************************ FUNCTIONS IN TYPESCRIPT ************************

function addTwo(num: number){
    return num +2
}

// addTwo('hello'); // we cannot pass string here as allowed type is number
addTwo(5);

function getUppercase(val: string){
    return val.toUpperCase();
}

// getUppercase(5)  // we cannot pass number here as allowed type is string
getUppercase("hello");

function signUpUser(name: string, email: string, isAdmin: boolean = false){
    return name + email + isAdmin
}

// we have not passed 3rd argument as it is default value is given it wont give error
signUpUser("Anas", "anas@gmail.com");


// in this function we are returning string but we are getting number as an input isnt it is weired behaviour to avoid this we define return value type also

// Wrong way
// function addFive(num: number){
//     return "Hello"
// }

// Right way
function addFive(num: number): number{
    return num + 5
}

// there can cases where return value can of two types in that situatuion we user other technique we cannot directly define return type in function

function myVal(val:number){
    if (val > 5) {
        return true
    }

    return "200 OK"
}

//in this case return type is more than one and it can be many

// type define with arrow funtion
const geHello = (s: string): string=>{
    return "world"
}

geHello("asd");

// type with map function
const heros = ["Thor", "Hulk", "Ironman", "Spiderman"]

heros.map((hero): string=>{
    return `hero is ${hero}`
})

// in above map function we have mentioned type that callback output type will be string but no need to mention every inputs type or iterative value type which is hero in this case typescript automatically detects its type

// void
function consoleError(errMsg: string): void{
    console.log(errMsg);
    // return "Something went wrong"    // it is not allowed void means it is not returning anything 
}

function habdleewrror(errMsg: string): never{
    throw new Error(errMsg);
}

// Functions that return never are meant to signal that they will not produce a value at all, not even undefined. They indicate the function will either throw an error or run forever.

// Key Differences

// Return Value:
// void: Indicates the function does not return a value.
// never: Indicates the function never completes normally.

// Usage Context:
// void: Used in functions that perform an action but do not return a value.
// never: Used in functions that always throw an error or have an infinite loop, indicating that the function execution never reaches its end.
// Type Assignment:

// void can be assigned undefined.
// never cannot be assigned any value and no value can be assigned to never.

export {}