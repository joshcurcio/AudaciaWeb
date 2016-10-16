
    var config = {
      apiKey: "AIzaSyBrCNhCMaTSFwqNP3yHtLCAtXUGRjpUFcQ",
      authDomain: "audacia-website.firebaseapp.com",
      databaseURL: "https://audacia-website.firebaseio.com",
      storageBucket: "audacia-website.appspot.com",
      messagingSenderId: "724169933877"
    };
    firebase.initializeApp(config);
    var isAuthenticated = false;
    var email = "";
    var password = "";

    var user = firebase.auth().currentUser;
    if (user) {
      // User is signed in.
      isAuthenticated = true;
    } else {
      // No user is signed in.
      isAuthenticated = false;
    }

    function createAccount() {
      firebase.auth().createUserWithEmailAndPassword("test3@abc.com", "abc123").catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
          console.error(error.code);
          console.error(error.message);
      });

    }

    function login() {

      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;
      console.log("begin login");
      firebase.auth().signInWithEmailAndPassword(email,password).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error(error.code);
        console.error(error.message);
      });
    }

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
          // User is signed in.
          isAuthenticated = true;
          var displayName = user.displayName;
          var userEmail1 = user.email;
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;

          console.log(uid);
          window.location.href = "Home_Page_Logged.html";
        }
        else {
          console.log("user not logged in");
        }
    });



    function logout(){
      firebase.auth().signOut().then(function() {
        // Sign-out successful.
          isAuthenticated = false;
          console.log("logged out");
        }, function(error) {
        // An error happened.
      });
    }
