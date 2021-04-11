import React from 'react';
import {StyleSheet, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {State as ChatsState} from '../../store/reducers/chats';

import Card from './Card';

export interface ChatData {
  key: string;
  name: string;
  time: string;
  image: string;
  isGroup?: boolean;
  lastMessage: {
    type: 'message' | 'image';
    sender?: string;
    data?: any;
  };
  muted?: boolean;
  notReaded: number;
}

const Chats: React.FC = () => {
  const chatsState = useSelector<{chats: ChatsState}, ChatsState>(
    state => state?.chats,
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={chatsState?.data}
        keyExtractor={(_, i) => String(i)}
        renderItem={({item}: {item: ChatData}) => <Card item={item} />}
        style={styles.listContainer}
      />

      <MaterialCommunityIcons
        style={styles.messagesIcon}
        color="white"
        name="android-messages"
        size={25}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  listContainer: {
    flex: 1,
    paddingTop: 6,
  },
  messagesIcon: {
    position: 'absolute',
    padding: 20,
    backgroundColor: 'rgba(0,204,63, 0.95)',
    borderRadius: 43,
    bottom: 16,
    right: 16,
    elevation: 3,
  },
});

export default Chats;
