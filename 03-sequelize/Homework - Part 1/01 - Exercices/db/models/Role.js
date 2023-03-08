const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('Role', {
		name: {
			type: DataTypes.STRING,
			unique: true,
			allowNull: false,
		},
		decription: {
			type: DataTypes.STRING,
		},
	});
};
