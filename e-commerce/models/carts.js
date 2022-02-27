module.exports = (sequelize, DataTypes) => {
  const Carts = sequelize.define("Carts", {
    qty: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Carts;
};
