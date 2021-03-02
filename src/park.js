class Park {
  constructor(park, parkAttributes){
    this.id = park.id

    this.name = parkAttributes.name
    this.established = parkAttributes.established
    this.description = parkAttributes.description
    this.nearest_city = parkAttributes.nearest_city
    this.image_url = parkAttributes.image_url
    this.country = parkAttributes.country
    Park.all.push(this)
  }

    renderPark() {

    return `
    <div class="column is-one-third ">
      <div data-id=${this.id}>
      <div class="image card">
        <figure class="image is-4by3">
          <img src=${this.image_url} >
        </figure>
      </div>
      <br>
      <h3 class="park-name"> Park Name: ${this.name}</h3>
      <p class="established">Established in: ${this.established}</p>
      <p class="nearest-city">The Nearest City: ${this.nearest_city}</p>
      <p class="country-name">Country: ${this.country.name}</p>
      <p class="continent">Continent: ${this.country.continent}</p>
      <p class="language">Oficial Langauge: ${this.country.language}</p>
      <p class="description">Short Description: ${this.description}</p>
      </div>
    </div>
    <br>`;
  }
}

Park.all = [];
