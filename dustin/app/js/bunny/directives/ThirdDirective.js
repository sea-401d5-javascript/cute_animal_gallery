module.exports = function(app) {
  app.directive('thirdDirective', function() {
    return {
      //template: '<h1>First Directive</h1>'
      templateUrl: './templates/BunnyApp/large.html',
      scope:{
        url: '@',
        title: '@',
        desc: '@'
      }
    };

  });
};
