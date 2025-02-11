const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
const User = require("../models/User");   // Adjust the path as necessary
const Post = require("../models/Post");   // Adjust the path as necessary
const Comment = require("../models/Comment"); // Adjust the path as necessary

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

describe("Comment Model Test", () => {
  let user, post;

  beforeEach(async () => {
    // Create and save a user
    const userData = { 
      username: `john_doe_${Date.now()}`,
      email: `john_${Date.now()}@example.com`,
      password: "password123" 
    };
    user = new User(userData);
    await user.save();
    
    // Create and save a post linked to the user
    post = new Post({ title: "My First Post", content: "This is my first post!", author: user._id });
    await post.save();
  });

  it("should create and save a comment successfully", async () => {
    const commentData = { post: post._id, content: "Great post!", author: user._id };
    const comment = new Comment(commentData);
    
    const savedComment = await comment.save();

    // Validate that the comment is saved correctly
    expect(savedComment._id).toBeDefined();
    expect(savedComment.content).toBe(commentData.content);
    expect(savedComment.post.toString()).toEqual(post._id.toString()); // Use toString() to compare ObjectIDs
    expect(savedComment.author.toString()).toEqual(user._id.toString()); // Use toString() to compare ObjectIDs
  });

  it("should throw a validation error if required fields are missing", async () => {
    const comment = new Comment({}); // No required fields

    // Expect the save operation to throw an error
    await expect(comment.save()).rejects.toThrow();
  });
});
