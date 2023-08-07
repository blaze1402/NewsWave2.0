const express = require('express')
const cors = require('cors')
require('dotenv').config() 

const app = express()
const port = process.env.PORT
const apiKey = process.env.API_KEY

app.use(cors())

const fetchData = async (category) => {
	let data = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}`)
	let parsedData = await data.json()
	return parsedData
}

app.get('/general', async (req, res) => {
	res.send(await fetchData('general'))
	res.end()
})

app.get('/business', async (req, res) => {
	res.send(await fetchData('business'))
	res.end()
})

app.get('/entertainment', async (req, res) => {
	res.send(await fetchData('entertainment'))
	res.end()
})

app.get('/health', async (req, res) => {
	res.send(await fetchData('health'))
	res.end()
})

app.get('/science', async (req, res) => {
	res.send(await fetchData('science'))
	res.end()
})

app.get('/sports', async (req, res) => {
	res.send(await fetchData('sports'))
	res.end()
})

app.get('/technology', async (req, res) => {
	res.send(await fetchData('technology'))
	res.end()
})


app.listen(port, (error) => {
	if (!error)
		console.log(`Server is Successfully Running, and App is listening http://localhost:${port}`)
	else
		console.log("Error occurred, server can't start", error)
})
