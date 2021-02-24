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
}

Park.all = [];
