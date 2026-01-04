import express, { Request, Response } from 'express'
import cors from 'cors'
import { sampleProducts } from './data'
const app = express()

app.use(cors())
app.use(express.json())

app.get('/api/products', (req: Request, res: Response): void => {
  res.json(sampleProducts)
})

const PORT: number = 5000

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`)
})
