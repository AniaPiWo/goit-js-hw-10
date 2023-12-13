import { fetchBreeds, fetchCatByBreed } from './api';

const select = document.querySelector('select');
const catCard = document.querySelector('.cat-card');

select.addEventListener('change', createCatCard);
updateSelect();

function updateSelect(data) {
  fetchBreeds(data)
    .then(data => {
      let markSelect = data.map(({ name, id }) => {
        return `<option value ='${id}'>${name}</option>`;
      });
      select.insertAdjacentHTML('beforeend', markSelect);
    })
    .catch(onFetchError);
}

function createCatCard(event) {
  const breedId = event.currentTarget.value;

  fetchCatByBreed(breedId)
    .then(data => {
      const { url, breeds } = data[0];

      catCard.innerHTML = `<div class="catCard">
      <img src="${url}" alt="${breeds[0].name}" width="400" />
      <div class="descr">
        <h2>${breeds[0].name}</h2>
        <p>${breeds[0].description}</p>
        <p><strong>Temperament:</strong> ${breeds[0].temperament}</p>
      </div>
    </div>`;
    })
    .catch(onFetchError);
}

function onFetchError() {
  console.log('Error fetching breeds');
}
