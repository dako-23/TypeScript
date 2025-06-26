"use strict";
let point = { x: 0, y: 0 };
var Directions;
(function (Directions) {
    Directions[Directions["Up"] = 0] = "Up";
    Directions[Directions["Down"] = 1] = "Down";
    Directions[Directions["Left"] = 2] = "Left";
    Directions[Directions["Right"] = 3] = "Right";
})(Directions || (Directions = {}));
const movePoint = (point, moveDirection) => {
    if (moveDirection === Directions.Up)
        return { x: point.x, y: point.y + 1 };
    if (moveDirection === Directions.Down)
        return { x: point.x, y: point.y - 1 };
    if (moveDirection === Directions.Left)
        return { x: point.x - 1, y: point.y };
    if (moveDirection === Directions.Right)
        return { x: point.x + 1, y: point.y };
};
console.log(movePoint(point, Directions.Right));
//# sourceMappingURL=demo.js.map