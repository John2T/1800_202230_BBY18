//All of the code here are moved to home copy.js


// var datetime = new Date();
// console.log(datetime);
// document.getElementById("time").textContent = datetime; //it will print on html page

// function refreshTime() {
//   const timeDisplay = document.getElementById("time");
//   const dateString = new Date().toLocaleString();
//   const formattedString = dateString.replace(", ", " - ");
//   timeDisplay.textContent = formattedString;
// }
// setInterval(refreshTime, 1000);

// //----------------------------------------------------
// // write a whole bunch of messages to the fun collection
// //----------------------------------------------------
// function writefunMessages() {
//   var messagesRef = db.collection("fun");
//   messagesRef.add({
//     number: Math.floor(Math.random() * 100),
//     quote: "“All truly great thoughts are conceived by walking.” ~ Friedrich Nietzsche",

//   });
//   messagesRef.add({
//     number: Math.floor(Math.random() * 100),
//     quote: "“Don’t let yesterday take up too much of today.” ~ Will Rogers",

//   });
//   messagesRef.add({
//     number: Math.floor(Math.random() * 100),
//     quote: "“It always seems impossible until it’s done.” ~ Nelson Mandela",

//   });
//   messagesRef.add({
//     number: Math.floor(Math.random() * 100),
//     quote: "“Positive anything is better than negative nothing.” ~ Elbert Hubbard",

//   });
//   messagesRef.add({
//     number: Math.floor(Math.random() * 100),
//     quote: "“If you look at what you have in life, you’ll always have more.” ~ Oprah Winfrey",

//   });
//   messagesRef.add({
//     number: Math.floor(Math.random() * 100),
//     quote: "“Every moment is a fresh beginning.” ~ T.S Eliot",

//   });
//   messagesRef.add({
//     number: Math.floor(Math.random() * 100),
//     quote: "“Believe you can and you’re halfway there.” ~ Theodore Roosevelt",

//   });
//   messagesRef.add({
//     number: Math.floor(Math.random() * 100),
//     quote: "“The bad news is time flies. The good news is you’re the pilot.” ~ Michael Altshuler",

//   });
//   messagesRef.add({
//     number: Math.floor(Math.random() * 100),
//     quote: "“A person who never made a mistake never tried anything new.” ~ Albert Einstein",

//   });
//   messagesRef.add({
//     number: Math.floor(Math.random() * 100),
//     quote: "“The roots of education are bitter, but the fruit is sweet.” ~ Aristotle",

//   });
// }
// //writemessages();

// function displayRandomquote() {
//   db.collection("fun")
//       .where ("number", ">", Math.floor(Math.random() * 100))
//       .limit(1)
//       .get()
//       .then(function (snap) {
//           snap.forEach(function (doc) {
//               var n = doc.data().quote;
//               console.log(n);
//               var quotestring = "<p> " + n + "</p>";
//               $("#quote-go-here").append(quotestring);
//           })
//       })
// }
// displayRandomquote();