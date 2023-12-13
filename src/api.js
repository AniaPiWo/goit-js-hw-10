const URL = 'https://api.thecatapi.com/v1';
const API_KEY =
  'live_P0dQ7oUYgA6D9xiTVrZ5kawCo8KiAc3cNxiSDEmamQIcEapg6ZwUPPwPra7YzvoS';

export async function fetchBreeds() {
  try {
    const response = await fetch(`${URL}/breeds?api_key=${API_KEY}`);
    if (!response.ok) {
      throw new Error(response.status);
    }
    return await response.json();
  } catch (error) {
    throw new Error(`Error fetching breeds: ${error.message}`);
  }
}

export async function fetchCatByBreed(breedId) {
  try {
    const response = await fetch(
      `${URL}/images/search?api_key=${API_KEY}&breed_ids=${breedId}`
    );
    if (!response.ok) {
      throw new Error(response.status);
    }
    return await response.json();
  } catch (error) {
    throw new Error(`Error fetching cat by breed: ${error.message}`);
  }
}
