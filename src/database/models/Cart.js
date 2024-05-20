module.exports = (sequelize, dataTypes) => {
  let alias = "Carts";
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
    total_price: {
      type: dataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    created_at: {
      type: dataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
    updated_at: {
      type: dataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
  };
  let config = {
    tableName: "carts",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  };
  const Cart = sequelize.define(alias, cols, config);

  Cart.associate = function (models) {
    Cart.belongsTo(models.User, {
      as: "user",
      foreignKey: "id_user",
    });
    Cart.hasMany(models.CartItems, {
      as: "items",
      foreignKey: "cart_id",
    });
  };

  return Cart;
};
