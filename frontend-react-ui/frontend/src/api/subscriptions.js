import api from './axios';

// Get available subscription boxes
export const fetchBoxes = () => {
  return api.get('/subscriptions/boxes/');
};

// Create a new subscription
export const createSubscription = (data) => {
  return api.post('/subscriptions/', data);
};
