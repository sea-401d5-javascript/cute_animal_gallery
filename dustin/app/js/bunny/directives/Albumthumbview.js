module.exports = function(app) {
  app.directive('albumThumbView', function() {
    return {
      //template: '<h1>First Directive</h1>'
      templateUrl: './templates/BunnyApp/albumThumbView.html',
      scope: {albums: '='}
    };
  });
};
