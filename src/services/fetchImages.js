import axios from 'axios';
axios.defaults.baseURL = ' https://pixabay.com/api';

export const fetchImages = async (query, page, setStatus) => {
  try {
    const response = await axios.get(
      `?q=${query}&page=${page}&key=29500844-6244608a48f9a94de2bd748ef&image_type=photo&orientation=horizontal&per_page=12`
    );
    if (response.data.hits.length < 1) setStatus('rejected');
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};
