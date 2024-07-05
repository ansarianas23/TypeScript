let greetings: string = "Hello Hitesh";

greetings.toLowerCase()
console.log(greetings);

// number

let userId = 334455.3

userId.toFixed()
// userId = "hitesh"
// boolean
let isLoggedIn: boolean = false



// we dont need to define type like this : string or boolean or whatevver when we assign something in variable evven if we dont give type by ourself typescript automatically detects its a number or string or whatever datatypes it is.

// dont do this let user: string = "Jack"
// insted do this let user = "Anas"

// but there are some places where we need to define datayple implicitly that will be covered in future lectures

let hero: string;

function getHero(){
    return "thor"
}

hero = getHero()



export {}