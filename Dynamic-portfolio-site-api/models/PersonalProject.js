module.exports = (sequelize, DataTypes) => {
  const PersonalProject = sequelize.define("PersonalProject", {
    projectName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    technology: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    projectLink: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return PersonalProject;
};
