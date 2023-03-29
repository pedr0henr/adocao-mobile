import React, { useState } from "react";
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import Card from './src/Components/Card';


  const musicas = [
    {
      id: 1,
      capa: 'https://i.scdn.co/image/ab67616d0000b2734c8247d17da4bf1110df138f', 
      nome: 'Pagodeiro', 
      estilo: 'Pagofunk',
    },
    {
      id: 2,
      capa: 'https://rapgol.com.br/wp-content/uploads/2022/07/l7.png', 
      nome: 'Ai preto', 
      estilo: 'Funk',
    },
    {
      id: 3,
      capa: 'https://i1.sndcdn.com/artworks-jGa62Jxsp1yjJwyz-98f4tQ-t500x500.jpg', 
      nome: 'Ai calica', 
      estilo: 'Trap',
    },
    {
      id: 4,
      capa: 'https://i.ytimg.com/vi/wFBp_PHXrf4/0.jpg', 
      nome: 'Felina', 
      estilo: 'Trap',
    },
    {
      id: 5,
      capa: 'https://i1.sndcdn.com/artworks-MpsVPya9wX3F6C9Q-t4Hz9A-t500x500.jpg', 
      nome: 'Iphone Branco', 
      estilo: 'Trap',
    },
  ]

const ListaMusicas = () => {
  const [musicasList, setMusicasList] = useState(musicas);

  const handleRemove = (index) => {
    const newMusicasList = [...musicasList];
    newMusicasList.splice(index, 1);
    setMusicasList(newMusicasList);
  };
return (
  
  <ScrollView style={styles.scroll}>
      <View style={styles.conteudo}>
        {musicasList.map((musica, index) => (
          <Card key={index} musica={musica} onRemove={() => handleRemove(index)} />
        ))}
      </View>
    </ScrollView>
  );
};

export default function App() {
    return (
    <ScrollView style={styles.ScrollView}>
      <View style={styles.container}>
        <Text style={styles.titulo}> Musicas </Text>
        <Text style={styles.titulo2}> Musicas Disponíveis:</Text>
          <ListaMusicas/>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 50,
  },
  conteudo: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
  },

  titulo: {
    backgroundColor: 'black', 
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    paddingTop: 10,
    color: 'white',
  },

  titulo2: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    paddingTop: 10,
  },

  ScrollView: {
    marginHorizontal: 0,
  },

  musica: {
    resizeMode: 'stretch',
    width: '87%',
    margin: 10,
    height: 200,
    borderRadius:30,
  },

  textocard: {
    textAlign: 'center',
    fontSize: 12,
  },

  botao: {
    backgroundColor: 'white',
  }, 

});
