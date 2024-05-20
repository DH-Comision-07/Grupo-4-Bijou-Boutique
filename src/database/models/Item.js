module.exports = (sequelize, dataTypes) => {
  let alias = "CartItems";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cart_id: {
      type: dataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "carts",
        key: "id",
      },
    },
    product_id: {
      type: dataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "products",
        key: "id",
      },
    },
    quantity: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: dataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  };
  let config = {
    tableName: "cart_items",
    timestamps: false,
  };
  const CartItem = sequelize.define(alias, cols, config);

  CartItem.associate = function (models) {
    CartItem.belongsTo(models.Carts, {
      as: "cart",
      foreignKey: "cart_id",
    });
    CartItem.belongsTo(models.Products, {
      as: "product",
      foreignKey: "product_id",
    });
  };

  return CartItem;
};
