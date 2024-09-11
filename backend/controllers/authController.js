const StorageProvider = require('../models/storageProvider');

const signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const newProvider = new StorageProvider({ name, email, password });
    await newProvider.save();
    res.status(201).json({ message: 'Storage provider signed up successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Signup failed', details: error });
  }
};

module.exports = { signup };
