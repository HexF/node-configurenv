const expect = require('chai').expect;
const should = require('chai').should();

describe("Builder", function () {
    const s = require('../lib/builder')
    describe("#build()", function () {
        it('should allow a single value to be included', function () {
            var o = s(
                {
                    env: 'DRIVER',
                    mapping: 'driver',
                    type: 'ENUM',
                    values: ['POSTGRESQL', 'MYSQL'],
                    default: 'POSTGRESQL'
                }
            ).build({})
            var c = o.config;
            c.driver.should.equal("POSTGRESQL")
        })

        it('should allow a single values to be passed in', function () {
            var o = s(
                {
                    env: 'DRIVER',
                    mapping: 'driver',
                    type: 'ENUM',
                    values: ['POSTGRESQL', 'MYSQL'],
                    default: 'POSTGRESQL'
                }
            ).build({ "APP_DRIVER": "MYSQL" })
            var c = o.config;
            c.driver.should.equal("MYSQL")
        })

        it('should allow the namespace to be changed', function () {
            var o = s(
                {
                    env: 'DRIVER',
                    mapping: 'driver',
                    type: 'ENUM',
                    values: ['POSTGRESQL', 'MYSQL'],
                    default: 'POSTGRESQL'
                },
                { namespace: "TEST" }
            ).build({ "TEST_DRIVER": "MYSQL" })
            var c = o.config;
            c.driver.should.equal("MYSQL")
        })

        it('should allow config nesting with defaults', function () {
            var o = s([
                {
                    env: 'DRIVER',
                    mapping: 'driver',
                    type: 'ENUM',
                    values: ['POSTGRESQL', 'MYSQL'],
                    default: 'POSTGRESQL'
                },
                {
                    env: 'CONNECTION',
                    mapping: 'connection',
                    type: 'CONFIG',
                    config: [
                        {
                            env: 'HOST',
                            mapping: 'host',
                            type: 'string',
                            default: '127.0.0.1'
                        }
                    ]
                }
            ]).build({})
            var c = o.config;
            c.driver.should.equal("POSTGRESQL")
            c.connection.host.should.equal("127.0.0.1")
        })

        it('should allow config nesting with values passed in', function () {
            var o = s([
                {
                    env: 'DRIVER',
                    mapping: 'driver',
                    type: 'ENUM',
                    values: ['POSTGRESQL', 'MYSQL'],
                    default: 'POSTGRESQL'
                },
                {
                    env: 'CONNECTION',
                    mapping: 'connection',
                    type: 'CONFIG',
                    config: [
                        {
                            env: 'HOST',
                            mapping: 'host',
                            type: 'string',
                            default: '127.0.0.1'
                        }
                    ]
                }
            ]).build({ "APP_DRIVER": "MYSQL", "APP_CONNECTION_HOST": "127.0.1.1" })
            var c = o.config;
            c.driver.should.equal("MYSQL")
            c.connection.host.should.equal("127.0.1.1")
        })

        it('should allow config nesting with values passed in on a custom namespace', function () {
            var o = s([
                {
                    env: 'DRIVER',
                    mapping: 'driver',
                    type: 'ENUM',
                    values: ['POSTGRESQL', 'MYSQL'],
                    default: 'POSTGRESQL'
                },
                {
                    env: 'CONNECTION',
                    mapping: 'connection',
                    type: 'CONFIG',
                    config: [
                        {
                            env: 'HOST',
                            mapping: 'host',
                            type: 'string',
                            default: '127.0.0.1'
                        }
                    ]
                }
            ],
                {
                    namespace: "TEST"
                }
            ).build({ "TEST_DRIVER": "MYSQL", "TEST_CONNECTION_HOST": "127.0.1.1" })
            var c = o.config;
            c.driver.should.equal("MYSQL")
            c.connection.host.should.equal("127.0.1.1")
        })


    })
})