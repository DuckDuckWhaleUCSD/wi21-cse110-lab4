# Part 1

1. The value of `i` will be printed (`prices.length`) since `i` was declared
   using `var`.
2. The value of `discountedPrice` will be printed (the last price) since it is
   also declared using `var`.
3. The value of `finalPrice` will also be printed (the last price, rounded)
   since it is also declared using `var`.  4. 
4. It will return `[50, 100, 150]` since each value is discounted as half price,
   and rounding to second decimal place doesn't change the result.
5. It will throw an error because `i` is only defined in the for loop.
6. It will throw an error because `discountedPrice` is only defined in the for
   loop.
7. It will print the `finalPrice` as the last price rounded to second decimal
   place since it is declared in the function scope.
8. It will return `[50, 100, 150]` same as last time since changing everything
   to `let` doesn't impair the functionality of the program (assuming no
   errors).
9. It will throw an error because `i` is only defined in the for loop.
10. It will throw an error because `discountedPrice` is only defined in the for
	loop.
11. It will print the `finalPrice` as the last price rounded to second decimal
	place since it is declared in the function scope (assuming previous
	assignment all succeed (which they won't since it is `const`)).
12. It will return `[50, 100, 150]` same as last time since changing everything
	to `const` doesn't change the logic of the program and we assume no errors
	and all assignments succeed (which they won't since they are `const`).
13. object
	- A: `student.name`
	- B: `student['Grad Year']`
	- C: `student.greeting()`
	- D: `student['Favorite Teacher'].name`
	- E: `student.courseLoad[0]`
14. arithmetic
	- A: `32`, the string concatenate operator takes the type of the first
	  argument string and converts the number to a string
	- B: `1`, the minus operator can only take numbers
	- C: `3`, the `null` is auto converted to `0`
	- D: `3null`, the `null` is auto converted to the string `"null"`
	- E: `4`, the `true` is auto converted to the number `1`
	- F: `0`, the `false` and `null` are auto converted to `0`s
	- G: `3undefined`, `undefined` is converted to a string
	- H: `NaN`, the `"3"` is auto converted to a number since you can only minus
	  numbers, and `undefined` converts to `NaN`, so the result is `NaN`
15. Comparison
	- A: `true`, the right hand side is a number so the left is converted to a
	  number
	- B: `false`, the first string is larger since the first character is
	- C: `true`, the right hand side is converted to a number since the left
	  hand side is a number
	- D: `false`, the strict equality check doesn't do conversions
	- E: `false`, the left hand side is converted to `1`
	- F: `true`, the right hand side is `true`, which is equal to `true`
16. `==` do conversions and `===` doesn't, and for `==` it uses the number
	conversion rules except for `null` and `undefined`, which equal each other
	but not anything else
17. `How are you?` because `true` is converted to `1` which is not equal to `2`,
	and `2` is converted to `true` which is true.
19. `[6, 8, 10]`.  For each element in the array it pushes the callback's
	result to the result.  In this case, the callback returns the result of its
	parameter callback when given the number plus 2, and in this case the
	callback parameter multiplies the input by 2.  So in this case we plus 2 and
	multiply by 2.
21. result:
	```
	1
	4
	3
	2
	```
