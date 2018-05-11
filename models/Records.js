module.exports = (sequelize, DataTypes) => {
	
	const Records = sequelize.define( 'Records', {
		description: {
			type: DataTypes.TEXT
		}
	})


	Records.associate = (models) => {
		models.Records.belongsTo(models.Stores);
		models.Records.hasOne(models.RegisteredCustomers);
	}


	return Records;
}