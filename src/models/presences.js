"use strict";
const { Model, Sequelize } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class presences extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      presences.belongsTo(models.join_classes, { foreignKey: "join_class_id" });
      presences.belongsTo(models.schedules, { foreignKey: "schedule_id" });
    }
  }
  presences.init(
    {
      join_class_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      schedule_id: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: "presences",
    }
  );
  return presences;
};
