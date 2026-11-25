// Ramda, typed by hm-types/ramda.hm: no annotations needed here.
import * as R from "ramda";

const orders = [
  { id: "o1", customer: "Ada", total: 120, paid: true },
  { id: "o2", customer: "Alan", total: 35, paid: false },
  { id: "o3", customer: "Ada", total: 80, paid: false },
];

// Hover over each name to see its type.
const unpaid = R.filter (R.propEq (false, "paid"), orders);
const byCustomer = R.groupBy (R.prop ("customer")) (orders);
const outstanding = R.pipe (R.map (R.prop ("total")), R.sum);
const withoutFee = R.subtract (R.__, 2.5);

const due = withoutFee (outstanding (unpaid));

// ✗ sum gives a Number; toUpper wants a String.
const label = R.pipe (R.map (R.prop ("total")), R.sum, R.toUpper);
