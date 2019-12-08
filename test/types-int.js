const expect = require('chai').expect;
const should = require('chai').should();

describe("Int", function () {
    const i = require('../lib/types').types.int
    describe("#parse()", function () {
        it('should error when the value is not an integer', function () {
            expect(i.parse.bind(i, {}, "Yes")).to.throw("Value is not an integer");
        })

        it('should return 5 when "5" is the parameter', function () {
            i.parse({}, "5").should.equal(5)
        })


    })
})