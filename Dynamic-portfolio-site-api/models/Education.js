module.exports = (sequelize, DataTypes) => {
  const Education = sequelize.define("Education", {
    degree: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    institute: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cgpa: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    passyear: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Education;
};
