// Write your JavaScript code here.
// Remember to pay attention to page loading!
/*

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

  let altitude = 0;
  let rocketPosX = 0;
  let rocketPosY = 0;
 
  const takeOffButton = document.getElementById("takeoff");
  const landingButton = document.getElementById("landing");
  const abortButton = document.getElementById("missionAbort");
  
  const flightStatus = document.getElementById("flightStatus");
  const shuttleBackground = document.getElementById("shuttleBackground");
  const shuttleHeight = document.getElementById("spaceShuttleHeight");
  const rocket = document.getElementById("rocket");


  takeOffButton.addEventListener("click", function(){
    
    let shouldTakeOff = confirm("Confirm that the shuttle is ready for takeoff.");
    if (shouldTakeOff) {
      flightStatus.innerHTML = "Shuttle in flight.";
      shuttleBackground.style.backgroundColor = "blue";
      altitude = 10000;
      shuttleHeight.innerHTML = altitude;
      rocketPosY =+ 10;
      rocket.style.marginBottom = rocketPosY + 'px';
    }

  });

  landingButton.addEventListener("click", function() {
    
    alert("The shuttle is landing. Landing gear engaged.");
    flightStatus.innerHTML = "The shuttle has landed.";
    resetRocket();
  });

  abortButton.addEventListener("click", function() {
    
    let shouldAbort = confirm("Confirm that you want to abort the mission.");
    if (shouldAbort) {
      flightStatus.innerHTML = "Mission aborted.";
      resetRocket();
    }

  });

  //Use event delegation gor direction buttons
  document.addEventListener("click", function(event) {
    
    let bkgWidth = parseInt(window.getComputedStyle(shuttleBackground).getPropertyValue('width'));
  
    if(event.target.id === "left" && rocketPosX > -(bkgWidth / 2 - 40)) {
      rocketPosX -= 10;
      rocket.style.marginLeft = rocketPosX + 'px';
    }
    if(event.target.id === "right" && rocketPosX < (bkgWidth / 2 - 40)) {
      rocketPosX += 10;
      rocket.style.marginLeft = rocketPosX + 'px';
    }
    if(event.target.id === "up" && altitude < 250000) {
      rocketPosY += 10;
      rocket.style.marginBottom = rocketPosY + 'px';
      altitude += 10000;
      shuttleHeight.innerHTML = altitude;
    }
    if(event.target.id === "down" && altitude > 0) {
      rocketPosY -= 10;
      rocket.style.marginBottom = rocketPosY + 'px';
      altitude -= 10000;
      shuttleHeight.innerHTML = altitude;
    }
  });

  function resetRocket() {
    shuttleBackground.style.backgroundColor = "green";
    altitude = 0;
    shuttleHeight.innerHTML = altitude;
    rocketPosX = 0;
    rocketPosY = 0;
    rocket.style.marginLeft = rocketPosX + 'px';
    rocket.style.marginBottom = rocketPosY + 'px';
  }
  
  
});