module.exports = function(app) {
  app.directive('firstDirective', function() {
    return {
      //template: '<h1>First Directive</h1>'
      templateUrl: './templates/BunnyApp/text.html',
      scope:{
        url: '@',
        title: '@',
        desc: '@'
      }
    };
  });
};
