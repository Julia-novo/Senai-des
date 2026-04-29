const prisma = require("../data/prisma");

const cadastrarPublicacao = async (req, res) => {
  try {
    const { nome, data, descricao } = req.body;
    const publicacao = await prisma.publicacao.create({
      data: {
        nome,
        data,
        descricao
      }
    });
    res.status(201).json(publicacao);
  } catch (error) {
    res.status(400).json({ error: "Erro ao cadastrar publicação" });
  }
};

const ListarPublicacao = async (req, res) => {
  try {
    const publicacao = await prisma.publicacao.findMany();
    res.json(publicacao);
  } catch (error) {
    res.status(500).json({ error: "Erro ao listar publicações" });
  }
};

const buscarPublicacao = async (req, res) => {
  try {
    const { id } = req.params;
    const publicacao = await prisma.publicacao.findUnique({
      where: { id: Number(id) }
    });
    if(publicacao) {
      res.status(200).json(publicacao);
    } else {
      res.status(404).json({ error: "Publicação não encontrada" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar publicação" });
  }
};

const atualizarPublicacao = async (req, res) => {
  try{
    const { id } = req.params;
    const { nome, data, descricao } = req.body;
    const publicacao = await prisma.publicacao.update({
      where: { id: Number(id) },
      data: { nome, data, descricao }
    });
    res.status(200).json(publicacao);
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar publicação" });

  }
};

const excluirPublicacao = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.publicacao.delete({
      where: { id: Number(id) }
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Erro ao excluir publicação" });
  }
};


module.exports = {
  cadastrarPublicacao,
  ListarPublicacao,
  buscarPublicacao,
  atualizarPublicacao,
  excluirPublicacao
};