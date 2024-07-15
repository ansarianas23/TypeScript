"use strict";
class User {
    constructor(name, email) {
        this.city = "";
        this.pinCode = 400001;
        this.phoneNo = 123455678;
        this._courseCount = 1;
        this.name = name;
        this.email = email;
    }
    // private method
    deleteToken() {
        console.log("Token deleted");
    }
    // getter method
    get getAppleEmail() {
        return `apple ${this.email}`;
    }
    // getter method
    get courseCount() {
        return this._courseCount;
    }
    // setter methods
    // setter method does not have any return type they are meant or setting values
    set couseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
// some professionals write class code like below it produces same code as above
// it is just a syntax difference you can go for any one
// class User2{
//     readonly pinCode: number = 400001
//     constructor(
//         public name: string,
//         public email: string
//     ){
//     }
// }
const jack = new User("Jack Sharma", "jack@gmail.com");
jack.city = "mumbai";
// jack.pinCode = 412330    // restricted as it is read only
// jack.phoneNo         // not accessible as it is private means it is accessible within class
