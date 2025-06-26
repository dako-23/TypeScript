


type CarBodyType = {
    material: string,
    state: string,
}

type TiresType = {
    airPressure: number,
    condition: string,
}

type EngineType = {
    horsepower: number,
    oilDensity: number,
}

type Diagnostics = {
    partName: string,
    runDiagnostic: () => string
}

const createCar = (
    carBody: CarBodyType & Diagnostics,
    tires: TiresType & Diagnostics,
    engine: EngineType & Diagnostics,
) => {

    console.log(carBody, tires, engine);

}

createCar({ material: 'aluminum', state: 'scratched', partName: 'Car Body', runDiagnostic() { return this.partName } },

    { airPressure: 30, condition: 'needs change', partName: 'Tires', runDiagnostic() { return this.partName } },

    { horsepower: 300, oilDensity: 780, partName: 'Engine', runDiagnostic() { return this.partName } })
