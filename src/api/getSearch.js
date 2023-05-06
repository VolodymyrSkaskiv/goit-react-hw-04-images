const API_KEY = '34417202-b497382c2052195e655fddfd5';
const BASE_URL = 'https://pixabay.com/api/';
const PICS_ON_PAGE = 12;

// Функція для отримання пошуку
export const getSearch = (searchText, page) => {
  // Параметри для запиту
  const params = new URLSearchParams({
    q: searchText,
    page: page,
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: PICS_ON_PAGE,
  });

  return fetch(`${BASE_URL}?${params}`);
};
