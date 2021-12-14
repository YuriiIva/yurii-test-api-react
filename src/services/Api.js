const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "24479204-21740ca2d7de34b5e441c6983";

const fetchImg = async (imeges, page = 1) => {
  const res = await fetch(
    `${BASE_URL}?key=${API_KEY}&q=${imeges}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
    // `${BASE_URL}?key=${API_KEY}&q=cat&page=1&image_type=photo&orientation=horizontal&per_page=12`
  );

  return res.ok ? res.json() : Promise.reject(new Error(res.statusText));
};

export { fetchImg };
