interface User{
    readonly dbID: number
    email: string
    userId: string
    googleID?: string
    startTrial: ()=>string
    // startTrial(): string     // another way of writing methods
    getCoupon(couponName: string, value: number): number
}

// we can also change any libraries interface that we are using.
// it is also called as open it and inject the valuess
interface User{
    githubToken: string
}

// we can also extend/inherit interfaces properties
interface Admin extends User{
    role: 'admin'| 'ta' | 'learner'
}

const jack: Admin = {
    dbID: 22,
    email: "a@gmail.com",
    userId: "1234",
    githubToken: 'githubToken',
    role: "admin",
    startTrial: ()=>{
        return "trial started"
    },
    getCoupon: (name: "hitesh", off: 20)=>{
        return off
    }
}

// -------------------------------------------------------------------------------------------------------------------------------------------

// Diffrence between type and interface
// Type aliases and interface are very similar, and in many cases you can choose between them freely. Almost all features of an interface are available in type, the key distinction is that a type cannot be re-opened to add new properties vs interface which is always extendable.


// Interface V/s Type Aliases                                      

// interface
// Extending an interface

// interface Animal {                                              
//   name: string;
// }

// interface Bear extends Animal {
//   honey: boolean;
// }

// const bear: Bear = {
//     name: "Bear",
//     honey: false
// }
// bear.name;
// bear.honey;

// Adding new fields to an existing interface

// interface Window {
//   title: string;
// }

// interface Window {
//   ts: TypeScriptAPI;
// }

// const src = 'const a = "Hello World"';
// window.ts.transpileModule(src, {});

// -------------------------------------------------------------------------------------------------------------------------------------------

// Type Aliases
// Extending a type via intersections
// type Animal = {
//     name: string;
// }

// type Bear = Animal & { 
//   honey: boolean;
// }

// const bear = getBear();
// bear.name;
// bear.honey;


// A type cannot be changed after being created

// type Window = {
//   title: string;
// }

// type Window = {
//   ts: TypeScriptAPI;
// }

 // Error: Duplicate identifier 'Window'.