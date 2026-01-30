DROP DATABASE biblioteca;
CREATE DATABASE biblioteca;

USE biblioteca;

CREATE TABLE usuarios(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR (100) NOT NULL,
    email VARCHAR (100),
    nascimento DATE
);

CREATE TABLE Livros(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR (100) NOT NULL,
    autor VARCHAR (100) NOT NULL,
    publicacao VARCHAR(4)
);

CREATE TABLE Emprestimos(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    usuario_id INTEGER,
    livro_id INTEGER,
    data_emprestimo DATE,
    data_devolucao DATE,
    FOREIGN key (usuario_id) REFERENCES usuarios(id),
    FOREIGN KEY (livro_id) REFERENCES livros(id)
);

INSERT INTO usuarios VALUES (DEFAULT, "fulano", "fulano@gmail.com", "2009-10-10");
INSERT INTO usuarios VALUES (DEFAULT, "Julia Novo", "julianovo@gmail.com", "2008-01-09");
INSERT INTO usuarios VALUES (DEFAULT, "Maria fernanda", "mafer@gmail.com", "2007-03-20");

SELECT * FROM  usuarios;

SELECT * FROM `usuarios` WHERE id=2;
use biblioteca;
INSERT INTO livros VALUES (DEFAULT, "Diário de Anne Frank","Anne Frank", "1947");
use biblioteca;
INSERT INTO livros VALUES (DEFAULT, "As aventuras de Sherlock Holmes","Árthur Conan Doyle","1892");
use biblioteca;
INSERT INTO livros VALUES (DEFAULT, "Os sete maridos de Evelyn Hugo","Taylor Jenkins Reid
","1947");
use biblioteca;
SELECT * FROM livros;
use biblioteca;
INSERT INTO emprestimos
VALUES(DEFAULT,"1", "2", "2025-07-30", "2025-08-30");
use biblioteca;
INSERT INTO emprestimos
VALUES(DEFAULT, "2", "3", "2025-07-30", "2025-08-30");
use biblioteca;
SELECT * FROM livros;
use biblioteca;
SELECT usuario_id, data_emprestimo FROM emprestimos;	
SELECT * FROM emprestimos;
SELECT usuario_id, data_emprestimo FROM emprestimos;	

UPDATE emprestimos
SET data_devolucao = "2025-09-09"
WHERE id=1;

UPDATE emprestimos
SET data_devolucao="2025-12-01"
WHERE id=2;

SELECT data_devolucao FROM emprestimos;

				
DELETE FROM usuarios
WHERE id = 3;

SELECT * FROM `usuarios`;

SELECT * FROM `usuarios` WHERE id = 3;	