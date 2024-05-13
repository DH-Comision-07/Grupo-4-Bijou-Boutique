module.exports = (sequelize, dataTypes) => {
    let alias = 'Color';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        color: {
            type: dataTypes.STRING(95),
            allowNull: false
        },
        id_product: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
       
    };
    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false,
        tableName: 'colors'
    }
    const Color = sequelize.define(alias, cols, config); 

    Color.associate = function (models) {
        Color.belongsTo(models.Product, {
            as: "colores",
            foreignKey: "id_nolasabemosaun"
        })
    }

    return Colors
}