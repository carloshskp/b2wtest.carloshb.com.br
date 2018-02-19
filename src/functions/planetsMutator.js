/**
 * Return planet without unused fields
 * @param planet
 * @returns {{name: {string}, population: {string}, climate: {string}, terrain: {string}, films: {number}}}
 */
export const planetMutator = planet => {
    const {
        name,
        population,
        climate,
        terrain,
        films
    } = planet;

    return {
        name,
        population,
        climate,
        terrain,
        films: films.length
    };
};

/**
 * Return planets without unused fields
 * @param {Array} planets
 */
export const planetsMutator = planets => planets.map(planetMutator);