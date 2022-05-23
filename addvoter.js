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

function adduser() 
{
  var uname = document.getElementById("uname").value;
  console.log('uname is ' + uname);

  var uage = document.getElementById("uage").value;
  console.log('uage is ' + uage);

  var uid = document.getElementById("uid").value;
  console.log('uid is ' + uid);

  var uphone = document.getElementById("uphone").value;
  console.log('uphone is ' + uphone);

  var uaddr = document.getElementById("uaddr").value;
  console.log('uaddr is ' + uaddr);

  var area = "area1";

if (uname == "" || uage == "" || uid == "" || uphone == "" || uaddr == "")
{
  state.innerHTML = '! Some Feilds are empty !';
  state.style.color = 'red';
  state.style.fontSize = '13pt';
}

else
{

  if (uid < 100) 
  {
    area = "area1";
  } else if (uid >= 100) {
    area = "area2";
  }
  console.log("area is : " + area);

  database.ref('/voter_database' + '/' + area + '/' + uid).set(uid);
  console.log('done updating id' + uid);
  
  database.ref('/voter_database' + '/' + area + '/' + uid + '/voter_name').set(uname);
  console.log('done updating name' + uname);

  database
    .ref('/voter_database' + '/' + area + '/' + uid + '/voter_age')
    .set(uage);
  console.log('done updating age' + uage);

  database
    .ref('/voter_database' + '/' + area + '/' + uid + '/voter_id')
    .set(uid);
  console.log('done updating id' + uid);

  database
    .ref('/voter_database' + '/' + area + '/' + uid + '/voter_address')
    .set(uaddr);
  console.log('done updating address' + uaddr);

  database
    .ref('/voter_database' + '/' + area + '/' + uid + '/voter_phno')
    .set(uphone);
  console.log('done updating phone' + uphone);

  state.innerHTML = 'Voter Added Successfully';
  state.style.color = 'green';
  state.style.fontSize = '13pt';
}

  // database.ref("/user_database/"+uid).set(uid)

  // firebase.database().ref('/user_database/id').ref.once('value', function (snapshot) {
  //     var fid = snapshot.val();
  //     console.log(" id is : " + fid);

  // firebase.database().ref('/login/pass').ref.once('value', function (snapshot) {

  //     var fpass = snapshot.val();
  //     console.log(" pass is : " + fpass);
}


// function logout()
// {
//     database.ref("/mastervalue/value").set(0)
//     database.ref("/voted_ids/").set("")
//     firebase.auth().signOut();
//     window.location.href = "login.html";
// }

function goback()
{

    window.location.href = "home.html";
}

// var username = document.getElementById("lid").value;
// var password = document.getElementById("lpwd").value;
// var state = document.getElementById("state");

// if ( username == fid && password == fpass )
// {

// // alert ("Login successfully");

// database.ref("/mastervalue/value").set(0)
// database.ref("/voted_ids/").set("")
// window.location = "index.html"; // Redirecting to other page.
// return false;

// }
// else
// {

// attempt --;

// // alert("You have left "+attempt+" attempt;");

// state.innerHTML="Enter correct username and password";
// state.style.color = "red";
// state.style.fontSize="11pt";

// if( attempt == 0)
// {
// document.getElementById("lid").disabled = true;
// document.getElementById("lpwd").disabled = true;
// document.getElementById("lbtn").disabled = true;

// return false;

// }

// }

// })
// })

// }
