'use strict'

const api_key = '5e72120e20cb9a4986fcdd0d0ac3fe9e';
const imageBaseURL = 'https://image.tmdb.org/t/p/';

/** fetch data from  a server using url and
 passing the result in json data to a callback function,
 along with a optional parameter if has 'optionalParams'
*/

const fetchDataFromServer = function (url, callback, optionalParam) {
    fetch(url)
        .then(response => response.json())
        .then(data => callback(data, optionalParam));
};

export { imageBaseURL, api_key, fetchDataFromServer };