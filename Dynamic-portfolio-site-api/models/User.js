module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    image: {
      type: DataTypes.STRING,
    },
  });

  User.associate = (models) => {
    User.hasMany(models.Experiance, {
      onDelete: "cascade",
    });
    User.hasMany(models.PersonalProject, {
      onDelete: "cascade",
    });
    User.hasOne(models.UserInfo, {
      onDelete: "cascade",
    });
    User.hasMany(models.Education, {
      onDelete: "cascade",
    });
  };
  return User;
};
