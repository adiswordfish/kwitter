a = localStorage.getItem("Username")

function logout(){
    window.location = "index.html"
}

function addroom(){
    room = document.getElementById("roomname").value;
    localStorage.setItem("roomname", room)
}

console.log(a)
document.getElementById("output").innerHTML = "User name:" + a;

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
div = document.createElement("div");
div.innerHTML = room;
document.getElementsByClassName("username").appendChild(div)
function redirectToRoomName(){
    localStorage.setItem("roomname", document.getElementById("roomname").value)
}
//End code
});});}
getData();