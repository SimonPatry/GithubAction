// test/testCounter.js

const incrementTestCount = () => {
  global.testCount++;
  console.log(global.testCount);
};

const getTestCount = () => {
  console.log("get count");
  console.log(global.testCount);
  return global.testCount;
};

const resetTestCount = () => {
  global.testCount = 0; // Reset if needed
};

module.exports = {
  incrementTestCount,
  getTestCount,
  resetTestCount,
};
