module.exports = (sequelize, DataTypes) => {
  let alias = "Order";
  let cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "User",
        key: "id",
      },
    },
    id_product: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Product",
        key: "id",
      },
    },
    order_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  };
  let config = {
    tableName: "orders",
    timestamps: false,
  };
  const Order = sequelize.define(alias, cols, config);

  Order.associate = function (models) {
    Order.belongsTo(models.User, {
      as: "user",
      foreignKey: "id_user",
    });
    Order.belongsTo(models.Product, {
      as: "product",
      foreignKey: "id_product",
    });
  };

  return Order;
};
