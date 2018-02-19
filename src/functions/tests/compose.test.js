import compose from '../compose';

it('compose functions', () => {

    const subtractOne = num => num - 1;
    const sumTwo = num => num + 2;
    const sumTwoAndSubtractOne = compose(subtractOne, sumTwo);
    const expected = 6;
    const tree = sumTwoAndSubtractOne(5);

    expect(tree).toEqual(expected);
});