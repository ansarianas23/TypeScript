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
