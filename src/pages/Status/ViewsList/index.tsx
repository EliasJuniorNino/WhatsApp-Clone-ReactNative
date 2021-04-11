import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {StatusData} from '..';

import Card from './Card';

interface Props {
  data: StatusData[];
}

const ViewsList: React.FC<Props> = ({data}) => (
  <View style={styles.container}>
    <Text style={styles.title}>Atualizações vistas</Text>
    {data?.map(item => (
      <Card item={item} />
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});

export default ViewsList;
