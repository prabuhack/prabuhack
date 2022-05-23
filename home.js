
const config = {
    apiKey: "AIzaSyBTVredP0JFwuNSHBSenYsrlKG_6_r7ib4",
    authDomain: "biovoter.firebaseapp.com",
    databaseURL: "https://biovoter-default-rtdb.firebaseio.com",
    projectId: "biovoter",
    storageBucket: "biovoter.appspot.com",
    messagingSenderId: "721092532955",
    appId: "1:721092532955:web:0fc352f597a90a7da54afe",
  };
  
  firebase.initializeApp(config);
  
  var database = firebase.database();

function gotoindex()
{
    database.ref("/mastervalue/value").set(0)
    database.ref("/voted_ids/").set("")
    window.location.href = "main.html";
}

function gotoaddvoter()
{
    window.location.href = "addvoter.html";
}

function logout()
{
    database.ref("/mastervalue/value").set(0)
    database.ref("/voted_ids/").set("")
    firebase.auth().signOut();
    window.location.href = "index.html";
}