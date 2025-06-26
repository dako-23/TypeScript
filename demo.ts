
let point = { x: 0, y: 0 }

enum Directions {
    Up,
    Down,
    Left,
    Right
}

const movePoint = (point: { x: number, y: number }, moveDirection: Directions) => {

    if (moveDirection === Directions.Up) return { x: point.x, y: point.y + 1 };
    if (moveDirection === Directions.Down) return { x: point.x, y: point.y - 1 };

    if (moveDirection === Directions.Left) return { x: point.x - 1, y: point.y };

    if (moveDirection === Directions.Right) return { x: point.x + 1, y: point.y };
}


console.log(movePoint(point, Directions.Right));


