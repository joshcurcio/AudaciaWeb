var isAuthenticated = false;

var config = {
    apiKey: "AIzaSyBrCNhCMaTSFwqNP3yHtLCAtXUGRjpUFcQ",
    authDomain: "audacia-website.firebaseapp.com",
    databaseURL: "https://audacia-website.firebaseio.com",
    storageBucket: "audacia-website.appspot.com",
    messagingSenderId: "724169933877"
};
firebase.initializeApp(config);

var displayName;
var email;
var emailVerified;
var photoURL;
var isAnonymous;
var uid;
var providerData;

var database = firebase.database();

function writeUserData(userId, name, email) {
    firebase.database().ref('users/' + userId + '/profile').set({
        username: name,
        email: email
    });
}

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function Foo() {
    var X = document.getElementById("Description").value;
    document.getElementById("PostsNumber").innerHTML = X;
    writeUserData(uid, 'Josh Curcio', email)

}

function logout() {
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        isAuthenticated = false;
        console.log("logged out");
    }, function(error) {
        // An error happened.
    });
}

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.

        if (isAuthenticated == false) {
            isAuthenticated = true;
            displayName = user.displayName;
            email = user.email;
            emailVerified = user.emailVerified;
            photoURL = user.photoURL;
            isAnonymous = user.isAnonymous;
            uid = user.uid;
            providerData = user.providerData;

            console.log(uid);
        }
    } else {
        if (isAuthenticated == true) {
            isAuthenticated = false;
            console.log("user not logged in");
            window.location.href = "login.html";
        }
    }
});

function LikeButton() {

}
