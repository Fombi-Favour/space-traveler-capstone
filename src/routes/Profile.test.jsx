import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Profile from './Profile';

const mockStore = configureStore([]);
const dummyData = [
  {
    mission_id: '1',
    mission_name: 'Test Mission 1',
    description: 'Test Mission 1 description',
    reserved: false,
  },
  {
    mission_id: '2',
    mission_name: 'Test Mission 2',
    description: 'Test Mission 2 description',
    reserved: false,
  },
  {
    mission_id: '3',
    mission_name: 'Test Mission 3 is my mission',
    description: 'Test Mission 3 description',
    reserved: true,
  },
  {
    mission_id: '4',
    mission_name: 'Test Mission 4',
    description: 'Test Mission 4 description',
    reserved: false,
  },
];

describe('Profile component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      mission: {
        value: dummyData,
        status: 'completed',
      },
    });
  });

  test('should render only reserved mission', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Profile />
      </Provider>,
    );

    const myMission = getByTestId('3');

    expect(myMission).toHaveTextContent('Test Mission 3 is my mission');
  });
});
