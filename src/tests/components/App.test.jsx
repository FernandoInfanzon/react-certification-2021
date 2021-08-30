import React from 'react';
import renderer from 'react-test-renderer';
import App from '../../components/App';

describe('App Test', () => {
  test('App Component', () => {
    const component = renderer.create(<App />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
