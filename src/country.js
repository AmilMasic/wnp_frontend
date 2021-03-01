class Country {
  constructor(country, countryAttributes) {
    this.id = country.id
    this.name = countryAttributes.name
    this.language = countryAttributes.language
    this.continent = countryAttributes.continent
    Country.all.push(this)
  }

  createNewCountryOption() {
    let select = document.getElementById("list");
    let newOption = document.createElement("option");
    // debugger;
    newOption.id = parseInt(this.id);
    newOption.text = this.name;
    return select.add(newOption);
  }
}

Country.all = [];
