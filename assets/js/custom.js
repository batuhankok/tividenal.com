var app = angular.module('app', []);

app.controller('tividenal', function($scope) {
  $scope.items = [
    {
        title: "Ürün 1 (Sarı, Mont)",
        image: "https://static.zara.net/photos///2017/I/0/1/p/8073/245/510/2/w/1920/8073245510_2_4_1.jpg?ts=1502963575171",
        tags: ["sarı", "mont", "ürün"]
    },
    {
        title: "Ürün 2 (Turuncu, Kazak)",
        image: "https://static.zara.net/photos///2017/I/0/1/p/8073/245/510/2/w/1920/8073245510_2_4_1.jpg?ts=1502963575171",
        tags: ["turuncu", "kazak", "ürün"]
    },
    {
        title: "Ürün 3 (Yeşil, Mont)",
        image: "https://static.zara.net/photos///2017/I/0/1/p/8073/245/510/2/w/1920/8073245510_2_4_1.jpg?ts=1502963575171",
        tags: ["yeşil", "mont", "ürün"]
    },
    {
        title: "Ürün 4 (Mavi, Kazak)",
        image: "https://static.zara.net/photos///2017/I/0/1/p/8073/245/510/2/w/1920/8073245510_2_4_1.jpg?ts=1502963575171",
        tags: ["mavi", "kazak", "ürün"]
    },
    {
        title: "Ürün 5 (Turuncu, Tişört)",
        image: "https://static.zara.net/photos///2017/I/0/1/p/8073/245/510/2/w/1920/8073245510_2_4_1.jpg?ts=1502963575171",
        tags: ["turuncu", "tişört", "ürün"]
    },
    {
        title: "Ürün 6 (Sarı, Atkı)",
        image: "https://static.zara.net/photos///2017/I/0/1/p/8073/245/510/2/w/1920/8073245510_2_4_1.jpg?ts=1502963575171",
        tags: ["sarı", "atkı", "ürün"]
    },
  ];
  
  $scope.tag = function(message) {
    if ($scope.tags) {
      return $scope.tags.replace(/\s*,\s*/g, ',').split(',').every(function(tag) {
        return message.tags.some(function(objTag){
          return objTag.indexOf(tag) !== -1;
        });
      });
    }
    else {
      return true;
    }
  };
  
});
