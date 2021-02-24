const parkUrl = "http://localhost:3000/api/v1/national_parks"

document.addEventListener('DOMContentLoaded', () => {
  getParks();
  const createParkForm = document.querySelector("#create-park-form")

  createParkForm.addEventListener("submit", (e) => createFormHandler(e))
})

function getParks(){
  fetch(parkUrl)
  .then(response => response.json())
  .then(parks => {
    parks.data.forEach((park) => {
      renderPark(park)
    });

  })
}

function createFormHandler(e) {
  e.preventDefault()
  // debugger;
  const parkNameInput = document.querySelector('#input-park-name').value
  const inputEstablished =  document.querySelector('#input-established').value
  const inputDescription =  document.querySelector('#input-description').value
  const inputImage = document.querySelector('#input-url').value
  const inputCity = document.querySelector('#input-city').value
  const countryId = parseInt(document.querySelector('#countries').value)
  postPark(parkNameInput, inputEstablished, inputDescription, inputImage, inputCity, countryId)
}

function postPark(name, established, description, image_url, nearest_city, country_id) {
  // console.log(name, established, description, image_url, nearest_city, country_id);

  let bodyData = {name, established, description, image_url, nearest_city, country_id}

  fetch(parkUrl, {
    // POST request
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(bodyData)
  })
  .then(response => response.json())
  .then(park => {
    renderPark(park)
  })
}

function renderPark(park) {
  const parkMarkup = `
  <div data-id=${park.id}>
  <img src=${park.attributes.image_url} height="300" width="450">
  <br>
  <h3> Park Name: ${park.attributes.name}</h3>
  <p country-name>Country: ${[park.attributes.country.name]}</p>
  <p>Oficial Langauge: ${[park.attributes.country.language]}</p>
  <p>Established in: ${[park.attributes.established]}</p>
  <p>Short Description: ${[park.attributes.description]}</p>
  <p>The Nearest City: ${[park.attributes.nearest_city]}</p>
  </div>
  <br>
  `;

  document.querySelector('#park-container').innerHTML += parkMarkup
}
