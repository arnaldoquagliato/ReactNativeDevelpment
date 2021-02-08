import api from './index'
const getApi = async (props) => {
  try {
    const response = await api.get(`${props}`);
    return response.data._embedded.content

  } catch (error) {  
    console.log("erro aq")
    console.log(error)
  }
  
};

export default getApi;