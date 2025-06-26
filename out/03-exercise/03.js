"use strict";
const createCar = (carBody, tires, engine) => {
    console.log(carBody, tires, engine);
};
createCar({ material: 'aluminum', state: 'scratched', partName: 'Car Body', runDiagnostic() { return this.partName; } }, { airPressure: 30, condition: 'needs change', partName: 'Tires', runDiagnostic() { return this.partName; } }, { horsepower: 300, oilDensity: 780, partName: 'Engine', runDiagnostic() { return this.partName; } });
//# sourceMappingURL=03.js.map