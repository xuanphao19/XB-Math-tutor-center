'use client';

import useEmblaCarousel from 'embla-carousel-react';

const feedbacks = [
  'Học sinh tiến bộ nhanh, dễ hiểu.',
  'Phụ huynh rất hài lòng.',
  'Giáo viên nhiệt tình, phương pháp hiệu quả.',
];

export default function Testimonials() {
  const [emblaRef] = useEmblaCarousel({ loop: true });
  return (
    <section
      id='testimonials'
      className='p-8 bg-white'
    >
      <h2 className='text-3xl font-bold mb-6'>Phản hồi</h2>
      <div
        ref={emblaRef}
        className='overflow-hidden'
      >
        <div className='flex gap-4'>
          {feedbacks.map((f, i) => (
            <div
              key={i}
              className='flex-none w-80 p-6 bg-green-100 rounded shadow'
            >
              "{f}"
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
