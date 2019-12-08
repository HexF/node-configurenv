const expect = require('chai').expect;
const should = require('chai').should();

describe("Boolean", function () {
    const bool = require('../lib/types').types.boolean
    describe("#parse()", function () {
        it('should return true with value "Yes"', function () {
            bool.parse({}, "Yes").should.be.true;
        })

        it('should return true with value "TRUE"', function () {
            bool.parse({}, "TRUE").should.be.true;
        })

        it('should return true with value "CORRECT" when option trueValues has "CORRECT" in it', function () {
            bool.parse({ trueValues: ["CORRECT"] }, "TRUE").should.be.true;
        })

        it('should return false with value "NO"', function () {
            bool.parse({}, "NO").should.be.false;
        })

        it('should return false with an unknown value ("NOTHINGWASEVERHERE")', function () {
            bool.parse({}, "NOTHINGWASEVERHERE").should.be.false;
        })

    })
})