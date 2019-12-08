const { ParseException } = require('../exceptions')

/**
 * Boolean Type Parser
 * @class
 * @name Boolean
 */
module.exports = {
    /**
     * @typedef {Type~Options} Boolean~Options
     * @property {Array.<string>} trueValues - Specifies all the values that could be used instead of "true"
     * @property {boolean} default - Default value
     */

    /**
     * @func Boolean~Parse
     * @param {Boolean~Options} options - Options
     * @param {string} value - Value passed in by ENV
     * @returns {boolean} Value
     */
    parse: function (options, value) {
        var yesValues = ["yes", "true", "t", "y"]
        if (options.trueValues && Array.isArray(options.trueValues))
            yesValues = yesValues.concat(options.trueValues)
        yesValues = yesValues.map(x => x.toLowerCase());

        return value === true || yesValues.includes(value.toLowerCase())
    }

};