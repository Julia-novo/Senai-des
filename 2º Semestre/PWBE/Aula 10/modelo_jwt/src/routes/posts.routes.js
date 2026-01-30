const postsController = require("../controllers/posts.controller");

const express = require('express');

const validate = require("../middlewares/auth")
const{ validaGerente, validarEditor } = require("../middlewares/valida.Cargo")

const postsRoutes = express.Router();

postsRoutes.get("/posts", postsController.listarPosts);
postsRoutes.get("/posts",postsController.buscarPosts);
postsRoutes.delete("/posts/:id",validate, validaGerente, postsController.excluirPost);
postsRoutes.get("/posts", postsController.totalPosts);
postsRoutes.put("/posts", postsController.atualizarPost);

postsRoutes.post('/posts', validate, validarEditor, postsController.createpost);

module.exports = postsRoutes;