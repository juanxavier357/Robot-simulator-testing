function createRobot() {
    let x = 7;
    let y = 3;
    let direction = 'north';
  
    function turnRight() {
      if (direction === 'north') direction = 'east';
      else if (direction === 'east') direction = 'south';
      else if (direction === 'south') direction = 'west';
      else if (direction === 'west') direction = 'north';
    }
  
    function turnLeft() {
      if (direction === 'north') direction = 'west';
      else if (direction === 'west') direction = 'south';
      else if (direction === 'south') direction = 'east';
      else if (direction === 'east') direction = 'north';
    }
  
    function moveForward() {
      if (direction === 'north') {
        if (y < 10) y++;
        else throw new Error('Fuera de los límites');
      } else if (direction === 'east') {
        if (x < 10) x++;
        else throw new Error('Fuera de los límites');
      } else if (direction === 'south') {
        if (y > 0) y--;
        else throw new Error('Fuera de los límites');
      } else if (direction === 'west') {
        if (x > 0) x--;
        else throw new Error('Fuera de los límites');
      }
    }
  
    function executeInstructions(instructions) {
      for (let i = 0; i < instructions.length; i++) {
        const instruction = instructions[i];
        if (instruction === 'R') turnRight();
        else if (instruction === 'L') turnLeft();
        else if (instruction === 'A') moveForward();
      }
    }
  
    function getPosition() {
      return { x, y };
    }
  
    function getDirection() {
      return direction;
    }
  
    return {
      executeInstructions,
      getPosition,
      getDirection,
    };
  }
  
  module.exports = createRobot;
  