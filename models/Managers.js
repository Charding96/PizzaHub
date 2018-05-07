const bcrypt = require('bcrypt-nodejs');


module.exports = (sequelize, DataTypes) => {
	const Managers = sequelize.define('Managers', {

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
	});

	Managers.associaate = (models) => {
		models.Managers.hasOne(models.Stores);
	}


	Managers.beforeCreate( (manager) => {
		new sequelize.Promise((resolve) => {
			bcrypt.hash(manager.password_hash, null, null, (err, hashedPassword) => {
				resolve(hashedPassword);
			});
		})
		  .then((hashedPw) => {
		  	manager.password_hash = hashedPw;
		  })
	});

	return Managers;

}