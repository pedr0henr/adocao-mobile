import { Image, Text, View, StyleSheet } from 'react-native'
import { Button, Icon } from '@rneui/themed';

export default function Card(props) {
    
    return (
      <View style={styles.card}> 
        <Image
          source={{uri: props.animal.capa}}
          style={styles.animal}
        />
        <Text style={styles.textocard}> {props.animal.nome}</Text>
        <Text style={styles.textocard}> {props.animal.raca}</Text>
        <Button
                icon={
                  <Icon
                    name="cancel"
                    color="#ffffff"
                    iconStyle={{ marginRight: 10 }}
                  />
                }
                buttonStyle={{
                  backgroundColor: '#FA497A',
                  borderRadius: 50,
                }}
                title="Excluir"
                titleStyle={{ fontWeight: 'bold', fontSize: 13 }}
                containerStyle={{
                  marginHorizontal: 0,
                  height: 55,
                  width: 160,
                  marginVertical: 10,
                  paddingBottom:10,
                  paddingTop: 5,
                }}
              />
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
  