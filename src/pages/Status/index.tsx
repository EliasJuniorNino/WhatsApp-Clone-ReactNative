import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useSelector} from 'react-redux';

import CardAddStatus from './CardAddStatus';
import RecentsList from './RecentsList';
import ViewsList from './ViewsList';

import {State as StatusState} from '../../store/reducers/status';

export interface StatusData {
  key: string;
  name: string;
  time: string;
  image: string;
  visualized_at?: string;
}

const Status: React.FC = () => {
  const statusState = useSelector<{status: StatusState}, StatusState>(
    state => state?.status,
  );

  return (
    <View style={styles.container}>
      <ScrollView style={styles.listContainer}>
        <CardAddStatus />
        <RecentsList
          data={statusState?.data?.filter(item => !item?.visualized_at)}
        />
        <ViewsList
          data={statusState?.data?.filter(item => item?.visualized_at)}
        />
      </ScrollView>

      <MaterialIcons
        style={styles.editIcon}
        color="#476a6f"
        name="edit"
        size={22}
      />
      <FontAwesome
        style={styles.cameraIcon}
        color="white"
        name="camera"
        size={20}
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
    padding: 20,
    backgroundColor: 'rgba(0,204,63, 0.95)',
    borderRadius: 43,
    bottom: 16,
    right: 16,
    elevation: 3,
  },
});

export default Status;
