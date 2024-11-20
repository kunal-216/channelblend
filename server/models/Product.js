import mongoose from "mongoose"

const ProductSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  brand: { 
    type: String, 
    required: true 
  },
  price: { 
    type: Number, 
    required: true 
  },
  description: { 
    type: String 
  },
  imageUrl: { 
    type: String 
  },
  barcode: { 
    type: String 
  },
  reviews: [{ 
    user: String, 
    rating: Number, 
    comment: String 
  }]
}, {timestamps: true});

const ProductModel = mongoose.model('Product', ProductSchema);
export default ProductModel;