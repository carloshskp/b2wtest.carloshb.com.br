import {
    addPlanets,
    nextPlanets,
    planetsLoaded,
    restartPlanets,
    savePlanets,
    selectPlanet
} from '../actions';

it('PLANETS_LOADED action', () => {
    let tree = planetsLoaded();
    let expected = {
        type: 'PLANETS_LOADED'
    };
    expect(tree).toEqual(expected);
});

it('SAVE_PLANETS action', () => {
    let tree = savePlanets([]);
    let expected = {
        type: 'SAVE_PLANETS',
        planets: []
    };
    expect(tree).toEqual(expected);
});

it('mutate data and SAVE_PLANETS action', () => {
    let tree = addPlanets([
        {
            name: 'PLANET',
            population: 200000,
            climate: 'ARID',
            terrain: 'DESERT',
            films: ['a', 'b'],
            x: 'y'
        }
    ]);

    let expected = {
        type: 'SAVE_PLANETS',
        planets: [
            {
                name: 'PLANET',
                population: 200000,
                climate: 'ARID',
                terrain: 'DESERT',
                films: 2
            }
        ]
    };
    expect(tree).toEqual(expected);
});

it('RESTART_PLANETS action', () => {
    let tree = restartPlanets();
    let expected = {
        type: 'RESTART_PLANETS'
    };
    expect(tree).toEqual(expected);
});

it('NEXT_PLANETS action', () => {
    let tree = nextPlanets([]);
    let expected = {
        type: 'NEXT_PLANETS',
        planets: []
    };
    expect(tree).toEqual(expected);
});

it('SELECT_PLANET action', () => {
    let planet = {
        name: 'PLANET',
        population: 200000,
        climate: 'ARID',
        terrain: 'DESERT',
        films: 2
    };
    let tree = selectPlanet(planet);
    let expected = {
        type: 'SELECT_PLANET',
        planet
    };
    expect(tree).toEqual(expected);
});