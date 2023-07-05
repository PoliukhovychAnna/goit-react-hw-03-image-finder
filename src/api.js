import axios from "axios"

// const lala = ' https: //pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12'

// axios.defaults.baseURL = 'https: //pixabay.com/api/';
// axios.defaults.headers.common['x-api-key'] = '36097908-8b74f3252a1456be0d804a847';

const URL = 'https: //pixabay.com/api/';
const API_KEY = '36097908-8b74f3252a1456be0d804a847';



export const getPictures = async (value) => {
    let page = 1;
    let per_page = 12;
    console.log(value);
try {
  const response = await axios.get(
      URL, {
      params: {
          key: API_KEY,
          q: value,
          image_type: 'photo',
          orientation: 'horizontal',
          safesearch: true,
          page: page,
          per_page: per_page,
      },
  });
    console.log(response);
    return response.data
} catch (error) {
  console.error(error);
}
}

