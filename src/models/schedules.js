"use strict";
const { Model, Sequelize } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class schedules extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      schedules.hasMany(models.presences);
      schedules.hasMany(models.materials);
      schedules.belongsTo(models.classes, { foreignKey: "class_id" });
    }
  }
  schedules.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      class_id: DataTypes.INTEGER(11),
      name: DataTypes.STRING,
      code: DataTypes.STRING(6),
      start: DataTypes.DATE,
      end: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "schedules",
    }
  );
  return schedules;
};
