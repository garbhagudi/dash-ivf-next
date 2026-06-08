import React, { useState, useEffect, useRef } from 'react';

export const CustomCarousel = ({ children, desktopItems = 1, mobileItems = 1, gap = 20 }) => {
  const [itemsToShow, setItemsToShow] = useState(desktopItems);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragCurrentX = useRef(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsToShow(mobileItems);
      } else {
        setItemsToShow(desktopItems);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [desktopItems, mobileItems]);

  const maxIndex = Math.max(0, children.length - itemsToShow);

  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  const nextSlide = () => setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));

  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) nextSlide();
    else if (distance < -50) prevSlide();
    setTouchStart(null);
    setTouchEnd(null);
  };

  const handleMouseDown = (e) => {
    if (e.button !== 0) return;
    dragStartX.current = e.clientX;
    dragCurrentX.current = e.clientX;
    setIsDragging(true);
  };
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    dragCurrentX.current = e.clientX;
  };
  const handleMouseUp = () => {
    if (!isDragging) return;
    const distance = dragStartX.current - dragCurrentX.current;
    if (distance > 50) nextSlide();
    else if (distance < -50) prevSlide();
    setIsDragging(false);
  };
  const handleMouseLeave = () => { if (isDragging) handleMouseUp(); };

  useEffect(() => {
    if (currentIndex > maxIndex) setCurrentIndex(maxIndex);
  }, [itemsToShow, maxIndex, currentIndex]);

  const itemWidth = `calc((100% - ${(itemsToShow - 1) * gap}px) / ${itemsToShow})`;
  const dotsCount = children.length - itemsToShow + 1;

  return (
    <div style={{ position: 'relative', width: '100%', overflow: 'visible', userSelect: isDragging ? 'none' : 'auto' }}>
      <div
        ref={containerRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        style={{ overflow: 'hidden', width: '100%', cursor: isDragging ? 'grabbing' : 'grab' }}
      >
        <div
          style={{
            display: 'flex',
            gap: `${gap}px`,
            transition: 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            transform: `translateX(calc(-${currentIndex} * (${itemWidth} + ${gap}px)))`,
            width: '100%',
          }}
        >
          {children.map((child, index) => (
            <div
              key={index}
              onDragStart={(e) => e.preventDefault()}
              style={{ flexShrink: 0, width: itemWidth, boxSizing: 'border-box' }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {dotsCount > 1 && (
        <div className="owl-dots" style={{ zIndex: 1, marginTop: '20px' }}>
          {Array.from({ length: dotsCount }).map((_, idx) => (
            <button
              key={idx}
              className={`owl-dot ${currentIndex === idx ? 'active' : ''}`}
              onClick={() => setCurrentIndex(idx)}
              style={{ border: 'none', background: 'none', padding: 0, outline: 'none', cursor: 'pointer' }}
            >
              <span
                style={{
                  display: 'block',
                  margin: '0 2px',
                  height: '8px',
                  width: currentIndex === idx ? '20px' : '8px',
                  borderRadius: currentIndex === idx ? '5px' : '50%',
                  backgroundColor: currentIndex === idx ? '#EE3F65' : '#aaa8a8',
                  transition: 'all 0.3s ease',
                }}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
