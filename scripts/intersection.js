function findIntersection(array) {
  var P1 = array[0], P2 = array[1], P3 = array[2], P4 = array[3];

  var x =
    ((P1.x * P2.y - P2.x * P1.y) * (P3.x - P4.x) -
      (P1.x - P2.x) * (P3.x * P4.y - P3.y * P4.x)) /
    ((P1.x - P2.x) * (P3.y - P4.y) - (P1.y - P2.y) * (P3.x - P4.x));
  var y =
    ((P1.x * P2.y - P2.x * P1.y) * (P3.y - P4.y) -
      (P1.y - P2.y) * (P3.x * P4.y - P3.y * P4.x)) /
    ((P1.x - P2.x) * (P3.y - P4.y) - (P1.y - P2.y) * (P3.x - P4.x));
  return { x: x, y: y };
}

function isPointBetween(p, a, b) {
  return ((a.x <= p.x && p.x <= b.x) || (a.x >= p.x && p.x >= b.x)) && ((a.y <= p.y && p.y <= b.y) || (a.y >= p.y && p.y >= b.y));
}

function findSegmentIntersection(points) {
  var i1 = findIntersection(points);
  var P1 = points[0], P2 = points[1], P3 = points[2], P4 = points[3];
  const isIntersected = isPointBetween(i1, P1, P2) && isPointBetween(i1, P3, P4);
  return isIntersected ? i1 : false;
}

function isSegmentIntersected(points) {
  var i1 = findIntersection(points);
  var P1 = points[0], P2 = points[1], P3 = points[2], P4 = points[3];
  return isPointBetween(i1, P1, P2) && isPointBetween(i1, P3, P4);
}

window.findIntersection = findIntersection;
window.isPointBetween = isPointBetween;
window.findSegmentIntersection = findSegmentIntersection;
window.isSegmentIntersected = isSegmentIntersected;