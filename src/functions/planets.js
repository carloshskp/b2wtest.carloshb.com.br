import store from '../store';
import {addPlanets, nextPlanets, planetsLoaded, selectPlanet} from './actions';
/**
 * Get random array index
 * @param {Array} planets
 * @returns {number}
 */
export const getRandomPlanetIndex = planets => Math.floor(Math.random() * planets.length);

/**
 * Remove item of array by index
 * @param {number} planetIndex
 * @param {Array} planets
 */
export const removePlanetByIndex = (planetIndex, planets) => planets.filter((planet, index) => planetIndex !== index);

/**
 * Select random planet from remaining planets list and dispatch actions
 */
export const getPlanet = planets => {
    let selectedPlanet = getRandomPlanetIndex(planets);
    let planet = planets[selectedPlanet];
    let planetsRemaining = removePlanetByIndex(selectedPlanet, planets);

    store.dispatch(selectPlanet(planet));
    store.dispatch(nextPlanets(planetsRemaining));
    store.dispatch(planetsLoaded());
};

/**
 * Fetch planets in link and dispatch it
 * @param {string} link
 * @returns {Promise<{next?: *, results?: *} | void>}
 */
export const fetchPlanets = link => fetch(link)
        .then(response => response.json())
        .then(({ next, results }) => {

            store.dispatch(addPlanets(results));

            if( next ) fetchPlanets(next);
            if( ! next ) getPlanet(store.getState().planets);

        })
        .catch(console.error);