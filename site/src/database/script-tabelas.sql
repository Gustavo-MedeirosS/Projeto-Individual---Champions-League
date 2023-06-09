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

create table consultaTimes (
idPesquisa int primary key auto_increment,
nomeTime varchar(45),
qtdConsulta int
) auto_increment = 0;

insert into consultaTimes values
	(null, 'Ajax', 2),
	(null, 'Atlético de Madrid', 0),
	(null, 'Barcelona', 0),
	(null, 'Bayer Leverkusen', 0),
	(null, 'Bayern de Munique', 0),
	(null, 'Benfica', 0),
	(null, 'Borussia Dortmund', 0),
	(null, 'Brugge', 0),
	(null, 'Celtic', 0),
	(null, 'Chelsea', 0),
	(null, 'Copenhagen', 0),
	(null, 'Dinamo Zagreb', 0),
	(null, 'Frankfurt', 0),
	(null, 'Inter de Milão', 0),
	(null, 'Juventus', 0),
	(null, 'Liverpool', 0),
	(null, 'Maccabi Haifa', 0),
	(null, 'Manchester City', 0),
	(null, 'Milan', 0),
	(null, 'Napoli', 0),
	(null, 'Olympique Marseille', 0),
	(null, 'PSG', 0),
	(null, 'Porto', 0),
	(null, 'Rangers', 0),
	(null, 'Leipzig', 0),
	(null, 'Salzburg', 0),
	(null, 'Real Madrid', 0),
	(null, 'Sevilla', 0),
	(null, 'Shakhtar Donetsk', 0),
	(null, 'Sporting', 0),
	(null, 'Tottenham', 0),
	(null, 'Viktoria Plzen', 0);

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

