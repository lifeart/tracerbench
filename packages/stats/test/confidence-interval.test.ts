import { expect } from 'chai';
import { describe } from 'mocha';

import {
  cartesianProduct,
  confidenceInterval
} from '../src/confidence-interval';

const control = [
  330.918433554412, 229.000245801897, 329.965804711059, 300.691712977023,
  234.825814560758, 527.963570240824, 308.480228109542, 522.589636888846,
  325.180019314907, 259.507753259425, 279.822702423339, 266.629000675101,
  348.343075741739, 349.334465676962, 287.134434273056, 255.173593243992,
  361.932565928192, 292.828093580835, 315.670479115113, 233.148959408031
];

const experiment = [
  311.307077576214, 287.01781844844, 326.260035401324, 354.377742876501,
  288.289637886991, 273.101023005202, 274.56113018375, 315.970477279932,
  219.797595818019, 347.564349614263, 273.942037169113, 346.293931534072,
  245.535433540729, 289.58600732826, 283.287591042244, 329.580201801935,
  182.369592581587, 256.401674519353, 260.634916843668, 274.456816887721
];

describe('confidence-interval test', () => {
  // lower -17.598544903204015
  it(`confidenceInterval()`, () => {
    const ci = confidenceInterval(control, experiment, 0.95);
    expect([ci.min, ci.max]).to.eqls([-16.645916059851004, 50.779366826444004]);
  });

  it(`cartesianProduct()`, () => {
    const inputOne = [1, 2];
    const inputTwo = [3, 4];
    expect(cartesianProduct(inputOne, inputTwo)).to.eqls([-3, -2, -2, -1]);
    function add(x: number, y: number) {
      return x + y;
    }
    expect(cartesianProduct(inputOne, inputTwo, add)).to.eqls([4, 5, 5, 6]);
  });
});
