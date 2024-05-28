module.exports = (sequelize, DataTypes) => {
  let alias = "CartItem";
  let cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cart_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Cart",
        key: "id",
      },
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Product",
        key: "id",
      },
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  };
  let config = {
    tableName: "cart_items",
    timestamps: false,
  };
  const CartItem = sequelize.define(alias, cols, config);

  CartItem.associate = function (models) {
    CartItem.belongsTo(models.Cart, {
      as: "cart",
      foreignKey: "cart_id",
    });
    CartItem.belongsTo(models.Product, {
      as: "product",
      foreignKey: "product_id",
    });
  };

  return CartItem;
};
