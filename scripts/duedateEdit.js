/**
 * populateEdit works in tandem with the storeLocal function within the duedate.js. This function reads the data that is contained within the local storage. User can then make changes to this
 * data. This function works in tandem with the saveEdit function which is below this. This function is run on the duedateEdit html page.
 */
function populateEdit() {
  var course = localStorage.getItem("course");
  var type = localStorage.getItem("type");
  var due = localStorage.getItem("due");
  var details = localStorage.getItem("details");
  var id = localStorage.getItem("id");

  firebase.auth().onAuthStateChanged(function (user) {
    var id = localStorage.getItem("id");
    if (user) {
      editDoc = db.collection("users").doc(user.uid).collection("toDo").doc(id);

      editDoc.get().then((userDoc) => {
        var course = localStorage.getItem("course");
        var type = localStorage.getItem("type");
        var due = localStorage.getItem("due");
        var details = localStorage.getItem("details");
        console.log(course, type, due, details);

        document.getElementById("course").value = course;
        document.getElementById("type").value = type;
        document.getElementById("due").value = due;
        document.getElementById("details").value = details;
      });
    }
  });
}

populateEdit();

/**
 * saveEdit function that works in tandem with the populateEdit function. After the local storage is read, users can then make any edits to the data within the html text fields. Upon saving their edits
 * the corresponding document ID is searched for within the user's subcollections and its data fields is then updated.
 */
function saveEdit() {
  firebase.auth().onAuthStateChanged(function (user) {
    var id = localStorage.getItem("id");
    if (user) {
      saveDoc = db.collection("users").doc(user.uid).collection("toDo").doc(id);

      course = document.getElementById("course").value;
      type = document.getElementById("type").value;
      due = document.getElementById("due").value;
      details = document.getElementById("details").value;

      saveDoc
        .update({
          course: course,
          type: type,
          due: due,
          details: details,
        })
        .then(() => {
          location.replace("duedate.html");
        });
    }
  });
}
