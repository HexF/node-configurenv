const expect = require('chai').expect;
const should = require('chai').should();

describe("Config", function () {
    const c = require('../lib/types').types.config
    describe("#parse()", function () {
        it('should return the correct object with a single value', function () {
            c.parse({
                env: 'DEMO',
                mapping: 'demo',
                type: 'config',
                config: [
                    {
                        env: 'DRIVER',
                        mapping: 'driver',
                        type: 'ENUM',
                        values: ['POSTGRESQL', 'MYSQL'],
                        default: 'POSTGRESQL'
                    }
                ]

            }, { 'DEMO_DRIVER': 'MYSQL' }).driver.should.equal('MYSQL')
        })

        it('should default the value that is not specified', function () {
            c.parse({
                env: 'DEMO',
                mapping: 'demo',
                type: 'config',
                config: [
                    {
                        env: 'DRIVER',
                        mapping: 'driver',
                        type: 'ENUM',
                        values: ['POSTGRESQL', 'MYSQL'],
                        default: 'POSTGRESQL'
                    }
                ]

            }, {}).driver.should.equal('POSTGRESQL')
        })

        it('should allow nesting of multiple config objects', function () {
            c.parse({
                env: 'DEMO',
                mapping: 'demo',
                type: 'config',
                config: [
                    {
                        env: 'CONNECTION',
                        mapping: 'connection',
                        type: 'config',
                        config: [
                            {
                                type: 'string',
                                mapping: 'host',
                                env: 'HOST',
                                default: '127.0.1.1'
                            }
                        ]
                    }
                ]

            }, { "DEMO_CONNECTION_HOST": "127.0.0.1" }).connection.host.should.equal('127.0.0.1')
        })

        it('should allow nesting of multiple config objects and default values', function () {
            c.parse({
                env: 'DEMO',
                mapping: 'demo',
                type: 'config',
                config: [
                    {
                        env: 'CONNECTION',
                        mapping: 'connection',
                        type: 'config',
                        config: [
                            {
                                type: 'string',
                                mapping: 'host',
                                env: 'HOST',
                                default: '127.0.1.1'
                            }
                        ]
                    }
                ]

            }, {}).connection.host.should.equal('127.0.1.1')
        })

        it('should allow multiple values to be put on one config object', function () {
            var _ = c.parse({
                env: 'DEMO',
                mapping: 'demo',
                type: 'config',
                config: [
                    {
                        type: 'enum',
                        mapping: 'driver',
                        env: 'DRIVER',
                        default: 'MYSQL',
                        values: ['MYSQL', 'POSTGRESQL']
                    },
                    {
                        env: 'CONNECTION',
                        mapping: 'connection',
                        type: 'config',
                        config: [
                            {
                                type: 'string',
                                mapping: 'host',
                                env: 'HOST',
                                default: '127.0.1.1'
                            }
                        ]
                    }
                ]

            }, {});
            _.connection.host.should.equal('127.0.1.1')
            _.driver.should.equal('MYSQL')
        })


    })
})