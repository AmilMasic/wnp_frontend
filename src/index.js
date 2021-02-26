const parksUrl = "http://localhost:3000/api/v1/national_parks"
const countriesURL = "http://localhost:3000/api/v1/countries"
const createParkForm = document.querySelector("#create-park-form")


function getCountries() {
  fetch(countriesURL)
  .then(response => response.json())
  .then(countries => {

    countries.data.forEach((country) => {

      let newCountry = new Country(country, country.attributes)
      newCountry.createNewCountryOption();

    })
  })
}


function selectionChange(){
  const selectElement = document.querySelector('#list');

  // selectElement.addEventListener('change', (event) => {
    let countryId = event.currentTarget.selectedIndex;
    let selectedCountry = Country.all.find(o => o.id == countryId);
    // debugger;
    const language = document.querySelector('#language');

    language.value = selectedCountry.language;

  };


function getParks(){
  fetch(parksUrl)
  .then(response => response.json())
  .then(parks => {
    parks.data.forEach((park) => {

      let newPark = new Park(park, park.attributes)
      document.querySelector('#park-container').innerHTML += newPark.renderPark()

        // countryArray.push(park.attributes.country.name);

    });
    // let uniqueCountries = countryArray.unique();
    // uniqueCountries.forEach((country) => {
    //
    // })


  })
}


getCountries();
getParks();






function createFormHandler(e) {
  e.preventDefault()
  const parkNameInput = document.querySelector('#input-park-name').value
  const inputEstablished =  document.querySelector('#input-established').value
  const inputDescription =  document.querySelector('#input-description').value
  const inputImage = document.querySelector('#input-url').value
  const inputCity = document.querySelector('#input-city').value
  const countryId = parseInt(document.querySelector('#countries').value)
  // -------------------------------------------------
  //  **WIP **
  // const userInputCountryName = document.querySelector("#txtbox").value
  // const allParks = Park.all
  // allParks.forEach(park => {
  //    if (park.country.name === userInputCountryName) {
  //     console.log("yes");
  //    } else {
  //     console.log("negative");
  //    }
  // })
  // --------------------------------------------------
  // debugger;
  postPark(parkNameInput, inputEstablished, inputDescription, inputImage, inputCity, countryId)


}

function postPark(name, established, description, image_url, nearest_city, country_id) {
  let bodyData = {name, established, description, image_url, nearest_city, country_id}

  fetch(parkUrl, {
    // POST request
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(bodyData)
  })
  .then(response => response.json())
  .then(park => {
    const parkData = park.data;
    let newPark = new Park(parkData, parkData.attributes)
    let select = document.getElementById("list");
    // debugger;
    document.querySelector('#park-container').innerHTML += newPark.renderPark();
    document.querySelector("#create-park-form").reset();
  })
}


// function runList() {
//
//   let select = document.getElementById("list");
//   let newOption = document.createElement("option");
//
//   newOption.text = document.getElementById("txtbox").value;
//
//   select.add(newOption);
// }

// Array.prototype.contains = function(v) {
//   for (let i = 0; i < this.length; i++) {
//     if (this[i] === v) return true;
//   }
//   return false;
// };
//
// Array.prototype.unique = function() {
//   let arr = [];
//   for (let i = 0; i < this.length; i++) {
//     if (!arr.contains(this[i])) {
//       arr.push(this[i]);
//     }
//   }
//   return arr;
// }
