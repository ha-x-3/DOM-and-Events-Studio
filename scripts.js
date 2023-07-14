// Write your JavaScript code here.
// Remember to pay attention to page loading!
/*
1. Use window load event

2. When the "Take off" button clicked:
  a. Window confirm "Confirm that the shuttle is ready for takeoff.".
      If yes, add parts b-d
  b. Flight status change to "Shuttle in flight."
  c. Background color of shuttle flight screen (id=shuttleBackground) -
      Change from green to blue
  d. Shuttle height should increase by 10,000 miles
3. When "Land" button clicked:
  a. Window alert let user know "The shuttle is landing. Landing gear engaged."
  b. Flight status change to "The shuttle has landed."
  c. Background color of flight screen change blue to green
  d. Shuttle height to 0
4. When "Abort Mission" clicked:
  a. Window confirm "Confirm that you want to abort the mission."
      If yes, add b-d
  b. Flight status change to "Mission aborted."
  c. Background color of flight screen change blue to green
  d. Shuttle height to 0
5. When "...direction" buttons clicked:
  a. Rocket image should move 10px in the direction clicked
  b. If "Up" or "Down" clicked, shuttle height increase/decrease by 10,000 miles
  (*Note use absolute positioning in CSS -
   *Use parseInt to convert current position to a number)
Bonus:
1. Keep rocket from flying off background
2. Return rocket to original position on background when it has been
    landed or mission was aborted.
*/

window.addEventListener("load", function() {
  const up = document.getElementById("up");
  const down = document.getElementById("down");
  const right = document.getElementById("right");
  const left = document.getElementById("left");
  const takeOff = document.getElementById("takeoff");
  const landing = document.getElementById("landing");
  const missionAbort = document.getElementById("missionAbort");
  const message = document.getElementById("flightStatus");
  const background = document.getElementById("shuttleBackground");
  const shuttleHeight = document.getElementById("spaceShuttleHeight");
  const rocket = document.getElementById("rocket");
  rocket.style.position = "absolute";
  //console.log(response);

  takeOff.addEventListener("click", function(){
    let response = window.confirm("Confirm that the shuttle is ready for takeoff.");
    if (response) {
      message.innerHTML = "Shuttle in flight.";
      background.style.backgroundColor = "blue";
      shuttleHeight.innerHTML = 10000;
    }
  })

  landing.addEventListener("click", function() {
    window.alert("The shuttle is landing. Landing gear engaged.");
    message.innerHTML = "The shuttle has landed.";
    background.style.backgroundColor = "green";
    shuttleHeight.innerHTML = 0;
  })

  missionAbort.addEventListener("click", function() {
    let response = window.confirm("Confirm that you want to abort the mission.");
    if (response) {
      message.innerHTML = "Mission Aborted";
      background.style.backgroundColor = "green";
      shuttleHeight.innerHTML = 0;
    }
  })

  up.addEventListener("click", function(){
    //Move rocket 10px
    let position = parseInt(rocket.style.bottom);
    position = position + 10 + "px";
    rocket.style.bottom = position;
  })

  


//
})