import { Col, Row } from 'react-bootstrap'
import { formatPrice } from '../utils/formatters'
import { sampleProducts } from '../data'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <Row>
      {
        /* Product Listing */
        sampleProducts.map((product) => (
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
      }
    </Row>
  )
}
