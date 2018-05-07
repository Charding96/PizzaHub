const bcrypt = require('bcrypt-nodejs');


module.exports = (sequelize, DataTypes) => {
	const Cooks = sequelize.define('Cooks', {

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
		ratings: {
      		type: DataTypes.ARRAY(DataTypes.REAL)
    	}
	})



	Cooks.associate = (models) => {
		models.Cooks.belongsTo(models.Stores);
	}

	Cooks.beforeCreate( (cook) => {
		new sequelize.Promise((resolve) => {
			bcrypt.hash(cook.password_hash, null, null, (err, hashedPassword) => {
				resolve(hashedPassword);
			});
		})
		  .then((hashedPw) => {
		  	cook.password_hash = hashedPw;
		  })
	});

	return Cooks;


}