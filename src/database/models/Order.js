module.exports = (sequelize, dataTypes) => {
  let alias = "Orders";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_user: {
      type: dataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
    },
    id_product: {
      type: dataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "products",
        key: "id",
      },
    },
    order_date: {
      type: dataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: dataTypes.STRING(50),
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
