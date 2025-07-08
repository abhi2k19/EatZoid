import api from './axios'; // this is your configured axios instance

export const fetchProducts = () => {
  return api.get('/products/');
};
