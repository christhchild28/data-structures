var request = require("request"); // npm install request
var async = require("async"); // npm install async
var fs = require("fs");

//assign global variable to hold private apiKEY every session
var apiKey = process.env.TAMU_KEY;
console.log('This is the API Key', apiKey);

// the geocoded addresses will be stored in this array
var meetingsData = [];


const rawData = fs.readFileSync("parsed_addresses_array.JSON");
const addresses = JSON.parse(rawData);
console.log('This is the addresses',addresses);


// eachSeries in the async module iterates over an array and operates on each item in the array in series
async.eachSeries(addresses, function(value, callback) {
    var apiRequest = 
        "https://geoservices.tamu.edu/Services/Geocode/WebService/GeocoderWebServiceHttpNonParsed_V04_01.aspx?";
    
    apiRequest += 'streetAddress=' + value.split(" ").join('%20');
    apiRequest += '&city=New%20York&state=NY&apikey=' + apiKey; //the environment variable automatically changes this to the api 
    apiRequest += '&format=json&version=4.01';
    
    request(apiRequest, function(err, resp, body) {
        if (err) {
            throw err;
        }
          else {
            var tamuGeo = JSON.parse(body);
            console.log(tamuGeo["FeatureMatchingResultType"]);
            
            meetingsData.push({
                streetAddress: tamuGeo["InputAddress"]["StreetAddress"],
                latlong: {
                    latitude: tamuGeo.OutputGeocodes[0]["OutputGeocode"]["Latitude"],
                    longitude: tamuGeo.OutputGeocodes[0]["OutputGeocode"]["Longitude"] 
                }
            }); 
        }
    });
    setTimeout(callback, 2000);
}, 
function() {
    fs.writeFileSync('zone05.json', JSON.stringify(meetingsData)); 
    console.log('*** *** *** *** ***');
    console.log('Number of meetings in this zone: ');
    console.log(meetingsData.length);
});

