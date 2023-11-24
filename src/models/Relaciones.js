const Relacion = {};
import Player from "./playerModel.js";
import Partida from "./partidaModel.js";

Relacion.a=Partida.belongsTo(Partida, {foreignKey: 'previos_game_leve_ID'});
Relacion.b=Partida.belongsTo(Player, {foreignKey: 'idPlayer'});

export default Relacion;