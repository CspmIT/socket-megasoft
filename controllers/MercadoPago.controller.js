function validateEntity(req, res, next) {
	// const xSignature = req.headers['x-signature']
	// const xRquestId = req.headers['x-request-id']

	// Obtengo el cuerpo del mensaje
	const query = req.query

	// Extraigo los parametros de la query
	// const dataID = query['data_id'] || ''

	next()

	// //Separo xSignature en partes
	// const parts = xSignature.split(',')

	// let ts
	// let hash

	// //Recorro las partes
	// parts.forEach((part) => {
	// 	const [key, value] = part.split('=')
	// 	if (key === 'ts') {
	// 		ts = value
	// 	} else if (key === 'v1') {
	// 		hash = value
	// 	}
	// })

	// // Definir la clave secreta
	// const secret = '089deec83d431e1bac5333629aa81794f942208e9d2bd0efc5c36042e7adb022'

	// // Generar la cadena de manifiesto
	// const manifest = `id:${dataID};request-id:${xRequestId};ts:${ts};`

	// // Crear una firma HMAC
	// const sha = crypto.createHmac('sha256', secret).update(manifest).digest('hex')

	// if (sha === hash) {
	// 	// Responder con éxito
	// } else {
	// 	// Responder con error
	// 	res.status(400).send('Firma no válida')
	// }
}

module.exports = validateEntity
