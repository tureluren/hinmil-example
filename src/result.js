// A sum type with two variants, built from plain factory functions.

// Result :: Ok a | Err e

// Ok :: a -> Result a e
const Ok = (value) => ({ tag: "Ok", value });

// Err :: e -> Result a e
const Err = (error) => ({ tag: "Err", error });

// ::narrow Ok
// isOk :: Result a e -> Boolean
const isOk = (result) => result.tag === "Ok";

// parseQuantity :: String -> Result Number String
const parseQuantity = (text) => {
  const n = Number (text);
  return Number.isInteger (n) && n > 0 ? Ok (n) : Err (`not a quantity: ${text}`);
};

// quantityOr :: (Number, Result Number String) -> Number
const quantityOr = (fallback, result) =>
  isOk (result) ? result.value : fallback;

const three = quantityOr (1, parseQuantity ("3"));

// ✗ The fallback must be a Number, like the value inside the Result.
const broken = quantityOr ("one", parseQuantity ("3"));
