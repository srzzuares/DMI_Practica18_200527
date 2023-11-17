import { DataTypes } from "sequelize";
import dbsequelize from "../config/db.js"
import Player from "./playerModel.js";

const Partida = dbsequelize.define('tbb_Game', {
    idPartida: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
    idPlayer: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      references: {
        model: Player,
        key: 'idPlayer'
      }
    },
    level: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      allowNull: true,
    },
    startGame: {
      type: DataTypes.TIME,
      defaultValue: '00:00:00',
      allowNull: true
    },
    endGame: {
      type: DataTypes.TIME,
      defaultValue:'00:02:00',
      allowNull: true,
    },
    score_st: {
      type: DataTypes.FLOAT,
      defaultValue:0.0,
      allowNull: true,
    },
    score_end: {
      type: DataTypes.FLOAT,
      defaultValue:1200.2,
      allowNull: true,
    },
    previos_game_leve_ID: {
      type: DataTypes.INTEGER,
      defaultValue: null,
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

  Partida.belongsTo(Partida, {foreignKey: 'previos_game_leve_ID'});

export default Partida;