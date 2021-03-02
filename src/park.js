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
    <div class="column is-4  ">
      <div class ="card ">
        <div data-id=${this.id}>
          <div class="card-image">
            <figure class="image is-4by3">
              <img src=${this.image_url} class="modal-button" >
            </figure>
          </div>
          <div class="card-content card-background"
            <div id="content">
              <h3 class="title outlined-small card-background" id="park-name"> Park Name: ${this.name}</h3>
              <br>
              <p class="subtitle card-background" id="established ">Established in: ${this.established}</p>
              <p class="subtitle card-background"id="nearest-city">The Nearest City: ${this.nearest_city}</p>
              <p class=" subtitle card-background"id="country-name">Country: ${this.country.name}</p>
              <p class=" subtitle card-background" id="continent">Continent: ${this.country.continent}</p>
              <p class=" subtitle card-background"id="language">Oficial Langauge: ${this.country.language}</p>
              <p class=" card-background"id="description">Short Description: ${this.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br>`;
  }
}
// <div class="columns features">
        // <div class="column is-4">
          // <div class="card is-shady">
            // <div class="card-image">
              // <figure class="image is-4by3">
              //   <img src="https://source.unsplash.com/RWnpyGtY1aU" alt="Placeholder image" class="modal-button" data-target="modal-image2">
              // </figure>
            // </div>
            // <div class="card-content">
            //   <div class="content">
        //         <h4>Click on image above</h4>
        //         <p>Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec. Integer enim neque volutpat ac tincidunt vitae semper quis. Accumsan tortor posuere ac ut consequat semper viverra nam.</p>
        //         <span class="button is-link modal-button" data-target="modal-image2">Image modal</span>
        //       </div>
        //     </div>
        //   </div>
        // </div>
Park.all = [];
