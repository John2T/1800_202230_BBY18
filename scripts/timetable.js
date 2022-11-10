function readSchedule() {
    db.collection("schedules").doc("setA")                                                      //name of the collection and documents should matach excatly with what you have in Firestore
      .onSnapshot(somedoc => {                                                               //arrow notation
           console.log("current document data: " + somedoc.data());                          //.data() returns data object
           document.getElementById("aaa").innerHTML = somedoc.data().schedule[0]; 
           document.getElementById("bbb").innerHTML = somedoc.data().schedule[1];  
           document.getElementById("ccc").innerHTML = somedoc.data().schedule[2];   //using javascript to display the data on the right place
           
           //Here are other ways to access key:value data fields
           //$('#quote-goes-here').text(tuesdayDoc.data().quote);                                       //using jquery object dot notation
           //$("#quote-goes-here").text(tuesdayDoc.data()["quote"]);                                    //using json object indexing
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