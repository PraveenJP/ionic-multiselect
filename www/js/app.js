// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic','ngCordova'])

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

app.controller('multiselectCtrl', function($scope,$cordovaToast,$ionicPopup){

    $scope.itemArray = [];  

    $scope.addItem = function(name,id){
      if($scope.itemArray.length == 0){
        $scope.itemArray.push({
          id:id,
          name:name
        });
      }else{
        var i;
        var length = $scope.itemArray.length;
        for(i=0;i<length;i++){
          if($scope.itemArray[i].id === id){
            var exist = true;
              $ionicPopup.alert({
                title: 'Info!',
                template: 'Already Exist'
              });
          }
        }
        if(exist != true){
          $scope.itemArray.push({
            id:id,
            name:name
          });
        }
      }
    }

    $scope.delItem = function(id){
      $scope.itemArray.splice(id,1);
    }

    $scope.selctallItem = function(value){
      if(value == true){
        for(var i=0;i<$scope.items.length;i++){
          $scope.itemArray.push({
            id:$scope.items[i].id,
            name:$scope.items[i].name
          });
        }
      }
      if(value == false){
        $scope.itemArray = [];
      }
    }

    $scope.items = [
        {
          id :1,
          name:'Apple'
        },
        {
          id:2,
          name:'Orange'
        },
        {
          id:3,
          name:'Bananna'
        },
        {
          id:4,
          name:'Strawberry'
        },
        {
          id:5,
          name:'Greps'
        }
    ];
});
