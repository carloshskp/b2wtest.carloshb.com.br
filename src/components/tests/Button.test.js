import React from 'react';
import renderer from 'react-test-renderer';

import Button from './Button';

it('renders Button component', () => {
    const box = renderer.create(
        <Button
            text='NEXT'
            action={() => {}}
        />
    );

    let tree = box.toJSON();

    expect(tree).toMatchSnapshot();
});
