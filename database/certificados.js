const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('certificados', {
    idCertificado: {
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
    idCurso: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'cursos',
        key: 'idCurso'
      }
    },
    dataDeEmissao: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'certificados',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idCertificado" },
        ]
      },
      {
        name: "idUsuario",
        using: "BTREE",
        fields: [
          { name: "idUsuario" },
        ]
      },
      {
        name: "idCurso",
        using: "BTREE",
        fields: [
          { name: "idCurso" },
        ]
      },
    ]
  });
};
