module.exports = function(app) {
  app.controller('ImageController', ['$scope', function() {
    this.url= 'http://pearlofcivilization.net/images/218.jpg';
    this.title = 'Cute Bunny';
    this.desc = 'Bunny smok\'n a cig';
  }]);
};
