/**
 * This function displays the current user's name on the top of the homepage.
 */
var currentUser;
function displayUserName() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      currentUser = db.collection("users").doc(user.uid);
      currentUser.get().then((userDoc) => {
        var userName = userDoc.data().name;
        if (userName != null) {
          document.getElementById("username").innerHTML = userName;
        }
      });
    }
  });
}

displayUserName();

/**
 * Display current system time on the screen.
 */
var datetime = new Date();
console.log(datetime);
document.getElementById("time").textContent = datetime; //it will print on html page

//Formatted the time.
function refreshTime() {
  const timeDisplay = document.getElementById("time");
  const dateString = new Date().toLocaleString();
  const formattedString = dateString.replace(", ", " - ");
  timeDisplay.textContent = formattedString;
  const dayDisplay = document.getElementById("day");
  var day = datetime.getDay();
  if (day == 0) {
    day = "Sunday";
  } else if (day == 1) {
    day = "Monday";
  } else if (day == 2) {
    day = "Tuesday";
  } else if (day == 3) {
    day = "Wednesday";
  } else if (day == 4) {
    day = "Thrusday";
  } else if (day == 5) {
    day = "Friday";
  } else if (day == 6) {
    day = "Sunday";
  }
  dayDisplay.textContent = day;
}
setInterval(refreshTime, 1000);

/**
 * choose a random message from the fun collection
 */
function displayRandomquote() {
  db.collection("fun")
    .where("number", ">", Math.floor(Math.random() * 100))
    .limit(1)
    .get()
    .then(function (snap) {
      snap.forEach(function (doc) {
        var n = doc.data().quote;
        console.log(n);
        var quotestring = "<p> " + n + "</p>";
        $("#quote-go-here").append(quotestring);
      });
    });
}
displayRandomquote();

/**
 * This function displays the tasks that are due in the next 3 days.
 */
var date = new Date();

function displayUrgentTodo() {
  console.log(date.setDate(date.getDate() + 7));
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      db.collection("users")
        .doc(user.uid)
        .collection("toDo")
        .get()
        .then((onSnapshot) => {
          onSnapshot.forEach((doc) => {
            var date = new Date();
            var courseName = doc.data().course;
            var type = doc.data().type;
            var due = doc.data().due;
            var dueDate = new Date(due);
            var inThreeDays = new Date(
              date.getTime() + 3 * 24 * 60 * 60 * 1000
            );
            console.log("now: " + date.getTime());
            console.log("due: " + dueDate.getTime());
            console.log("3 days from today: " + inThreeDays.getTime());
            //Compares the due date of the assignment to 3 days later date.
            if (dueDate.getTime() < inThreeDays.getTime()) {
              var todo =
                "<p> " + courseName + " " + type + " : due on " + due + "</p>";
              $("#todo-go-here").append(todo);
            }
          });
        });
    }
  });
}

displayUrgentTodo();

/**
 * Find next slot.
 */
