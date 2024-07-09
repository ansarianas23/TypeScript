// Array Type define
const superHeroes: string[] = []
const HeroesPower: number[] = []

superHeroes.push("Spiderman")
HeroesPower.push(5)

// another way of defining type
const herosAbility:Array<string> = []
herosAbility.push("web")

// array with type aliases
type User = {
    name: string
    isActive: boolean
}

const allUsers:User[] = []

allUsers.push(
    {
        name: "Hitesh",
        isActive: true
    },
    {
        name: "Jason",
        isActive: false
    },
)

// array of array
const MLModels: number[][] = [
    [255,255,255]
]


export {}