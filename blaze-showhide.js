var prefix = 'showhide-';

var helpers = {
  getCond: function(name) {
    return Session.get(prefix + name);
  }
};

Template.showIf.helpers(helpers);
Template.hideIf.helpers(helpers);

Template.toggleShowHide.events({
  'click a, click button': function(event, template) {
    event.preventDefault();
    var name = template.data.name;
    Session.set(prefix + name, !Session.get(prefix + name));
  }
});
