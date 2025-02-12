const mongoose = require("mongoose");
const User = require("../models/User"); // Ensure the path is correct

beforeAll(async () => {
  // Use the MONGODB_URI environment variable for the connection
  const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/test';
  await mongoose.connect(uri);
});

afterAll(async () => {
  await mongoose.disconnect();
});

beforeEach(async () => {
  await User.deleteMany({}); // Clear the collection before each test
});

// User Model Test Suite
describe("User Model Test", () => {
  it("should create and save a user successfully", async () => {
    // Create and save a user
    const userData = { 
      username: `john_doe_${Date.now()}`,
      email: `john_${Date.now()}@example.com`,
      password: "password123" 
    };
    const user = new User(userData);
    const savedUser = await user.save();

    expect(savedUser._id).toBeDefined();
    expect(savedUser.username).toBe(userData.username);
    expect(savedUser.email).toBe(userData.email);
  });

  it("should throw a validation error if required fields are missing", async () => {
    const user = new User({}); // No required fields

    // Expect the save operation to throw an error
    await expect(user.save()).rejects.toThrow();
  });
});
