'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      //one to many
      this.hasMany(models.Airport,{
        foreignKey:'cityId',
      });
    }
  }

  //this is the mistake if you do this it will give error for
  //Unknown column 'unique' in 'field list' 
  // City.init({

  //   name: DataTypes.STRING,
  //   unique:true,
  //   allowNull: false,
  // }, {
  //   sequelize,
  //   modelName: 'City',
  // });

  

  City.init({
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'City',
  });
  return City;
};