import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Rockets from './Rockets';

const mockStore = configureStore([]);
const dummyRocketData = [
  {
    id: '1',
    rocket_name: 'Test Rocket 1',
    rocket_type: 'Type Rocket 1',
    description: 'Type Rocket 1',
    flickr_images: 'Type Rocket 1',
    reserved: false,
  },
  {
    id: '2',
    rocket_name: 'Test Rocket 2',
    rocket_type: 'Type Rocket 2',
    description: 'Type Rocket 2',
    flickr_images: 'Type Rocket 2',
    reserved: false,
  },
  {
    id: '3',
    rocket_name: 'Test Rocket 3 is my Rocket',
    rocket_type: 'Type Rocket 3 is my Rocket',
    description: 'Type Rocket 3 is my Rocket',
    flickr_images: 'Type Rocket 3 is my Rocket',
    reserved: true,
  },
  {
    id: '4',
    rocket_name: 'Test Rocket 4',
    rocket_type: 'Type Rocket 4',
    description: 'Type Rocket 4',
    flickr_images: 'Type Rocket 4',
    reserved: false,
  },
];

describe('Rocket component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      rocket: {
        content: dummyRocketData,
        status: 'completed',
      },
    });
  });

  test('should render the first mission', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    const rocketTest = getByTestId('3');

    expect(rocketTest).toHaveTextContent('Test Rocket 3 is my Rocket');
  });
});
