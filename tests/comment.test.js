const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
const User = require("../models/User");
const Post = require("../models/Post");
const Comment = require("../models/Comment");

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
    user = new User({ username: "john_doe", email: "john@example.com", password: "password123" });
    await user.save();
    
    post = new Post({ title: "My First Post", content: "This is my first post!", author: user._id });
    await post.save();
  });

  it("should create and save a comment successfully", async () => {
    const commentData = { post: post._id, content: "Great post!", author: user._id };
    const comment = new Comment(commentData);
    const savedComment = await comment.save();

    expect(savedComment._id).toBeDefined();
    expect(savedComment.content).toBe(commentData.content);
    expect(savedComment.post).toEqual(post._id);
    expect(savedComment.author).toEqual(user._id);
  });

  it("should throw a validation error if required fields are missing", async () => {
    const comment = new Comment({});

    await expect(comment.save()).rejects.toThrow();
  });
});
