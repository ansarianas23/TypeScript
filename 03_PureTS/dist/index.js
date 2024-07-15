"use strict";
class User {
    constructor(name, email) {
        this.city = "";
        this.pinCode = 400001;
        this.phoneNo = 123455678;
        this.name = name;
        this.email = email;
    }
}
// some professionals write class code like below it produces same code as above
// it is just a syntax difference you can go for any one
class User2 {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.pinCode = 400001;
    }
}
const jack = new User("Jack Sharma", "jack@gmail.com");
jack.city = "mumbai";
// jack.pinCode = 412330    // restricted as it is read only
// jack.phoneNo         // not accessible as it is private means it is accessible within class
