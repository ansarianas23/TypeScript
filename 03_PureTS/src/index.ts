class User{
    name :string
    email: string
    city: string = ""

    constructor(name: string, email: string){
        this.name = name
        this.email = email
    }
}

const jack = new User("Jack Sharma", "jack@gmail.com");
jack.city = "mumbai"