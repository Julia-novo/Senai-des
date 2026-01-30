1-
SELECT * FROM clientes_loja WHERE cidade = 'São Paulo';
SELECT * FROM clientes_loja WHERE status = 'Ativo';
SELECT * FROM clientes_loja WHERE idade > '40';
SELECT * FROM clientes_loja WHERE renda_mensal BETWEEN '3.000' AND '5.000';
SELECT * FROM clientes_loja WHERE data_cadastro >= '2025-01-01';
SELECT * FROM clientes_loja WHERE email LIKE '%@%';
2-
SELECT * FROM clientes_loja ORDER BY nome ASC;
SELECT * FROM clientes_loja ORDER BY renda_mensal ASC;
SELECT * FROM clientes_loja  WHERE cidade ='Curitiba'
ORDER BY idade ASC;
SELECT * FROM clientes_loja  WHERE status ='Ativo'
ORDER BY data_cadastro ASC;
3-
SELECT
  nome AS "Nome Completo",
  idade AS "Idade(Anos)"
FROM clientes_loja;
SELECT
  nome AS "Nome Completo",
  renda_mensal AS "Renda (R$)",
  status AS "Situação"
FROM clientes_loja;
4-
SELECT * FROM clientes_loja LIMIT 5;
SELECT * FROM clientes_loja LIMIT 10;
SELECT * FROM clientes_loja LIMIT 10 OFFSET 10;
SELECT * FROM clientes_loja LIMIT 5 OFFSET 5;
5-
SELECT * FROM clientes_loja WHERE status = 'Ativo';
SELECT * FROM clientes_loja WHERE idade > '30';
SELECT * FROM clientes_loja WHERE cidade LIKE '%Rio de Janeiro%';
SELECT * FROM clientes_loja WHERE cidade LIKE '%São Paulo%';
SELECT * FROM clientes_loja WHERE email LIKE '%@%';
SELECT * FROM clientes_loja WHERE renda_mensal >'6000';
SELECT * FROM clientes_loja WHERE email LIKE '%@%' AND renda_mensal > '6000';
SELECT * FROM clientes_loja WHERE (status = "pendente" OR status = "inativo") AND idade > 50;