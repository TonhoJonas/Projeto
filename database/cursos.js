const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cursos', {
    idCurso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    titulo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    descricao: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    preco: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    tipo: {
      type: DataTypes.ENUM('gratuito','pago'),
      allowNull: true
    },
    idInstrutor: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'instrutores',
        key: 'idInstrutor'
      }
    },
    imagemCurso: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    linkCurso: {
      type: DataTypes.STRING(500),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cursos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idCurso" },
        ]
      },
      {
        name: "idInstrutor",
        using: "BTREE",
        fields: [
          { name: "idInstrutor" },
        ]
      },
    ]
  });
};
