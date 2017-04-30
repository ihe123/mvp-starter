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

var itemSchema = mongoose.Schema(
  {
    name: String,
    mood: String
  },
  {timestamps: true}
);

var imgurDataSchema = mongoose.Schema(
  {
    subreddit: {type: String, unique: true, dropDups: true},
    json: String
  },
  {timestamps: true}
);

var Item = mongoose.model('Item', itemSchema);
var imgurData = mongoose.model('imgurData', imgurDataSchema)


var selectAll = function(callback) {
  Item.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

var selectAllImgur = function(callback) {
  imgurData.find({}, function(err, items) {
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

var insertImgur = function(data, callback) {
  var imgurData = new imgurData ({subreddit: data.subreddit, json: data.json});

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
module.exports.insertImgur = insertImgur;
module.exports.selectAllImgur = selectAllImgur;
// var insert = function(){

// }

// module.exports.insert = insert;