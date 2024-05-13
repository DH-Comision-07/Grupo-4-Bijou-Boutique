module.exports = (sequelize, dataTypes) => {
    let alias = 'UserCategory';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        category: {
            type: dataTypes.STRING(95),
            allowNull: false
        },
        id_user: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
       
    };
    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false,
        tableName: 'categories'
    }
    const UserCategory = sequelize.define(alias, cols, config); 

    UserCategory.associate = function (models) {
        UserCategory.belongsTo(models.User, {
            as: "categories",
            foreignKey: "id_nolasabemosaun"
        })
    }

    return UserCategory;
};