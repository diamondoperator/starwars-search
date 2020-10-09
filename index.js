'use strict';

function getStarWarsInfo(name) {

  //https://swapi.co/api/people/?search=${name}
//https://swapi-thinkful.herokuapp.com/api/people/?search=r2
  //https://swapi-thinkful.herokuapp.com/api/people/?search=${name}
  fetch(`https://swapi-thinkful.herokuapp.com/api/people/?search=${name}`)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => console.log(error)) }

function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
  $('.results').empty();

  console.log(responseJson);

    $('.results').append("Results:");

  for(let i = 0; i < responseJson.results.length; i++)
  {
      console.log(responseJson.results[i]);

  $('.results').append(`<ul>

  <li>${responseJson.results[i].name}</li>
  <li>${responseJson.results[i].height}</li>
  <li>${responseJson.results[i].mass}</li>
  <li>${responseJson.results[i].hair_color}</li>
  <li>${responseJson.results[i].sking_color}</li>
  <li>${responseJson.results[i].eye_color}</li>
  <li>${responseJson.results[i].birth_year}</li>
  <li>${responseJson.results[i].gender}</li>
  </ul>
  <br>`);
  }

  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    const name =$("#star-wars-name").val();
    getStarWarsInfo(name);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});