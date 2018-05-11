module.exports = (sequelize, DataTypes) => {

	const RegisteredCustomers = sequelize.define('RegisteredCustomers', {
		StoreId:DataTypes.INTEGER,
		CustomerId: DataTypes.INTEGER,
		VIP: DataTypes.BOOLEAN
	});


	return RegisteredCustomers;
}