SELECT * FROM db_videogames_200527.tbb_players;
INSERT INTO `db_videogames_200527`.`tbb_players` (`name`, `email`, `password`, `nickname`, `bithday`, `portrait_img`,`createdAt`,`updatedAt`) 
VALUES ('Crystian', 'crys@gmail.com', '12345', 'crystiann', '2002-07-24', 'asdfasdwq',date(now()),date(now())),
('Enrique', 'enrique@gmail.com', '8765', 'enriqueee', '2002-07-24', 'asdfasdwq',date(now()),date(now())),
('Uri', 'uriesdf@gmail.com', 'urie234', 'uri', '2002-07-24', 'asdasdasasfsdgddasd',date(now()),date(now())),
('marco', 'cmarco@gmail.com', '12dfgree34', 'marco', '2002-07-24', '35235v42dfsdf',date(now()),date(now())),
('gabo', 'gabo@gmail.com', '12dfgfh34', 'gab', '2002-07-24', 'sdfsdfewerewrwe',date(now()),date(now())),
('daniela', 'daniela@gmail.com', '1wer234', 'danisss', '2002-07-24', 'sdf43fwfs',date(now()),date(now())),
('fabi', 'fabi@gmail.com', '1asd234', 'fabiss', '2002-07-24', 'ewer423r4343',date(now()),date(now()));

INSERT INTO `db_videogames_200527`.`tb_players` (`name`, `email`, `password`, `nickname`, `bithday`, `portrait_img`,`createdAt`,`updatedAt`) 
VALUES ('prueba', 'prueba@gmail.com', '12345', 'prueba', '2002-07-24', 'asdfasdwq',date(now()),date(now()));

SELECT * FROM db_videogames_200527.tbb_games;

INSERT INTO `db_videogames_200527`.`tbb_games` (`idPlayer`, `level`, `startGame`, `endGame`, `score_st`, `score_end`,`createdAt`,`updatedAt`) 
VALUES ('2', '1', '00:00:00', '00:02:02', '0.0', '12.2',date(now()),date(now()));
