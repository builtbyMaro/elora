"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./carousel.module.css";

type Props = {
  images: string[];
  autoScrollInterval?: number;
};

const ImageCarousel = ({ images, autoScrollInterval = 4000 }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const startX = useRef<number | null>(null);
  const isDragging = useRef(false);

  // Auto scroll
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, autoScrollInterval);

    return () => clearInterval(interval);
  }, [images.length, autoScrollInterval]);

  const handleStart = (x: number) => {
    startX.current = x;
    isDragging.current = true;
  };

  const handleEnd = (x: number) => {
    if (!isDragging.current || startX.current === null) return;

    const diff = startX.current - x;

    if (diff > 50) {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    } else if (diff < -50) {
      setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }

    isDragging.current = false;
    startX.current = null;
  };

  return (
    <div
      className={styles.carousel}
      onTouchStart={(e) => handleStart(e.touches[0].clientX)}
      onTouchEnd={(e) => handleEnd(e.changedTouches[0].clientX)}
      onMouseDown={(e) => handleStart(e.clientX)}
      onMouseUp={(e) => handleEnd(e.clientX)}
    >
      <div
        className={styles.track}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, i) => (
          <div className={styles.slide} key={i}>
            <img src={img} alt={`slide-${i}`} />
          </div>
        ))}
      </div>

      <div className={styles.dots}>
        {images.map((_, i) => (
          <span
            key={i}
            className={`${styles.dot} ${
              i === currentIndex ? styles.active : ""
            }`}
            onClick={() => setCurrentIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
