var mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/testDB');
var Schema = mongoose.Schema;

// var profile = new Schema({
//     name:String
// })
var Images = new Schema({
    url:String,
    added_date_time:String
})
var ChildSchema = new Schema({
    uid: String,
    profileUrl:String,
    photos:[Images]
});
// module.exports = mongoose.model('Semister', books);
module.exports = mongoose.model('ChildrenProfile', ChildSchema);