-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql - banco local - ambiente de desenvolvimento
*/

create database ChampionsLeague;

use ChampionsLeague;

create table usuario(
idUsuario int primary key auto_increment,
nome varchar(50) not null,
dataNascimento date not null,
email varchar(50) not null,
constraint chkEmail check (email like '%@%'),
senha varchar(15) not null,
fkTimeFavorito int,
constraint fkTimeFav foreign key (fkTimeFavorito) references timeFavorito(idTime)
) auto_increment = 100;

create table timeFavorito(
idTime int primary key auto_increment,
nome varchar(45)
);

insert into timeFavorito values 
	(null, 'Real Madrid'),
	(null, 'Manchester City'),
	(null, 'Borussia Dortmund'),
	(null, 'Milan'),
	(null, 'Barcelona'),
	(null, 'Bayern de Munique'),
	(null, 'Paris Saint-Germain'),
	(null, 'Liverpool'),
	(null, 'Ajax'),
	(null, 'Inter de Milão'),
	(null, 'Benfica');

-- CREATE DATABASE aquatech;

-- USE aquatech;

-- CREATE TABLE usuario (
-- 	id INT PRIMARY KEY AUTO_INCREMENT,
-- 	nome VARCHAR(50),
-- 	email VARCHAR(50),
-- 	senha VARCHAR(50)
-- );

-- CREATE TABLE aviso (
-- 	id INT PRIMARY KEY AUTO_INCREMENT,
-- 	titulo VARCHAR(100),
-- 	descricao VARCHAR(150),
-- 	fk_usuario INT,
-- 	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
-- );

-- create table aquario (
-- /* em nossa regra de negócio, um aquario tem apenas um sensor */
-- 	id INT PRIMARY KEY AUTO_INCREMENT,
-- 	descricao VARCHAR(300)
-- );

/* esta tabela deve estar de acordo com o que está em INSERT de sua API do arduino - dat-acqu-ino */

-- create table medida (
-- 	id INT PRIMARY KEY AUTO_INCREMENT,
-- 	dht11_umidade DECIMAL,
-- 	dht11_temperatura DECIMAL,
-- 	luminosidade DECIMAL,
-- 	lm35_temperatura DECIMAL,
-- 	chave TINYINT,
-- 	momento DATETIME,
-- 	fk_aquario INT,
-- 	FOREIGN KEY (fk_aquario) REFERENCES aquario(id)
-- );


/*
comandos para criar usuário em banco de dados azure, sqlserver,
com permissão de insert + update + delete + select
*/

-- CREATE USER [usuarioParaAPIWebDataViz_datawriter_datareader]
-- WITH PASSWORD = '#Gf_senhaParaAPIWebDataViz',
-- DEFAULT_SCHEMA = dbo;

-- EXEC sys.sp_addrolemember @rolename = N'db_datawriter',
-- @membername = N'usuarioParaAPIWebDataViz_datawriter_datareader';

-- EXEC sys.sp_addrolemember @rolename = N'db_datareader',
-- @membername = N'usuarioParaAPIWebDataViz_datawriter_datareader';
