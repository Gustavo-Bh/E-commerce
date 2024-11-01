const express = require('express');
const router = express.Router();

// Exemplo de rota
router.post('/login', (req, res) => {
  // Lógica de login aqui
  res.send('Login realizado');
});

// Exporta o roteador
module.exports = router;
