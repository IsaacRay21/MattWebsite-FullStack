module.exports = (sequelize, DataTypes) => {
    const Hero = sequelize.define("Hero", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            default: 1,
            validate: {
                is: 1,
            }
        },
        title: {
            type: DataTypes.STRING,
            allowNull: true
        },
        button_text: {
            type: DataTypes.STRING,
            allowNull: true
        },
        photo_filename: {
            type: DataTypes.STRING,
            allowNull: true
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
        timestamps: true ,
        beforeCreate: async (hero, options) => {
            const count = await Hero.count();
            if (count >= 1) {
                throw new Error('Only one hero entry is allowed');
            }
        }
    });  
    return Hero
}