module.exports = (sequelize, DataTypes) => {
    const Photo = sequelize.define("Photo", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: true
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        photo_filename: {
            type: DataTypes.STRING,
            allowNull: true
        },
        main_carousel: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        story_carousel: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
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
        timestamps: true
    });  
    return Photo
}