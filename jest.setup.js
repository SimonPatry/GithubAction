// jest.setup.js
global.testCount = 0; // Initialize the global test count

global.incrementTestCount = () => {
  global.testCount++; // Increment the global test count
};

global.getTestCount = () => {
  return global.testCount; // Return the global test count
};

global.resetTestCount = () => {
  global.testCount = 0; // Reset the global test count
};
