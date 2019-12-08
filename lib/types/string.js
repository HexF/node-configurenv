/**
 * String Type
 * @class
 * @name String
 */
module.exports = {
    /**
     * String Parser Options
    * @typedef {Type~Options} String~Options
    * @property {string} default - Default value
    */

    /**
     * String Type Parser
     * @func String~Parse
     * @param {String~Options} options - Options
     * @param {string} value - Value passed in by ENV
     * @returns {string} Value
     */
    parse: function (options, value) {
        return value
    }


};