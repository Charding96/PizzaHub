const bcrypt = require('bcrypt-nodejs');


module.exports = (sequelize, DataTypes) => {
	const Deliverers = sequelize.define('Deliverers', {

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


	Deliverers.associate = (models) => {
		models.Deliverers.belongsTo(models.Stores);
	}


	Deliverers.beforeCreate( (deliverer) => {
		new sequelize.Promise((resolve) => {
			bcrypt.hash(deliverer.password_hash, null, null, (err, hashedPassword) => {
				resolve(hashedPassword);
			});
		})
		  .then((hashedPw) => {
		  	deliverer.password_hash = hashedPw;
		  })
	});

	return Deliverers;



}