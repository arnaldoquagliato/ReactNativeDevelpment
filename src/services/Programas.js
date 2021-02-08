import Programas from '../schemas/Programas'
import getRealm from '../schemas/index'
import getApi from '../services/HttpService'

export default async function handleGet( props ){
  const dataResponse = await getApi(props)
  console.log(dataResponse)
  Promise.all(dataResponse.map( async (item) =>{
    const data = {
        id: item.id,
        abreviatura: item.abreviatura,
        nome: item.nome,
    }
    const realm = await getRealm();
    realm.write(() =>{
      realm.create('Programas', data);
    })
  }))

}