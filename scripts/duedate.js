/**
 * deleteToDo takes currentDoc as a parameter. Current Doc is linked to a firebase document within the user's subcollection toDo. Delete function searches the
 * firebase until it finds a document that matches the parameter and then deletes. Page (dueDate) is then reloaded and then the user can see their now updated currents todo tasks.
 * @param {string} currentDoc - A variable contains a string
 */
function deleteToDo(currentDoc) {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      var status = confirm("Are you sure you want to delete?");
      if (status) {
        var toDelete = db
          .collection("users")
          .doc(user.uid)
          .collection("toDo")
          .where("id", "==", currentDoc);
        toDelete.get().then(function (onSnapshot) {
          onSnapshot.forEach(function (doc) {
            doc.ref.delete();
            setTimeout(function () {
              location.reload();
            }, 500);
          });
        });
      }
    }
  });
}

/**
 * storeLocal takes currentDoc as a parameter and searches for its corresponding firebase document within the user's subcollection.
 * This is then stored in the local storage and the user is redirected to the duedateEdit page. This function works in tandem with the function
 * populateEdit in the duedateEdit.js
 * @param {string} currentDoc - A variable contains a string
 */
function storelocal(currentDoc) {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      db.collection("users")
        .doc(user.uid)
        .collection("toDo")
        .doc(currentDoc)
        .get()
        .then((doc) => {
          var course = doc.data().course;
          var type = doc.data().type;
          var due = doc.data().due;
          var details = doc.data().details;
          var currentDoc = doc.data().id;

          localStorage.setItem("course", course);
          localStorage.setItem("type", type);
          localStorage.setItem("due", due);
          localStorage.setItem("details", details);
          localStorage.setItem("id", currentDoc);

          console.log(course, type, due, details);
          window.location.replace("/html/duedateEdit.html");
        });
    }
  });
}

/**
 * populateToDo verifies that a user is logged in and then searches the user's todo subcollection. For each document within the todo dollection a card is created
 * and is populated with data fields from the document. This is then displayed dynamically on the duedate page.
 */
function populateToDo() {
  let toDoTemplate = document.getElementById("CardTemplate");
  let toDoCard = document.getElementById("CardGroup");

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      db.collection("users")
        .doc(user.uid)
        .collection("toDo")
        .get()
        .then((onSnapshot) => {
          onSnapshot.forEach((doc) => {
            /**
             * If any fields are left blank the following data will be inputted as a place holder.
             */
            var course = doc.data().course;
            if (doc.data().course == "") {
              course = "No course";
            }

            var type = doc.data().type;
            if (doc.data().type == "") {
              type = "No type";
            }

            var due = doc.data().due;
            if (doc.data().due == "") {
              due = "No due date";
            }

            var details = doc.data().details;
            if (doc.data().details == "") {
              details = "No details";
            }

            var currentDoc = doc.data().id;

            console.log(course, type, due, details, currentDoc);

            /**
             * Data fields from document of firebase is now populating html aspects of the card template.
             */
            let reviewCard = toDoTemplate.content.cloneNode(true);
            reviewCard.querySelector(".course").innerHTML = course;
            reviewCard.querySelector(".type").innerHTML = type;
            reviewCard.querySelector(".due").innerHTML = due;
            reviewCard.querySelector(".details").innerHTML = details;
            reviewCard.querySelector(".docID").innerHTML = currentDoc;
            reviewCard.getElementById("delete-button").onclick = () =>
              deleteToDo(currentDoc);
            reviewCard.getElementById("edit-button").onclick = () =>
              storelocal(currentDoc);
            toDoCard.appendChild(reviewCard);
          });
        });
    } else {
      console.log("Error no user");
    }
  });
}

populateToDo();
