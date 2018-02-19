import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

/**
 * Initial state
 * @type {{loading: boolean, planets: Array, planetsClone: Array}}
 */
const state = {
    loading: true,
    planets: [],
    planetsRemaining: [],
    planet: {}
};

const reducer = (state, action) => {
    let newState;
    switch (action.type){
        case "PLANETS_LOADED":
            newState = {
                ...state,
                loading: false
            };
            break;
        case "SAVE_PLANETS":
            let planets = state.planets.concat(action.planets);
            newState = {
                ...state,
                planets,
                planetsRemaining: planets
            };
            break;
        case "NEXT_PLANETS":
            newState = {
                ...state,
                planetsRemaining: action.planets
            };
            break;
        case "SELECT_PLANET":
            newState = {
                ...state,
                planet: action.planet
            };
            break;
        case "RESTART_PLANETS":
            newState = {
                ...state,
                planetsRemaining: state.planets
            };
            break;
        default:
            newState = state;
            break;
    }
    return newState;
};

export default createStore(reducer, state, composeWithDevTools());