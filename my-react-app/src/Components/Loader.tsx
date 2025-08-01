import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="w-20 h-20 relative animate-bounce">
        {/* Open book with flipping pages */}
        <svg
          viewBox="0 0 64 64"
          className="w-full h-full text-white"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Left page */}
          <rect
            x="4"
            y="12"
            width="20"
            height="40"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            rx="2"
            style={{ transformOrigin: "14px 32px" }}
          />
          {/* Right page */}
          <rect
            x="40"
            y="12"
            width="20"
            height="40"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            rx="2"
            style={{ transformOrigin: "54px 32px" }}
          />

          {/* Pages flipping effect (animated lines) */}
          <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {/* Left page turn */}
            <line
              x1="12"
              y1="20"
              x2="12"
              y2="44"
              style={{
                transform: "rotateY(20deg)",
                transformOrigin: "14px 32px",
                animation: "flip-left 1s infinite alternate ease-in-out",
              }}
            />
            {/* Right page turn */}
            <line
              x1="52"
              y1="20"
              x2="52"
              y2="44"
              style={{
                transform: "rotateY(-20deg)",
                transformOrigin: "54px 32px",
                animation: "flip-right 1s infinite alternate ease-in-out",
              }}
            />
          </g>
        </svg>
      </div>
      <style>
        {`
        @keyframes flip-left {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(20deg); }
        }
        @keyframes flip-right {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(-20deg); }
        }
        `}
      </style>
    </div>
  );
};

export default Loader;
