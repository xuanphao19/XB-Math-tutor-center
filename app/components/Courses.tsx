'use client';

import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';

const courses = [
  { grade: 6, subject: 'Toán' },
  { grade: 6, subject: 'Hóa' },
  { grade: 7, subject: 'Toán' },
  { grade: 7, subject: 'Hóa' },
  { grade: 8, subject: 'Toán' },
  { grade: 8, subject: 'Hóa' },
];

export default function Courses() {
  return (
    <Section
      id='courses'
      className='bg-green-50'
    >
      <Container>
        <h2 className='text-3xl font-bold mb-6'>Khóa Học</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {courses.map((c, idx) => (
            <div
              key={idx}
              className='p-4 bg-white rounded shadow hover:shadow-lg transition'
            >
              <h3 className='font-bold text-xl'>
                {c.subject} Lớp {c.grade}
              </h3>
              <p className='text-gray-600 mt-2'>
                Học trực tuyến & offline, giáo viên giàu kinh nghiệm.
              </p>
              <button className='mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600'>
                Đăng ký
              </button>
            </div>
          ))}
        </div>
      </Container>{' '}
    </Section>
  );
}
