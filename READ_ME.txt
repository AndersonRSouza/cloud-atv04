PARA BAIXAR A APLICAÇÃO
docker pull andersonrsouza/aulacloud:0.0.1

link Github e DockerHub
https://github.com/AndersonRSouza/cloud-atv04 e https://hub.docker.com/repository/docker/andersonrsouza/aulacloud/general

PARA QUE FUNCIONE O BANCO DE DADOS E A APLICAÇÃO FAZER O DOWNLOAD DOS SEGUINTES PROGRAMAS WORCKBENCH E XAMPP
https://dev.mysql.com/downloads/workbench/
https://www.apachefriends.org/download.html

CREATE DATABASE aula-cloud-04;

CREATE TABLE Clientes (
  customer_id INT PRIMARY KEY,
  primeiro_nome VARCHAR(50),
  último_nome VARCHAR(50),
  email VARCHAR(100),
  número_telefone VARCHAR(20),
  endereço VARCHAR(100),
  cidade VARCHAR(50),
  estado VARCHAR(50),
  código_postal VARCHAR(20)
);

INSERT INTO Clientes (customer_id, primeiro_nome, último_nome, email, número_telefone, endereço, cidade, estado, código_postal)
VALUES (1, 'João', 'Silva', 'joao@email.com', '123456789', 'Rua A', 'São Paulo', 'SP', '01234-567');

INSERT INTO Clientes (customer_id, primeiro_nome, último_nome, email, número_telefone, endereço, cidade, estado, código_postal)
VALUES (2, 'Maria', 'Santos', 'maria@email.com', '987654321', 'Avenida B', 'Rio de Janeiro', 'RJ', '98765-432');

INSERT INTO Clientes (customer_id, primeiro_nome, último_nome, email, número_telefone, endereço, cidade, estado, código_postal)
VALUES (3, 'Pedro', 'Ferreira', 'pedro@email.com', '654321987', 'Praça C', 'Belo Horizonte', 'MG', '54321-876');

CASO NÃO ENCONTRE NO CÓDIGO ESSE SÃO OS DADOS PARA O BANCO
host: 'localhost',
  user: 'root',
  password: '',
  database: 'aula_cloud_04'

