import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import type { Product } from '../types/Product'
import Rating from './Rating'
import { formatPrice } from '../utils/formatters'

function ProductItem({ product }: { product: Product }) {
  return (
    <Card className="h-100 shadow-sm">
      <Link to={`/products/${product.slug}`}>
        <div className="p-3">
          <Card.Img
            variant="top"
            src={product.image}
            alt={product.name}
            style={{ objectFit: 'contain', height: '200px' }}
          />
        </div>
      </Link>

      <Card.Body className="d-flex flex-column">
        <Link to={`/products/${product.slug}`} className="text-decoration-none">
          <Card.Title as="div" className="text-primary mb-2">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <div className="mb-2">
          <Rating rating={product.rating} numReviews={product.numReviews} />
        </div>

        <Card.Text className="fw-bold fs-5">
          {formatPrice(product.price)}
        </Card.Text>
        <div className="mt-auto">
          {product.countInStock === 0 ? (
            <Button variant="light" disabled className="w-100">
              Out of Stock
            </Button>
          ) : (
            <Button variant="dark" className="w-50">
              Add to Cart
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  )
}

export default ProductItem
