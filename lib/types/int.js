const { ParseException } = require('../exceptions')

/**
 * Int Type Parser
 * @class
 * @name Int
 */
module.exports = {
    /**
     * @typedef {Type~Options} String~Options
     * @property {string} default - Default value
     */

    /**
     * @func Int~Parse
     * @param {Int~Options} options - Options
     * @param {string} value - Value passed in by ENV
     * @returns {number} Value
     */
    parse: function (options, value) {
        var result = parseInt(value);
        if (isNaN(result)) throw new ParseException("Value is not an integer");
        return result
    }


};