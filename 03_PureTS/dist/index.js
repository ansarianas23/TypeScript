"use strict";
// Note:- by default properties are public if not specified 
// public, private, protected - these words are called as access modifiers
class User {
    constructor(name, email) {
        this.city = "";
        this.pinCode = 400001;
        this.phoneNo = 123455678;
        // private _courseCount: number = 1
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
// jack.phoneNo         // not accessible as it is private property means it is accessible within class not accessiblen even by class inherited form that class
// jack.deleteToken()   // not accessible as it is private method means it is accessible within class not accessiblen even by class inherited form that class
// ----------------------------------------------------------------------------------------------------------------------------
// Inheritance
class subUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
// protected properties are accessible within the class as well as class which is inherited from it
// but is still not by the object that created from that class thats the little deference in between protected and private
