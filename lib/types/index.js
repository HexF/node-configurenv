const { ParseException } = require('../exceptions')

var types = {
    boolean: require('./boolean'),
    config: require('./config'),
    enum: require('./enum'),
    int: require('./int'),
    string: require('./string')
};

module.exports = {
    types: types,
    parse: function (options, value) {
        if (!options.type || !types[options.type]) throw new ParseException("Type was not declared or was not a valid type")
        return types[options.type].parse(options, value)
    }
}