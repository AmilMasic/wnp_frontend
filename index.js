const fetchingParks = "http://localhost:3000/api/v1/national_parks"

document.addEventListener('DOMContentLoaded', () => {
  getParks();
  const createParkForm = document.querySelector("#create-park-form")

  createParkForm.addEventListener("submit", (e) => createFormHandler(e))
})

function getParks(){
  fetch(fetchingParks)
  .then(response => response.json())
  .then(parks => {
    parks.data.forEach((park) => {
      const parkMarkup = `
      <div data-id=${park.id}>
      <img src=${park.attributes.image_url} height="300" width="450"
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
  postFetch(parkNameInput, inputEstablished, inputDescription, inputImage, inputCity, countryId)
}

function postFetch(name, established, description, image_url, nearest_city, country_id) {
  console.log(name, established, description, image_url, nearest_city, country_id);
}
