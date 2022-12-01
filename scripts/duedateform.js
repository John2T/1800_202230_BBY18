function addToDo() {
  let courseName = document.getElementById("course").value;
  let typeName = document.getElementById("type").value;
  let dueDate = document.getElementById("due").value;
  let taskDetails = document.getElementById("details").value;

  console.log(course, type, due, details);

      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          var currentUser = db
            .collection("users")
            .doc(user.uid)
            .collection("toDo");
          currentUser
            .add({
              course: courseName,
              type: typeName,
              due: dueDate,
              details: taskDetails,
              id: "",
            })
            .then(function (docRef) {
              var id = docRef.id;
              currentUser.doc(id).update({
                course: courseName,
                type: typeName,
                due: dueDate,
                details: taskDetails,
                id: id,
              });
              window.location.replace("duedate.html");
            });
        }
      });
    }
