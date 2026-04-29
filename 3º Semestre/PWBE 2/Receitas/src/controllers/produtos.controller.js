const db = require("../data/db");

exports.listar = (req, res) => {
  db.query("SELECT * FROM produtos", (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};


exports.buscar = (req, res) => {
  const { id } = req.params;

  db.query("SELECT * FROM produtos WHERE id = ?", [id], (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results[0]);
  });
};


exports.cadastrar = (req, res) => {
  const { nome, categoria, preco, imagem, marca } = req.body;

  db.query(
    "INSERT INTO produtos (nome, categoria, preco, imagem, marca) VALUES (?, ?, ?, ?, ?)",
    [nome, categoria, preco, imagem, marca],
    (err, results) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Produto criado!", id: results.insertId });
    }
  );
};
exports.atualizar = (req, res) => {
  const { id } = req.params;
  const { nome, categoria, preco, imagem, marca } = req.body;

  db.query(
    "UPDATE produtos SET nome = ?, categoria = ?, preco = ?, imagem = ?, marca = ? WHERE id = ?",
    [nome, categoria, preco, imagem, marca, id],
    (err, results) => {
      if (err) return res.status(500).json(err);

      if (results.affectedRows === 0) {
        return res.status(404).json({ message: "Produto não encontrado!" });
      }

      res.json({ message: "Produto atualizado!" });
    }
  );
};

exports.excluir = (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM produtos WHERE id=?", [id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Produto deletado!" });
  });
}