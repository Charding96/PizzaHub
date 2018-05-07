module.exports = (sequelize, DataTypes) =>  {

	const Pizzas = sequelize.define('Pizzas', {

		name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: true,
			},
		},

		size : {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: true
			}
		},

		crust : {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: true
			}
		},

		sauce : {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: true
			}
		},

		toppings : {
			type: DataTypes.ARRAY(DataTypes.STRING),
			allowNull: false,
			validate: {
				notEmpty: true
			}
		},

		options : {
			type: DataTypes.ARRAY(DataTypes.STRING),
			allowNull: false,
			validate: {
				notEmpty: true
			}
		},

		ratings : {
			type: DataTypes.ARRAY(DataTypes.REAL),
		}


	});



	return Pizzas

}