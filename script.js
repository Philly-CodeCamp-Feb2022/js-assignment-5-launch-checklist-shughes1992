// Write your JavaScript code here!

window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        response.json().then( function(json) {
            const div = document.getElementById("missionTarget");
            const randomDestination = Math.floor(Math.random()*5)

            div.innerHTML = `
            <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${json[randomDestination].name}</li>
                     <li>Diameter: ${json[randomDestination].diameter} </li>
                     <li>Star: ${json[randomDestination].star}</li>
                     <li>Distance from Earth: ${json[randomDestination].distance} </li>
                     <li>Number of Moons: ${json[randomDestination].moons} </li>
                 </ol>
                 <img src="${json[randomDestination].image}">`
            console.log(response);
        });    

    });

    
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
    
        let pilotName = document.querySelector("input[name=pilotName]").value;
        let copilotName = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoLevel = document.querySelector("input[name=cargoMass]").value;

        const allFields_required = "All fields required!";
        const pilot_required = "Please enter a valid Pilot name";
        const coPilot_required = "Please enter a valid Co-Pilot name";
        const fuelLevel_required = "Enter valid fuel level number";
        const cargoMass_required = "Enter cargo mass number";

        let pilotStatus = document.getElementById("pilotStatus");
        let copilotStatus = document.getElementById("copilotStatus");
        let fuelStatus = document.getElementById("fuelStatus");
        let cargoStatus = document.getElementById("cargoStatus");


        if (pilotName === "" || copilotName === "" || fuelLevel === "" || cargoLevel === "") {
            alert(allFields_required);


        } else if (isNaN(pilotName) === false) {
            alert(pilot_required)


        } else if (isNaN(copilotName) === false) {
            alert(coPilot_required)


        } else if (isNaN(fuelLevel) === true) {
            alert(fuelLevel_required);


        } else if (isNaN(cargoLevel) === true) {
            alert(cargoMass_required);

        }

// case 1 : fuel level = too low / cargo level too high
//case 2 : fuel level high enough / cargo level to high
//case 3 : fuel level too low / cargo level low enough 
//case 4 :  both are good

//case 5 : new bug - when too much mass gets lowered to ideal #, 
//#4 doesnt innerhtml change 

   // VALID FORM DATA = 
    // Update Shuttle Requirements

        else if (fuelLevel <= 10000 && cargoLevel >= 10000 ) {
            faultyItems.style.visibility = 'visible';
            pilotStatus.innerHTML = `${pilotName} is ready for take off`;
            copilotStatus.innerHTML = `${copilotName} is ready for take off`
            fuelStatus.innerHTML = `Fuel level is too low for take off`;
            cargoStatus.innerHTML = `Too much mass for take off`;
            launchStatus.innerHTML = `Shuttle not Ready for Launch`;
            launchStatus.style.color = "red";


        } else if (fuelLevel >= 10000 && cargoLevel >= 10000) {
            faultyItems.style.visibility = 'visible';
            pilotStatus.innerHTML = `${pilotName} is ready for take off`;
            copilotStatus.innerHTML = `${copilotName} is ready for take off`
            cargoStatus.innerHTML = `Too much mass for take off`;
            launchStatus.innerHTML = `Shuttle not Ready for Launch`;
            launchStatus.style.color = "red";


        } else if (fuelLevel <= 10000 && cargoLevel <= 10000) {
            faultyItems.style.visibility = 'visible';
            pilotStatus.innerHTML = `${pilotName} is ready for take off`;
            copilotStatus.innerHTML = `${copilotName} is ready for take off`
            fuelStatus.innerHTML = `Not enough fuel`;
            launchStatus.innerHTML = `Shuttle not Ready for Launch`;
            launchStatus.style.color = "red";

        }
        else if (fuelLevel >= 10000 && cargoLevel <= 10000) {

            faultyItems.style.visibility = 'visible';
            pilotStatus.innerHTML = `${pilotName} is ready for take off`;
            copilotStatus.innerHTML = `${copilotName} is ready for take off`
            launchStatus.style.color = "green";
            fuelStatus.innerHTML = `Fuel level high enough for launch`;
            cargoStatus.innerHTML = `Cargo mass low enough for launch`;
            launchStatus.innerHTML = `All ready to BLAST OFF!`;


        }
        event.preventDefault();
    });

});