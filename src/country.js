class Country {
  constructor(country, countryAttributes) {
    this.id = country.id
    this.name = countryAttributes.name
    this.language = countryAttributes.language
    this.continent = countryAttributes.continent
    Country.all.push(this)
  }
}

Country.all = [];
