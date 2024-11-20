import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

function ProductDetail() {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/products/${id}`)
        setProduct(response.data)
        setLoading(false)
      } catch (err) {
        setError('Failed to fetch product details')
        setLoading(false)
        console.error('Error fetching product details:', err)
      }
    }

    fetchProductDetail()
  }, [id])

  if (loading) return <div>Loading product details...</div>
  if (error) return <div>{error}</div>
  if (!product) return <div>No product found</div>

  return (
    <div className="product-detail">
      <Link to="/">Back to Products</Link>
      
      <div className="product-info">
        <h1>{product.name}</h1>
        <img src={product.imageUrl} alt={product.name} />
        <p>{product.description}</p>
        <p>Brand: {product.brand}</p>
        <p>Price: ${product.price.toFixed(2)}</p>
        
        <h2>Reviews</h2>
        {product.reviews && product.reviews.length > 0 ? (
          product.reviews.map((review, index) => (
            <div key={index} className="review">
              <p>{review.user}: {review.comment}</p>
              <p>Rating: {review.rating}/5</p>
            </div>
          ))
        ) : (
          <p>No reviews yet</p>
        )}
      </div>
    </div>
  )
}

export default ProductDetail