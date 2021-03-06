# Function ceil

Round a value towards plus infinity
If `x` is complex, both real and imaginary part are rounded towards plus infinity.
For matrices, the function is evaluated element wise.


## Syntax

```js
math.ceil(x)
```

### Parameters

Parameter | Type | Description
--------- | ---- | -----------
`x` | Number &#124; BigNumber &#124; Boolean &#124; Complex &#124; Array &#124; Matrix | Number to be rounded

### Returns

Type | Description
---- | -----------
Number &#124; BigNumber &#124; Complex &#124; Array &#124; Matrix | Rounded value


## Examples

```js
var math = mathjs();

math.ceil(3.2);               // returns Number 4
math.ceil(3.8);               // returns Number 4
math.ceil(-4.2);              // returns Number -4
math.ceil(-4.7);              // returns Number -4

var c = math.complex(3.2, -2.7);
math.ceil(c);                 // returns Complex 4 - 2i

math.ceil([3.2, 3.8, -4.7]);  // returns Array [4, 4, -4]
```


## See also

[floor](floor.md),
[fix](fix.md),
[round](round.md)


<!-- Note: This file is automatically generated from source code comments. Changes made in this file will be overridden. -->
