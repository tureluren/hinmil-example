// LineItem :: { price :: Number, quantity :: Number }

// lineTotal :: LineItem -> Number
const lineTotal = (line) => line.price * line.quantity;

const total = lineTotal ({ price: 9.95, quantity: "3" });
