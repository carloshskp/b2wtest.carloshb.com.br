import React from 'react';
import renderer from "react-test-renderer";

import Label from '../Label';

it('renders Label component', () => {
    const box = renderer.create(
        <Label
            title='Population'
        >
            100000
        </Label>
    );

    let tree = box.toJSON();

    expect(tree).toMatchSnapshot();
});
