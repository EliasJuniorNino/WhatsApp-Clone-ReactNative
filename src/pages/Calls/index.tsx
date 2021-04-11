import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Card from './Card';
import {State as CallsState} from '../../store/reducers/calls';

export interface CallData {
  key: string;
  name: string;
  time: string;
  image: string;
  count?: number;
  received?: boolean;
}

const Calls: React.FC = () => {
  const callsState = useSelector<{calls: CallsState}, CallsState>(
    state => state?.calls,
  );

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.listContainer}
        data={callsState?.data}
        keyExtractor={(_, i) => String(i)}
        renderItem={({item}: {item: CallData}) => <Card item={item} />}
      />

      <FontAwesome
        style={styles.editIcon}
        color="#476a6f"
        name="video-camera"
        size={22}
      />
      <MaterialIcons
        style={styles.cameraIcon}
        color="white"
        name="add-call"
        size={28}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listContainer: {},
  editIcon: {
    position: 'absolute',
    padding: 13,
    backgroundColor: '#edf5f7',
    borderRadius: 43,
    bottom: 93,
    right: 25,
    elevation: 3,
  },
  cameraIcon: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    backgroundColor: 'rgba(0,204,63, 0.95)',
    borderRadius: 50,
    bottom: 18,
    right: 16,
    elevation: 3,
  },
});

export default Calls;
