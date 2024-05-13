module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(95),
            allowNull: false
        },
        surname: {
            type: dataTypes.STRING(95),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(95),
             allowNull: false
       
        },
    };
    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false,
        tableName: 'users'
    }
    const User = sequelize.define(alias, cols, config); 

    User.associate = function (models) {
        User.belongsTo(models.Product, {
            as: "venta",
            foreignKey: "id_nolasabemosaun"
        })
    }

    return User;
};