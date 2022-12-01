
function deleteToDo(currentDoc) {

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        confirm("Are you sure you want to delete?");
        if (confirm) {
                var toDelete = db.collection('users').doc(user.uid).collection("toDo").where('id','==',
                currentDoc);
                toDelete.get().then(function(onSnapshot) {
                    onSnapshot.forEach(function(doc) {
                    doc.ref.delete();

                    setTimeout(function(){
                        location.reload();
                     }, 500);
                        })
                    })
                }
            }
            })
        }
           
function storelocal(currentDoc) {
                
                firebase.auth().onAuthStateChanged(function(user) {
                    if (user) {
                        db.collection("users").doc(user.uid).collection("toDo")
                        .doc(currentDoc).get().then(doc => {
                            var course = doc.data().course;
                            var type = doc.data().type;
                            var due = doc.data().due;
                            var details = doc.data().details;
                            var currentDoc = doc.data().id;

                            localStorage.setItem('course', course);
                            localStorage.setItem('type', type);
                            localStorage.setItem('due', due);
                            localStorage.setItem('details', details);
                            localStorage.setItem('id', currentDoc);

                            console.log(course, type, due, details);
                            window.location.replace("duedateEdit.html");    
                        })
                    }
                })
            }



function populateToDo() {

    let toDoTemplate = document.getElementById("CardTemplate");
    let toDoCard = document.getElementById("CardGroup");

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        db.collection("users").doc(user.uid).collection("toDo")
        .get().then((onSnapshot) => {
            onSnapshot.forEach((doc) => {

         
                var course = doc.data().course;
                if(doc.data().course == ""){
                    course = "No course";
                }

                var type = doc.data().type;
                if(doc.data().type == ""){
                  type = "No type";
                }

                var due = doc.data().due;
                if(doc.data().due == ""){
                    due = "No due date";
                }

                var details = doc.data().details;
                if(doc.data().details == ""){
                    details = "No details"
                }

                var currentDoc = doc.data().id;

                
                console.log(course, type, due, details, currentDoc)



                let reviewCard = toDoTemplate.content.cloneNode(true);
                reviewCard.querySelector('.course').innerHTML = course;   
                reviewCard.querySelector('.type').innerHTML = type;   
                reviewCard.querySelector('.due').innerHTML = due;   
                reviewCard.querySelector('.details').innerHTML = details;   
                reviewCard.querySelector('.docID').innerHTML = currentDoc;   
                reviewCard.getElementById("delete-button").onclick = ()=> deleteToDo(currentDoc);
                reviewCard.getElementById('edit-button').onclick = ()=>storelocal(currentDoc);
;               
                toDoCard.appendChild(reviewCard);
            });
        });

    } else{
        console.log("Error no user");
    }
});
}

populateToDo();


   



            
        

