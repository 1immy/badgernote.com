import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db";
import User from "./User";

class Note extends Model {
  public id!: number;
  public title!: string;
  public description!: string;
  public fileUrl!: string;
  public userId!: number;
}

Note.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false },
    fileUrl: { type: DataTypes.STRING, allowNull: false },
  },
  { sequelize, modelName: "note" }
);

Note.belongsTo(User, { foreignKey: "userId" });
User.hasMany(Note, { foreignKey: "userId" });

export default Note;