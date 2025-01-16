function add(a, b) {
    return a + b;
  }

  function createUser(name, age) {
    return {
      name: name,
      age: age,
      active: true,
    };
  }

  function getFruits() {
    return ['apple', 'banana', 'cherry'];
  }

  function divide(a, b) {
    if (b === 0) {
      throw new Error('Error: Divide for 0 is unreal');
    }
    return a / b;
  }
  
  // Файл тесту (add.test.js)
//   const add = require('./script.test');
  
  test('Add two numbers', () => {
    expect(add(1, 2)).toBe(3);
  });

  //

  test('Create User', () => {
    const user = createUser('John', 30);
  
    const expectedUser = {
      name: 'John',
      age: 30,
      active: true,
    };
  
    expect(user).toEqual(expectedUser);
  });

  //
  
  test('Check that array contain banana', () => {
    const fruits = getFruits();
    expect(fruits).toContain('banana'); 
  });

  // 

  test('Throw error by divide 0', () => {
    expect(() => divide(10, 0)).toThrow();
  
    expect(() => divide(10, 0)).toThrow('Error: Divide for 0 is unreal');
    });