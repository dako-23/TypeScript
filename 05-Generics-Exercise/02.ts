
type Car3 = {
    engine: {
        horsePower: number
    },
    tires: {
        model: string,
        airPressure: number
    },
    body: {
        material: string
    }
}


class Mechanic<T extends Car3> {

    technicalInspection(car: T): boolean { return true; }

}


