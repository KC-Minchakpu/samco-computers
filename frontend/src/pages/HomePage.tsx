import { useEffect, useReducer } from 'react'
import { Col, Row, Spinner, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { formatPrice } from '../utils/formatters'
import type { Product } from '../types/Product'

type State = {
  products: Product[]
  loading: boolean
  error: string
}

type Action =
  | { type: 'FETCH_REQUEST' }
  | { type: 'FETCH_SUCCESS'; payload: Product[] }
  | { type: 'FETCH_FAIL'; payload: string }

// 2. The Reducer function
const initialState: State = {
  products: [],
  loading: true,
  error: '',
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true }
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false }
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

export default function HomePage() {
  const [{ loading, error, products }, dispatch] = useReducer(
    reducer,
    initialState
  )

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' })
      try {
        const result = await axios.get('/api/products')
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data })
      } catch (err: unknown) {
        const message =
          err instanceof Error ? err.message : 'An unknown error occurred'
        dispatch({ type: 'FETCH_FAIL', payload: message })
      }
    }
    fetchData()
  }, [])

  return (
    <Row>
      {loading ? (
        <Col className="text-center mt-5">
          <Spinner animation="border" />
        </Col>
      ) : error ? (
        <Alert variant="danger">{error}</Alert>
      ) : (
        products.map((product) => (
          <Col key={product.slug} sm={6} md={4} lg={3}>
            <Link to={`/product/${product.slug}`}>
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>Price: {formatPrice(product.price)}</p>
            </Link>
          </Col>
        ))
      )}
    </Row>
  )
}
