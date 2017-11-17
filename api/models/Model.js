var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PersonSchema = new Schema({
  FirstName: {
    type: String
  },
  LastName: {
    type: String
  },
  Contact: {
    Address: {
      Street: String,
      City: String,
      Zip: String
    },
    Phone: {
      Home: String,
      Work: String
    }
  }
});

module.exports = mongoose.model('People', PersonSchema);
