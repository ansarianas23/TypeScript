interface TakePhotos{
    cameraMode: string
    filter: string 
    burst: number
}

interface Story{
    createStory(): any
}

class Instagram implements TakePhotos{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
    ){}
}

class YouTube implements TakePhotos, Story{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public short: string, // it is not there in interface but it is allowed 
        // class constructor should have all the properties mentioned in a interface not less than what mentioned more properties can be there 
    ){}

    createStory(): any {
        return "Story is created"
    }

}

