import axios from 'axios'
import { useEffect, useReducer } from 'react'
import { Col, Row, Spinner, Alert } from 'react-bootstrap'
import ProductItem from '../components/ProductItem'
import type { ApiError } from '../types/ApiError'
import type { Product } from '../types/Product'
import { getError } from '../utils'

type State = {
  products: Product[]
  loading: boolean
  error: string
}

type Action =
  | { type: 'FETCH_REQUEST' }
  | { type: 'FETCH_SUCCESS'; payload: Product[] }
  | { type: 'FETCH_FAIL'; payload: string }

const initialState: State = {
  products: [],
  loading: true,
  error: '',
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: '' } // Reset error on new request
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
        // Explicitly typing the axios response
        const result = await axios.get<Product[]>('/api/products')
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data })
      } catch (err: unknown) {
        // Utilizing your getError utility for better error extraction
        dispatch({
          type: 'FETCH_FAIL',
          payload: getError(err as ApiError),
        })
      }
    }
    fetchData()
  }, [])

  return (
    <Row>
      {loading ? (
        <Col className="text-center mt-5">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </Col>
      ) : error ? (
        <Alert variant="danger">{error}</Alert>
      ) : (
        products.map((product) => (
          <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
            <ProductItem product={product} />
          </Col>
        ))
      )}
    </Row>
  )
}
