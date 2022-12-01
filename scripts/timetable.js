/**
 * This function writes the schedule on Firestore.
 */
function writeschedules() {
  //define a variable for the collection you want to create in Firestore to populate data
  var schedulesRef = db.collection("schedules");

  schedulesRef.add({
      set:"A",
      mon:["ZpfiEkqWDwbeB7LjsEDF","QcNPKM0XNkFGVCGnXLDb","8sjYe3h7LHcq1WJIfNsZF","6MNrVY7T2C4rtH7azwDn","dDbRRob1YwL1BdJAYcxX","SYslQUQyGFIVpcBJKDOf","9tB2PSjkjJ3SEMwf4O7s","FfF3s2f1YpVypDxCV3qU","F2906OmXSKlAJDv9Ievc"],
      thu:["aGbgVHS8WWPwbTBJYajf","Bbv6D4ReDMDPLmSPbD5u","6vJLAQS03a9I0RLvpkCV","cFSZZR6pX2Ypji4CGcG7","JGREKzEkfTcqTgm1yXh4","pMuJVo7YH1y4zICUx7Ri","b3GRJyHfi2uIQzSCsm4O","GHKh7594sRwe0XR5NJYD","dTdE5PDywN6VIYIhu816"],
      last_updated: firebase.firestore.FieldValue.serverTimestamp()  
  });
  schedulesRef.add({
      set:"B",
      tue:["NTGvRSPOHdTNqhp9vcZg","Fw5DK9XfceI9tNKMgpVP","wDAMfOZUa0d5g0A06IMF","BPGmN54oq9OVUrhq5yKB","k7OGOJn9lAqIdzDNexfZ","79NrMwTMwN3l6o8iIx4d","AdfQYQVax2jB7RvT9BSA","DvUpPYXGLOBplySuJLso","GpiEy8inFvsCrvuuVfT7"],
      fri:["QNv83O7bAJilpwGxeXGU","IXtQMcNULmmgrlBZsSgZ","CKEepuROGAP0KtTel38U","uKqmW1QoblvnAVJX8RN6","9BM2bbjCMBk9bjnmUOR4","KiZt3ergH6OhYGggVmkli","f90RzhEGKrfBWWBphw2s","6xIu6u1Zwio7gqPbOkwu","XCL2VQcxWCBYndS0wVNH"],
      last_updated: firebase.firestore.FieldValue.serverTimestamp()  
 });
 schedulesRef.add({
      set:"C",
      wed:["EMFaaqvVfvfQ7dxjQmYc","kSwUvCw3CPY7wIWVXKgo","rXIipTastQn3S8vMQBOY","uMnAMIVQfTUi19aWKJHW","Bg39z56QsB28oCvLIx4g","1gxlzgeQkIYTpkJEejTW","WpepNCPgqnCl1nuAFh98","i6AWzxWq0xiHrw05uBhD","nDlNVmTVDpFZhMtbm8x3"],
      thu:["aGbgVHS8WWPwbTBJYajf","Bbv6D4ReDMDPLmSPbD5u","6vJLAQS03a9I0RLvpkCV","cFSZZR6pX2Ypji4CGcG7","JGREKzEkfTcqTgm1yXh4","pMuJVo7YH1y4zICUx7Ri","b3GRJyHfi2uIQzSCsm4O","GHKh7594sRwe0XR5NJYD","dTdE5PDywN6VIYIhu816"],
        last_updated: firebase.firestore.FieldValue.serverTimestamp()  
 });
 schedulesRef.add({
      set:"D",
      tue:["NTGvRSPOHdTNqhp9vcZg","Fw5DK9XfceI9tNKMgpVP","wDAMfOZUa0d5g0A06IMF","BPGmN54oq9OVUrhq5yKB","k7OGOJn9lAqIdzDNexfZ","79NrMwTMwN3l6o8iIx4d","AdfQYQVax2jB7RvT9BSA","DvUpPYXGLOBplySuJLso","GpiEy8inFvsCrvuuVfT7"],
      thu:["aGbgVHS8WWPwbTBJYajf","Bbv6D4ReDMDPLmSPbD5u","6vJLAQS03a9I0RLvpkCV","cFSZZR6pX2Ypji4CGcG7","JGREKzEkfTcqTgm1yXh4","pMuJVo7YH1y4zICUx7Ri","b3GRJyHfi2uIQzSCsm4O","GHKh7594sRwe0XR5NJYD","dTdE5PDywN6VIYIhu816"],   
      last_updated: firebase.firestore.FieldValue.serverTimestamp()   
});
}

function updateSchedule() {
  var schedulesRef = db.collection("schedules").doc("FRh9ArJ2wyzmJUWky0Vy");
  schedulesRef
  .update({
      mon: ["ZpfiEkqWDwbeB7LjsEDF", "QcNPKM0XNkFGVCGnXLDb", "8sjYe3h7LHcq1WJIfNsZ", "6MNrVY7T2C4rtH7azwDn", "dDbRRob1YwL1BdJAYcxX", "SYslQUQyGFIVpcBJKDOf", "9tB2PSjkjJ3SEMwf4O7s", "FfF3s2f1YpVypDxCV3qU", "F2906OmXSKlAJDv9Ievc"],
      wed: ["EMFaaqvVfvfQ7dxjQmYc","kSwUvCw3CPY7wIWVXKgo", "rXIipTastQn3S8vMQBOY", "uMnAMIVQfTUi19aWKJHW", "Bg39z56QsB28oCvLIx4g", "1gxlzgeQkIYTpkJEejTW", "WpepNCPgqnCl1nuAFh98", "i6AWzxWq0xiHrw05uBhD", "nDlNVmTVDpFZhMtbm8x3"],
      fri: ["QNv83O7bAJilpwGxeXGU", "IXtQMcNULmmgrlBZsSgZ", "CKEepuROGAP0KtTel38U", "uKqmW1QoblvnAVJX8RN6", "9BM2bbjCMBk9bjnmUOR4", "KiZt3ergH6OhYGggVmkl", "f90RzhEGKrfBWWBphw2s", "6xIu6u1Zwio7gqPbOkwu", "XCL2VQcxWCBYndS0wVNH"]
  });    
}

//Write courses start
function writeCourses() {
  //define a variable for the collection you want to create in Firestore to populate data
  var courseRef = db.collection("courses");

  //Monday start
  //830-930
  courseRef.add({
    name: " ",
    location: "",
    type: "",
    slot: "m0",
  });

  //930-1030
  courseRef.add({
    name: " ",
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
    name: " ",
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
    name: " ",
    location: "",
    type: "",
    slot: "m6",
  });

  //1530-1630
  courseRef.add({
    name: " ",
    location: "",
    type: "",
    slot: "m7",
  });

  //1630-1730
  courseRef.add({
    name: " ",
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

/**
 * This function reads the course schedule from the Firestore using 'course' and 'schedule' collection. 
 */
function readSchedule() {
  db.collection("schedules")
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
}

readSchedule(); //calling the function



