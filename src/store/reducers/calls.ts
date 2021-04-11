import {ActionsTypes} from '../actions/calls';

export interface State {
  data: {
    key: string;
    name: string;
    time: string;
    image: string;
    count?: number;
    received?: boolean;
  }[];
}

export const INITIAL_STATE: State = {
  data: [
    {
      key: '1',
      name: 'WELLINGTON',
      time: 'Ontem 09:20',
      image: 'https://picsum.photos/301',
      count: 2,
    },
    {
      key: '2',
      name: '+55 66 0000-0000 e 6 participantes',
      time: '8 de abril 20:06',
      image: 'https://picsum.photos/302',
      received: true,
    },
  ],
};

export default function reducer(
  state: State = INITIAL_STATE,
  action: ActionsTypes,
) {
  switch (action) {
    case 'CALL_TO':
      return state;
    default:
      return state;
  }
}
