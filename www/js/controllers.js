angular.module('app.controllers', [])
  
.controller('eBECFINALCtrl', function($scope) {

})
   
.controller('taxifyCtrl', function($scope) {
	$scope.isItWorking = "YES!";
})
   
.controller('mapsCtrl', function($scope, $state, $cordovaGeolocation) {
	// Google maps
	var options = {
		timeout: 10000,
		enableHighAccuracy: true
	};

	var latLng = new google.maps.LatLng(44.8053459, 20.4742386);
	var mapOptions = {
		center: latLng,
		zoom: 15,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	$scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

	$cordovaGeolocation.getCurrentPosition(options).then(function(position) {
		var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
		var mapOptions = {
			center: latLng,
			zoom: 15,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		$scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);
	});
})
   
.controller('scheduleCtrl', function($scope, $ionicSideMenuDelegate) {
	$scope.toggleLeft = function() {
		$ionicSideMenuDelegate.toogleLeft();
	};
})
   
.controller('contactOrganizersCtrl', function($scope) {

})
   
.controller('rulesCtrl', function($scope) {
	$scope.download = function(url) {
		window.location = url;
	};
})
   
.controller('aboutCtrl', function($scope) {

})
   
.controller('eBECCtrl', function($scope) {    
    

})
   
.controller('welcomeToBelgradeCtrl', function($scope) {

})
   
.controller('bESTCtrl', function($scope) {

})
   
.controller('organizersCtrl', function($scope) {

})
   
.controller('participantsCtrl', function($scope) {

})
.controller('day1Ctrl', function($scope) {

})
.controller('day2Ctrl', function($scope) {

})
.controller('day3Ctrl', function($scope) {

})
.controller('day4Ctrl', function($scope) {

})
.controller('day5Ctrl', function($scope) {

})
.controller('day6Ctrl', function($scope) {

})
.controller('day7Ctrl', function($scope) {

})
.controller('day8Ctrl', function($scope) {

})
.controller('day9Ctrl', function($scope) {

})
.controller('day10Ctrl', function($scope) {

})