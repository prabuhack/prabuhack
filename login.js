
const config = {
    apiKey: "AIzaSyBTVredP0JFwuNSHBSenYsrlKG_6_r7ib4",
    authDomain: "biovoter.firebaseapp.com",
    databaseURL: "https://biovoter-default-rtdb.firebaseio.com",
    projectId: "biovoter",
    storageBucket: "biovoter.appspot.com",
    messagingSenderId: "721092532955",
    appId: "1:721092532955:web:0fc352f597a90a7da54afe"
};
 

firebase.initializeApp(config);

var database = firebase.database();





var attempt = 3; 

function validate()

{

    firebase.database().ref('/login/id').ref.once('value', function (snapshot) {
        var fid = snapshot.val();
        console.log(" id is : " + fid);

    
    firebase.database().ref('/login/pass').ref.once('value', function (snapshot) {
        
        var fpass = snapshot.val();
        console.log(" pass is : " + fpass);    

    

var username = document.getElementById("lid").value;
var password = document.getElementById("lpwd").value;
var state = document.getElementById("state");

if ( username == fid && password == fpass )
{

// alert ("Login successfully");

database.ref("/mastervalue/value").set(0)
database.ref("/voted_ids/").set("")
window.location = "home2.html"; // Redirecting to other page.
return false;

}
else
{

attempt --;

// alert("You have left "+attempt+" attempt;");


state.innerHTML="Enter correct username and password";
state.style.color = "red";
state.style.fontSize="11pt";


if( attempt == 0)
{
document.getElementById("lid").disabled = true;
document.getElementById("lpwd").disabled = true;
document.getElementById("lbtn").disabled = true;



return false;

}

}

})
})
 

}


function logout()
{
    database.ref("/mastervalue/value").set(0)
    database.ref("/voted_ids/").set("")
    firebase.auth().signOut();
    window.location.href = "index.html";
}

function exitwindow()
{
    window.close();
    var customWindow = window.open('', '_blank', '');
    customWindow.close();
}