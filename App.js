import React, { useState } from "react";
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import Card from './src/Components/Card';


  const animais = [
    {
      id: 1,
      capa: 'https://adotar.com.br/painel/upload/2022-07/animais_imagem871832.jpg', 
      nome: 'Totó', 
      raca: 'Viralata',
    },
    {
      id: 2,
      capa: 'https://f.i.uol.com.br/fotografia/2013/05/28/281341-600x600-1.jpeg', 
      nome: 'Bob', 
      raca: 'Viralata',
    },
    {
      id: 3,
      capa: 'https://www.petz.com.br/blog/wp-content/uploads/2021/03/gato-desaparecido-3-1.jpg', 
      nome: 'Biscoito', 
      raca: 'Viralata',
    },
    {
      id: 4,
      capa: 'https://img.freepik.com/fotos-premium/pobre-gato-em-um-abrigo-privado-da-cidade-de-odessa-gatos-perdidos-e-abandonados-devido-a-guerra-na-ucrania_713948-439.jpg?w=2000', 
      nome: 'Mel', 
      raca: 'Viralata',
    },
    {
      id: 5,
      capa: 'https://i0.statig.com.br/bancodeimagens/c8/j5/6q/c8j56qaz2yrps8wgrm7bzyyfp.jpg', 
      nome: 'Lili', 
      raca: 'Viralata',
    },
  ]

const ListaAnimais = () => {
  const [animaisList, setAnimaisList] = useState(animais);

  const handleRemove = (index) => {
    const newAnimaisList = [...animaisList];
    newAnimaisList.splice(index, 1);
    setAnimaisList(newAnimaisList);
  };
return (
    <ScrollView style={styles.scroll}>
      {animaisList.map((animal, index) => (
        <Card key={index} animal={animal} onRemove={() => handleRemove(index)} />
      ))}
    </ScrollView>
  );
};

export default function App() {
    return (
    <ScrollView style={styles.ScrollView}>
      <View style={styles.container}>
        <Text style={styles.titulo}> Amigos de Joinville</Text>
        <Text style={styles.titulo2}> Animais Disponíveis:</Text>
        <View style={styles.conteudo}>
          
          <ListaAnimais/>
        </View>
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
    backgroundColor: '#FA497A',
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
  card: {
    backgroundColor: '#f5dfea',
    width: '42%',
    height: 260,
    borderRadius: 30,
    margin: 15,
    textAlign: 'center',
    marginBottom: 40,
  },
  ScrollView: {
    marginHorizontal: 0,
  },
  animal: {
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
