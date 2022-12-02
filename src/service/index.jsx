import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.kanye.rest/',
});

const service = {
  getQuote: async () => {
    try {
      const response = await api.get();
      return response.data;
    } catch (error) {
      return error;
    }
  },
};

export default service;
