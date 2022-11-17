function writeQuotes() {
  var quotesRef = db.collection("quotes");

  quotesRef.add({
    name: "quote1",
    details:
      "“All truly great thoughts are conceived by walking.” ~ Friedrich Nietzsche",
  });

  quotesRef.add({
    name: "quote2",
    details: "“Don’t let yesterday take up too much of today.” ~ Will Rogers",
  });

  quotesRef.add({
    name: "quote3",
    details: "“It always seems impossible until it’s done.” ~ Nelson Mandela",
  });

  quotesRef.add({
    name: "quote4",
    details:
      "“Positive anything is better than negative nothing.” ~ Elbert Hubbard",
  });

  quotesRef.add({
    name: "quote5",
    details:
      "“If you look at what you have in life, you’ll always have more.” ~ Oprah Winfrey",
  });

  quotesRef.add({
    name: "quote6",
    details: "“Every moment is a fresh beginning.” ~ T.S Eliot",
  });

  quotesRef.add({
    name: "quote7",
    details: "“Believe you can and you’re halfway there.” ~ Theodore Roosevelt",
  });

  quotesRef.add({
    name: "quote8",
    details:
      "“The bad news is time flies. The good news is you’re the pilot.” ~ Michael Altshuler",
  });

  quotesRef.add({
    name: "quote9",
    details:
      "“A person who never made a mistake never tried anything new.” ~ Albert Einstein",
  });

  quotesRef.add({
    name: "quote10",
    details:
      "“The roots of education are bitter, but the fruit is sweet.” ~ Aristotle",
  });
}

// This function is one-time thing for adding the data to database, so I commented out.
// writeQuotes();

