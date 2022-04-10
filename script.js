// Write your JavaScript code here!

window.addEventListener("load", function () {
    
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
    
        let pilotName = document.querySelector("input[name=pilotName]").value;
        let copilotName = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoLevel = document.querySelector("input[name=cargoMass]").value;

        console.log(pilotName);
        console.log(copilotName);
        console.log(fuelLevel);
        console.log(cargoLevel);
            
    const allFields_required = "All fields required!";
    const pilot_required = "Please enter a valid Pilot name!";
    const coPilot_required = "Please enter a valid Co-Pilot name";
    const fuelLevel_required = "Please enter fuel level";
    const cargoMass_required = "Please enter cargo mass";

        if (pilotName === "" || copilotName === "" || fuelLevel === "" || cargoLevel === "") {
            alert(allFields_required);
        event.preventDefault(); 

        } else if (isNaN(pilotName) === false) {
            alert(pilot_required)
        event.preventDefault(); 

        } else if (isNaN(copilotName) === false) {
            alert(coPilot_required)
        event.preventDefault();

        };
        
    })
    
});
    


   

//Original script.js code Commented Out :

    // let listedPlanets;
    // // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    // let listedPlanetsResponse;
    // listedPlanetsResponse.then(function (result) {
    //     listedPlanets = result;
    //     console.log(listedPlanets);
    // }).then(function () {
    //     console.log(listedPlanets);
    //     // Below this comment call the
    //     //  appropriate helper functions to pick a planet
    //     //  fom the list of planets and add that information to your destination.
    // })

//console.log(form)

//DOM elements

    //My WEIRD & unnecessary code below

    // function myFunction() {
    //     document.getElementById("formSubmit").onclick() {
    //         console.log("form submit")
    //     }
    //     return myFunction
        
    // }

    // let form = this.document.querySelector("form");

    // let button = form.getElementById("formSubmit");
    // button.addEventListener("click", function () {
    //     console.log("Testing Submit button")
    // });

// if (pilotName === "") {
//     this.window.alert(pilot_required);
// }

// form.addEventListener("submit", function (event) {
//     console.log(form.elements);

// form.elements['copilotName']
// form.elements['fuelLevel']
// form.elements['cargoMass']
// });