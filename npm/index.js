function findIntersection([P1, P2, P3, P4]) {
  const x =
    ((P1.x * P2.y - P2.x * P1.y) * (P3.x - P4.x) -
      (P1.x - P2.x) * (P3.x * P4.y - P3.y * P4.x)) /
    ((P1.x - P2.x) * (P3.y - P4.y) - (P1.y - P2.y) * (P3.x - P4.x));
  const y =
    ((P1.x * P2.y - P2.x * P1.y) * (P3.y - P4.y) -
      (P1.y - P2.y) * (P3.x * P4.y - P3.y * P4.x)) /
    ((P1.x - P2.x) * (P3.y - P4.y) - (P1.y - P2.y) * (P3.x - P4.x));
  return { x: x, y: y };
}

function isPointBetween(p, a, b) {
  return ((a.x <= p.x && p.x <= b.x) || (a.x >= p.x && p.x >= b.x)) && ((a.y <= p.y && p.y <= b.y) || (a.y >= p.y && p.y >= b.y));
}

function findSegmentIntersection(points) {
  const i1 = findIntersection(points);
  const [P1, P2, P3, P4] = points;
  const isIntersected = isPointBetween(i1, P1, P2) && isPointBetween(i1, P3, P4);
  return isIntersected ? i1 : false;
}

function isSegmentIntersected(points) {
  const i1 = findIntersection(points);
  const [P1, P2, P3, P4] = points;
  return isPointBetween(i1, P1, P2) && isPointBetween(i1, P3, P4);
}

exports.findIntersection = findIntersection;
exports.isPointBetween = isPointBetween;
exports.findSegmentIntersection = findSegmentIntersection;
exports.isSegmentIntersected = isSegmentIntersected;