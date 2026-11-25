// LineItem :: { price :: Number, quantity :: Number }

// lineTotal :: LineItem -> Number
const lineTotal = (line) => line.price * line.quantity;

// subtotal :: [LineItem] -> Number
const subtotal = (lines) =>
  lines.reduce ((sum, line) => sum + lineTotal (line), 0);

// withVat :: (Number, Number) -> Number
const withVat = (amount, rate) => Math.round (amount * (1 + rate));

// ::constraint Functor f { f :: { map :: f a ~> (a -> b) -> f b } }

// fmap :: Functor f => ((a -> b), f a) -> f b
const fmap = (fn, functor) => functor.map (fn);
