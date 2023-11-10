import { DataTypes } from "sequelize";
import dbsequelize from "../config/db.js"

const Player = dbsequelize.define('tbb_Players', {
    idPlayer: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "Anonimo"
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    nickname: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true
    },
    bithday: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    portrait_img: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    Estatus: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: "1"
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  });

export default Player;