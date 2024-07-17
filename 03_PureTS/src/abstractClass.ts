abstract class TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    // if we want to be some method to be compulsarily avaialbe in onject we need make them abstract in class
    abstract getSepia():void

    getReel():number{
        // some complex calculation
        return 8
    }
    // this method can be overwrite
}

// const hc = new TakePhoto("test", "test2");
// we cannot crete an object direct from abstract class
// we can create object from a class that extends abstract class

class Insta extends TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){
        super(cameraMode, filter)
    }

    getSepia(): void {
        console.log("this is Sepia")
    }
}


const hc = new Insta("test2", "123", 3)
hc.getReel();