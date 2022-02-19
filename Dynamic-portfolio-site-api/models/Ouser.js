module.exports = (sequelize, DataTypes) => {
  const Ouser = sequelize.define("Ouser", {
    image: {
      type: DataTypes.STRING,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Ouser;
};
