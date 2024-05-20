module.exports = (sequelize, dataTypes) => {
  let alias = "Products";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: dataTypes.STRING(95),
      allowNull: false,
    },
    description: {
      type: dataTypes.STRING(400),
      allowNull: false,
    },
    color: {
      type: dataTypes.STRING(),
      allowNull: false,
    },
    price: {
      type: dataTypes.INTEGER(),
      allowNull: false,
    },
    image: {
      type: dataTypes.BLOB(),
      allowNull: false,
    },
  };
  let config = {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: false,
    tableName: "products",
  };
  const Product = sequelize.define(alias, cols, config);

  Product.associate = function (models) {
    Product.hasMany(models.Orders, {
      as: "orders",
      foreignKey: "id_product",
    });
  };

  return Product;
};
