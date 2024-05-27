module.exports = (sequelize, DataTypes) => {
  let alias = "Product";
  let cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(95),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(400),
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  };
  let config = {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    tableName: "products",
  };
  const Product = sequelize.define(alias, cols, config);

  Product.associate = function (models) {
    Product.hasMany(models.CartItem, {
      as: "cartItems",
      foreignKey: "product_id",
    });
    Product.hasMany(models.Order, {
      as: "orders",
      foreignKey: "id_product",
    });
  };

  return Product;
};
