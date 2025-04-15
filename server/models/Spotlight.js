module.exports = (sequelize, DataTypes) => {
    const Spotlight = sequelize.define("Spotlight", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            defaultValue: 1,
            validate: 1,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: true
        },
        description: {
            type: DataTypes.TEXT,
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
        timestamps: true,
        beforeCreate: async (hero, options) => {
            const count = await Hero.count();
            if (count >= 1) {
                throw new Error('Only one about entry is allowed');
            }
        }
    }); 
    return Spotlight
}