# Product Display Web Application

## Project Overview
Full-stack web application for displaying and managing product listings.

## Technologies Used
- Frontend: React (Vite)
- Backend: Node.js, Express
- Database: MongoDB
- State Management: React Hooks
- Styling: Tailwind CSS

## Project Structure
```
product-display-app/
│
├── client/               # React Frontend
│   ├── public/
│   │   └── images/       # Product images stored here
│   └── src/
│
├── server/               # Node.js Backend
│   ├── models/
│   ├── routes/
│   └── scripts/
│
└── README.md
```

## Prerequisites
- Node.js (v14+)
- MongoDB

## Setup Instructions

### 1. Clone Repository
```bash
git clone https://github.com/yourusername/product-display-app.git
cd product-display-app
```

### 2. Backend Setup
```bash
cd server
npm install
```

### 3. Frontend Setup
```bash
cd ../client
npm install
```

### 4. Environment Configuration
Create `.env` files in both server and client directories:

#### Server `.env`
```
MONGODB_URI=your_mongodb_url
PORT=5000
```

#### Client `.env`
```
VITE_API_BASE_URL=http://localhost:5000/api
```

### 5. Run Application
- Start MongoDB
- Terminal 1 (Backend):
  ```bash
  cd server
  npm start
  ```
- Terminal 2 (Frontend):
  ```bash
  cd client
  npm run dev
  ```

## API Endpoints

### Products
- `GET /api/products`
  - Retrieves all products
  - Response: Array of product objects
- `GET /api/products/:id`
  - Retrieves specific product by ID
  - Response: Detailed product information

## Design Decisions & Challenges

### Frontend Architecture
- Used Vite for faster development
- Implemented responsive design with Tailwind CSS
- Utilized React Hooks for state management

### Backend Considerations
- RESTful API design
- Modular route handling
- Flexible error management

### Challenges Overcome
1. **Barcode Scanning**
   - Integrated QuaggaJS for cross-browser compatibility
   - Implemented fallback mechanisms for unsupported devices

2. **State Management**
   - Used React's useState and useEffect for efficient rendering
   - Implemented loading and error states

3. **Image Handling**
   - Store images in `client/public/images/`
   - Use relative paths in product data

## Image Storage
- Product images stored in `client/public/images/`
- Naming convention: `productname.jpg`
- Recommended image sizes: 
  - Width: 500-800px
  - Format: JPEG or PNG

## Future Improvements
- User authentication
- Advanced product filtering
- More comprehensive error handling

## Contributing
1. Fork repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create pull request