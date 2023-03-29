import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Button, Icon } from '@rneui/themed';
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
        <TouchableOpacity onPress={onRemove}>
        <AntDesign style={styles.delete} name="delete" size={24} color="red" />
        </TouchableOpacity>
        
      </View>  

    );
  }

  const styles = StyleSheet.create({
    card: {
      backgroundColor: '#f5dfea',
      width: '42%',
      height: 260,
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
    
  });

export default Animal;