var AppView = require('./views/app-view');
// on load bootstrap your app
document.addEventListener('DOMContentLoaded', function() {
  var content = document.getElementById('content');
  //noinspection UnnecessaryLocalVariableJS
  var html = require('./app.handlebars')({});
  content.innerHTML = html;

  new AppView().render();
});
