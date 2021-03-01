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

document.addEventListener('DOMContentLoaded', () => {
  getParks();
  const createParkForm = document.querySelector("#create-park-form")

  createParkForm.addEventListener("submit", (e) => createFormHandler(e))
})

function selectionChange(){
  const selectElement = document.querySelector('#list');
    let selectedCountryName = event.currentTarget.value;
    let selectedCountry = Country.all.find(o => o.name == selectedCountryName);
    const language = document.querySelector('#language');
    const continent = document.querySelector('#continent');
    const hiddenId = document.getElementById("hidden-country-id");
    language.value = selectedCountry.language;
    continent.value = selectedCountry.continent;
    hiddenId.value = selectedCountry.id;
  };


function getParks(){
  fetch(parksUrl)
  .then(response => response.json())
  .then(parks => {
    parks.data.forEach((park) => {
      let newPark = new Park(park, park.attributes)
      document.querySelector('#park-container').innerHTML += newPark.renderPark()
    });
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
  const countryId = parseInt(document.querySelector('#hidden-country-id').value)

  postPark(parkNameInput, inputEstablished, inputDescription, inputImage, inputCity, countryId)


}

function postPark(name, established, description, image_url, nearest_city, country_id) {
  let bodyData = {name, established, description, image_url, nearest_city, country_id}

  fetch(parksUrl, {
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

    document.querySelector('#park-container').innerHTML += newPark.renderPark();
    document.querySelector("#create-park-form").reset();
  })
}


function postCountry(name, language, continent) {
  let bodyData = {name, language, continent}

  fetch(countriesURL, {
    // POST request
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(bodyData)
  })
  .then(response => response.json())
  .then(country => {
    const countryData = country.data;
    let newCountry = new Country(countryData, countryData.attributes)
    newCountry.createNewCountryOption();

  })
}

function runList() {
  const countryNameInput = document.getElementById("new-country-name").value
  const countryLanguageInput = document.getElementById("new-country-language").value
  const countryContinentInput = document.getElementById("new-country-continent").value

  postCountry(countryNameInput, countryLanguageInput, countryContinentInput);
  document.getElementById("new-country-name").value = ""
  document.getElementById("new-country-language").value = ""
  document.getElementById("new-country-continent").value = ""
}
