
var app = angular.module('Tividenal', ['angularUtils.directives.dirPagination','ngTagsInput']);

function ItemsController($scope, $http) {
  
  $scope.items = null;

  $scope.tags = [{"text":"Batman"}, {"text":"Superman"}];

  $scope.loadTags = function($query) {
    return $http.get('tags.json', { cache: true}).then(function(response) {
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