// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic', 'app.controllers', 'app.routes',
  'app.services', 'app.directives', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

// .controller('MainCtrl', function($scope, $ionicSideMenuDelegate) {
//     $scope.toggleLeft = function() {
//         $ionicSideMenuDelegate.toggleLeft() 
//     }
// })

// .controller('eBECCtrl', function($scope, $state, $ionicSlideBoxDelegate) {
 
//   // Called to navigate to the main app
//   $scope.startApp = function() {
//     $state.go('main');
//   };
//   $scope.next = function() {
//     $ionicSlideBoxDelegate.next();
//   };
//   $scope.previous = function() {
//     $ionicSlideBoxDelegate.previous();
//   };

//   // Called each time the slide changes
//   $scope.slideChanged = function(index) {
//     $scope.slideIndex = index;
//   };
// });
/*
.controller('MainCtrl', function($scope, $state) {
  console.log('MainCtrl');
  
  $scope.toIntro = function(){
    $state.go('intro');
  }
});
*/
// .config(function($stateProvider, $urlRouterProvider) {
 
//   $stateProvider
//   .state('map', {
//     url: '/',
//     templateUrl: 'templates/maps.html',
//     controller: 'mapsCtrl'
//   });
 
//   $urlRouterProvider.otherwise("/");
 
// })
// .controller('mapsCtrl', function($scope, $state, $cordovaGeolocation) {
//   var options = {timeout: 10000, enableHighAccuracy: true};
 
//   $cordovaGeolocation.getCurrentPosition(options).then(function(position){
 
//     var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
//     var mapOptions = {
//       center: latLng,
//       zoom: 15,
//       mapTypeId: google.maps.MapTypeId.ROADMAP
//     };
 
//     $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);
 
//   }, function(error){
//     console.log("Could not get location");
//   });
// });
// 
var initMap = function() {
};