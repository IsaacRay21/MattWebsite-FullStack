module.exports = (sequelize, DataTypes) => {
    const Link = sequelize.define("Link", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        link_title: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        link_photo_filename: {
            type: DataTypes.STRING,
            allowNull: true
        },
        link_to: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
        }
    }, { 
        timestamps: true,
    }); 
    return Link
}