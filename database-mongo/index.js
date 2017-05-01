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
    mood: String,
    subreddit: String
  },
  {timestamps: true}
);

// var imgurDataSchema = mongoose.Schema(
//   { 
//     ,
//   },
//   {timestamps: true, unique: true, dropDups: true}
// );

var Item = mongoose.model('Item', itemSchema);
// var ImgurData = mongoose.model('ImgurData', imgurDataSchema)


var selectAll = function(callback) {
  Item.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

// var selectAllImgur = function(callback) {
//   ImgurData.find({}, function(err, items) {
//     if(err) {
//       callback(err, null);
//     } else {
//       callback(null, items);
//     }
//   });
// };

var insert = function(data, callback) {
  var item = new Item ({name: data.name, mood: data.mood, subreddit: data.subreddit});

  item.save(function(err, data) {
   if(err) {
    callback(err, null);
   } else {
    callback(null, item);
   }
  });
}

// var insertImgur = function(data, callback) {
//   console.log('dataaaaaa just data', data);
//   console.log('data subreddit!!!!!!!!!!!!', data.subreddit);
//   var imgurData = new ImgurData ({subreddit: data.subreddit, json: data.json});
  
//   imgurData.save(function(err, data) {
//    if(err) {
//     callback(err, null);
//    } else {
//     callback(null, imgurData);
//    }
//   });
// }

module.exports.insert = insert;
module.exports.selectAll = selectAll;
module.exports.Item = Item;
// module.exports.insertImgur = insertImgur;
// module.exports.selectAllImgur = selectAllImgur;
// var insert = function(){

// }

// module.exports.insert = insert;