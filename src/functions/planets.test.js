import {getPlanet, getRandomPlanetIndex, removePlanetByIndex} from "./planets";
import {planetsMutator} from "./planetsMutator";
import responseSample from "../responseSample";
import store from "../store";

const planets = [
    {
        name: 'x'
    },
    {
        name: 'y'
    },
    {
        name: 'z'
    }
];

it('get random planet index', () => {

    let tree = `${getRandomPlanetIndex(planets)}`;
    let expected = /([0]|[1]|[2])/;

    expect(tree).toMatch(expected);

});

it('remove array index', () => {

    expect(planets.length).toBe(3);

    let tree = removePlanetByIndex(2, planets);

    expect(tree.length).toBe(2);

});

it('remove planets from planets mutated', () => {
    getPlanet(planetsMutator(responseSample.results));
    let tree = store.getState().planetsRemaining.length;
    let expected = responseSample.results.length - 1;
    expect(tree).toBe(expected);
});