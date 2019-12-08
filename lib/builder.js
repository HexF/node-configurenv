
module.exports = function (config, options) {
    options = options || {}
    var cfg = {
        env: options.namespace || "APP",
        mapping: '_',
        type: 'config'
    }
    if (Array.isArray(config))
        cfg.config = config;
    else
        cfg.config = [config]

    return {
        build: function (env = process.env) {
            return {
                config: require('./types').parse(cfg, env),
                schema: cfg.config
            }
        },
        _cfg: cfg
    }
}
