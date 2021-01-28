import { create } from 'apisauce'

const api = create({
  baseURL: 'https://reqres.in/api/users?page=2'
});

export default api;