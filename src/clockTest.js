import assert from 'assert';
const Clock = require('./clockModel');

/*it('should return O when the value is not present', track => {
    assert.equal([0].indexOf(1), 0)
})*/

describe("integration test", function() {
    it("should Clock when GPS is not available", trackClock => {
        let clock = new Clock();
        assert(clock, 1);
    });

    /*it("should show current clock when ", getCurrentTime => {
        let currentClock = new Clock();
        assert(currentClock, 4);
    });*/
});


 