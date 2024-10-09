module.exports = (sequelize, DataTypes) => {
    const Kesehatan = sequelize.define("kesehatan", {
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
         rincian_gejala: {
            type: DataTypes.TEXT,
            allowNull: true
          },
          diagnosa: {
            type: DataTypes.STRING(255),
            allowNull: true
          },
          test_yg_dilakukan : {
            autoIncrement: false,
            type: DataTypes.STRING(50),
            allowNull: false,
            primaryKey: false
          },
          status_diagnosa: {
            type: DataTypes.STRING(50),
            allowNull: true
          },
    }, {
      sequelize,
      tableName: 'kesehatan',
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

  
    return Kesehatan;
  }; 
