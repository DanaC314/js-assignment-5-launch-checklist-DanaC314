// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    document.getElementById("missionTarget").innerHTML =output;
  missiontarget.innerHTML = `
        <h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name}</li>
            <li>Diameter: ${diameter}</li>
            <li>Star: ${star}</li>
            <li>Distance from Earth:${distance}</li>
            <li>Number of Moons:${moons}</li>
        </ol>
        <img src="${imageUrl}">;
        `
}

function validateInput(testInput) {
    if (testInput === " ") {
    return "Empty";
    } else if (!isNaN(testInput)) {
    return "Is a Number";
    } else if (isNaN(testInput)) {
    return "Not a number"
    }
 }
 

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus= document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let h2 = document.getElementById("launchStatus");
}

pilotStatus.innerHTML = `Pilot ${pilot} Shuttle Is Ready For Launch`;
copilotStatus.innerHTML = `copilot ${copilot} Shuttle Is Ready For Launch`;

if (fuelLevel <= 10000){
    fuelStatus.innerHTML = "There is not enough fuel for the journey";
    faultyItems.style.visibility = "visible";
    launchStatus.innerHTML = "Shuttle not ready for launch";
    launchStatus.style.color = "red";

} else if (cargoMass >= 10000){
    cargoStatus.innerHTML = "There is too much mass for the shuttle to take off";
    faultyItems.style.visibility = "visible";
    launchStatus.innerHTML = "Shuttle not ready for launch";
    launchStatus.style.color = "rbg(199, 37, 78)";

} else if (cargoMass <=10000 && fuelLevel >=10000){
    faultyItems.style.visibility = "visible";
    fuelStatus.innerHTML = "There is enough fuel for the journey";
    cargoStatus.innerHTML = "Cargo light enough for takeoff";
    launchStatus.innerHTML = "Shuttle is ready for launch";
    launchStatus.style.color = "green #419F6A";
}




async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
      return response.json();

      });

    return planetsReturned;
}

function pickPlanet(planets) {
    let index =Math.floor(Math.random()*planets.length);
    return planets[index];

}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch =myFetch;
