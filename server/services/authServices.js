const jwt = require("jsonwebtoken");
const { SECRET } = require("../config/env");
const { validateInput } = require("../util/validateInput");
const User = require("../models/User");
const Topic = require("../models/Topic");
const bcrypt = require("bcrypt");

// check for same titles on the frontend;

async function registerUser(body) {
  const { name, email, description, topics, password } = body;
  await validateInput(body, "registerUser");
  const parsedPassword = password.trim();
  const hashedPassword = await bcrypt.hash(parsedPassword, 10);
  const existingTopics = await Topic.find({ name: { $in: topics } }).exec();
  const existingTopicIds = existingTopics.map((topic) => topic._id);
  const topicsToCreate = topics.filter(
    (topicName) =>
      existingTopics.some(
        (existingTopic) => existingTopic.name === topicName
      ) == false
  );
  const newTopics = await Topic.insertMany(
    topicsToCreate.map((topicName) => ({ name: topicName }))
  );
  const createdTopicIds = newTopics.map((topic) => topic._id);
  const updatedTopicIds = [...existingTopicIds, ...createdTopicIds];
  const updatedUser = new User({
    name,
    email,
    description,
    password: hashedPassword,
    topics: updatedTopicIds, // Update the topics array
  });
  await updatedUser.save();
  return createSession(updatedUser); // Assuming createSession returns something meaningful
}
async function loginUser(body) {
  const user = await validateInput(body, "loginUser");
  return createSession(user);
}

function createSession(user) {
  const userId = user._id.toString();
  const token = jwt.sign({ userId }, SECRET, { expiresIn: "1h" });
  return { user, token };
}

async function editUser(body, userId) {
  const { name, email, description, topics, password } = body;
  body._id = userId;
  await validateInput(body, "editUser");

  const user = await User.findById(userId);
  if (user == false) {
    throw new Error("User not found");
  }

  // Hash the new password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Find existing topics
  const existingTopics = await Topic.find({ name: { $in: topics } }).exec();
  const existingTopicIds = existingTopics.map((topic) => topic._id);

  // Filter topics to create new ones
  const topicsToCreate = topics.filter(
    (topicName) =>
      existingTopics.some(
        (existingTopic) => existingTopic.name === topicName
      ) == false
  );

  // Create and insert new topics
  const newTopics = await Topic.insertMany(
    topicsToCreate.map((topicName) => ({ name: topicName }))
  );

  // Get the IDs of the created topics
  const createdTopicIds = newTopics.map((topic) => topic._id);

  // Update user properties
  user.name = name;
  user.email = email;
  user.description = description;
  user.password = hashedPassword;
  user.topics = [...existingTopicIds, ...createdTopicIds];

  // Save the updated user
  await user.save();

  // Return the updated user with a new session
  return createSession(user);
}

module.exports = {
  registerUser,
  loginUser,
  editUser,
};
