function findNextSlot(){

    //get current date and time
    var date = new Date();

    //get day of the week
    var dayOfWeek = date.getDay();   //returns 0-6, 0 is sunday
	  var prefix;
    switch (dayOfWeek) {
        case 1:
            prefix = "m";
            break;
        case 2:
            prefix = "t";
            break;
        case 3:
            prefix = "w";
            break;
        case 4:
            prefix = "th";
            break;
        case 5:
            prefix = "f";
            break;
        default:
            prefix = "t"; //0&6 weekend,using t when texting
            break;
    }

    //get hour and minutes
    var hour = date.getHours();  //returns 0-23
    var minutes = date.getMinutes();   //returns 0-59
    console.log("current hour is: " +hour);
    console.log("current minutes is: " +minutes);
    

    //calculate the slot that will come next in my schedule
    if ((hour==8) && (minutes<30)) {
        slot = prefix+"0";
        console.log("your next block is 8:30 " + slot);
    }
    else if ((hour==8) && (minutes>=30)||(hour==9) && (minutes<30)){
        slot = prefix+"1";
        console.log("your next block is 9:30 " + slot);
    }
    else if ((hour==9)&&(minutes>=30)||(hour==10)&&(minutes<30)){
        slot = prefix+"2";
        console.log("your next block is 10:30 " + slot);
    }
    else if ((hour==10)&&(minutes>=30)||(hour==11)&&(minutes<30)){
        slot = prefix+"3";
        console.log("your next block is 11:30 " + slot);
    }
    else if ((hour==11)&&(minutes>=30)||(hour==12)&&(minutes<30)){
        slot = prefix+"4";
        console.log("your next block is 12:30 " + slot);
    }
    else if ((hour==12)&&(minutes>=30)||(hour==13)&&(minutes<30)){
        slot = prefix+"5";
        console.log("your next block is 13:30 " + slot);
    }
    else if ((hour==13)&&(minutes>=30)||(hour==14)&&(minutes<30)){
        slot = prefix+"6";
        console.log("your next block is 14:30 " + slot);
    }
    else if ((hour==14)&&(minutes>=30)||(hour==15)&&(minutes<30)){
        slot = prefix+"7";
        console.log("your next block is 15:30 " + slot);
    }
    else if ((hour==15)&&(minutes>=30)||(hour==16)&&(minutes<30)){
        slot = prefix+"8";
        console.log("your next block is 16:30 " + slot);
    }
    else if ((hour==16)&&(minutes>=30)||(hour>17)&&(hour<0)){
        console.log("Reward yourself with a good dinner after a hard day!");
    }
    else if (hour>=7 && hour<8){
        console.log("Good morning! Get ready for a new day!");
    }

    // and so on
    else if ( hour>=0 && hour<7 )
        console.log("You should be sleeping!");

}
findNextSlot();

function displayNextSlot(){
    db.collection("courses")
        .where("slot", "==", slot)
        .get()
        .then(function (snap){
            // console.log(doc.data().name);
            snap.forEach(function (doc) {
                document.getElementById('upcoming-goes-here').innerHTML =
                    doc.data().name +
                    "\r" +
                    doc.data().type +
                    "\r" +
                    "(Location: "+doc.data().location+")";
            })
        })
    }


displayNextSlot();

function findCurrentSlot(){

    //get current date and time
    var date = new Date();

    //get day of the week
    var dayOfWeek = date.getDay();   //returns 0-6, 0 is sunday
	  var prefix;
    switch (dayOfWeek) {
        case 1:
            prefix = "m";
            break;
        case 2:
            prefix = "t";
            break;
        case 3:
            prefix = "w";
            break;
        case 4:
            prefix = "th";
            break;
        case 5:
            prefix = "f";
            break;
        default:
            prefix = "t"; //0&6 weekend should be x, using t when texting
            break;
    }

    //get hour and minutes
    var hour = date.getHours();  //returns 0-23
    var minutes = date.getMinutes();   //returns 0-59

    //calculate the slot that will come next in my schedule
    if ((hour==8) && (minutes<30)) {
        console.log("Get ready for the first class.");
    }
    else if ((hour==8) && (minutes>=30)||(hour==9) && (minutes<30)){
        slotC = prefix+"0";
        console.log("your current block is 8:30 " + slotC);
    }
    else if ((hour==9)&&(minutes>=30)||(hour==10)&&(minutes<30)){
        slotC = prefix+"1";
        console.log("your current block is 9:30 " + slotC);
    }
    else if ((hour==10)&&(minutes>=30)||(hour==11)&&(minutes<30)){
        slotC = prefix+"2";
        console.log("your current block is 10:30 " + slotC);
    }
    else if ((hour==11)&&(minutes>=30)||(hour==12)&&(minutes<30)){
        slotC = prefix+"3";
        console.log("your current block is 11:30 " + slotC);
    }
    else if ((hour==12)&&(minutes>=30)||(hour==13)&&(minutes<30)){
        slotC = prefix+"4";
        console.log("your current block is 12:30 " + slotC);
    }
    else if ((hour==13)&&(minutes>=30)||(hour==14)&&(minutes<30)){
        slotC = prefix+"5";
        console.log("your current block is 13:30 " + slotC);
    }
    else if ((hour==14)&&(minutes>=30)||(hour==15)&&(minutes<30)){
        slotC = prefix+"6";
        console.log("your current block is 14:30 " + slotC);
    }
    else if ((hour==15)&&(minutes>=30)||(hour==16)&&(minutes<30)){
        slotC = prefix+"7";
        console.log("your current block is 15:30 " + slotC);
    }
    else if ((hour==16)&&(minutes>=30)||(hour==17)&&(minutes<30)){
        slotC = prefix+"8";
        console.log("your current block is 16:30 " + slotC);
    }
    else if ((hour==17)&&(minutes>=30)||(hour>17)&&(hour<0)){
        console.log("after school, no current class now")
    }
    else if (hour>=7 && hour<8){
        console.log("should be at home")
    }

    // and so on
    else if ( hour>=0 && hour<7 )
        console.log("You should be sleeping!");

}
findCurrentSlot();


function displayCurrentSlot(){
    db.collection("courses")
        .where("slot", "==", slotC)
        .get()
        .then(function (snap){
            // console.log(doc.data().name);
            snap.forEach(function (doc) {
                document.getElementById('current-goes-here').innerHTML =
                    doc.data().name +
                    "\r" +
                    doc.data().type +
                    "\r" +
                    "(Location: "+doc.data().location+")";
            })
        })
}

displayCurrentSlot();



// function displayNextSlot() {
//     $("#upcoming-goes-here").append(slot);

//   }
//   displayNextSlot();

