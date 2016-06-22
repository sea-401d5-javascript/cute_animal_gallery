module.exports = function (app) {
  app.directive('album', function () {
    return {
      //template: '<h1>First Directive</h1>',
      templateUrl: './templates/BunnyApp/album.html',
      scope: {
        photoalbum: '=',
        mode: '='
      },
      controller: function ($scope) {
        $scope.showImage = function (img) {
          $scope.currentImg = img
          console.log($scope.currentImg);
        };
      }
    };
  });
};
