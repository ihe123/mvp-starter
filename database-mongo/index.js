var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var itemSchema = mongoose.Schema({
  name: String,
  mood: String
});

var Item = mongoose.model('Item', itemSchema);

var selectAll = function(callback) {
  Item.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

var insert = function(data, callback) {
  var item = new Item ({name: data.name, mood: data.mood});

  item.save(function(err, data) {
   if(err) {
    callback(err, null);
   } else {
    callback(null, item);
   }
  });
}

module.exports.insert = insert;
module.exports.selectAll = selectAll;
module.exports.edward = function(){console.log('loggggggggg')};
// var insert = function(){

// }

// module.exports.insert = insert;