var template = require('./app-view.handlebars');

function AppView() {

}
var prototype = AppView.prototype;

prototype.render = function() {
  $('#app-container').append(template());

};

module.exports = AppView;