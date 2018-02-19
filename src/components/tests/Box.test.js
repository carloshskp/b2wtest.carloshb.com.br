import React from 'react';
import renderer from 'react-test-renderer';

import Box from './Box';

it('renders Box component', () => {
    const box = renderer.create(
        <Box
            planet='PLANET NAME'
            population='200000'
            climate='ARID'
            terrain='DESERT'
            featured={2}
        />
    );

    let tree = box.toJSON();

    expect(tree).toMatchSnapshot();
});
