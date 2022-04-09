const User = require('./User');
const Experience = require('./Experience');

User.hasMany(Experience, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Experience.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Experience };
