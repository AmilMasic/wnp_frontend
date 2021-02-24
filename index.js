const fetchingParks = "http://localhost:3000/api/v1/national_parks"
  
document.addEventListener('DOMContentLoaded', () => {
  getParks();

})

function getParks(){
  fetch(fetchingParks)
  .then(response => response.json())
  .then(parks => {
    parks.data.forEach((park) => {
      const parkMarkup = `
      <div data-id=${park.id}>
      <img src=${park.attributes.image_url} height="200" width="250"
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
