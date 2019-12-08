/**
 * Basic Type Parser
 * @class
 * @name Type
 */
module.exports = {
    /**
    * @typedef {Object} Type~Options
    * @property {string} env - Environment Variable name to map this to
    * @property {string} mapping - Key to map this in the config object to
    * @property {string} type
    */

    /**
    * @func Type~Parse
    * @param {Type~Options} options - Options
    * @param {Object} value - Value passed in by ENV
    * @returns {null} - Returns null as this is an interface and not an implementation
    */
    parse: function (options, value) {
        return null;
    }


};