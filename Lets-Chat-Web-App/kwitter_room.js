// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
firebaseConfig = {
  apiKey: "AIzaSyDoL4Ci2qi6QCHLlfafpdMshlH24vSSpfs",
  authDomain: "lets-chat-a3d0c.firebaseapp.com",
  projectId: "lets-chat-a3d0c",
  storageBucket: "lets-chat-a3d0c.appspot.com",
  messagingSenderId: "27376545418",
  appId: "1:27376545418:web:bb669f87ce27a5631c8773"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 //Start code
 console.log("Room Name - " + Room_names)
 row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>"
 document.getElementById("output").innerHTML += row;
 //End code
 });});}
getData();

function addRoom(){
 room_name = document.getElementById("room_name").value;

 firebase.database().ref("/").child(room_name).update({
       purpose : "adding room name"
 })

 localStorage.setItem("room_name", room_name)

 window.location = "kwitter_page.html"; 
}

function redirectToRoomName(name){
 console.log(name);
 localStorage.setItem("room_name" , name);
 window.location = "kwitter_page.html";
} 
