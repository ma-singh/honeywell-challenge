var mongoose = require('mongoose');
var Person = mongoose.model('People');

exports.show_all_people = function(req, res) {
  // find all the people in the database
  Person.find({}, function(err, person) {
    // respond with an error if unable to find people
    if (err)
      res.send(err);
    res.json(person);
  });
}

exports.create_a_person = function(req, res) {
  // create a new person from information passed
  var new_person = new Person(req.body);
  // save that person to the database
  new_person.save(function(err, person) {
    if(err)
      res.send(err);
    res.json(person);
  });
}

exports.display_person = function(req, res) {
  // find a person given by their id passed as a parameter in the URL
  Person.findById(req.params.personId, function(err, person) {
    // respond with an error if unable to find that person
    if (err)
      res.send(err);
    res.json(person);
  });
}
