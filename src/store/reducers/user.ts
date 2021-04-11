import {ActionsTypes} from '../actions/user';

export interface State {
  name: string;
  image: string;
}

export const INITIAL_STATE: State = {
  name: 'Elias Junior',
  image: 'https://picsum.photos/600',
};

export default function reducer(
  state: State = INITIAL_STATE,
  action: ActionsTypes,
) {
  switch (action) {
    case 'LOGIN':
      return state;
    default:
      return state;
  }
}
