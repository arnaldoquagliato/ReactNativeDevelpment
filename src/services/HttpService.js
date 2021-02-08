import api from './index'
const getApi = async (props) => {
  try {
    const response = await api.get(`${props}`);
    return response.data._embedded.content
  } catch (error) {  
    console.log(error)
  }
};

const postApi = async (props) => {
  console.log(props)
  try {
    await api.post(`${props.path}`, {
      descricao: props.comentarios
    });
  } catch (error) {  
    console.log(error)
  }
};

export default postApi;