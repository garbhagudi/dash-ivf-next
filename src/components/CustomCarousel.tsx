import React, { useState, useEffect, useRef } from 'react';

interface CustomCarouselProps {
  children: React.ReactNode[];
  desktopItems?: number;
  mobileItems?: number;
  gap?: number;
}

export const CustomCarousel: React.FC<CustomCarouselProps> = ({
  children,
  desktopItems = 1,
  mobileItems = 1,
  gap = 20,
}) => {
  const [itemsToShow, setItemsToShow] = useState(desktopItems);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Swipe states
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  
  // Mouse Drag states
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef<number>(0);
  const dragCurrentX = useRef<number>(0);

  const containerRef = useRef<HTMLDivElement>(null);

  // Resize listener to adjust responsive columns
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsToShow(mobileItems);
      } else {
        setItemsToShow(desktopItems);
      }
    };

    handleResize(); // Initial call
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [desktopItems, mobileItems]);

  const maxIndex = Math.max(0, children.length - itemsToShow);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  // Swiping controls (Touch)
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  // Dragging controls (Mouse)
  const handleMouseDown = (e: React.MouseEvent) => {
    // Only track left clicks
    if (e.button !== 0) return;
    dragStartX.current = e.clientX;
    dragCurrentX.current = e.clientX;
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    dragCurrentX.current = e.clientX;
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    const distance = dragStartX.current - dragCurrentX.current;
    const isLeftDrag = distance > 50;
    const isRightDrag = distance < -50;

    if (isLeftDrag) {
      nextSlide();
    } else if (isRightDrag) {
      prevSlide();
    }

    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleMouseUp();
    }
  };

  // Prevent sliding past bounds on window resize
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [itemsToShow, maxIndex, currentIndex]);

  const itemWidth = `calc((100% - ${(itemsToShow - 1) * gap}px) / ${itemsToShow})`;

  // Total pages of dots
  const dotsCount = children.length - itemsToShow + 1;

  return (
    <div 
      style={{ 
        position: 'relative', 
        width: '100%', 
        overflow: 'visible', // Keep visible so absolute dots aren't clipped if styled outside
        userSelect: isDragging ? 'none' : 'auto' // Prevent text highlights while dragging
      }}
    >
      {/* Slider Viewport */}
      <div 
        ref={containerRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        style={{
          overflow: 'hidden',
          width: '100%',
          cursor: isDragging ? 'grabbing' : 'grab'
        }}
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
              onDragStart={(e) => e.preventDefault()} // Disable default image dragging behaviors
              style={{ 
                flexShrink: 0, 
                width: itemWidth,
                boxSizing: 'border-box'
              }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>



      {/* Dot Indicators - Removed position: relative inline style to allow custom stylesheet to center them */}
      {dotsCount > 1 && (
        <div className="owl-dots" style={{ zIndex: 1, marginTop: '20px' }}>
          {Array.from({ length: dotsCount }).map((_, idx) => (
            <button
              key={idx}
              className={`owl-dot ${currentIndex === idx ? 'active' : ''}`}
              onClick={() => setCurrentIndex(idx)}
              style={{
                border: 'none',
                background: 'none',
                padding: 0,
                outline: 'none',
                cursor: 'pointer'
              }}
            >
              <span 
                style={{
                  display: 'block',
                  margin: '0 2px',
                  height: '8px',
                  width: currentIndex === idx ? '20px' : '8px',
                  borderRadius: currentIndex === idx ? '5px' : '50%',
                  backgroundColor: currentIndex === idx ? '#EE3F65' : '#aaa8a8',
                  transition: 'all 0.3s ease'
                }}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
