class Clock {
    constructor(hour, dateTime) {
        this.hour == 1;
        this.dateTime = dateTime;
    }
    
    get currentTime() {
        return this.getCurrentTime;
    }

    getCurrentTime() {
        return this.hour + this.dateTime;
    }
}

const dateTime  = Date();
const currentClock = new Clock(1, dateTime);


module.exports = Clock;