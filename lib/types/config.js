const { ParseException } = require('../exceptions')

/**
 * Basic Type Parser
 * @class
 * @name Config
 */
module.exports = {
    /**
    * @typedef {Type~Options} Config~Options
    * @property {Array.<Type~Options>} config - Array of other objects to contain under this one
    */

    /**
    * @func Config~Parse
    * @param {Config~Options} options - Options
    * @param {Object} value - Value passed in as ENV
    * @returns {Object} Returns null as this is an interface and not an implementation
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