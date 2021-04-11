import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export interface CallData {
  key: string;
  name: string;
  timestamp: Date;
  image: string;
  count?: number;
  received?: boolean;
}

import data from './data';

const Calls: React.FC = () => {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.listContainer}
        data={data}
        keyExtractor={(_, i) => String(i)}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.cardContainer}>
            <View style={styles.imageContainer}>
              <Image
                source={{uri: 'https://picsum.photos/300'}}
                style={styles.image}
              />
            </View>
            <View style={styles.lineView}>
              <View style={styles.infoContainer}>
                <Text style={styles.name}>{item?.name}</Text>
                <View style={styles.descriptionContainer}>
                  {item?.received ? (
                    <MaterialCommunityIcons
                      style={styles.received}
                      name="arrow-bottom-left"
                      color="#9f2933"
                      size={21}
                    />
                  ) : (
                    <MaterialCommunityIcons
                      style={styles.received}
                      name="arrow-top-right"
                      color="#22c076"
                      size={21}
                    />
                  )}
                  {item?.count ? (
                    <Text style={styles.count}>({item?.count})</Text>
                  ) : null}
                  <Text style={styles.date}>
                    {item?.timestamp?.toDateString()}
                  </Text>
                </View>
              </View>
              <View style={styles.callIcon}>
                <MaterialIcons name="call" color="#02887a" size={25} />
              </View>
            </View>
            <View />
          </TouchableOpacity>
        )}
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
  cardContainer: {
    flexDirection: 'row',
    margin: 5,
  },
  imageContainer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    color: '#222222',
    fontWeight: 'bold',
    fontSize: 17,
  },
  descriptionContainer: {
    flexDirection: 'row',
    marginTop: 2,
  },
  received: {
    marginRight: 2,
  },
  count: {
    color: '#787878',
    fontSize: 17,
    marginRight: 5,
  },
  date: {
    color: '#787878',
    fontSize: 17,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 60,
  },
  lineView: {
    marginLeft: 5,
    flex: 1,
    flexDirection: 'row',
    borderBottomColor: '#eaeaea',
    borderBottomWidth: 1,
    alignItems: 'center',
    paddingBottom: 4,
  },
  infoContainer: {
    flex: 1,
  },
  callIcon: {
    marginLeft: 15,
    paddingRight: 13,
    marginBottom: 5,
  },
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
