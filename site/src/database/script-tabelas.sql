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

create table pontuacaoQuiz (
idPontuacao int auto_increment,
pontuacao int,
fkUsuario int,
constraint fkUser foreign key (fkUsuario) references usuario(idUsuario),
constraint pkComposta primary key (idPontuacao, fkUsuario)
);


-- SELECTS -------------------------------------------------------------
select * from usuario;

select * from usuario join timeFavorito 
	on fkTimeFavorito = idTime;
    
select 
count(u.fkTimeFavorito),
t.nome 
from timeFavorito as t join usuario as u
	on idTime = fkTimeFavorito
    group by t.nome;

-- SELECTS SOBRE IDADE
select (year(current_timestamp()) - year(dataNascimento)) as Idade from usuario where idUsuario = 106;
select (year(current_timestamp()) - year(dataNascimento)) as Idade from usuario;

select round(avg((year(current_timestamp()) - year(dataNascimento))), 1) from usuario;

select 
max((year(current_timestamp()) - year(dataNascimento))) as 'Idade Máxima',
min((year(current_timestamp()) - year(dataNascimento))) as 'Idade Mínima'
from usuario;

