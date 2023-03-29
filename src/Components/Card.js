import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

const Animal = ({ animal, onRemove }) => {
    
    return (
      <View style={styles.card}> 
        <Image
          source={{uri: animal.capa}}
          style={styles.animal}
        />
        <Text style={styles.textocard}> {animal.nome}</Text>
        <Text style={styles.textocard}> {animal.raca}</Text>
        <TouchableOpacity style={styles.button} onPress={onRemove}>
          <AntDesign style={styles.delete} name="delete" size={24} color="white" />
        </TouchableOpacity>
      </View>  

    );
  }

  const styles = StyleSheet.create({
    card: {
      backgroundColor: '#f5dfea',
      width: '40%',
      borderRadius: 30,
      margin: 15,
      textAlign: 'center',
      marginBottom: 40,
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

    button: {
      marginTop: 20,
      backgroundColor: '#FA497A',
      borderBottomEndRadius: 43,
      borderBottomStartRadius: 43,
      padding: 5,
      alignItems: 'center'
    },

    delete: {
      alignItems: 'center',
    },
    
    
  });

export default Animal;