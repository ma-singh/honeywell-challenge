var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PersonSchema = new Schema({
  FirstName: {
    type: String
  },
  LastName: {
    type: String
  },
  Contact: [{
    Address: [{
      Street: {
        type: String
      },
      City: {
        type: String
      },
      Zip: {
        type: String
      }
    }],
    Phone: [{
      Home: {
        type: String
      },
      Work: {
        type: String
      }
    }]
  }]
});

module.exports = mongoose.model('People', PersonSchema);
