module.exports = (sequelize, DataTypes) => {
    const About = sequelize.define("About", {
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
        filename: {
            type: DataTypes.STRING,
            allowNull: true
        },
        instagram_url: {
            type: DataTypes.STRING,
            allowNull: true
        },
        linkedin_url: {
            type: DataTypes.STRING,
            allowNull: true
        },
        phone_number: {
            type: DataTypes.STRING,
            allowNull: true
        },
        email: {
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
        timestamps: true,
        beforeCreate: async (hero, options) => {
            const count = await Hero.count();
            if (count >= 1) {
                throw new Error('Only one about entry is allowed');
            }
        }
    }); 
    return About
}