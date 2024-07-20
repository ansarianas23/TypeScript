// Type narrowing with equality operator
function detectType(val: number | string){
    if(typeof val === "string"){
        return val.toLocaleLowerCase();
    }

    return val + 3
}

function provideId(ID: string | null){
    if(!ID){
        console.log("Please Provide ID")
        return
    }
    ID.toLocaleLowerCase();
}

function printAll(str: string | string[] | null){
    if(str){
        if(typeof str === "object"){
            for(let s of str){
                console.log(s); 
            }
        }else if(typeof str === "string"){
            console.log(str);
        }
    }
}

// ----------------------------------------------------------------------------------------------------------
// Type narrowing with "in" operator
interface User{
    name: string 
    email: string
}

interface Admin{
    name: string 
    email: string,
    isAdmin?: boolean
}


function isAdminCheck(account: User | Admin){
    if("isAdmin" in account){
        return account.isAdmin
    }
}

isAdminCheck(
    {
        name: "Anas",
        email: "anas@gmail.com"
    }
);


// ----------------------------------------------------------------------------------------------------------
// Type narrowing with "instanceOf" operator
// it can only be used with oncoming data are created with new keyowrd for eg an object created from class or new Date()

function logValue(x: Date | string){
    if(x instanceof Date){
        console.log(x.toUTCString());
    }else{
       console.log(x.toUpperCase()); 
    }
}

type Fish = {swim: ()=>void}
type Bird = {fly: ()=>void}

function isFish(pet: Fish | Bird): pet is Fish{
    return (pet as Fish).swim !== undefined
}

function fishFood(pet: Fish | Bird){
    if(isFish(pet)){
        pet
        return "Fish food"
    }else{
        pet
        return "Bird Food" 
    }
}

// ----------------------------------------------------------------------------------------------------------
// Discriminated unions | never type | exhaustiveness check

interface Circle{
    kind: "circle"
    radius: number
}

interface Square{
    kind: "square"
    side: number
}

interface Rectangle{
    kind: "rectangle"
    length: number
    width: number
}

type Shape = Circle | Square | Rectangle

function getShape(shape: Shape){
    if(shape.kind === "circle"){
        return Math.PI * shape.radius **2
    }else{
        // return shape.side * shape.side
    }
}

function getArea(shape: Shape){
    switch(shape.kind){
        case "circle":
            return Math.PI * shape.radius **2

        case "square": 
            return shape.side * shape.side
        
        case "rectangle":
            return shape.length * shape.width

        default:
            const _defaultForShape: never = shape
            return _defaultForShape
    }
}