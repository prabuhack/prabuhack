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


function test()

{
   
    var uname = document.getElementById('uname');
    var uid = document.getElementById('uid');
    var uaddress = document.getElementById('uaddress');
    var uphno = document.getElementById('uphno');

    
    
    


    firebase.database().ref('/mastervalue/value').ref.once('value', function (snapshot) {
        var idswitch = snapshot.val();
        console.log(" id is : " + idswitch);


        if(idswitch=='1')


        var area;

        if (idswitch < 100)
        {
            area = "area1";
        }
        else if (idswitch >= 100)
        {
            area = "area2";
        }
        console.log("area is : " + area);


        firebase.database().ref('/voter_database'+'/'+area+'/'+idswitch+'/voter_name').ref.once('value', function (snapshot) {
            var vname = snapshot.val();

            if (vname != null)
            {
            uname.innerText ="Name : "+ vname;

            console.log(" vname is : " + vname);
            }
        })
            
            
        firebase.database().ref('/voter_database' + '/' + area + '/' + idswitch + '/voter_age').ref.once('value', function (snapshot) {
            var vage = snapshot.val();
            if (vage != null)
            {
            uage.innerText ="Age : "+ vage;

            console.log(" vage is : " + vage);
            }
        })
        
            
        firebase.database().ref('/voter_database' + '/'+area+'/' + idswitch + '/voter_id').ref.once('value', function (snapshot) {
            var vid = snapshot.val();
            if (vid != null)
            {
            uid.innerText = "Id : "+vid;

            console.log(" vid is : " + vid);
            }
        })


        firebase.database().ref('/voter_database' + '/'+area+'/' + idswitch + '/voter_address').ref.once('value', function (snapshot) {
            var vaddress = snapshot.val();
            if (vaddress != null)
            {
            uaddress.innerText = "Address : "+vaddress;
           
            console.log(" vaddress is : " + vaddress);
            }

        })


        firebase.database().ref('/voter_database' + '/'+area+'/' + idswitch + '/voter_phno').ref.once('value', function (snapshot) {
            var phno = snapshot.val();
            if (phno != null)
            {
            uphno.innerText = "phno : "+phno;

            console.log(" phno is : " + phno);
            }
        })

        // var storage = firebase.storage();
        // var storageref = storage.ref();
        // var spaceref = spaceref = storageref.child('voter_images/' + area + '/' + idswitch + '.jpg').getDownloadURL().then(function (url) {
        //     var imageurl = url;
        //     console.log(imageurl);
        //     document.getElementById('vimage').src = imageurl;
            

        
        // })

        firebase.database().ref('/voter_database' + '/'+area+'/' + idswitch + '/voter_img').ref.once('value', function (snapshot) {
            var vimg = snapshot.val();
            // uaddress.innerText = "img : "+vimg;
            // // uaddress.style.fontSize="20pt";
            // console.log(" vaddress is : " + vaddress);
            if (vimg != null)
            {
            document.getElementById('vimage').src = vimg;
            }
            else
            {
                document.getElementById("vimage").style.border="none";
            }

        })

         
    })  


    testin();
    
};








function testin()
{
    console.log("testin");

    var ref =database.ref('voted_ids');
    ref.on('value',gotData , errData);

    function gotData(data)
    {

           
    var test = document.getElementById('test');

    firebase.database().ref('/mastervalue/value').ref.once('value', function (snapshot) 
    {
        var chk = snapshot.val();
        console.log(" chk is : " + chk);

        if(chk=='')
        {
            localStorage.setItem("fingerhide", "show");
            console.log("show");
        }
        else
        {
            localStorage.setItem("fingerhide", "hide");
        }

        var tvv = localStorage.getItem("fingerhide");

        if(tvv=='hide')
        {
            console.log("hide");
            var fingersvg = document.getElementById('fingersvg');
            fingersvg.style.display="none";
        }
        
        var ids = data.val();
        tid = Object.keys(ids);
        console.log(tid);
                
        var vtd = 'nv'

        for(i=0;i<tid.length;i++)
        {
            if(chk==tid[i])
        {
                
        console.log("Voted");
        
        var vtd ='v';
        }

        if(vtd=='v')
        {
            var fingersvg = document.getElementById('fingersvg');
            fingersvg.style.display="none";

            test.innerHTML="! VOTE CASTED !";
            test.style.color = "red";
            test.style.fontSize="25pt";

            var casted = new Audio('casted.mp3');
            var siren = new Audio('siren.wav');
            casted.play();
            siren.play();
            siren.volume = 0.2;




        }
        else if(vtd=='nv')
        {
            var fingersvg = document.getElementById('fingersvg');
            fingersvg.style.display="none";
            test.innerHTML="!! CLEAR to VOTE !!";
            test.style.color = "greenyellow";
            test.style.fontSize="23pt";

            
        }

        }


        looping();




        function looping() 
        {
            firebase.database().ref('/mastervalue/value').ref.once('value', function (snapshot) {
             var idcheck = snapshot.val();
            console.log("idcheck val : " + idcheck);

            if (idcheck != chk) 
            { 

                document.getElementById('vimage').src = 'vimage2.jpeg';
                
                //database.ref("/voted_ids/"+idcheck+"/id").set(idcheck);
                database.ref("/voted_ids/"+chk+"/id").set(chk)
                console.log("updated " + chk + " to voted IDs");
                
                window.location.reload();
                
                

            }

            else if (idcheck == chk) 
            {
                
                
                looping();
                myvar = idcheck;
            }

            })


        }




        function sendsms()
        {

            // Download the helper library from https://www.twilio.com/docs/node/install
        // Your Account Sid and Auth Token from twilio.com/console
        // DANGER! This is insecure. See http://twil.io/secure
        const accountSid = 'ACca1195f667ce89207d2f000ed57d57c1';
        const authToken = '10d4c33ddb9d9e08c96cae8978afc34e';
        const client = require('twilio')(accountSid, authToken);

        client.messages
        .create({
            body: 'this shit is from code',
            from: '+16073035982',
            to: '+916380638443'
        })
        .then(message => console.log(message.sid));
        console.log('sent');

        }

    });
    }
  
    


    function errData()
    {
    console.log('err')
    }


}

function voteupdate()
{

var test = document.getElementById('test');
//var idcheck1 = looping();
// idcheck = testin.idcheck.val;
// idcheck1 = idcheck ;
database.ref("/voted_ids/"+myvar+"/id").set(myvar)
console.log("updated " + myvar + " to voted IDs");

test.innerHTML="! VOTE CASTED !";
test.style.color = "red";
test.style.fontSize="40pt";



}


function goback()
{

    window.location.href = "home.html";
}

function logout()
{
    database.ref("/mastervalue/value").set(0)
    database.ref("/voted_ids/").set("")
    firebase.auth().signOut();
    window.location.href = "login.html";
}

function manvote()
{
    window.location.href = "mvote.html";
}






    



