const reduce = (v, f) => f(v);

const compose = (...functions) => x => functions.reduceRight(reduce, x);

export default compose;