//Write courses start
function writeCourses() {
  //define a variable for the collection you want to create in Firestore to populate data
  var courseRef = db.collection("courses");

  //Monday start
  //830-930
  courseRef.add({
    name: "",
    location: "",
    type: "",
    slot: "m0",
  });

  //930-1030
  courseRef.add({
    name: "",
    location: "",
    type: "",
    slot: "m1",
  });

  //1030-1130
  courseRef.add({
    name: "Comp1510",
    location: "SW05-1840",
    type: "Lecture",
    slot: "m2",
  });

  //1130-1230
  courseRef.add({
    name: "",
    location: "",
    type: "",
    slot: "m3",
  });

  //Comp 1712 1230-1430
  courseRef.add({
    name: "Comp 1712",
    location: "SE12-306",
    type: "Lab",
    slot: "m4",
  });

  //Comp 1712 1230-1430
  courseRef.add({
    name: "Comp 1712",
    location: "Se12-306",
    type: "Lab",
    slot: "m5",
  });

  //1430-1530
  courseRef.add({
    name: "",
    location: "",
    type: "",
    slot: "m6",
  });

  //1530-1630
  courseRef.add({
    name: "",
    location: "",
    type: "",
    slot: "m7",
  });

  //1630-1730
  courseRef.add({
    name: "",
    location: "",
    type: "",
    slot: "m8",
  });
  //Monday end

  //Tuesday
  //COmp 1510 830-1030
  courseRef.add({
    name: "Comp 1510",
    location: "SE12-321",
    type: "Lab",
    slot: "t0",
  });

  courseRef.add({
    name: "Comp 1510",
    location: "SE12-321",
    type: "Lab",
    slot: "t1",
  });

  //comp 1800 1030-1230
  courseRef.add({
    name: "Comp 1800",
    location: "SW05-1710",
    type: "Lecture",
    slot: "t2",
  });

  courseRef.add({
    name: "Comp 1800",
    location: "SW05-1710",
    type: "Lecture",
    slot: "t3",
  });

  //Break 1 hr
  courseRef.add({
    name: "",
    location: "",
    type: "",
    slot: "t4",
  });

  //Comp 1537 1330-1530
  courseRef.add({
    name: "Comp 1537",
    location: "SW05-1850",
    type: "Lecture",
    slot: "t5",
  });

  courseRef.add({
    name: "Comp 1537",
    location: "SW05-1850",
    type: "Lecture",
    slot: "t6",
  });

  //Comp 1510 1530-1630
  courseRef.add({
    name: "Comp 1510",
    location: "SW05-1850",
    type: "Lecture",
    slot: "t7",
  });

  //Comp 1100 1630-1730
  courseRef.add({
    name: "Comp 1100",
    location: "SW05-1840",
    type: "Lecture",
    slot: "t8",
  });

  //Tuesday End

  //Wednesday start
  //Comp 1510 830-930
  courseRef.add({
    name: "Comp 1510",
    location: "SE12-321",
    type: "Tutorial",
    slot: "w0",
  });

  //930-1030
  courseRef.add({
    name: "",
    location: "",
    type: "",
    slot: "w1",
  });

  //Comp 1113 1030-1230
  courseRef.add({
    name: "Comp 1113",
    location: "SW05-2875",
    type: "Lab",
    slot: "w2",
  });

  courseRef.add({
    name: "Comp 1113",
    location: "SW05-2875",
    type: "Lab",
    slot: "w3",
  });

  //Comp1510 1230-1330
  courseRef.add({
    name: "Comp 1510",
    location: "SE12-320",
    type: "Lab",
    slot: "w4",
  });

  //Comp1510 1330-1430
  courseRef.add({
    name: "Comp 1510",
    location: "SW05-1850",
    type: "Lecture",
    slot: "w5",
  });

  //1430-1530
  courseRef.add({
    name: "",
    location: "",
    type: "",
    slot: "w6",
  });

  //1530-1630
  courseRef.add({
    name: "",
    location: "",
    type: "",
    slot: "w7",
  });

  //1630-1730
  courseRef.add({
    name: "",
    location: "",
    type: "",
    slot: "w8",
  });
  //Wednesday End

  //Thursday Start

  //COmp 1800 830-1030
  courseRef.add({
    name: "Comp 1800",
    location: "SE12-322",
    type: "Lab",
    slot: "th0",
  });

  courseRef.add({
    name: "Comp 1800",
    location: "SE12-322",
    type: "Lab",
    slot: "th1",
  });

  //Comp 1116 1030-1230
  courseRef.add({
    name: "Comp 1116",
    location: "SE12-313",
    type: "Lab",
    slot: "th3",
  });

  courseRef.add({
    name: "Comp 1116",
    location: "SE12-313",
    type: "Lab",
    slot: "th4",
  });

  //break 1hr
  courseRef.add({
    name: "",
    location: "",
    type: "",
    slot: "th5",
  });

  //Comp 1537 1330-1530
  courseRef.add({
    name: "Comp 1537",
    location: "SE12-322",
    type: "Lab",
    slot: "th6",
  });

  courseRef.add({
    name: "Comp 1537",
    location: "SE12-322",
    type: "Lab",
    slot: "th7",
  });

  courseRef.add({
    name: "",
    location: "",
    type: "",
    slot: "th7",
  });

  courseRef.add({
    name: "",
    location: "",
    type: "",
    slot: "th8",
  });

  //Thursday end

  //Friday start
  //Comp 1116 830-1030
  courseRef.add({
    name: "Comp 1116",
    location: "SW05-1840",
    type: "Lecture",
    slot: "f0",
  });

  courseRef.add({
    name: "Comp 1116",
    location: "SW05-1840",
    type: "Lecture",
    slot: "f1",
  });

  //Comp1712 1030-1230
  courseRef.add({
    name: "Comp 1712",
    location: "NE01-331",
    type: "Lecture",
    slot: "f2",
  });

  courseRef.add({
    name: "Comp 1712",
    location: "NE01-331",
    type: "Lecture",
    slot: "f3",
  });

  //1230-1330
  courseRef.add({
    name: "",
    location: "",
    type: "",
    slot: "f4",
  });

  //1330-1430
  courseRef.add({
    name: "",
    location: "",
    type: "",
    slot: "f5",
  });

  //Comp 1113 1430-1630
  courseRef.add({
    name: "Comp 1113",
    location: "SW01-1205",
    type: "Lecture",
    slot: "f6",
  });

  courseRef.add({
    name: "Comp 1113",
    location: "SW01-1205",
    type: "Lecture",
    slot: "f7",
  });

  //1630-1730
  courseRef.add({
    name: "",
    location: "",
    type: "",
    slot: "f8",
  });
  //Friday End
}
//Leaving this code here in case we need to make any changes
//Keep commented or else you will keep adding courses to database
//writeCourses();
//WriteCourses end

