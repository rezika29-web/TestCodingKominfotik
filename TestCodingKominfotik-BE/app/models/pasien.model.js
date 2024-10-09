module.exports = (sequelize, DataTypes) => {
    const Pasien = sequelize.define("pasien", {
          id: {
            autoIncrement: true,
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true
          },  
          nik: {
            type: DataTypes.STRING(50),
            allowNull: true
          },
         nama: {
            type: DataTypes.STRING(50),
            allowNull: true
          },
          tempatlahir: {
            type: DataTypes.STRING(50),
            allowNull: true
          },
          tgllahir : {
            autoIncrement: false,
            type: DataTypes.STRING(50),
            allowNull: false,
            primaryKey: false
          },
          provinsi: {
            type: DataTypes.STRING(50),
            allowNull: true
          },
          kabkot: {
            type: DataTypes.STRING(50),
            allowNull: true
          },
          kec: {
            type: DataTypes.STRING(50),
            allowNull: true
          },
          kel: {
            type: DataTypes.STRING(50),
            allowNull: true
          },
          alamat: {
            autoIncrement: false,
            type: DataTypes.TEXT,
            allowNull: false,
            primaryKey: false
          },
    }, {
      sequelize,
      tableName: 'pasien',
      timestamps: true,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [
            { name: "id" },
          ]
        },
      ]
    });

  
    return Pasien;
  }; 
