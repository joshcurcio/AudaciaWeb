var myApp = angular.module('audaciaWebApp', ["firebase"]);
myApp.controller("logoutController", function ($scope) {
    //CREATE A FIREBASE REFERENCE
    $scope.userEmail = "test";
    var config = {
      apiKey: "AIzaSyBrCNhCMaTSFwqNP3yHtLCAtXUGRjpUFcQ",
      authDomain: "audacia-website.firebaseapp.com",
      databaseURL: "https://audacia-website.firebaseio.com",
      storageBucket: "audacia-website.appspot.com",
      messagingSenderId: "724169933877"
    };
    firebase.initializeApp(config);
    $scope.email = "";
    $scope.password = "";

    var user = firebase.auth().currentUser;
    if (user) {
      // User is signed in.
      $scope.isAuthenticated = true;
    } else {
      // No user is signed in.
      $scope.isAuthenticated = false;
    }

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
          // User is signed in.
          if($scope.isAuthenticated == false)
          {
            $scope.isAuthenticated = true;
            var displayName = user.displayName;
            var userEmail1 = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData;

            console.log(uid);
            window.location.href = "logout.html";
          }
        }
        else {
          if($scope.isAuthenticated == true)
          {
            $scope.isAuthenticated = false;
            console.log("user not logged in");
            window.location.href = "index.html";
          }
        }
    });



    $scope.logout = function(){
      firebase.auth().signOut().then(function() {
        // Sign-out successful.
          $scope.isAuthenticated = false;
          console.log("logged out");
        }, function(error) {
        // An error happened.
      });
    }


});
