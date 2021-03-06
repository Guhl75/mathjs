# Function dotEqual

Compare two matrices element wise. The function accepts both matrices and
scalar values.


## Syntax

```js
math.dotEqual(x, y)
```

### Parameters

Parameter | Type | Description
--------- | ---- | -----------
`x` | Number &#124; BigNumber &#124; Boolean &#124; Complex &#124; Unit &#124; Array &#124; Matrix | First matrix to compare
`y` | Number &#124; BigNumber &#124; Boolean &#124; Complex &#124; Unit &#124; Array &#124; Matrix | Second matrix to compare

### Returns

Type | Description
---- | -----------
Number &#124; BigNumber &#124; Complex &#124; Unit &#124; Array &#124; Matrix |  Returns a matrix containing boolean results of the element wise comparisons.


## Examples

```js
var math = mathjs();

math.dotEqual(2, 4);   // returns false

a = [2, 5, 1];
b = [2, 7, 1];

math.dotEqual(a, b);   // returns [true, false, true]
math.equal(a, b);      // returns false
```


## See also

[equal](equal.md),
[unequal](unequal.md),
[dotuneuqal](dotuneuqal.md)


<!-- Note: This file is automatically generated from source code comments. Changes made in this file will be overridden. -->
