const score: Array<number> = []
const names: Array<string> = []

// there is bit problem here we can only take boolean and strring and return the same 
function identityOne(val: boolean | number): boolean | number{
    return val
}

// we can take any datatype and return any datatype which is a bit problematic
function identityTwo(val: any): any{
    return val
}

// here we define generic type name can be any 
// the problem generic is solve that if pass string the return type will be automatically be string we dont need to specify
function identityThree<Type>(val: Type):Type{
    return val
}

identityThree("5")


// shortCut
function identityFour<HTK>(val: HTK):HTK{
    return val
}


// interface with generic

interface bottle{
    type: string
    capacity: number
    brand :string
}

identityFour<bottle>(
    {
        type: "glass bottle",
        capacity: 2,
        brand: "Milton"
    }
)

// ----------------------------------------------------------------------------
// functions Generics

function getSearchProducts<T>(products: T[]): T{
    // do some database operations
    const myIndex = 5
    return products[myIndex]
}

const getMoreSearchProducts = <HX,>(products: HX[]): HX=>{
    // do some database operations
    const myIndex = 5
    return products[myIndex]
}

// <HX,> in above code indicates thats not an JSX syntax but rather a generic type
// it can be seen a lot of codebase specially with react code

interface Database {
    connecton: string,
    username: string,
    password: string
}

function anotherFunction<T,U extends Database>(val1: T, val2: U):object{
    return{
        val1,val2
    }
}

anotherFunction(2, {
    connecton: "striasdng",
    username: "strasdasing",
    password: "asd"
})

// -----------------------------------------------------------------------------------
// classes with generics

interface Quiz{
    name: string
    type: string
}

interface Course{
    name:string
    author: string
    subject: string
}

class sellable<T>{
    public cart: T[] = []

    addToCart(product: T){
        this.cart.push(product)
    }
}