
var app = angular.module('Tividenal', ['angularUtils.directives.dirPagination', 'ngTagsInput', 'ngUrlParser']);

function ItemsController($scope, $http, urlParser) {
  
  $scope.items = null;

  $scope.tags = [];

  $scope.hash = decodeURIComponent(urlParser.getHash()).split('/');
  $scope.hash.splice(0, 1);     
  
  $scope.hash.forEach(singleTag => {
    if(singleTag != ""){
      $scope.tags.push(singleTag.replace(/-/g, ' '));
    }
  });

  $scope.loadTags = function($query) {
    return $http.get('tags.json', { cache: true }).then(function(response) {
      var productTags = response.data;
      return productTags.filter(function(productTag) {
        return productTag.text.toLowerCase().indexOf($query.toLowerCase()) != -1;
      });
    });
  };

  var url = "items.json";
  $http.get(url).success(function (response) {
      $scope.items = response;
  });

  $scope.currentPage = 1;
  $scope.pageSize = 6;

  $scope.items = null;

  $scope.tag = function(message) {
    if ($scope.tags) {
      return $scope.tags.every(function(tag) {
        return message.tags.some(function(objTag){
          return objTag.indexOf(tag) !== -1;
        });
      });
    } else {
      return true;
    }
  };
  
}

function PaginationController($scope) {};

app.controller('ItemsController', ItemsController);
app.controller('PaginationController', PaginationController);