const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
const User = require("../models/User");

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

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
    const user = new User({});

    await expect(user.save()).rejects.toThrow();
  });
});
