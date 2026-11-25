// pipe :: ((a -> b), (b -> c), ..., (y -> z)) -> a -> z
const pipe = (...fns) => (x) => fns.reduce ((acc, fn) => fn (acc), x);

// withVat :: Number -> Number
const withVat = (amount) => amount * 1.21;

// format :: Number -> String
const format = (amount) => `€ ${amount.toFixed (2)}`;

// Each step's output is checked against the next step's input.
// priceLabel :: Number -> String
const priceLabel = pipe (withVat, format);

// ✗ format gives a String, withVat wants a Number.
// broken :: Number -> Number
const broken = pipe (format, withVat);
