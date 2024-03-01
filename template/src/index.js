// index.js

const mongoose = require('mongoose');

// Define your Mongoose model here
const User = mongoose.model('User', {
  name: String,
  email: String,
});

// Connect to your MongoDB database
mongoose.connect('mongodb://localhost/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });

// Function to seed data into the database
const seedDatabase = async () => {
  try {
    // Clear existing data
    await User.deleteMany();

    // Sample data to seed
    const users = [
      { name: 'Alice', email: 'alice@example.com' },
      { name: 'Bob', email: 'bob@example.com' },
      { name: 'Charlie', email: 'charlie@example.com' },
    ];

    // Insert sample data
    await User.insertMany(users);

    console.log('Database seeding completed successfully!');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding database:', error);
    mongoose.connection.close();
  }
};

module.exports = seedDatabase;
