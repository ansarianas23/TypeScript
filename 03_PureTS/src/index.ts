class User{
    name :string
    email: string
    city: string = ""
    readonly pinCode: number = 400001
    private phoneNo: number = 123455678

    constructor(name: string, email: string){
        this.name = name
        this.email = email
    }
}

// some professionals write class code like below it produces same code as above
// it is just a syntax difference you can go for any one
class User2{
    readonly pinCode: number = 400001
    constructor(
        public name: string,
        public email: string
    ){
    }
}

const jack = new User("Jack Sharma", "jack@gmail.com");
jack.city = "mumbai"
// jack.pinCode = 412330    // restricted as it is read only
// jack.phoneNo         // not accessible as it is private means it is accessible within class