module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("Users", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mobile: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Users.associate = (models) => {
    Users.hasMany(models.Products, {
      onDelete: "cascade",
    });
    Users.hasMany(models.Carts, {
      onDelete: "cascade",
    });
  };
  return Users;
};
