
var app = angular.module('Tividenal', ['angularUtils.directives.dirPagination']);

function ItemsController($scope, $http) {
  
  $scope.items = null;

  var url = "items.json";
  $http.get(url).success(function (response) {
      $scope.items = response;
  });

  $scope.currentPage = 1;
  $scope.pageSize = 6;

  $scope.items = null;

  $scope.tag = function(message) {
    if ($scope.tags) {
      return $scope.tags.replace(/\s*,\s*/g, ',').split(',').every(function(tag) {
        return message.tags.some(function(objTag){
          return objTag.indexOf(tag) !== -1;
        });
      });
    } else {
      return true;
    }
  };

}

function PaginationController($scope) { }

app.controller('ItemsController', ItemsController);
app.controller('PaginationController', PaginationController);