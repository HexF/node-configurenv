const expect = require('chai').expect;
const should = require('chai').should();

describe("String", function () {
    const s = require('../lib/types').types.string
    describe("#parse()", function () {
        it('should always return the same string', function () {
            s.parse({}, "AAAAA").should.equal("AAAAA")
        })


    })
})