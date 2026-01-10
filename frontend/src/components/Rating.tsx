interface RatingProps {
  rating: number
  numReviews?: number
  caption?: string
  color?: string
}

function Rating(props: RatingProps) {
  const { rating, numReviews = 0, caption = '', color = '#f8ae25ff' } = props

  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star}>
          <i
            style={{ color }}
            className={
              rating >= star
                ? 'fas fa-star'
                : rating >= star - 0.5
                ? 'fas fa-star-half-alt'
                : 'far fa-star'
            }
          />
        </span>
      ))}
      <span className="ms-1">
        {caption ? caption : `${numReviews} reviews`}
      </span>
    </div>
  )
}

export default Rating
