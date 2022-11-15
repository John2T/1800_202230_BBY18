var datetime = new Date();
console.log(datetime);
document.getElementById("time").textContent = datetime; //it will print on html page
 
function refreshTime() {
  const timeDisplay = document.getElementById("time");
  const dateString = new Date().toLocaleString();
  const formattedString = dateString.replace(", ", " - ");
  timeDisplay.textContent = formattedString;
}
  setInterval(refreshTime, 1000);
