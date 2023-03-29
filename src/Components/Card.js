import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Musica = ({ musica, onRemove }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: musica.capa }} style={styles.musica} />
      <Text style={styles.textocard}> {musica.nome}</Text>
      <Text style={styles.textocard}> {musica.estilo}</Text>
      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <AntDesign
          style={styles.delete}
          name="delete"
          size={24}
          color="white"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "gray",
    width: "40%",
    borderRadius: 30,
    margin: 15,
    textAlign: "center",
    marginBottom: 40,
  },

  musica: {
    resizeMode: "stretch",
    width: "87%",
    margin: 10,
    height: 200,
    borderRadius: 30,
  },

  textocard: {
    textAlign: "center",
    fontSize: 12,
  },

  button: {
    marginTop: 20,
    backgroundColor: "gray",
    borderBottomEndRadius: 43,
    borderBottomStartRadius: 43,
    padding: 5,
    alignItems: "center",
  },

  delete: {
    alignItems: "center",
  },
});

export default Musica;
