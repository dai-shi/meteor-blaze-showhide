var prefix = 'showhide-';
var delimiter = '-';

var helpers = {
  getCond: function(name, arg1) {
    var key = prefix + name + (arg1 ? delimiter + arg1 : '');
    return Session.get(key);
  }
};

Template.showIf.helpers(helpers);
Template.hideIf.helpers(helpers);
Template.showDivIf.helpers(helpers);
Template.hideDivIf.helpers(helpers);
Template.showSpanIf.helpers(helpers);
Template.hideSpanIf.helpers(helpers);

Template.toggleShowHide.events({
  'click a, click button': function(event, template) {
    event.preventDefault();
    var name = template.data.name;
    var arg1 = template.data.arg1;
    var key = prefix + name + (arg1 ? delimiter + arg1 : '');
    Session.set(key, !Session.get(key));
  }
});

Template.setShowHide.events({
  'click a, click button': function(event, template) {
    event.preventDefault();
    var name = template.data.name;
    var arg1 = template.data.arg1;
    var key = prefix + name + (arg1 ? delimiter + arg1 : '');
    var value = template.data.value;
    Session.set(key, value);
  }
});
