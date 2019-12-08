var glob = require('glob')

var includes = [
    "index.js",
    "lib/"
]

module.exports = {
    recurseDepth: 10,
    source: {
        include: includes
    },
    opts: {
        destination: './docs/',
        recurse: true
    }
}