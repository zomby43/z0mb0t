// Configuración de Firebase
var firebaseConfig = {
  apiKey: "AIzaSyAGGPhMrPl9S9a7dlm_s6bsz1zBTl0pKEs",
  authDomain: "guestbook-fa3d7.firebaseapp.com",
  databaseURL: "https://guestbook-fa3d7-default-rtdb.firebaseio.com",
  projectId: "guestbook-fa3d7",
  storageBucket: "guestbook-fa3d7.appspot.com",
  messagingSenderId: "370070254257",
  appId: "1:370070254257:web:d8b45fb866ea883b876890",
  measurementId: "G-1D3E1J07Z8"
};

// Inicializa Firebase
var app = firebase.initializeApp(firebaseConfig);
var analytics = firebase.analytics(app);
var db = firebase.firestore(app);

// Referencia a la forma en HTML
var form = document.getElementById("guestbook-form");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  var name = document.getElementById("name").value;
  var comment = document.getElementById("comment").value;

  db.collection("comments").add({
    name: name,
    comment: comment,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  })
  .then(function() {
    form.reset();
  })
  .catch(function(error) {
    console.error("Error adding document: ", error);
  });
});

// Escucha los cambios en la base de datos
db.collection("comments").orderBy("timestamp", "desc").onSnapshot((snapshot) => {
  var commentsSection = document.getElementById("comments-section");

  // Limpia la sección de comentarios
  commentsSection.innerHTML = "";

  snapshot.forEach((doc) => {
    var comment = doc.data();
    commentsSection.innerHTML += "<p><strong>" + comment.name + "</strong>: " + comment.comment + "</p>";
  });
});



