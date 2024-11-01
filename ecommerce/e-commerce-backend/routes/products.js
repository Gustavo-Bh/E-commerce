const express = require('express');
const router = express.Router();

// Exemplo de rota
router.get('/', (req, res) => {
  // Lógica para listar produtos
  res.send('Lista de produtos');
});

// Exporta o roteador
module.exports = router;
