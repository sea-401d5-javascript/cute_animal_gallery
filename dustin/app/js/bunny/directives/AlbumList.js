module.exports = function (app) {
  app.directive('albumList', function () {
    return {
      //template: '<h1>First Directive</h1>',
      templateUrl: './templates/BunnyApp/albumlist.html',
      scope: {
        albums: '='
      },
      controller: function ($scope) {
        $scope.showAlbum = function (album) {
          console.log("hit");
          if (!album) {
            $scope.mode = 'list';
            return;
          }

          $scope.currentAlbum = album;
          $scope.mode = 'single';

        };
      }

    };
  });
};
