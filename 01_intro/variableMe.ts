// String
let greetings: string = "Hello Hitesh";
greetings.toLowerCase()
console.log(greetings);

// number
let userId = 334455.3
userId.toFixed()
// userId = "hitesh"
// boolean
let isLoggedIn: boolean = false

// Note
// we dont need to define type like this : string or boolean or whatevver when we assign something in variable evven if we dont give type by ourself typescript automatically detects its a number or string or whatever datatypes it is.
// dont do this let user: string = "Jack"
// insted do this let user = "Anas"
// but there are some places where we need to define datayple implicitly that will be covered in future lectures


// any
// any datatypes ensure values can of any types in this case function output is hold in a variable and that variable initialzed before but not given specific type so typescript consider it as any type

let hero: string;

function getHero(){
    return "thor"
}

hero = getHero()

// Note: - as we have seen earlier when we decalraing variable and assigning value to it we dont need to tell variable its type but in above case we have to infer the types of function output so that types can be tracked

// to avoid redeclaration error
export {}