function getUsersSet() {
  firebase.auth().onAuthStateChanged(user => {
    // Check if user is signed in:
    if (user) {
  var currentUser = db.collection("users").doc(user.uid);
  //get the document for current user.
  currentUser.get()
      .then(userDoc => {
          //get the data fields of the user
          var userSet = userDoc.data().set;  
          console.log(userSet);        
      })
}
  })
}

getUsersSet();

function readSchedule() {
  db.collection("schedules")
    // Need to figure out how to reference the set name from the user registration to in where() function.
    .where("set", "==", "D")
    .get()
    .then((timetable) => {
      timetable.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());    //Shows the document id that satisfies where() condition on console.
//Reads the schedule for Monday.
        for (let i = 0; i < 9; i++) {
          var courseID = doc.data().mon[i];
          console.log(courseID);

          db.collection("courses")
            .doc(courseID)
            .get()
            .then((doc) => {
              // console.log(doc.data().name);
              document.getElementById("m" + i).innerText =
                doc.data().name +
                "\n" +
                doc.data().type +
                "\n" +
                doc.data().location;
            });
        }
//Reads the schedule for Tuesday.
        for (let i = 0; i < 9; i++) {
          var courseID = doc.data().tue[i];
          console.log(courseID);

          db.collection("courses")
            .doc(courseID)
            .get()
            .then((doc) => {
              // console.log(doc.data().name);
              document.getElementById("t" + i).innerText =
                doc.data().name +
                "\n" +
                doc.data().type +
                "\n" +
                doc.data().location;
            });
        }
//Reads the schedule for Wednesday.
        for (let i = 0; i < 9; i++) {
          var courseID = doc.data().wed[i];
          console.log(courseID);

          db.collection("courses")
            .doc(courseID)
            .get()
            .then((doc) => {
              // console.log(doc.data().name);
              document.getElementById("w" + i).innerText =
                doc.data().name +
                "\n" +
                doc.data().type +
                "\n" +
                doc.data().location;
            });
        }
//Reads the schedule for Thursday.
        for (let i = 0; i < 9; i++) {
          var courseID = doc.data().thu[i];
          console.log(courseID);

          db.collection("courses")
            .doc(courseID)
            .get()
            .then((doc) => {
              // console.log(doc.data().name);
              document.getElementById("th" + i).innerText =
                doc.data().name +
                "\n" +
                doc.data().type +
                "\n" +
                doc.data().location;
            });
        }
//Reads the schedule for Friday.
        for (let i = 0; i < 9; i++) {
          var courseID = doc.data().fri[i];
          console.log(courseID);

          db.collection("courses")
            .doc(courseID)
            .get()
            .then((doc) => {
              // console.log(doc.data().name);
              document.getElementById("f" + i).innerText =
                doc.data().name +
                "\n" +
                doc.data().type +
                "\n" +
                doc.data().location;
            });
        }
      });
    });

  // Codes below is for the reference.
  // db.collection("schedules").doc("FRh9ArJ2wyzmJUWky0Vy")
  // .get()
  // .then(                                            //name of the collection and documents should matach excatly with what you have in Firestore
  //   timetable => {                                                               //arrow notation
  //       console.log("current document data: " + timetable.data());    //.data() returns data object

  // for (let i = 0; i < 9; i++) {
  //     // document.getElementById("t"+i).innerHTML = timetable.data().tue[i];
  //     var courseID = timetable.data().tue[i];
  //     console.log(courseID);
  //     db.collection("courses").doc(courseID).get().then(
  //       doc => {
  //         console.log(doc.data().name);
  //         document.getElementById("t"+i).innerHTML = doc.data().name + "\n" + doc.data().type + "\n" + doc.data().location;
  //         // document.getElementById("t"+i).innerHTML =
  //       })
  // }

 

}
readSchedule(); //calling the function

//-----------------------------------------------
// Create a "max" number of hike document objects
//-----------------------------------------------
// var docData = {
//      Amon: [COMP1510, true, "hello"],
//  };
//  db.collection("timetable").doc("setD").set(docData).then(() => {
//      console.log("Document successfully written!");
//  });
