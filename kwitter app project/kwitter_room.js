
var firebaseConfig = {
      apiKey: "AIzaSyBmQ-LZKmRAy5u_6byeRrmxfFl-1f7CZaw",
  authDomain: "classtest-716d4.firebaseapp.com",
  databaseURL: "https://classtest-716d4-default-rtdb.firebaseio.com",
  projectId: "classtest-716d4",
  storageBucket: "classtest-716d4.appspot.com",
  messagingSenderId: "560604630738",
  appId: "1:560604630738:web:15a35e4573d284c4cd270b",
  measurementId: "G-CVDZ9N3XRG"
    };
    
     firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
