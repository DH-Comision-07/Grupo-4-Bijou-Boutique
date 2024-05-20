module.exports = (sequelize, dataTypes) => {
  let alias = "User";
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
    surname: {
      type: dataTypes.STRING(95),
      allowNull: false,
    },
    password: {
      type: dataTypes.STRING(95),
      allowNull: false,
    },
    email: {
      type: dataTypes.STRING(95),
      allowNull: false,
    },
  };
  let config = {
    timestamps: false,
    tableName: "users",
  };
  const User = sequelize.define(alias, cols, config);

  User.associate = function (models) {
    User.hasMany(models.Orders, {
      as: "orders",
      foreignKey: "id_user",
    });
  };

  return User;
};
