# line-intersection

A simple library which finds the intersection of two lines or line segments.

## Installation

### Via npm

For Node.js, Webpack and other such environments where support for npm modules exists, you may install the npm package via Yarn or npm.

```bash
# For npm 1 to 4.
npm i line-intersection --save
# For npm 5.
npm i line-intersection
# For Yarn (recommended).
yarn add line-intersection
```

Then import it in your environment.

```javascript
// For non-ES Module environments.
const $ = require('line-intersection')
// For ES Module environments.
import $ from 'line-intersection'
// Note, you can also import specific functions via ES Modules like this.
import { findIntersection, isPointBetween } from 'line-intersection'
```

**You can replace $ with any variable name.**

### Using a CDN (for browser projects without a module bundler)

Paste this script tag into the head of your HTML document:

```html
<script src="https://rsg-group.github.io/intersection/scripts/intersection.js" />
```

After that, the functions can be directly called in your environment.

## Functions

> Note: We will refer to this type - `[{ x: number, y: number }, { x: number, y: number }, { x: number, y: number }, { x: number, y: number }]` - as `CoordsOfTwoLines`. We will also refer to - `{ x: number, y: number }` - as `Coords`.

- `findIntersection(CoordsOfTwoLines) -> { x: number, y: number }`

1. **Description:** This function finds the intersection of two lines.

1. **Input:** It requires a unit an array of 4 objects, the 1st being the coordinates of a point on line A, the 2nd being coordinates of a 2nd point on line A, and the 3rd and 4th being coordinates of two different points on line B.

1. **Output:** It returns the coordinates of the point where the lines intersect.

- `findSegmentIntersection(CoordsOfTwoLines) -> { x: number, y: number } | false`

1. **Description:** This function finds the intersection of two line segments.

1. **Input:** It requires a unit an array of 4 objects, the 1st being the coordinates of a point on line A, the 2nd being coordinates of a 2nd point on line A, and the 3rd and 4th being coordinates of two different points on line B.

1. **Output:** It returns either the point where the line segments intersect or `false` if they do not intersect.

- `isSegmentIntersected(CoordsOfTwoLines) -> boolean`

1. **Description:** This function finds out if two line segments intersect or not.

1. **Input:** It requires a unit an array of 4 objects, the 1st being the coordinates of a point on line A, the 2nd being coordinates of a 2nd point on line A, and the 3rd and 4th being coordinates of two different points on line B.

1. **Output:** It returns `true` if the line segments intersect or `false` if they do not intersect.

- `isPointBetween(p: Coords, a: Coords, b: Coords) -> boolean`

1. **Description:** It checks if the given point `p` is between given points `x` and `y`.

1. **Input:** It requires an input `p` which is the point to check, and the coordinates of `a` and `b`, the points between which `p` should or should not situate.

1. **Output:** It returns `true` if the point `p` is between `a` and `b` or `false` if not.
