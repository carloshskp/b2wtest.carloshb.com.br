import React from 'react';
import App from '../App';
import renderer from "react-test-renderer";

it('renders App component', () => {
    const box = renderer.create(
        <App />
    );

    let tree = box.toJSON();

    expect(tree).toMatchSnapshot();
});