import { Image, Text, View, StyleSheet, ScrollView } from 'react-native';
// import Constants from 'expo-constants'
function Card(props) {
  return (
    <View style={styles.card}> 
      <Image
        source={{uri: props.animal.capa}}
        style={styles.animal}
      />
      <Text style={{ color: 'darked' }}> {props.animal.nome}</Text>
      <Text style={{ fontSize: 12 }}> {props.animal.raca}</Text>
    </View>
    
  );
}

export default function App() {
  const animais = [
    {
      capa: 'https://adotar.com.br/painel/upload/2022-07/animais_imagem871832.jpg', 
      nome: 'Animal 1', 
      raca: 'Viralata',
    },,
    {
      capa: 'https://f.i.uol.com.br/fotografia/2013/05/28/281341-600x600-1.jpeg', 
      nome: 'Animal 2', 
      raca: 'Viralata',
    },
    {
      capa: 'https://www.petz.com.br/blog/wp-content/uploads/2021/03/gato-desaparecido-3-1.jpg', 
      nome: 'Animal 3', 
      raca: 'Viralata',
    },
    {
      capa: 'https://img.freepik.com/fotos-premium/pobre-gato-em-um-abrigo-privado-da-cidade-de-odessa-gatos-perdidos-e-abandonados-devido-a-guerra-na-ucrania_713948-439.jpg?w=2000', 
      nome: 'Animal 4', 
      raca: 'Viralata',
    },
    {
      capa: 'https://i0.statig.com.br/bancodeimagens/c8/j5/6q/c8j56qaz2yrps8wgrm7bzyyfp.jpg', 
      nome: 'Animal 5', 
      raca: 'Viralata',
    },
    
  ]
  return (
    <ScrollView style={styles.ScrollView}>
      <View style={styles.container}>
        <Text style={{ fontSize: 25, fontWeigth: 'bold' }}> Olá Mundo!!</Text>
      <View style={styles.conteudo}>
       { animais.map(animal => <Card animal={animal} />)}
      </View>
   </View>
   </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    paddingTop: 20,
  },
  conteudo: {
    flex: 1,
    backgroundColor: '#ccc',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
  },
  card: {
    backgroundColor: 'pink',
    width: '40%',
    height: 250,
    borderRadius: 10,
    margin: 15
  },
  ScrollView: {
    marginHorizontal: 20,
  },
  animal: {
    resizeMode: 'stretch',
    width: '100%',
    height: 200,
  } 
});
