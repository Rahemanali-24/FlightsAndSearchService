"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Airport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      //IF I DELETE CITY FROM DATABASE THEN TECHNICALLY ALL THE AIRPORTS 
      // WHICH ARE IN THE CITY AUTOMATICALLY DELETED 
      //THE MOMENT WHEN YOU DELETE THE CITY IT WILL DELETE CORRESPONDING AIRPORT

      this.belongsTo(models.City, {
        foreignKey: "cityId",
        onDelete: "CASCADE",
      });
    }
  }
  Airport.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: DataTypes.STRING,
      cityId: {
        type:DataTypes.INTEGER,
        allowNull:false,
      },
    },
    {
      sequelize,
      modelName: "Airport",
    }
  );
  return Airport;
};

