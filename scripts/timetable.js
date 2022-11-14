//Write courses start
function writeCourses() {
  //define a variable for the collection you want to create in Firestore to populate data
  var courseRef = db.collection("courses");

  //Monday start
  //830-930
  courseRef.add({
    name: "Break",
    location: "",
    type: "",
    slot: "m0",
  });  

  //930-1030
  courseRef.add({
    name: "Break",
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
    name: "Break",
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
    name: "Break",
    location: "",
    type: "",
    slot: "m6",
  });  

   //1530-1630
   courseRef.add({
    name: "Break",
    location: "",
    type: "",
    slot: "m7",
  });  

  //1630-1730
  courseRef.add({
    name: "Break",
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
    name: "Break",
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
    name: "Break",
    location: "",
    type: "",
    slot: "w6",
  }); 

   //1530-1630
   courseRef.add({
    name: "Break",
    location: "",
    type: "",
    slot: "w7",
  }); 

   //1630-1730
   courseRef.add({
    name: "Break",
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
  name: "Break",
  location: "",
  type: "",
  slot: "f4",
}); 

//1330-1430
courseRef.add({
  name: "Break",
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
  name: "Break",
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


function readCourses() {
dbcolelction("courses").doc
}


function readSchedule() {
    // db.collection("schedules").doc("FRh9ArJ2wyzmJUWky0Vy")
    //     .onSnapshot(setD => {


    // }
    db.collection("schedules").doc("FRh9ArJ2wyzmJUWky0Vy")                                                      //name of the collection and documents should matach excatly with what you have in Firestore
      .onSnapshot(timetable => {                                                               //arrow notation
          console.log("current document data: " + timetable.data());    //.data() returns data object
          
        //   for (let i = 0; i < 9; i++) {
        //       document.getElementById("m"+i).innerHTML = timetable.data().mon[i];
        //   }

          for (let i = 0; i < 9; i++) {
            document.getElementById("t"+i).innerHTML = timetable.data().tue[i];
        }

        for (let i = 0; i < 9; i++) {
            document.getElementById("w"+i).innerHTML = timetable.data().wed[i];
        }

        for (let i = 0; i < 9; i++) {
            document.getElementById("th"+i).innerHTML = timetable.data().thu[i];
        }

        for (let i = 0; i < 9; i++) {
            document.getElementById("f"+i).innerHTML = timetable.data().fri[i]; 
        }
        //   document.getElementById("m0").innerHTML = timetable.data().mon[0];    //using javascript to display the data on the right place
        //   document.getElementById("m1").innerHTML = timetable.data().mon[1];
        //   document.getElementById("m2").innerHTML = timetable.data().mon[2];
        //   document.getElementById("m3").innerHTML = timetable.data().mon[3];
        //   document.getElementById("m4").innerHTML = timetable.data().mon[4];
        //   document.getElementById("m5").innerHTML = timetable.data().mon[5];
        //   document.getElementById("m6").innerHTML = timetable.data().mon[6];
        //   document.getElementById("m7").innerHTML = timetable.data().mon[7];
        //   document.getElementById("m8").innerHTML = timetable.data().mon[8];
  
        //   document.getElementById("t0").innerHTML = timetable.data().tue[0];
        //   document.getElementById("t1").innerHTML = timetable.data().tue[1];
        //   document.getElementById("t2").innerHTML = timetable.data().tue[2];
        //   document.getElementById("t3").innerHTML = timetable.data().tue[3];
        //   document.getElementById("t4").innerHTML = timetable.data().tue[4];
        //   document.getElementById("t5").innerHTML = timetable.data().tue[5];
        //   document.getElementById("t6").innerHTML = timetable.data().tue[6];
        //   document.getElementById("t7").innerHTML = timetable.data().tue[7];
        //   document.getElementById("t8").innerHTML = timetable.data().tue[8];
  
        //   document.getElementById("w0").innerHTML = timetable.data().wed[0];   // From wednesday, we don't have schedule data yet. 
        //   document.getElementById("w1").innerHTML = timetable.data().wed[1];   // tue[0]; needs to be 
        //   document.getElementById("w2").innerHTML = timetable.data().wed[2];
        //   document.getElementById("w3").innerHTML = timetable.data().wed[3];
        //   document.getElementById("w4").innerHTML = timetable.data().wed[4];
        //   document.getElementById("w5").innerHTML = timetable.data().wed[5];
        //   document.getElementById("w6").innerHTML = timetable.data().wed[6];
        //   document.getElementById("w7").innerHTML = timetable.data().wed[7];
        //   document.getElementById("w8").innerHTML = timetable.data().wed[8];
  
        //   document.getElementById("th0").innerHTML = timetable.data().thu[0];
        //   document.getElementById("th1").innerHTML = timetable.data().thu[1];
        //   document.getElementById("th2").innerHTML = timetable.data().thu[2];
        //   document.getElementById("th3").innerHTML = timetable.data().thu[3];
        //   document.getElementById("th4").innerHTML = timetable.data().thu[4];
        //   document.getElementById("th5").innerHTML = timetable.data().thu[5];
        //   document.getElementById("th6").innerHTML = timetable.data().thu[6];
        //   document.getElementById("th7").innerHTML = timetable.data().thu[7];
        //   document.getElementById("th8").innerHTML = timetable.data().thu[8];
  
        //   document.getElementById("f0").innerHTML = timetable.data().fri[0];
        //   document.getElementById("f1").innerHTML = timetable.data().fri[1];
        //   document.getElementById("f2").innerHTML = timetable.data().fri[2];
        //   document.getElementById("f3").innerHTML = timetable.data().fri[3];
        //   document.getElementById("f4").innerHTML = timetable.data().fri[4];
        //   document.getElementById("f5").innerHTML = timetable.data().fri[5];
        //   document.getElementById("f6").innerHTML = timetable.data().fri[6];
        //   document.getElementById("f7").innerHTML = timetable.data().fri[7];
        //   document.getElementById("f8").innerHTML = timetable.data().fri[8];
  
          
      
      })
}
readSchedule();        //calling the function

//-----------------------------------------------
// Create a "max" number of hike document objects
//-----------------------------------------------
var docData = {
     Amon: [COMP1510, true, "hello"],
 };
 db.collection("timetable").doc("setD").set(docData).then(() => {
     console.log("Document successfully written!");
 });






