// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var ionicExample = angular.module('starter', ['ionic', 'ngResource','ngCordova', 'ngCordovaOauth'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider) {
        $stateProvider
            .state('secure', {
                url: '/secure',
                templateUrl: 'templates/secure.html'
            })
    })

ionicExample.controller("OauthExample", function($scope, $cordovaOauth, $location) {

    $scope.googleLogin = function() {
        $cordovaOauth.google("589066861537-6tlold0mp9qbi9skg3m773k5du8q1f88.apps.googleusercontent.com", ["https://www.googleapis.com/auth/urlshortener", "https://www.googleapis.com/auth/userinfo.email", "https://www.googleapis.com/auth/userinfo.profile", "https://www.googleapis.com/auth/plus.me", "https://www.googleapis.com/auth/gmail.readonly"],{
        'access_type': 'offline',
        'approval_prompt': 'force'
    }).then(function(result) {
            $location.url('/secure');
            $scope.profile();


            console.log(JSON.stringify(result));
            
        }, function(error) {
            console.log(error);
        });
    }
    $scope.twitterLogin = function() {
        $cordovaOauth.twitter("i5dE8x4lab7pdSUA3TDDOekIO", "5frZDVZAdlUsbwnof9PB6aIwfrqsBlY2GjOdLKc4I5Po9xdj11").then(function(result) {
            
            
            console.log(JSON.stringify(result));

            
        }, function(error) {
            console.log(error);
        });
    }
    $scope.profile = function(){
        $cordovaOauth.google.api("me", ["https://www.googleapis.com/plus/v1/people/me"]).then(function(result){
            console.log(result);
        }, function(error){
            console.log(error);
        });
    }

});
