const { ParseException } = require('../exceptions')

/**
 * Enum Type
 * @class
 * @name Enum
 */
module.exports = {
    /**
     * Enum Parser Options
     * @typedef {Type~Options} Enum~Options
     * @property {string} values - Possible vales for the enum
     * @property {string} default - Default value
     */

    /**
     * Enum Type Parser
     * @func Enum~Parse
     * @param {Enum~Options} options - Options
     * @param {string} value - Value passed in by ENV
     * @returns {string} Value parsed in after validation
     */
    parse: function (options, value) {
        if (!options.values || options.values.length < 1) throw new ParseException("Values are not declared for type ENUM")
        var values = options.values.map(x => x.toLowerCase())

        if (!values.includes(value.toLowerCase())) throw new ParseException("Value specified was not a valid value")

        return value.toUpperCase()
    }


};