"use strict";
const { Model, Sequelize } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class join_classes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      join_classes.belongsTo(models.users, { foreignKey: "user_id" });
      join_classes.hasMany(models.presences);
      join_classes.belongsTo(models.classes, { foreignKey: "class_id" });
    }
  }
  join_classes.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      user_id: DataTypes.UUID,
      class_id: DataTypes.INTEGER(11),
      role: {
        type: DataTypes.ENUM,
        values: ["student", "tutor", "facilitator"],
      },
    },
    {
      sequelize,
      modelName: "join_classes",
    }
  );
  return join_classes;
};
