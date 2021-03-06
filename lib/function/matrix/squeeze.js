module.exports = function (math) {
  var util = require('../../util/index'),

      Matrix = require('../../type/Matrix'),

      object = util.object,
      array = util.array,
      isArray = Array.isArray;

  /**
   * Squeeze a matrix, remove outer singleton dimensions from a matrix.
   *
   * Syntax:
   *
   *     math.squeeze(x)
   *
   * Examples:
   *
   *     var math = mathjs();
   *
   *     math.squeeze([3]);           // returns 3
   *     math.squeeze([[3]]);         // returns 3
   *
   *     var A = math.zeros(1, 3, 2); // returns [[[0, 0], [0, 0], [0, 0]]] (size 1x3x2)
   *     math.squeeze(A);             // returns [[0, 0], [0, 0], [0, 0]] (size 3x2)
   *
   *     // only outer dimensions will be squeezed, so the following B will be left as as
   *     var B = math.zeros(3, 1, 1); // returns [[[0]], [[0]], [[0]]] (size 3x1x1)
   *     math.squeeze(B);             // returns [[[0]], [[0]], [[0]]] (size 3x1x1)
   *
   * See also:
   *
   *     subset
   *
   * @param {Matrix | Array} x      Matrix to be squeezed
   * @return {Matrix | Array} Squeezed matrix
   */
  math.squeeze = function squeeze (x) {
    if (arguments.length != 1) {
      throw new math.error.ArgumentsError('squeeze', arguments.length, 1);
    }

    if (isArray(x)) {
      return array.squeeze(object.clone(x));
    }
    else if (x instanceof Matrix) {
      var res = array.squeeze(x.toArray());
      return isArray(res) ? new Matrix(res) : res;
    }
    else {
      // scalar
      return object.clone(x);
    }
  };
};
