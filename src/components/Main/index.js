import React, { useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { useEffect } from 'react/cjs/react.development';
import getRealm from '../../schemas/index'
import handleGet from '../../services/Programas'      

const Main = () => {
  const [path, setPath] = useState('/');
  const [programas, setProgramas] = useState([]);
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
  const renderItem = ({ item }) =>{
    return (
      <View>
        <Text>AQ</Text>
        <Text>
          {item.nome}
        </Text>
      </View>
    );
  }

  const deleteItens = async() =>{
    const realm = await getRealm();
    realm.write(() => {
      realm.delete(realm.objects('Programas'));
    });
  }
  return( 
    <View style={{flex:1, marginTop:30}}>
      
      <Button onPress={() => handleGet(path)} title={'Programas'}></Button>
      <Button onPress={() => deleteItens()} title={"delete"}></Button>
      <FlatList
        data={programas}
        renderItem={renderItem}
        keyExtractor={item => String(item.id)}
      />
    </View>);
}

export default Main;