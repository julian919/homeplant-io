
import React from 'react';
import Image from 'next/image';
import styles from './Carousel.module.scss';

interface SlideProps {
  image: string;
  index: number;
}

const Slide: React.FC<SlideProps> = ({ image, index }) => {
  return (
    <div className={styles.carouselSlide}>
      <Image
        src={image}
        alt={`Carousel image ${index + 1}`}
        width={1440}
        height={400}
        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default Slide;
