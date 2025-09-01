
import React from 'react';

interface DotsProps {
  images: string[];
  currentIndex: number;
  onClick: (index: number) => void;
}

const Dots: React.FC<DotsProps> = ({ images, currentIndex, onClick }) => {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: '25px',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {images.map((_, index) => (
        <span
          key={index}
          onClick={() => onClick(index)}
          style={{
            padding: '5px',
            margin: '0 5px',
            cursor: 'pointer',
            borderRadius: '50%',
            backgroundColor: currentIndex === index ? 'white' : 'gray',
          }}></span>
      ))}
    </div>
  );
};

export default Dots;
