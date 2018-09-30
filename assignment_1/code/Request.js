var request = require('request');
var fs = require('fs');

const URLS = [
'https://parsons.nyc/aa/m01.html',  
'https://parsons.nyc/aa/m02.html',  
'https://parsons.nyc/aa/m03.html',  
'https://parsons.nyc/aa/m04.html',  
'https://parsons.nyc/aa/m05.html',  
'https://parsons.nyc/aa/m06.html',  
'https://parsons.nyc/aa/m07.html',  
'https://parsons.nyc/aa/m08.html',  
'https://parsons.nyc/aa/m09.html',  
'https://parsons.nyc/aa/m10.html'
]

const requestURL = (url, index = 0) => {
    request(url, function(error, response, body){
        if (!error && response.statusCode == 200) {
            console.log('body:', body)
            fs.writeFileSync(`/home/ec2-user/environment/data/thesis-${index + 1}.txt`, body);
        }
        else {console.log("Request failed!")}
    });
}

URLS.forEach((url, index) =>{
    requestURL(url, index)
})
