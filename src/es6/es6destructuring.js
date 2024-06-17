const vehicles = ['mustang', 'f-150', 'expedition'];

// old way
const car = vehicles[0];
const truck = vehicles[1];
const suv = vehicles[2];

// new way
const [carro, caminhonete, ] = vehicles;

function calculate(a, b) {
    const add = a + b;
    const subtract = a - b;
    const multiply = a * b;
    const divide = a / b;

    return [add, subtract, multiply, divide];
}

const [add, subtract, multiply, divide] = calculate(10, 5);

const vehicleOne =  {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021,
    color: 'red',
    registration: {
        city: 'Houston',
        state: 'Texas',
        country: 'USA'
    }
}

myVehicle(vehicleOne);

// old way
function myVehicle(vehicle) {
    const message = 'My ' + vehicle.type + ' is a ' + vehicle.year + ' ' + vehicle.color + ' ' + vehicle.brand + ' ' + vehicle.model;
}

// new way
myVehicle2(vehicleOne)

function myVehicle2({ type, year, color, brand, model }) {
    const message = `My ${type} is a ${year} ${color} ${brand} ${model}`;
}

// using registration
myVehicle3(vehicleOne)

function myVehicle3({ model, registration: { state } }) {
  const message = 'My ' + model + ' is registered in ' + state + '.';
}