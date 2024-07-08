"use strict";
// ************************ OBJECTS IN TYPESCRIPT ************************
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: "jack",
    email: "Jack@gmail.com",
    isActive: false
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "Jason", isPaid: true });
// createUser({name:"Jason", isPaid: true, email: "A@gmail.com"})   // it is not allowed since email were not there in the type.
// but the weired behaviour is that if we crerate object and pass its refernce to function it wont complain its a big issue.
// we can deal this issue by making extra properties as an optional which is not there in type
var newUser = {
    name: "Jason",
    isPaid: true,
    email: "A@gmail.com"
};
createUser(newUser); // it wont complain this is we are able to pass much more information what was expected function defn but there is a better way with interface and all of that.
// we can also specifiy return type.
// but later on this can be done in better way with interface.
function createCourse() {
    return { name: "Reacts js", price: 300 };
}
function createProfile(user) {
    return { name: "Anas", email: "Anas@gmail.com", isActive: true };
}
createProfile({ name: "Anas", email: "Anas@gmail.com", isActive: true });
var newEmployee = {
    _id: "54321",
    name: "Sam",
    post: "React developer"
};
// we have not given creditCardDetail property in above object but still it is not complaining because it is marked as an optional
newEmployee.name = "Sam Sharma";
