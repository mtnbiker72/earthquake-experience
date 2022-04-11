const sequelize = require('../config/connection');
const { User, Experience } = require('../models');

const userData = require('./userData.json');
const experienceData = require('./experienceData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const experiences = await Experience.bulkCreate(experienceData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
