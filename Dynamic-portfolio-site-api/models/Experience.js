module.exports = (sequelize, DataTypes) => {
  const Experiance = sequelize.define("Experiance", {
    companyName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    position: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    jobResponsible: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Experiance;
};
