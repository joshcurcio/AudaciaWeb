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
function LikeButton ()
{

}
function Search_submit ()
{

}
function Megan()
{

}
function editProfile()
{
  window.location.href = "Edit_Profile.html"
}
jQuery(document).ready(function (e) {
  function t(t) {
      e(t).bind("click", function (t) {
          t.preventDefault();
          e(this).parent().fadeOut()
      })
  }
  e(".dropdown-toggle").click(function () {
      var t = e(this).parents(".button-dropdown").children(".dropdown-menu").is(":hidden");
      e(".button-dropdown .dropdown-menu").hide();
      e(".button-dropdown .dropdown-toggle").removeClass("active");
      if (t) {
          e(this).parents(".button-dropdown").children(".dropdown-menu").toggle().parents(".button-dropdown").children(".dropdown-toggle").addClass("active")
      }
  });
  e(document).bind("click", function (t) {
      var n = e(t.target);
      if (!n.parents().hasClass("button-dropdown")) e(".button-dropdown .dropdown-menu").hide();
  });
  e(document).bind("click", function (t) {
      var n = e(t.target);
      if (!n.parents().hasClass("button-dropdown")) e(".button-dropdown .dropdown-toggle").removeClass("active");
  })
});