function findNextSlot() {
  //get current date and time
  var date = new Date();

  //get day of the week
  var dayOfWeek = date.getDay(); //returns 0-6, 0 is sunday
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
      prefix = "x";
      break;
  }

  //get hour and minutes
  var hour = date.getHours(); //returns 0-23
  var minutes = date.getMinutes(); //returns 0-59
  console.log("current hour is: " + hour);
  console.log("current minutes is: " + minutes);

  //calculate the slot that will come next in my schedule
  if (hour == 8 && minutes < 30) {
    slot = prefix + "0";
    var time = "8:30";
    console.log("your next block is " + time + " " + slot);
    document.getElementById("upcoming-time").innerHTML = time;
  } else if ((hour == 8 && minutes >= 30) || (hour == 9 && minutes < 30)) {
    slot = prefix + "1";
    time = "9:30";
    console.log("your next block is 9:30 " + slot);
    document.getElementById("upcoming-time").innerHTML = time;
  } else if ((hour == 9 && minutes >= 30) || (hour == 10 && minutes < 30)) {
    slot = prefix + "2";
    time = "10:30";
    console.log("your next block is " + time + " " + slot);
    document.getElementById("upcoming-time").innerHTML = time;
  } else if ((hour == 10 && minutes >= 30) || (hour == 11 && minutes < 30)) {
    slot = prefix + "3";
    time = "11:30";
    console.log("your next block is 11:30 " + slot);
    document.getElementById("upcoming-time").innerHTML = time;
  } else if ((hour == 11 && minutes >= 30) || (hour == 12 && minutes < 30)) {
    slot = prefix + "4";
    time = "12:30";
    console.log("your next block is 12:30 " + slot);
    document.getElementById("upcoming-time").innerHTML = time;
  } else if ((hour == 12 && minutes >= 30) || (hour == 13 && minutes < 30)) {
    slot = prefix + "5";
    time = "13:30";
    console.log("your next block is 13:30 " + slot);
    document.getElementById("upcoming-time").innerHTML = time;
  } else if ((hour == 13 && minutes >= 30) || (hour == 14 && minutes < 30)) {
    slot = prefix + "6";
    time = "14:30";
    console.log("your next block is 14:30 " + slot);
    document.getElementById("upcoming-time").innerHTML = time;
  } else if ((hour == 14 && minutes >= 30) || (hour == 15 && minutes < 30)) {
    slot = prefix + "7";
    time = "15:30";
    console.log("your next block is 15:30 " + slot);
    document.getElementById("upcoming-time").innerHTML = time;
  } else if ((hour == 15 && minutes >= 30) || (hour == 16 && minutes < 30)) {
    slot = prefix + "8";
    time = "16:30";
    console.log("your next block is 16:30 " + slot);
    document.getElementById("upcoming-time").innerHTML = time;
  } else if ((hour == 16 && minutes >= 30) || (hour > 17 && hour < 0)) {
    console.log("Reward yourself with a good dinner after a hard day!");
  } else if (hour >= 7 && hour < 8) {
    console.log("Good morning! Get ready for a new day!");
  }

  // and so on
  else if (hour >= 0 && hour < 7) console.log("You should be sleeping!");
}
findNextSlot();

/**
 * display next slot.
 */
function displayNextSlot() {
  db.collection("courses")
    .where("slot", "==", slot)
    .get()
    .then(function (snap) {
      snap.forEach(function (doc) {
        if (doc.data().name != "" && doc.data().name != " ") {
          console.log(doc.data().name);
          document.getElementById("upcoming-goes-here").innerHTML =
            doc.data().name +
            "\r" +
            doc.data().type +
            "\r" +
            "(Location: " +
            doc.data().location +
            ")";
        } else if (doc.data().name == " ") {
          document.getElementById("upcoming-goes-here").innerHTML = "Break!";
        } else {
          document.getElementById("upcoming-goes-here").innerHTML =
            "Reward yourself with a good dinner after a hard day!";
        }
      });
    });
}
displayNextSlot();

/**
 * Find current slot.
 */
