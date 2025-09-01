'use client';
import { useState, useRef, UIEvent } from 'react';
import styles from './Carousel.module.scss';
import Arrow from './Arrow';
import Dots from './Dots';
import Slide from './Slide';

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    const scrollLeft = e.currentTarget.scrollLeft;
    const slideWidth = e.currentTarget.offsetWidth;
    const newIndex = Math.round(scrollLeft / slideWidth);
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    if (trackRef.current) {
      const slideWidth = trackRef.current.offsetWidth;
      const newScrollLeft = trackRef.current.scrollLeft + slideWidth;
      trackRef.current.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
    }
  };

  const prevSlide = () => {
    if (trackRef.current) {
      const slideWidth = trackRef.current.offsetWidth;
      const newScrollLeft = trackRef.current.scrollLeft - slideWidth;
      trackRef.current.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
    }
  };

  const goToSlide = (index: number) => {
    if (trackRef.current) {
      const slideWidth = trackRef.current.offsetWidth;
      trackRef.current.scrollLeft = slideWidth * index;
    }
  };

  return (
    <div className={styles.carouselContainer}>
      <div
        className={styles.carouselTrack}
        ref={trackRef}
        onScroll={handleScroll}
      >
        {images.map((image, index) => (
          <Slide key={index} image={image} index={index} />
        ))}
      </div>
      <Arrow direction="left" onClick={prevSlide} />
      <Arrow direction="right" onClick={nextSlide} />
      <Dots images={images} currentIndex={currentIndex} onClick={goToSlide} />
    </div>
  );
};

export default Carousel;
