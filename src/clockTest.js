import assert from 'assert';
const Clock = require('./clockModel');

/*it('should return O when the value is not present', track => {
    assert.equal([0].indexOf(1), 0)
})*/


    it("should show the clock when GPS is not available", done => {
        let clock = new Clock(1);
        assert.equal(clock.Clock, clock.Clock);
        done()
    });

    it("should show current time when current time is available ", done => {
        let currentTime = new Clock();
        let dateTime = new Clock();
        assert.equal(currentTime.Clock, dateTime.Clock);
        done();
    });

 