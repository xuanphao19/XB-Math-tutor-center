// components/ui/Slider.tsx
'use client';

import { ReactNode } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type SliderProps = {
  slides: ReactNode[];
  settings?: object;
  className?: string;
  customSlider?: string;
};

const Arrow = ({ onClick, direction }: any) => {
  const rotate = direction === 'prev' ? 'rotate-180' : '';
  return (
    <button
      className={`absolute top-1/2 transform -translate-y-1/2 rounded-full shadow-lg   transition-all duration-300 opacity-40 hover:opacity-90 border border-amber-100 hover:border-amber-300 bg-white hover:bg-gray-100 p-1 z-10 cursor-pointer ${
        direction === 'prev' ? 'left-[-4]' : 'right-[-4]'
      }`}
      onClick={onClick}
    >
      <svg
        className={`w-5 h-5 text-pink-600 dark:text-pink-400 ${rotate}`}
        fill='currentColor'
        viewBox='0 0 20 20'
      >
        <path d='M7.05 4.05a1 1 0 011.414 0L13 8.586a1 1 0 010 1.414l-4.536 4.536a1 1 0 01-1.414-1.414L10.172 10 7.05 6.879a1 1 0 010-1.414z' />
      </svg>
    </button>
  );
};

export default function AppSlider({
  slides,
  customSlider,
  settings = {},
  className = '',
}: SliderProps) {
  const defaultSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <Arrow direction='next' />,
    prevArrow: <Arrow direction='prev' />,
    appendDots: (dots: ReactNode) => (
      <div>
        <ul className='ml-6 flex gap-2'>{dots}</ul>
      </div>
    ),
    customPaging: (i: number) => (
      <span className='flex mt-1 w-8 h-3 bg-chart-1 dark:bg-chart-2 rounded-sm transition-all duration-300 transform scale-50'></span>
    ),
    ...settings,
  };

  return (
    <div className={`w-full ${className}`}>
      <Slider {...defaultSettings}>
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className='slider-item'
          >
            {slide}
          </div>
        ))}
      </Slider>
      <style
        jsx
        global
      >
        {customSlider}
      </style>
    </div>
  );
}
