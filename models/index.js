const User = require('./User');
const Experience = require('./Experience');

User.hasMany(Experience, {
  foreignKey: 'user_id',
  // When we delete a Reader, make sure to also delete the associated Library Card.
  onDelete: 'CASCADE',
});

Experience.belongsTo(User, {
  foreignKey: 'id',
});

module.exports = { User, Experience };
