const express = require('express')

const app = express()
const PORT = 3000

// Middleware para entender JSON nas requisições
app.use(express.json())

// Primeira rota — só pra confirmar que o servidor tá vivo
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Servidor do EscolaVirtual funcionando!' })
})

// Liga o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})