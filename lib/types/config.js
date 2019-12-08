const { ParseException } = require('../exceptions')

/**
 * Config Type
 * @class
 * @name Config
 */
module.exports = {
    /**
     * Confit Parser Options
    * @typedef {Type~Options} Config~Options
    * @property {Array.<Type~Options>} config - Array of other objects to contain under this one
    */

    /**
     * Config Type Parser
    * @func Config~Parse
    * @param {Config~Options} options - Options
    * @param {Object} value - Value passed in as ENV
    * @returns {Object} Returns an object containing the config of the children
    */
    parse: function (options, value) {
        const types = require('./')
        var cfg = {};
        options.config.forEach(config => {
            if (!config.env) throw new ParseException("Environment Variable name for config option was not set")
            config.type = config.type.toLowerCase()
            config.env = options.env + "_" + config.env;
            if (config.type != "config")
                cfg[config.mapping] = types.parse(config, value[config.env] || config.default)
            else
                cfg[config.mapping] = types.parse(config, value)
        })
        return cfg
    }


};