import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { useEffect } from 'react/cjs/react.development';
import getRealm from '../../schemas/index'
import handleGet from '../../services/Programas'      
import postApi from '../../services/HttpService'
const Main = () => {
  const [path, setPath] = useState('/');
  const [programas, setProgramas] = useState([]);
  const [value, setValue] = useState('')
  useEffect(() => {
    setPath('/programas')
  }, [])

  useEffect(() => {
    async function loadProgramas(){
      const realm = await getRealm();
      const data = realm.objects('Programas')
      setProgramas(data)
    }   
    loadProgramas() 
  },[])
  

  const deleteItens = async() =>{
    const realm = await getRealm();
    realm.write(() => {
      realm.delete(realm.objects('Programas'));
    });
  }

  const handleCOmentario = async() =>{
    postApi()
    console.log("comentarios")
  }
  
  return( 
    <View style={{flex:1, marginTop:30}}>
      
      <Button onPress={() => handleGet(path)} title={'Programas'}></Button>
      <View>
        <Text>Digite a alteração aqui</Text>
        <TextInput
          style={{borderBottomColor:'black'}}
          multiline
          onChangeText={text => setValue(text )}
          value={value}>
        </TextInput>
        <Button onPress={() => postApi({comentarios: value, path: '/comentariosDiario'})} title={'EnviarComentario'}></Button>

      </View>
      
    </View>);
}

export default Main;