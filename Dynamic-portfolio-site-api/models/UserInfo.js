module.exports = (sequelize, DataTypes) => {
  const UserInfo = sequelize.define("UserInfo", {
    summary: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    backend: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    frontend: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    database: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    scm: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    father: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    mother: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    national: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    pAddress: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    dob: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    blood: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    religion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
  return UserInfo;
};
