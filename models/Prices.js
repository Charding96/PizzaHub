module.exports = (sequelize, DataTypes) => {

	const Prices = sequelize.define( 'Prices', {

		category: {
			type:DataTypes.STRING,
			allowNull: false,
			validation:{
				notEmpty: true
			}
		},
		description: {
			type: DataTypes.STRING,
			allowNull: true,
			validation: {
				notEmpty: true
			}

		},

		price: {
			type: DataTypes.REAL,
			allowNull: false,
			validation: {
				notEmpty: true
			}
		}
	})





	return Prices

}