const parkUrl = "http://localhost:3000/api/v1/national_parks"
const createParkForm = document.querySelector("#create-park-form")

    // createParkForm.addEventListener("submit", (e) => createFormHandler(e))
Array.prototype.contains = function(v) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === v) return true;
  }
  return false;
};

Array.prototype.unique = function() {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    if (!arr.contains(this[i])) {
      arr.push(this[i]);
    }
  }
  return arr;
}


function getParks(){
  fetch(parkUrl)
  .then(response => response.json())
  .then(parks => {
    countryArray = [];
    parks.data.forEach((park) => {

      let newPark = new Park(park, park.attributes)
      // debugger;
      document.querySelector('#park-container').innerHTML += newPark.renderPark()

        countryArray.push(park.attributes.country.name);
        // let select = document.getElementById("list");
        // let newOption = document.createElement("option");
        // newOption.text = park.attributes.country.name;
        // select.add(newOption);

    });
    let uniqueCountries = countryArray.unique();
    uniqueCountries.forEach((country) => {
      let select = document.getElementById("list");
      let newOption = document.createElement("option");
      newOption.text = country;
      select.add(newOption);
    })
  })
}

getParks();




function createFormHandler(e) {
  e.preventDefault()
  // debugger;
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
    const parkData = park.data;
    let newPark = new Park(parkData, parkData.attributes)
    let select = document.getElementById("list");
    debugger;
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




// function renderPark(park) {
//
//   const parkMarkup = `
//   <div data-id=${park.id}>
//   <img src=${park.attributes.image_url} height="300" width="450">
//   <br>
//   <h3> Park Name: ${park.attributes.name}</h3>
//   <p country-name>Country: ${park.attributes.country.name}</p>
//   <p>Oficial Langauge: ${park.attributes.country.language}</p>
//   <p>Established in: ${park.attributes.established}</p>
//   <p>Short Description: ${[park.attributes.description]}</p>
//   <p>The Nearest City: ${[park.attributes.nearest_city]}</p>
//   </div>
//   <br>
//   `;
//
//   document.querySelector('#park-container').innerHTML += parkMarkup
// }
