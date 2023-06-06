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
