import React from 'react'

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="bg-white p-12 rounded-xl shadow-lg max-w-2xl w-full mx-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Rajdhani Minerals</h1>
        <p className="text-lg text-gray-600 text-center mb-8">
          Leading supplier of high-quality industrial minerals and raw materials
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-gray-50 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-700 mb-3">Our Products</h2>
            <p className="text-gray-600">
              Discover our wide range of premium minerals and materials for various industrial applications.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-700 mb-3">Quality Assurance</h2>
            <p className="text-gray-600">
              We maintain the highest standards of quality in all our products and services.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App