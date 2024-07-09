// Unios type with vaiable
let score: number | string = 55
score = 50
score = "50"

// ----------------------------------------------------------------------------------------

// union type wuth object
type User = {
    name: string
    id: number
}

type Admin = {
    username: string
    id: number
}

let Anas: User | Admin = {
    username: "Anas",
    id: 5
}

Anas = {
    name: "Ansari",
    id: 50
}

// ----------------------------------------------------------------------------------------

// union type with function
// function getDBId(id: number | string){
//     // making some api call
//     console.log(`DB id is ${id}`)
// }

getDBId(5)
getDBId("5")

function getDBId(id: number | string){
    // making some api call
    // id.toLowerCase()    // it make error because either it can be a number or string we cant directly use array or string methods we have to check type orst
    if(typeof id === "string"){
        id.toLowerCase()
    }else if(typeof id === "number"){
        id.toFixed()
    }
}


// ----------------------------------------------------------------------------------------

// Union type with array
const data: string [] = ["1", "2", "hello"]
const data2: number [] = [1, 2, 3]
const data3: (number | string | boolean) [] = [1, "Hello World", true]  // correct way to write
// const data3: number[] | string[] = [1, "Hello World", true]  // bad way
// const data3: any[] = [1, "Hello World", true]  // bad way
// classic mistake all ts devs does because it wil tak either array of all numbers or array of all strings


// we can allow some of value to be very strict
// example1 
let pi: 3.14 = 3.14
// pi = 3.145  // it gives error as the value is restricted above


// example 2 
let seatAlloyment: "aisle" | "middle" | "window"
seatAlloyment = "aisle"
// seatAlloyment = "crew"   // not allowed as these are restricted


export {}