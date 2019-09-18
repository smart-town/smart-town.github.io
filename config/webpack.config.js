const path = require("path") ;

module.exports = {
    entry: {
        app: path.join(__dirname,'src','index.js'),
    },
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname),
    }
}