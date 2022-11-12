
function readSchedule() {
    db.collection("schedules").doc("set D")                                                      //name of the collection and documents should matach excatly with what you have in Firestore
      .onSnapshot(timetable => {                                                               //arrow notation
          console.log("current document data: " + timetable.data());                          //.data() returns data object
          document.getElementById("m0").innerHTML = timetable.data().mon[0];    //using javascript to display the data on the right place
          document.getElementById("m1").innerHTML = timetable.data().mon[1];
          document.getElementById("m2").innerHTML = timetable.data().mon[2];
          document.getElementById("m3").innerHTML = timetable.data().mon[3];
          document.getElementById("m4").innerHTML = timetable.data().mon[4];
          document.getElementById("m5").innerHTML = timetable.data().mon[5];
          document.getElementById("m6").innerHTML = timetable.data().mon[6];
          document.getElementById("m7").innerHTML = timetable.data().mon[7];
          document.getElementById("m8").innerHTML = timetable.data().mon[8];
  
          document.getElementById("t0").innerHTML = timetable.data().tue[0];
          document.getElementById("t1").innerHTML = timetable.data().tue[1];
          document.getElementById("t2").innerHTML = timetable.data().tue[2];
          document.getElementById("t3").innerHTML = timetable.data().tue[3];
          document.getElementById("t4").innerHTML = timetable.data().tue[4];
          document.getElementById("t5").innerHTML = timetable.data().tue[5];
          document.getElementById("t6").innerHTML = timetable.data().tue[6];
          document.getElementById("t7").innerHTML = timetable.data().tue[7];
          document.getElementById("t8").innerHTML = timetable.data().tue[8];
  
          document.getElementById("w0").innerHTML = timetable.data().wed[0];   // From wednesday, we don't have schedule data yet. 
          document.getElementById("w1").innerHTML = timetable.data().wed[1];   // tue[0]; needs to be 
          document.getElementById("w2").innerHTML = timetable.data().wed[2];
          document.getElementById("w3").innerHTML = timetable.data().wed[3];
          document.getElementById("w4").innerHTML = timetable.data().wed[4];
          document.getElementById("w5").innerHTML = timetable.data().wed[5];
          document.getElementById("w6").innerHTML = timetable.data().wed[6];
          document.getElementById("w7").innerHTML = timetable.data().wed[7];
          document.getElementById("w8").innerHTML = timetable.data().wed[8];
  
          document.getElementById("th0").innerHTML = timetable.data().thu[0];
          document.getElementById("th1").innerHTML = timetable.data().thu[1];
          document.getElementById("th2").innerHTML = timetable.data().thu[2];
          document.getElementById("th3").innerHTML = timetable.data().thu[3];
          document.getElementById("th4").innerHTML = timetable.data().thu[4];
          document.getElementById("th5").innerHTML = timetable.data().thu[5];
          document.getElementById("th6").innerHTML = timetable.data().thu[6];
          document.getElementById("th7").innerHTML = timetable.data().thu[7];
          document.getElementById("th8").innerHTML = timetable.data().thu[8];
  
          document.getElementById("f0").innerHTML = timetable.data().fri[0];
          document.getElementById("f1").innerHTML = timetable.data().fri[1];
          document.getElementById("f2").innerHTML = timetable.data().fri[2];
          document.getElementById("f3").innerHTML = timetable.data().fri[3];
          document.getElementById("f4").innerHTML = timetable.data().fri[4];
          document.getElementById("f5").innerHTML = timetable.data().fri[5];
          document.getElementById("f6").innerHTML = timetable.data().fri[6];
          document.getElementById("f7").innerHTML = timetable.data().fri[7];
          document.getElementById("f8").innerHTML = timetable.data().fri[8];
  
          // for (let i = 0; i < mon.length; i++) {
          //     document.querySelector('[id^="m"+i]').id.innerHTML = monday.data().mon[i];
          //    // document.getElementById("m" + i).innerHTML = monday.data().mon[i]; 
          // }
      
      })
  }
  
  readSchedule();
  
  // var itemsRef = firebase.database().ref().child("Items");
  // var tableBody = document.querySelector('#table tbody');
  
  // function readData() {
  //     itemsRef.once('value', function (snapshot) {
  //         snapshot.forEach(function (item_snapshot) {
  //             //Create html elements, TRs, TD,s etc.
  //             var row = document.createElement("tr");
  //             var col1 = document.createElement("td");
  //             var col2 = document.createElement("td");
  //             var col3 = document.createElement("td");
  //             var col4 = document.createElement("td");
  //             //Add data to the new elements.
  //             col1.innerText = item_snapshot.key;
  //             col2.innerText = item_snapshot.child("First column").val();
  //             col3.innerText = item_snapshot.child("Second_column").val();
  //             col4.innerText = item_snapshot.child("Third_column").val();
  //             //Append the cells into the row and the row into the table body.
  //             row.appendChild(col1);
  //             row.appendChild(col2);
  //             row.appendChild(col3);
  //             row.appendChild(col4);
  //             tableBody.appendChild(row);
  //         });
  //     });
  // }


  //Write courses start
function writeCourses() {
    //define a variable for the collection you want to create in Firestore to populate data
    var courseRef = db.collection("courses");
  
  
  //Currently for tuesday and thursday
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
      name: "Break",
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
    })
   
    courseRef.add({
      name: "Comp 1537",
      location: "SW05-1850",
      type: "Lecture",
      slot: "t6",
    })
  
    //Comp 1510 1530-1630
    courseRef.add({
      name: "Comp 1510",
      location: "SW05-1850",
      type: "Lecture",
      slot: "t7",
    })
  
    //Comp 1100 1630-1730
    courseRef.add({
      name: "Comp 1100",
      location: "SW05-1840",
      type: "Lecture",
      slot: "t8",
    })
  
    //Tuesday End
  
  
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
    name: "Break",
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
    name: "Break",
    location: "",
    type: "",
    slot: "th7",
  });  
  
  courseRef.add({
    name: "Break",
    location: "",
    type: "",
    slot: "th8",
  });  
  
  //Thursday end
  }
  //Keep commented or else you will keep adding courses
  //writeCourses();
  //WriteCourses end






