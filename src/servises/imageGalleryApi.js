import axios from "axios";

const fetchImagesFromQuery = (searchQuery, page = 1) => {
  const key = "14154163-50f1b5a2e44fb9aa2c654ef49";
  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then(response => response.data.hits);
};

export default { fetchImagesFromQuery };
