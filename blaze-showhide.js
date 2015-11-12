var dict = new ReactiveDict('blaze-showhide');
var delimiter = '-';

var helpers = {
  getCond: function(name, arg1) {
    var key = name + (arg1 ? delimiter + arg1 : '');
    return dict.get(key);
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
    var key = name + (arg1 ? delimiter + arg1 : '');
    dict.set(key, !dict.get(key));
  }
});

Template.setShowHide.events({
  'click a, click button': function(event, template) {
    event.preventDefault();
    var name = template.data.name;
    var arg1 = template.data.arg1;
    var key = name + (arg1 ? delimiter + arg1 : '');
    var value = template.data.value;
    dict.set(key, value);
  }
});
