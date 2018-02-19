import responseSample from '../responseSample';
import {planetMutator, planetsMutator} from './planetsMutator';

const expected = {
    name: responseSample.results[0].name,
    population: responseSample.results[0].population,
    climate: responseSample.results[0].climate,
    terrain: responseSample.results[0].terrain,
    films: responseSample.results[0].films.length,
};

it('remove planet unused fields', function () {
    let tree = planetMutator(responseSample.results[0]);
    expect(tree).toEqual(expected);
});

it('planets response sample mutate', () => {
    let tree = planetsMutator(responseSample.results)[0];
    expect(tree).toEqual(expected);
});