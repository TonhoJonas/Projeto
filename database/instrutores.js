const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('instrutores', {
    idInstrutor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idUsuario: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuarios',
        key: 'idUsuario'
      }
    },
    cpf: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    'endereço': {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nomeCompleto: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    celular: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    dataDeNascimento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'instrutores',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idInstrutor" },
        ]
      },
      {
        name: "idUsuario",
        using: "BTREE",
        fields: [
          { name: "idUsuario" },
        ]
      },
    ]
  });
};
