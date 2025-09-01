
import React from 'react';

interface ArrowProps {
  direction: 'left' | 'right';
  onClick: () => void;
}

const Arrow: React.FC<ArrowProps> = ({ direction, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        [direction === 'left' ? 'left' : 'right']: '25px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50px',
        height: '50px',
        cursor: 'pointer',
        borderRadius: '50%',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
      }}>
      {direction === 'left' ? (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15 18L9 12L15 6"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9 18L15 12L9 6"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </div>
  );
};

export default Arrow;
