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
		}
	})

	Customers.associate = (models) => {
		models.Customers.hasMany(models.Orders);
	}

	Customers.beforeCreate((customer) => 
		new sequelize.Promise((resolve) => {
			bcrypt.hash(customer.password, null, null, (err, hashedPassword) => {
				resolve(hashedPassword);
			});
		}).then((hashedPw) => {
			console.log(hashedPw);
		  	customer.password_hash = hashedPw;
		  })
	);


	

	return Customers;
}