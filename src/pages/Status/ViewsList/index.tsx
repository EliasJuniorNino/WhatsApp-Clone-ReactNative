import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import {StatusData} from '../index';

interface Props {
  data: StatusData[];
}

const ViewsList: React.FC<Props> = ({data}) => (
  <View>
    <Text style={styles.title}>Atualizações vistas</Text>

    {data?.map(item => (
      <TouchableOpacity key={item.key} style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{uri: item?.image}} style={styles.image} />
        </View>
        <View style={styles.lineView}>
          <View style={styles.infoContainer}>
            <Text style={styles.name}>{item?.nome}</Text>
            <Text style={styles.date}>{item?.visualized_at}</Text>
          </View>
        </View>
        <View />
      </TouchableOpacity>
    ))}
  </View>
);
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 5,
  },
  title: {
    borderTopColor: '#dcdcdc',
    borderTopWidth: 1,
    color: '#727272',
    fontWeight: 'bold',
    backgroundColor: '#f4f4f4',
    padding: 8,
    paddingLeft: 10,
    fontSize: 16,
  },
  name: {
    color: '#222222',
    fontWeight: 'bold',
    fontSize: 17,
  },
  date: {
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
  lineView: {
    marginLeft: 5,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoContainer: {
    flex: 1,
  },
});

export default ViewsList;
