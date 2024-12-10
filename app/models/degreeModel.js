const { DataTypes } = require('sequelize');
const sequelize = require('../connection/db');


const Degree = sequelize.define('Certificate', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false, 
        validate: {
            notEmpty: {
                msg: 'Name cannot be empty'
            }
        }
    },
    degree: {
        type: DataTypes.STRING,
        allowNull: false, 
        validate: {
            notEmpty: {
                msg: 'Degree cannot be empty'
            }
        }
    },
    college: {
        type: DataTypes.STRING,
        allowNull: false, 
        validate: {
            notEmpty: {
                msg: 'College cannot be empty'
            }
        }
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false, 
        validate: {
            isInt: {
                msg: 'Year must be an integer'
            },
            notEmpty: {
                msg: 'Year cannot be empty'
            }
        }
    },
    division: {
        type: DataTypes.STRING,
        allowNull: false, 
        validate: {
            notEmpty: {
                msg: 'Division cannot be empty'
            }
        }
    },
    date: {
        type: DataTypes.DATEONLY, 
        allowNull: false, 
        validate: {
            isDate: {
                msg: 'Date must be in valid format (YYYY-MM-DD)'
            },
            notEmpty: {
                msg: 'Date cannot be empty'
            }
        }
    }
}, {
    tableName: 'certificates',
    timestamps: false, 
    defaultScope: {
        order: [['date', 'asc']] 
    }
});



module.exports = Degree;
