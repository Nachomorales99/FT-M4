const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define(
		'Character',
		{
			code: {
				type: DataTypes.STRING(5),
				primaryKey: true,
				allowNull: false,
				unique: true,
				validate: {
					constumValidator(value) {
						if (value.toUpperCase() === 'HENRY') throw Error('Error, is HENRY');
						if (value.toLowerCase() === 'henry') throw Error('Error, is henry');
					},
				},
			},
			name: {
				type: DataTypes.STRING,
				unique: true,
				allowNull: false,
				validate: {
					notIn: [['Henry', 'SoyHenry', 'Soy Henry']],
				},
			},
			age: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			race: {
				type: DataTypes.ENUM(
					'Human',
					'Elf',
					'Machine',
					'Demon',
					'Animal',
					'Other',
				),

				defaultValue: 'Other',
			},
			hp: {
				type: DataTypes.FLOAT,
				allowNull: false,
			},
			mana: {
				type: DataTypes.FLOAT,
				allowNull: false,
			},
			date_added: {
				type: DataTypes.DATEONLY,
				defaultValue: DataTypes.NOW,
			},
		},
		{
			timestamps: false,
		},
	);
};
