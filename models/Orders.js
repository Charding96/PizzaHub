module.exports = (sequelize, DataTypes) => {
	
	const Orders = sequelize.define('Orders', {
		price: {
			type: DataTypes.REAL,
		},
		accepted: {
			type: DataTypes.BOOLEAN,
		},
		made: {
			type: DataTypes.BOOLEAN,
		},
		enRoute: {
			type: DataTypes.BOOLEAN,
		},
		delivered: {
			type: DataTypes.BOOLEAN
		},
		deliverAddress: {
			type: DataTypes.STRING,
		},

	});	


	Orders.associate = (models) => {
		models.Orders.belongsTo(models.Customers);
		models.Orders.hasMany(models.Pizzas);
		models.Orders.belongsTo(models.Deliverers);
		models.Orders.belongsTo(models.Cooks);
	}


	return Orders;
}