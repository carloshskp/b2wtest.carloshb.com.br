import { planetsMutator } from "./planetsMutator";
import compose from "./compose";

/**
 * Redux action then fetch planets
 * @returns {{type: string}}
 */
export const planetsLoaded = () => ({
    type: 'PLANETS_LOADED'
});

/**
 * Redux action to save planets
 * @param {Array} planets
 * @returns {{type: string, planets: *}}
 */
export const savePlanets = planets => ({
    type: 'SAVE_PLANETS',
    planets: planets
});

/**
 * Composite action SAVE_PLANETS with planets data mutator
 */
export const addPlanets = compose(savePlanets, planetsMutator);


/**
 * Save next planets
 * @param {Array} planets
 * @returns {{type: string, planets: Array}}
 */
export const nextPlanets = planets => ({
    type: 'NEXT_PLANETS',
    planets: planets
});

/**
 * Restart planets state list
 * @returns {{type: string}}
 */
export const restartPlanets = () => ({
    type: 'RESTART_PLANETS'
});

/**
 * Update selected planet
 * @param {object} planet
 * @returns {{type: string, planet: object}}
 */
export const selectPlanet = planet => ({
    type: 'SELECT_PLANET',
    planet: planet
});