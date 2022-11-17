//User is logged in
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    var currentUser = db.collection("users").doc(user.uid);
    console.log("User detected")
    console.log(user.uid)
    // User is signed in.
    // Do something for the user here.
  } else {
    console.log("no user")
    // No user is signed in.
  }
});


function addtodo() {
    console.log("in");
    let courseName = document.getElementById("course").value;
    let typeName = document.getElementById("type").value;
    let dueDate = document.getElementById("due").value;
    let taskDetails = document.getElementById("details").value;


    console.log(course, type, due, details);
  //userID is the issue???
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var currentUser = db.collection("users").doc(user.uid);
      //get the document for current user.
      currentUser.get().then((userDoc) => {
          currentUser.collection("todo").add({
             course: courseName,
             type: typeName,
             due: dueDate,
             details: taskDetails,
            })
            .then(() => {
              window.location.href = "thanks.html"; //new line added
            });
        });
      } else {
        // No user is signed in.
      }
    });
  }

  /*var test = db.collection("users").doc("N6P9KwKe3IW3bQe74aK8TUNSMiP2")
  .collection("todo");
 test.add({
    course: "comp 1510",
    type: "lab 8",
    due: "tmr",
    details: "very long",
   })
   */
    

  