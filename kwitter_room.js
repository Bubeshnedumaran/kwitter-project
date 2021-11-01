var firebaseConfig = {
      apiKey: "AIzaSyBtQZPI8BzHyQPauJtnYRaAsBDGNefYKHk",
      authDomain: "adv-95.firebaseapp.com",
      databaseURL: "https://adv-95-default-rtdb.firebaseio.com",
      projectId: "adv-95",
      storageBucket: "adv-95.appspot.com",
      messagingSenderId: "1072095519081",
      appId: "1:1072095519081:web:7d72e3b3a3c4ae94fa1df8"
    };
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("Username");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
    function Addroom() {
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                 purpose : "adding room name" 
            });
            localStorage.setItem("Roomname",room_name);
            window.location="kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("room_name-"+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML+=row;
      
      });});}
getData();
function  redirectToRoomName(name) {
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}
function LogOut() {
 localStorage.removeItem("User_name");
 localStorage.removeItem("room_name");
 window.location="index.html";
}
