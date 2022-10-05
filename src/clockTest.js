import assert from 'assert';
const Clock = require('./clockModel');

/*it('should return O when the value is not present', track => {
    assert.equal([0].indexOf(1), 0)
})*/


    it("should show the clock when GPS is not available", done => {
        let clock = new Clock();
        assert.equal(clock.Clock, 1);
        done()
    });

    /*it("should show current clock when ", getCurrentTime => {
        let currentClock = new Clock();
        assert(currentClock, 4);
    });*/

 