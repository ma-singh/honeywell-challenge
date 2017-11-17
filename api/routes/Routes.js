module.exports = function(app) {
  var contactList = require('../controllers/Controller');

  // list the people in the contact listen
  app.route('/people')
    .get(contactList.show_all_people)
    .post(contactList.create_a_person);

  app.route('/people/:personId')
    .get(contactList.display_person);
};
