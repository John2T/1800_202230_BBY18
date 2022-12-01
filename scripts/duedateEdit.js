
//Reads from the local storage and displays the it in the appropiate places within the html
function populateEdit(){
    var course = localStorage.getItem('course');
    var type = localStorage.getItem('type');
    var due= localStorage.getItem('due');
    var details = localStorage.getItem('details');
    var id = localStorage.getItem("id");

    firebase.auth().onAuthStateChanged(function(user) {
        var id = localStorage.getItem("id");
        if (user) {
            editDoc = db.collection("users").doc(user.uid).collection("toDo").doc(id);

            editDoc.get()
            .then(userDoc => {
                var course = localStorage.getItem('course');
                var type = localStorage.getItem('type');
                var due= localStorage.getItem('due');
                var details = localStorage.getItem('details');
                console.log(course, type, due, details);
               
                document.getElementById("course").value = course;
                document.getElementById("type").value = type;
                document.getElementById("due").value = due;
                document.getElementById("details").value = details;
            })
        }
    })
}

populateEdit();

//Reads the data value from html user inputs and updates the firebase accordingly.
function saveEdit() {
    firebase.auth().onAuthStateChanged(function(user) {
        var id = localStorage.getItem("id");
        if (user) {
            saveDoc = db.collection("users").doc(user.uid).collection("toDo").doc(id);

            course = document.getElementById('course').value; 
            type = document.getElementById('type').value; 
            due = document.getElementById('due').value; 
            details = document.getElementById('details').value; 

    saveDoc.update({
       course: course,
       type: type,
       due: due,
       details: details,
            }).then(() => {
                location.replace("duedate.html");
        })
    }
})
}

