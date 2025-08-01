import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className="flex justify-center items-center h-screen bg-[#001f3f] px-4 font-sans text-white">
   
      <div className="bg-[#2c3e50] rounded-xl shadow-lg max-w-md w-full p-6 relative flex flex-col items-center">
        
    
        <div className="relative w-24 h-24 mb-4 animate-pulse">
     
          <button
            onClick={() => navigate(-1)}
            className="absolute bottom-40 right-37 w-30 h-10 bg-white hover:bg-[#0f3460] transition duration-300 py-1 px-3 rounded-lg text-black font-semibold z-10"
          >
            Back
          </button>

          <svg
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full text-gray-400"
          >
            {/* Closed/absent book */}
            <rect
              x="8"
              y="12"
              width="48"
              height="40"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              rx="2"
            />
            {/* Cross lines to indicate missing/unavailable */}
            <line
              x1="12"
              y1="12"
              x2="52"
              y2="52"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              style={{ animation: 'draw-cross 2s infinite' }}
            />
            <line
              x1="52"
              y1="12"
              x2="12"
              y2="52"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              style={{ animation: 'draw-cross 2s infinite reverse' }}
            />
            <style>
              {`
              @keyframes draw-cross {
                0%, 100% { opacity: 0.3; }
                50% { opacity: 1; }
              }
              `}
            </style>
          </svg>
        </div>

        {/* Messages */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">Book Not Found</h2>
        <p className="text-gray-400 mb-4 max-w-md">
          Sorry, the requested book was not found. Please try again or go back.
        </p>
      </div>
    </div>
  )
}

export default NotFound