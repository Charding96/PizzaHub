module.exports = (sequelize, DataTypes) => {

	const CustomerNotifications = sequelize.define('CustomerNotifications', {
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
    	accepted: {
    		type: DataTypes.BOOLEAN
    	},
    	customerId: {
    		type: DataTypes.INTEGER
    	},
    	storeId: {
    		type: DataTypes.INTEGER
    	}
	});

	CustomerNotifications.afterUpdate((notification) => {
		if(notification.accepted === true){
			models.RegisteredCustomers.create({
				StoreId: notification.storeId,
				CustomerId: notification.customerId,
				VIP: false,
			}).then(() => {
				notification.destroy();
			});
		}
	});


	return CustomerNotifications;
}