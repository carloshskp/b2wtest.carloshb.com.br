import React  from 'react';
import PropTypes from 'prop-types';

import Label from './Label';

const Box = ({ planet, population, climate, terrain, featured }) => <section className="box">
    <header>
        <h1>{ planet }</h1>
    </header>
    <div className="content">
        <Label title='POPULATION'>{ population }</Label>
        <Label title='CLIMATE'>{ climate }</Label>
        <Label title='TERRAIN'>{ terrain }</Label>
    </div>
    <footer>
        Featured in { featured } films.
    </footer>
</section>;

Box.propTypes = {
    planet: PropTypes.string.isRequired,
    population: PropTypes.string.isRequired,
    climate: PropTypes.string.isRequired,
    terrain: PropTypes.string.isRequired,
    featured: PropTypes.number.isRequired,
};

export default Box;