# Simple mini library for finding line and line segment intersection
## How to use?
* With Node
```
npm install line-intersection --save
```
In your js file:
```
var $ = require('line-intersection');
```
If you use es6: `import * as $ from 'line-intersection'`

> With `es6` you can import one or more of the functions directly - `import { fun, fun2 } from 'line-intersection'`

And use the functions: `$.function(params)`

> If you want you can replace `$` with any var name

* In normal project
Paste this script tag into the HEAD:
```
<script type="text/javascript" src="https://rsg-group.github.io/intersection/scripts/intersection.js"></script>
```
After that you just have to use the functions in your code.

## Functions:
* *findIntersection* 

This function finds the intersection of two lines.

*Input*: array with 4 objects inside with parametars "x" and "y"

`[{x: val, y: val}, {x: val, y: val}, {x: val, y: val}, {x: val, y: val}]`
The objects are points of the lines. There are 4 Objects for every point. In one line there are 2 points. We searching the intersection of two lines - `2 lines * 2 points = 4 objects`

*Output:* Object with "x" and "y" - the coords of the intersection point.

* *findSegmentIntersection*

This function finds the intersection of two segements of lines.

*Input*: __Same as *findIntersection* function__ - array with 4 objects inside with parametars "x" and "y"

*Output:* Object with "x" and "y" __OR__ "false" - The function returns false when the segments aren't crossed.

* *isSegmentIntersected*

This function check for intersection of two segments.

*Input*: __Same as *findSegmentIntersection* function__ - array with 4 objects inside with parametars "x" and "y"

*Output:* boolean - The function returns "true" when the line segments are crossed and "false" when they aren't.

* *isPointBetween*

Check is the point "p" is between "a" and "b"

*Input:* three points (Objects with "x" and "y"). The point "p" must be first `isPointBetween(p, a, b)`

*Output:* boolean