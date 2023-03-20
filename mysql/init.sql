-- Usa o banco de dados node_db caso ele exista, senão cria um novo
use node_db;

-- Cria a tabela peoples. O campo id é auto increment e a chave primária. O campo name é uma string de até 255 caracteres
create table peoples(id int not null auto_increment, name varchar(255), primary key(id));

-- Insere um registro na tabela peoples
insert into peoples(name) values('Felipe Augusto');