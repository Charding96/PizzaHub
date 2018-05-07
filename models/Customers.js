const bcrypt = require('bcrypt-nodejs');


module.exports = (sequelize, DataTypes) => {
	const Customers = sequelize.define('Customers', {

		firstName: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: true,
			},
		},
		lastName: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: true,
			},
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			validate: {
				notEmpty: true,
				isAlphanumeric: true,
			},
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			validate: {
				notEmpty: true,
				isEmail: true,
			},
		},
		password_hash: {
			type: DataTypes.STRING,
		},
		password: {
			type: DataTypes.VIRTUAL,
			validate: {
				notEmpty: true,
			}
		},
		VIP: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			validate: {
				notEmpty: true
			}
		}
		ratings: {
      		type: DataTypes.ARRAY(DataTypes.REAL)
    	}
	})

	Customers.associate = (models) => {
		models.Customers.belongsToMany(models.Stores);
	}


//Customers.beforeCreate( (customer) => {

//})



	return Customers
}