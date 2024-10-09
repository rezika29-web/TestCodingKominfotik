module.exports = (sequelize, DataTypes) => {
    const Kunjungan = sequelize.define("kunjungan", {
          id: {
            autoIncrement: true,
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true
          },  
          id_pasien: {
            type: DataTypes.STRING(50),
            allowNull: true
          },
         tgl_kunjungan: {
            type: DataTypes.TEXT,
            allowNull: true
          },
          tgl_kunjung_kembali: {
            type: DataTypes.STRING(255),
            allowNull: true
          },
          status : {
            autoIncrement: false,
            type: DataTypes.STRING(50),
            allowNull: false,
            primaryKey: false
          },
    }, {
      sequelize,
      tableName: 'kunjungan',
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

  
    return Kunjungan;
  }; 
