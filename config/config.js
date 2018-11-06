var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
    development: {
        root: rootPath,
        app: { name: 'Foobar' },
        port: 3300,
        db: 'mongodb://localhost/foobar'
    },
    production: {
        root: rootPath,
        app: { name: 'Foobar' },
        port: 80,
        db: 'mongodb://localhost/foobar'
    }
};


module.exports = config[env];
