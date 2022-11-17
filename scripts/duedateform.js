


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




function addToDo(){
    
  let courseName = document.getElementById("course").value;
  let typeName = document.getElementById("type").value; 
  let dueDate = document.getElementById("due").value;
  let taskDetails = document.getElementById("details").value;

  console.log(course, type, due, details);
  
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
          var currentUser = db.collection("users").doc(user.uid).collection("toDo");
          currentUser.add({
             course: courseName,
             type: typeName,
             due: dueDate,
             details: taskDetails,
            })                  
      } else {
        console.log("Error");
      }
    });
  }

  /* //This works
  var test = db.collection("users").doc("N6P9KwKe3IW3bQe74aK8TUNSMiP2")
  .collection("todo");
 test.add({
    course: "comp 1510",
    type: "lab 8",
    due: "tmr",
    details: "very long",
   })
   */
    

  