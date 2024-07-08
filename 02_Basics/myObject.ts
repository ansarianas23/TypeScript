// ************************ OBJECTS IN TYPESCRIPT ************************

const user = {
    name: "jack",
    email:"Jack@gmail.com",
    isActive: false
}

function createUser({name: string, isPaid: boolean}){}

createUser({name:"Jason", isPaid: true})
// createUser({name:"Jason", isPaid: true, email: "A@gmail.com"})   // it is not allowed since email were not there in the type.
// but the weired behaviour is that if we crerate object and pass its refernce to function it wont complain its a big issue.
// we can deal this issue by making extra properties as an optional which is not there in type
const newUser = {
    name:"Jason",
    isPaid: true, 
    email: "A@gmail.com"
}

createUser(newUser)     // it wont complain this is we are able to pass much more information what was expected function defn but there is a better way with interface and all of that.

// we can also specifiy return type.
// but later on this can be done in better way with interface.
function createCourse():{name: string, price: number}{
    return {name: "Reacts js", price: 300}
}

// --------------------------------------------------------------------------------------------

// Type Aliases
// it is nothing but a object holding types of properties

type User = {
    name: string;
    email: string;
    isActive: boolean;
}

function createProfile(user: User): User{
    return {name: "Anas", email: "Anas@gmail.com", isActive: true}
}

createProfile({name: "Anas", email: "Anas@gmail.com", isActive: true});

export {}





