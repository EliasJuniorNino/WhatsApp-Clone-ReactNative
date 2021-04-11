import {combineReducers} from 'redux';

import calls from './calls';
import chats from './chats';
import status from './status';
import user from './user';

export default combineReducers({
  calls,
  chats,
  status,
  user,
});
