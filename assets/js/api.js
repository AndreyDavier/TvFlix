'use strick';

const api_key = 'abad88a2d4fc35bc3f7a8a6b35c0bb5b';
const imageBaseURL = 'https://image.tmdb.org/t/p/';


const fetchDataFromServer = function (url, callback, optionalParam) {
    fetch(url)
        .then((response) => response.json())
        .then(data => callback(data, optionalParam))
}


export { imageBaseURL, api_key, fetchDataFromServer }