var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var Schema = new Schema({
    Foo: {type: String, require:true},
    Woo: {type: Number},
    DataDue:{type: Date, default:Date.now},
});
module.exports = Mongoose.model('Foo', Schema);
