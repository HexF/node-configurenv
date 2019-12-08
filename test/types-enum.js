const expect = require('chai').expect;
const should = require('chai').should();

describe("Enum", function () {
    const e = require('../lib/types').types.enum
    const { ParseException } = require('../lib/exceptions')
    describe("#parse()", function () {
        it('should error from no values being set', function () {
            expect(e.parse.bind(e, {

            }, "NOTHING")).to.throw("Values are not declared for type ENUM")
        })

        it('should error from being given an invalid value', function () {
            expect(e.parse.bind(e, {
                values: ["VALID"]
            }, "INVALID")).to.throw("Value specified was not a valid value")
        })
        it('should return the valid value that is passed in', function () {
            e.parse({
                values: ["MYSQL", "POSTGRESQL"]
            }, "MYSQL").should.equal("MYSQL")
        })


    })
})