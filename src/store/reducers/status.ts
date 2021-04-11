import {ActionsTypes} from '../actions/status';

export interface State {
  data: {
    key: string;
    name: string;
    time: string;
    image: string;
    visualized_at?: string;
  }[];
}

export const INITIAL_STATE: State = {
  data: [
    {
      key: '1',
      name: 'Fulano 1',
      time: 'Ontem 19:27',
      image: 'https://picsum.photos/301',
      visualized_at: 'Ontem 09:52',
    },
    {
      key: '2',
      name: 'Fulano 2',
      time: 'Ontem 12:03',
      image: 'https://picsum.photos/302',
    },
    {
      key: '3',
      name: 'Fulano da Silva',
      time: 'Ontem 09:52',
      image: 'https://picsum.photos/303',
    },
    {
      key: '4',
      name: 'Fulano da Silva 2',
      time: 'Ontem 09:52',
      image: 'https://picsum.photos/303',
    },
  ],
};

export default function reducer(
  state: State = INITIAL_STATE,
  action: ActionsTypes,
) {
  switch (action) {
    case 'SEND_STATUS':
      return state;
    default:
      return state;
  }
}
