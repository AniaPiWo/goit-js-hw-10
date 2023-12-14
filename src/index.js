import { fetchBreeds, fetchCatByBreed } from './api';

const select = document.querySelector('select');
const catCard = document.querySelector('.cat-card');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');

select.addEventListener('change', createCatCard);
updateSelect();

loader.classList.add('hidden');

function updateSelect(data) {
  fetchBreeds(data)
    .then(data => {
      let markSelect = data.map(({ name, id }) => {
        return `<option value ='${id}'>${name}</option>`;
      });
      select.insertAdjacentHTML('beforeend', markSelect);
    })
    .catch(error => {
      loader.classList.add('hidden');
      error.classList.remove('hidden');
      console.error('Error fetching breeds:', error);
    });
}

function createCatCard(event) {
  const breedId = event.currentTarget.value;

  loader.classList.remove('hidden');

  fetchCatByBreed(breedId)
    .then(data => {
      const { url, breeds } = data[0];
      loader.classList.add('hidden');
      //console.log(breeds);
      catCard.innerHTML = `<div class="catCard">
      <img src="${url}" alt="${breeds[0].name}" width="400" />
      <div class="descr">
        <h2 class="characteristic">${breeds[0].name}</h2>
        <h3>${breeds[0].description}</h3>
        <div class="char_box">
          <p><span class="characteristic">Origin:</span> ${breeds[0].origin}</p>
          <p><span class="characteristic">Life span:</span> ${breeds[0].life_span}</p>
          <p><span class="characteristic">Weight:</span> ${breeds[0].weight}</p>
          <p><span class="characteristic">Temperament:</span> ${breeds[0].temperament}</p>
          </div>
        </div>
    </div>`;
    })
    .catch(error => {
      loader.classList.add('hidden');
      error.classList.remove('hidden');
      console.error('Error fetching cat by breed:', error);
    });
}
