
import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';

import Icon from 'react-native-vector-icons/Feather'

import foto from './assets/eu.jpg';

const App = () => {
  return (
    <>
    <View style={style.page}>
        <View style={style.container_cabecalho}>
          <Image source={foto} style={style.foto}/>
          <Text style={style.nome}>Vitor Hugo Blefari</Text>
          <Text style={style.funcao}>Cursando ADV</Text>
          <View>
            <Icon.Button name="github" size={30} >Github</Icon.Button>
            <Icon name="facebook" size={30} />
            <Icon name="linkedin" size={30} />
          </View>
        </View>
    </View>
  </>  
  );
};

const style = StyleSheet.create({  
  page: {
    backgroundColor: '#808080',
    flex: 1 
  },
  container_cabecalho: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  foto: {
    width: 230 ,
    height: 230,
    borderRadius: 150,

  },
  nome: {
    fontSize: 28,
    fontWeight: 'bold', 
    marginTop: 10,
  },
  funcao: {
    color: '#ffffff',
    marginBottom: 5,
  },  


});


export default App;
