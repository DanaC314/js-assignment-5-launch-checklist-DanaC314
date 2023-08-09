// Write your JavaScript code here!

require("./scriptHelper.js");

window.addEventListener("load", function() {
    
    const document = window.document
    const pilotName =document.querySelector("input[name=pilotName]");
    const copilotName =document.querySelector("input[name=copilotName]");
    const fuelLevel =document.querySelector("input[name=fuelLevel]");
    const cargoLevel =document.querySelector("input[name=cargoMass]");
    const list =document.getElementById("faultyItems");

    list.style.visibility = "hidden";

    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
    
        formSubmission(document, list, pilot.value, copilot.value, fuelLevel.value, cargoLevel.value);

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function() {
      console.log(listedPlanets);
  
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
      let planet =pickedPlanet(listedPlanets);
      let name =planet.name; 
      let diameter =planet.diameter;
      let star =planet.star;
      let distance =planet.distance;
      let imageUrl =planet.image;
      let moons =planet.moons;
      addDestinationInfo(window.document, pickedPlanet.name, pickedPlanet.diameter, pickedPlanet.star, pickedPlanet.distance, pinkedPlanet.moons, picketPlanet.imageUrl);
   })