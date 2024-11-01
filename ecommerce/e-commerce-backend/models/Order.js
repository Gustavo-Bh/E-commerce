// models/Order.js
const Order = sequelize.define('Order', {
  total: DataTypes.FLOAT,
  status: { type: DataTypes.STRING, defaultValue: 'pending' },
});

module.exports = Order;