function findCurrentSlot() {
  //get current date and time
  var date = new Date();

  //get day of the week
  var dayOfWeek = date.getDay(); //returns 0-6, 0 is sunday
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
      prefix = "x";
      break;
  }

  //get hour and minutes
  var hour = date.getHours(); //returns 0-23
  var minutes = date.getMinutes(); //returns 0-59

  //calculate the current slot
  if (hour == 8 && minutes < 30) {
    console.log("Get ready for the first class.");
  } else if ((hour == 8 && minutes >= 30) || (hour == 9 && minutes < 30)) {
    slotC = prefix + "0";
    console.log("your current block is 8:30 " + slotC);
  } else if ((hour == 9 && minutes >= 30) || (hour == 10 && minutes < 30)) {
    slotC = prefix + "1";
    console.log("your current block is 9:30 " + slotC);
  } else if ((hour == 10 && minutes >= 30) || (hour == 11 && minutes < 30)) {
    slotC = prefix + "2";
    console.log("your current block is 10:30 " + slotC);
  } else if ((hour == 11 && minutes >= 30) || (hour == 12 && minutes < 30)) {
    slotC = prefix + "3";
    console.log("your current block is 11:30 " + slotC);
  } else if ((hour == 12 && minutes >= 30) || (hour == 13 && minutes < 30)) {
    slotC = prefix + "4";
    console.log("your current block is 12:30 " + slotC);
  } else if ((hour == 13 && minutes >= 30) || (hour == 14 && minutes < 30)) {
    slotC = prefix + "5";
    console.log("your current block is 13:30 " + slotC);
  } else if ((hour == 14 && minutes >= 30) || (hour == 15 && minutes < 30)) {
    slotC = prefix + "6";
    console.log("your current block is 14:30 " + slotC);
  } else if ((hour == 15 && minutes >= 30) || (hour == 16 && minutes < 30)) {
    slotC = prefix + "7";
    console.log("your current block is 15:30 " + slotC);
  } else if ((hour == 16 && minutes >= 30) || (hour == 17 && minutes < 30)) {
    slotC = prefix + "8";
    console.log("your current block is 16:30 " + slotC);
  } else if ((hour == 17 && minutes >= 30) || (hour > 17 && hour < 0)) {
    console.log("after school, no current class now");
  } else if (hour >= 7 && hour < 8) {
    console.log("should be at home");
  }

  // and so on
  else if (hour >= 0 && hour < 7) console.log("You should be sleeping!");
}
findCurrentSlot();

/**
 * Display next slot.
 */
function displayCurrentSlot() {
  db.collection("courses")
    .where("slot", "==", slotC)
    .get()
    .then(function (snap) {
      // console.log(doc.data().name);
      snap.forEach(function (doc) {
        if (doc.data().name != "" && doc.data().name != " ") {
          console.log(doc.data().name);
          document.getElementById("current-goes-here").innerHTML =
            doc.data().name +
            "\r" +
            doc.data().type +
            "\r" +
            "(Location: " +
            doc.data().location +
            ")";
        } else if (doc.data().name == " ") {
          document.getElementById("current-goes-here").innerHTML = "Break!";
        } else {
          document.getElementById("current-goes-here").innerHTML = "";
        }
      });
    });
}

displayCurrentSlot();

// This function is one-time thing for adding the data to database, so I commented out.
// writeQuotes();

/**
 * write ten messages to the fun collection, give each message a random number.
 */
function writefunMessages() {
  var messagesRef = db.collection("fun");
  messagesRef.add({
    number: Math.floor(Math.random() * 100),
    quote:
      "“All truly great thoughts are conceived by walking.” ~ Friedrich Nietzsche",
  });
  messagesRef.add({
    number: Math.floor(Math.random() * 100),
    quote: "“Don’t let yesterday take up too much of today.” ~ Will Rogers",
  });
  messagesRef.add({
    number: Math.floor(Math.random() * 100),
    quote: "“It always seems impossible until it’s done.” ~ Nelson Mandela",
  });
  messagesRef.add({
    number: Math.floor(Math.random() * 100),
    quote:
      "“Positive anything is better than negative nothing.” ~ Elbert Hubbard",
  });
  messagesRef.add({
    number: Math.floor(Math.random() * 100),
    quote:
      "“If you look at what you have in life, you’ll always have more.” ~ Oprah Winfrey",
  });
  messagesRef.add({
    number: Math.floor(Math.random() * 100),
    quote: "“Every moment is a fresh beginning.” ~ T.S Eliot",
  });
  messagesRef.add({
    number: Math.floor(Math.random() * 100),
    quote: "“Believe you can and you’re halfway there.” ~ Theodore Roosevelt",
  });
  messagesRef.add({
    number: Math.floor(Math.random() * 100),
    quote:
      "“The bad news is time flies. The good news is you’re the pilot.” ~ Michael Altshuler",
  });
  messagesRef.add({
    number: Math.floor(Math.random() * 100),
    quote:
      "“A person who never made a mistake never tried anything new.” ~ Albert Einstein",
  });
  messagesRef.add({
    number: Math.floor(Math.random() * 100),
    quote:
      "“The roots of education are bitter, but the fruit is sweet.” ~ Aristotle",
  });
}
//writemessages();
