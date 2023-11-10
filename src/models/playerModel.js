import { DataTypes } from "sequelize";
import dbsequelize from "../config/db.js"

const Player = dbsequelize.define('tb_Players', {
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
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
      allowNull: false
    },
    bithday: {
      type: DataTypes.DATE
    },
    portrait_img: {
      type: DataTypes.STRING(255)
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  });

export default Player;