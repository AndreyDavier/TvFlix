'use strick';

const api_key = 'f36c3c633db17e3a7162770fb469ab26';
const imageBaseURL = 'http://image.tmdb.org/t/p/';

const fetchDataFromServer = function (url, callback, optionalParam) {
    fetch(url)
        .then((res) => { res.json() })
        .then(data => callback(data, optionalParam));
}


export { imageBaseURL, api_key , fetchDataFromServer}