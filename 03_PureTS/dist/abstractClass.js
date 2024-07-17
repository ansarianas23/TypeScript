"use strict";
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReel() {
        // some complex calculation
        return 8;
    }
}
// const hc = new TakePhoto("test", "test2");
// we cannot crete an object direct from abstract class
// we can create object from a class that extends abstract class
class Insta extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("this is Sepia");
    }
}
const hc = new Insta("test2", "123", 3);
hc.getReel();
