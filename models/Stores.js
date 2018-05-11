module.exports = (sequelize, DataTypes) => {
	const Stores = sequelize.define('Stores', {

		brandName: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: true
			},
		},
		latitude: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			validate: {
				notEmpty: true
			},
		},
		longitude: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			validate: {
				notEmpty: true
			}
		},
		ratings: {
			type: DataTypes.ARRAY(DataTypes.REAL),
			allowNull: false,
			validate: {
				notEmpty: true
			},
		},
	})


	Stores.associate = (models) => {
		models.Stores.belongsTo(models.Managers);
		models.Stores.hasMany(models.Cooks);
		models.Stores.hasMany(models.Deliverers);
	}



	return Stores
}