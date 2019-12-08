const { ParseException } = require('../exceptions')

var types = {
    boolean: require('./boolean'),
    config: require('./config'),
    enum: require('./enum'),
    int: require('./int'),
    string: require('./string')
};

/**
 * Everything about types
 * @class Types
 * 
 */

module.exports = {
    /**
     * All the possible types
     */
    types: types,
    /**
     * Universally parses any type from a string to the value
     * @function Types~Parse
     * @param {Type~Options} options 
     * @param {string} value 
     * @returns {*} Parsed Value
     */
    parse: function (options, value) {
        if (!options.type || !types[options.type]) throw new ParseException("Type was not declared or was not a valid type")
        return types[options.type].parse(options, value)
    }
}