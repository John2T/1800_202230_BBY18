var currentUser //put this right after you start script tag before writing any functions.

/**
 * populate user's information.
 */
function populateInfo() {
    firebase.auth().onAuthStateChanged(user => {
        // Check if user is signed in:
        if (user) {

            //go to the correct user document by referencing to the user uid
            currentUser = db.collection("users").doc(user.uid)
            //get the document for current user.
            currentUser.get()
                .then(userDoc => {
                    //get the data fields of the user
                    var userName = userDoc.data().name;
                    var userSchool = userDoc.data().school;
                    var userProgram = userDoc.data().program;
                    var userTerm = userDoc.data().term;
                    var userSet = userDoc.data().set;

                    //if the data fields are not empty, then write them in to the form.
                    if (userName != null) {
                        document.getElementById("nameInput").value = userName;
                    }
                    if (userSchool != null) {
                        document.getElementById("schoolInput").value = userSchool;
                    }
                    if (userProgram != null) {
                        document.getElementById("programInput").value = userProgram;
                    }
                    if (userTerm != null) {
                        document.getElementById("termInput").value = userTerm;
                    }
                    if (userSet != null) {
                        document.getElementById("setInput").value = userSet;
                    }
                })
        } else {
            // No user is signed in.
            console.log("No user is signed in");
        }
    });
}

//call the function to run it 
populateInfo();

/**
 * alower users to edit their information.
 */
function editUserInfo() {
    //Enable the form fields
    document.getElementById('personalInfoFields').disabled = false;
}


/**
 * save the new info.
 */
function saveUserInfo() {
    userName = document.getElementById('nameInput').value; //get the value of the field with id="nameInput"
    userSchool = document.getElementById('schoolInput').value; //get the value of the field with id="schoolInput"
    userProgram = document.getElementById('programInput').value; //get the value of the field with id="programInput"
    userTerm = document.getElementById('termInput').value; //get the value of the field with id="termInput"
    userSet = document.getElementById('setInput').value; //get the value of the field with id="setInput"

    currentUser.update({
        name: userName,
        school: userSchool,
        program: userProgram,
        term:userTerm,
        set:userSet
    })
    .then(() => {
        console.log("Document successfully updated!");
    })
}