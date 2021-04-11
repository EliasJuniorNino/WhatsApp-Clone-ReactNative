import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface UserData {
  nome: string;
  image: string;
}

const user: UserData = {
  nome: 'Elias Junior',
  image: 'https://picsum.photos/600',
};

const Card: React.FC = () => (
  <TouchableOpacity style={styles.container}>
    <View style={styles.imageContainer}>
      <Image source={{uri: user?.image}} style={styles.image} />
      <MaterialIcons
        style={styles.addIcon}
        name="add"
        size={23}
        color="white"
      />
    </View>
    <View style={styles.lineView}>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{user?.nome}</Text>
        <Text style={styles.description}>Toque para atualizar seu status</Text>
      </View>
    </View>
    <View />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 5,
  },
  name: {
    color: '#222222',
    fontWeight: 'bold',
    fontSize: 17,
  },
  description: {
    color: '#787878',
    fontSize: 17,
  },
  imageContainer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 55,
  },
  addIcon: {
    position: 'absolute',
    right: 5,
    bottom: 5,
    backgroundColor: '#23c25d',
    borderRadius: 30,
  },
  lineView: {
    marginLeft: 12,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'red',
    paddingTop: 5,
  },
  infoContainer: {
    flex: 1,
  },
});

export default Card;
