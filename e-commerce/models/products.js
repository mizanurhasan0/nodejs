module.exports = (sequilize, DataTypes) => {
  const Products = sequilize.define("Products", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    specification: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    reg_price: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    dis_price: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    p_image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    qty: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  Products.associate = (models) => {
    Products.hasMany(models.Carts, {
      onDelete: "cascade",
    });
  };

  return Products;
};
