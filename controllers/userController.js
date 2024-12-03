import User from "../models/userModel.js";

export const createUser = async (req, res) => {
  try {
    const { username } = req.body;
    if (!username) {
      return res.status(400).send("Username is required");
    }
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).send("Username already exists");
    }
    const user = new User(req.body);
    await user.save();
    res.status(201).json("User created successfully");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getAllUser = async (req, res) => {
  try {
    const users = await User.find({}, { password: false });
    if (!users) {
      return res.status(404).json("No user found");
    }
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getSingleUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id, { password: false });
    if (!user) {
      return res.status(404).json("No user found");
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json("User ID is required");
    }
    const data = req.body;
    if (!data) {
      return res.status(400).json("Request body is required");
    }
    const user = await User.findByIdAndUpdate(id, data);
    if (!user) {
      return res.status(404).json("User not found");
    }
    const insertedUser = await user.save(); // save the user info into the database
    res
      .status(200)
      .json({ message: "User updated successfully", data: insertedUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json("User ID is required");
    }
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json("User not found");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
