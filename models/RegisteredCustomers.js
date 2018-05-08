module.exports = (sequelize, DataTypes) => {

	const RegisteredCustomers = sequelize.define('RegisteredCustomers', {
		status: DataTypes.STRING
	});


	return RegisteredCustomers;
}