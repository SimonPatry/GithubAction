const mongoose = require("mongoose");
const User = require("../models/User");
const Post = require("../models/Post");
const Comment = require("../models/Comment");

beforeAll(async () => {
  // Use the MONGODB_URI environment variable for the connection
  const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/test';
  await mongoose.connect(uri);
});

afterAll(async () => {
  await mongoose.disconnect();
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
    expect(savedComment.post.toString()).toEqual(post._id.toString());
    expect(savedComment.author.toString()).toEqual(user._id.toString());
  });

  it("should throw a validation error if required fields are missing", async () => {
    const comment = new Comment({}); // No required fields

    // Expect the save operation to throw an error
    await expect(comment.save()).rejects.toThrow();
  });
});
