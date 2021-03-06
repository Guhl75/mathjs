module.exports = function (math) {
  var util = require('../../util/index'),

      BigNumber = math.type.BigNumber,
      Complex = require('../../type/Complex'),
      collection = require('../../type/collection'),

      isNumber = util.number.isNumber,
      isBoolean = util['boolean'].isBoolean,
      isComplex = Complex.isComplex,
      isCollection = collection.isCollection;

  /**
   * Round a value towards minus infinity.
   * For matrices, the function is evaluated element wise.
   *
   * Syntax:
   *
   *    math.floor(x)
   *
   * Examples:
   *
   *    var math = mathjs();
   *
   *    math.floor(3.2);              // returns Number 3
   *    math.floor(3.8);              // returns Number 3
   *    math.floor(-4.2);             // returns Number -5
   *    math.floor(-4.7);             // returns Number -5
   *
   *    var c = math.complex(3.2, -2.7);
   *    math.floor(c);                // returns Complex 3 - 3i
   *
   *    math.floor([3.2, 3.8, -4.7]); // returns Array [3, 3, -5]
   *
   * See also:
   *
   *    ceil, fix, round
   *
   * @param  {Number | BigNumber | Boolean | Complex | Array | Matrix} x  Number to be rounded
   * @return {Number | BigNumber | Complex | Array | Matrix} Rounded value
   */
  math.floor = function floor(x) {
    if (arguments.length != 1) {
      throw new math.error.ArgumentsError('floor', arguments.length, 1);
    }

    if (isNumber(x)) {
      return Math.floor(x);
    }

    if (isComplex(x)) {
      return new Complex (
          Math.floor(x.re),
          Math.floor(x.im)
      );
    }

    if (x instanceof BigNumber) {
      return x.floor();
    }

    if (isCollection(x)) {
      return collection.deepMap(x, floor);
    }

    if (isBoolean(x)) {
      return floor(+x);
    }

    throw new math.error.UnsupportedTypeError('floor', math['typeof'](x));
  };
};
