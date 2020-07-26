const fs = require('fs');
var allCountry = JSON.parse(fs.readFileSync("./restContries.json").toString());  // db.json =>  https://restcountries.eu/rest/v2/all => Countries : {allCountryInfo as Array}
allCountry['Countries'].forEach((data,index) =>{
    data.id = index+1;
});

fs.writeFileSync('./restContries.json', JSON.stringify(allCountry));