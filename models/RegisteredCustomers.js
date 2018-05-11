module.exports = (sequelize, DataTypes) => {

	const RegisteredCustomers = sequelize.define('RegisteredCustomers', {
		StoreId:{
			type: DataTypes.INTEGER,
		},
		CustomerId: {
			type: DataTypes.INTEGER,
		},
		VIP:{ 
			type: DataTypes.BOOLEAN,
		},
		ratings: {
      		type: DataTypes.ARRAY(DataTypes.REAL)
    	}
	});


	RegisteredCustomers.associate = (models) => {
		models.RegisteredCustomers.belongsTo(models.Records);
	}


	RegisteredCustomers.afterUpdate((customers) => {
		if(customers.ratings.length > 3){
			let averageRating = 0;
			let sum = 0;
			for(let i = customers.ratings.length - 1; i === customers.ratings.length - 5; i--){
				sum += customers.ratings[i];
			}
			averageRating = sum/4;
			if(averageRating > 4){
				customers.VIP = true;
			}
			else if(averageRating < 2 && averageRating > 1){
				customers.destroy();
			}
			else if(averageRating < 1){
				models.Customers.findOne({
					where: {
						id: customers.CustomerId
					}
				}).then((customer) => {
					models.Blacklist.create({
						firstName: customer.firstName,
						lastName: customer.lastName,
						username: customer.username,
						email: customer.email
					}).then(() => {
						customer.destroy();
					});
				});
			}
		}
	});

	return RegisteredCustomers;
}