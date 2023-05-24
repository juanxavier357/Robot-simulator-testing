const createRobot = require('../robot');

describe('Robot Simulator', () => {
  let robot;

  beforeEach(() => {
    robot = createRobot();
  });

  test('Debe ejecutar instrucciones y retornar la posición final y la dirección', () => {
    robot.executeInstructions('RAALAL');
    expect(robot.getPosition()).toEqual({ x: 9, y: 4 });
    expect(robot.getDirection()).toBe('west');
  });

//   test('Debe arrojar un error cuando el robot se mueva fuera de los límites', () => {
//     expect(() => {
//       robot.executeInstructions('AAAA');
//     }).toThrow('Fuera de los límites');
//   });
});
