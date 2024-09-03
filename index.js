const express = require('express')

const { Server } = require('socket.io')
const { createServer } = require('node:http')
const validateEntity = require('./controllers/MercadoPago.controller.js')
const port = 3000

const app = express()
const server = createServer(app)
const io = new Server(server, {
	cors: {
		origin: '*',
	},
})

app.use(express.json())

io.on('connection', (socket) => {
	console.log('a user connected ' + socket.id)

	socket.on('disconnect', () => {
		console.log('user disconnected')
	})
})

app.post('/webhookMP', validateEntity, (req, res) => {
	console.log(req.body)
	io.emit('webhook', { data: req.body })
	res.json({ message: 'success', data: req.body })
})

server.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`)
})
